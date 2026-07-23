import { describe, expect, it } from 'vitest';

import * as declarations from '../src/index.js';

const { getRuntimeDeclarations, Inject, OnEnable, Plugin } = declarations;

describe('decorator declarations', () => {
  it('records class, method, and property declarations without reflected types', () => {
    @Plugin({ name: 'runtime' })
    class RuntimePlugin {
      @Inject('value')
      public value!: string;

      @OnEnable()
      public enable(): void {
        return;
      }
    }

    expect(getRuntimeDeclarations(RuntimePlugin).map((item) => item.name)).toEqual([
      'Inject',
      'OnEnable',
      'Plugin',
    ]);
  });

  it('rejects an invalid target at runtime', () => {
    class Invalid {
      public readonly invalid = true;
    }
    expect(() => {
      OnEnable()(Invalid, { kind: 'class' });
    }).toThrow('@OnEnable cannot decorate a class');
  });

  it('constructs every declaration category and rejects duplicates', () => {
    for (const factory of [
      declarations.Plugin,
      declarations.Module,
      declarations.Component,
      declarations.Injectable,
      declarations.Service,
      declarations.Global,
      declarations.Primary,
    ]) {
      class ClassTarget {
        public readonly target = true;
      }
      factory()(ClassTarget);
    }
    for (const factory of [
      declarations.OnLoad,
      declarations.OnEnable,
      declarations.OnDisable,
      declarations.OnReload,
      declarations.EventHandler,
      declarations.Command,
      declarations.Subcommand,
      declarations.Scheduled,
      declarations.Interval,
      declarations.Timeout,
    ]) {
      class MethodTarget {
        public readonly target = true;
      }
      factory()(MethodTarget.prototype, 'method', {});
    }
    for (const factory of [
      declarations.Optional,
      declarations.InjectAll,
      declarations.Lazy,
      declarations.Named,
      declarations.Qualifier,
      declarations.ConfigValue,
      declarations.Argument,
      declarations.Option,
      declarations.Sender,
      declarations.Validate,
    ]) {
      class MemberTarget {
        public readonly target = true;
      }
      factory()(MemberTarget.prototype, 'property');
    }
    class Target {
      public readonly target = true;
    }
    declarations.Requires('condition')(Target);
    declarations.RequiresExpression('true')(Target);
    declarations.UseInterceptors(Target)(Target);
    declarations.UseGuards(Target)(Target);
    declarations.UsePipes(Target)(Target);
    declarations.Catch(Error)(Target);
    declarations.Primary()(Target);
    expect(() => {
      declarations.Primary()(Target);
    }).toThrow('duplicated');
    expect(getRuntimeDeclarations(Target).length).toBe(7);

    class MetadataTarget {
      public readonly metadata = true;
    }
    const metadata = {};
    declarations.Plugin()(MetadataTarget, { kind: 'class', metadata });
    expect(Object.getOwnPropertySymbols(metadata)).toContain(declarations.SHAMOO_DECLARATIONS);
  });

  it('isolates Stage 3 declarations by owner, including classes without class decorators', () => {
    class First {
      @OnEnable()
      public enable(): void {
        return;
      }
    }
    class Second {
      @Inject('second')
      public value = '';
    }
    class Empty {
      public readonly empty = true;
    }
    class Child extends First {
      public readonly child = true;
    }

    expect(getRuntimeDeclarations(First).map((item) => item.name)).toEqual(['OnEnable']);
    expect(getRuntimeDeclarations(Second).map((item) => item.name)).toEqual(['Inject']);
    expect(getRuntimeDeclarations(Empty)).toEqual([]);
    expect(getRuntimeDeclarations(Child)).toEqual([]);
  });

  it('keeps Stage 3 metadata own and tolerates an empty declaration slot', () => {
    const inherited = {
      [declarations.SHAMOO_DECLARATIONS]: [{ name: 'Inherited', target: 'class', arguments: [] }],
    };
    const metadata = Object.create(inherited) as Record<PropertyKey, unknown>;
    class OwnMetadata {
      public readonly kind = 'own';
    }
    declarations.Plugin()(OwnMetadata, { kind: 'class', metadata });
    expect(Object.hasOwn(metadata, declarations.SHAMOO_DECLARATIONS)).toBe(true);
    expect(getRuntimeDeclarations(OwnMetadata).map((item) => item.name)).toEqual(['Plugin']);
    expect(inherited[declarations.SHAMOO_DECLARATIONS]).toHaveLength(1);

    class EmptyMetadata {
      public readonly kind = 'empty';
    }
    const metadataSymbol = (Symbol as typeof Symbol & { metadata: symbol }).metadata;
    Object.defineProperty(EmptyMetadata, metadataSymbol, {
      value: { [declarations.SHAMOO_DECLARATIONS]: undefined },
    });
    expect(getRuntimeDeclarations(EmptyMetadata)).toEqual([]);
  });

  it('enforces class, lifecycle, handler, and injection conflicts at runtime', () => {
    class Target {
      public readonly target = true;
    }
    Plugin()(Target);
    expect(() => {
      declarations.Module()(Target);
    }).toThrow('conflicts');
    declarations.OnEnable()(Target.prototype, 'lifecycle', {});
    expect(() => {
      declarations.OnDisable()(Target.prototype, 'lifecycle', {});
    }).toThrow('conflicts');
    declarations.Command()(Target.prototype, 'handler', {});
    expect(() => {
      declarations.EventHandler()(Target.prototype, 'handler', {});
    }).toThrow('conflicts');
    Inject('token')(Target.prototype, 'dependency');
    expect(() => {
      declarations.ConfigValue('key')(Target.prototype, 'dependency');
    }).toThrow('conflicts');

    Inject('parameter')(Target.prototype, 'constructor', 0);
    declarations.Optional()(Target.prototype, 'constructor', 0);
    const parameter = getRuntimeDeclarations(Target).find(
      (item) => item.name === 'Inject' && item.member === 'constructor',
    );
    expect(parameter).toMatchObject({ target: 'parameter', parameterIndex: 0 });
  });
});

import { Argument, Command, Context, Option, Sender } from '@shamoo/commands';
import { OnEnable, Plugin } from '@shamoo/decorators';

interface Player {
  readonly id: string;
  readonly name: string;
  readonly online: boolean;
}

const constantOptions = { parser: 'material' } as const;
const spreadOptions = { parser: 'integer' } as const;
const computedParser = 'parser' as const;

@Plugin()
export class InvalidCommandPlugin {
  public constructor(
    @Argument('constructor') constructorValue: string,
    @Option('parameterProperty') public readonly parameterProperty: boolean,
  ) {
    void constructorValue;
  }

  @Argument('property')
  public argumentProperty!: string;

  @Option('property')
  public optionProperty!: boolean;

  @Sender()
  public senderProperty!: unknown;

  @Context()
  public contextProperty!: unknown;

  @Command('array <values>')
  public array(@Argument('values') values: readonly string[]): void {
    void values;
  }

  @Command('ambiguous <value>')
  public ambiguous(@Argument('value') value: string | number): void {
    void value;
  }

  @Command('lookalike <player>')
  public lookalike(@Argument('player') player: Player): void {
    void player;
  }

  @Command('spread <value>')
  public spread(@Argument('value', { ...spreadOptions }) value: number): void {
    void value;
  }

  @Command('computed <value>')
  public computed(@Argument('value', { [computedParser]: 'material' }) value: string): void {
    void value;
  }

  @Command('constant <value>')
  public constant(@Argument('value', constantOptions) value: string): void {
    void value;
  }

  @OnEnable()
  public nonCommand(@Argument('value') value: string): void {
    void value;
  }
}

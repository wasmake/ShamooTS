import {
  Command,
  EventHandler,
  Global,
  Inject,
  InjectAll,
  Lazy,
  Module,
  Named,
  OnEnable,
  Optional,
  Plugin,
  Qualifier,
  Service,
} from '@shamoo/decorators';
import { createToken } from '@shamoo/di';

interface Audit {
  write(message: string): void;
}

export const AUDIT = createToken<Audit>('audit');

@Service()
export class Logger {
  public log(message: string): void {
    void message;
  }
}

@Plugin({
  name: 'fixture',
  count: 1,
  enabled: true,
  disabled: false,
  empty: null,
  tags: ['compiler'],
  logger: Logger.name,
})
export class FixturePlugin {
  @Inject(AUDIT)
  public audit!: Audit;

  public constructor(
    @Optional()
    @InjectAll()
    @Lazy()
    @Named('logger')
    @Qualifier(Logger.name)
    public readonly logger: Logger,
  ) {}

  @OnEnable()
  public enable(logger: Logger): void {
    logger.log('enabled');
  }

  @EventHandler({ priority: 'normal' })
  public event(): void {
    return;
  }

  @Command('fixture')
  public command(): void {
    return;
  }
}

@Module({ providers: [Logger, FixturePlugin], exports: [Logger] })
@Global()
export class FixtureModule {
  public readonly id = 'fixture';
}

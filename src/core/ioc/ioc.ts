import { Container } from 'inversify';
import { GetPodcastListQry } from '../../application/queries/get-podcast-list-qry';
import { TYPES } from '../types/types';
import { StateManager } from '../../application/state-manager';
import { ReactStateManager } from '../../infrastructure/react-state-manager';
import { PodcastLocalRepository } from '../../infrastructure/podcast-local-repository';
import { PodcastRepository } from '../../domain/podcast/podcast-repository';
import { ExecutorLink } from '../../domain/runner/executor-link';
import { LoggerLink } from '../../domain/runner/logger-link';
import { Runner } from '../../domain/runner/runner';
import { Logger } from '../../domain/use-cases/logger';
import { ConsoleLogger } from '../../infrastructure/console-logger';


export const container = new Container();
container.bind<GetPodcastListQry>(TYPES.GET_ALL_PODCAST_QRY).to(GetPodcastListQry).inSingletonScope();
container.bind<StateManager>(TYPES.STATE_MANAGER).to(ReactStateManager).inSingletonScope();
container.bind<PodcastRepository>(TYPES.PODCAST_REPOSITORY).to(PodcastLocalRepository).inSingletonScope();
container.bind<Window>(TYPES.WINDOW).toConstantValue(window)
  container
      .bind<Logger>(TYPES.LOGGER)
      .to(ConsoleLogger)
      .inSingletonScope()

    container
      .bind<Runner>(TYPES.RUNNER)
      .to(Runner)
      .inSingletonScope()
    container
      .bind<ExecutorLink>(TYPES.EXECUTOR_LINK)
      .to(ExecutorLink)
      .inSingletonScope()
    container
      .bind<LoggerLink>(TYPES.LOGGER_LINK)
      .to(LoggerLink)
      .inSingletonScope()
   
import { decorate, inject, injectable } from "inversify";
import { TYPES } from "../../core/types/types";
import { PodcastListDTO } from "../../domain/podcast/podcast-dto";
import type { PodcastRepository } from "../../domain/podcast/podcast-repository";
import { Query } from "../../domain/use-cases/query";
import type { StateManager } from "../state-manager";

decorate(injectable(), Query);


@injectable()
export class GetPodcastListQry extends Query<PodcastListDTO> {

  @inject(TYPES.STATE_MANAGER)
  private stateManager!: StateManager

  @inject(TYPES.PODCAST_REPOSITORY)
  private podcastRepository!: PodcastRepository

  constructor(
  ) {
    super();
  }

  internalExecute(): PodcastListDTO {
    console.log("",this.podcastRepository);
    return this.stateManager.state.feed!;
  }
}

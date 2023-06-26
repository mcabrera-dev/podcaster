import { decorate, inject, injectable } from "inversify";
import { TYPES } from "../../core/types/types";
import type { PodcastRepository } from "../../domain/podcast/podcast-repository";
import { Query } from "../../domain/use-cases/query";
import type { StateManager } from "../state-manager";
import { PodcastList } from "../../domain/podcast/podcast";
import { DtoToPodcastListTransform } from "../../infrastructure/dto-to-vtv-form.transform";

decorate(injectable(), Query);


@injectable()
export class GetPodcastListQry extends Query<Promise<PodcastList>> {

  @inject(TYPES.STATE_MANAGER)
  private stateManager!: StateManager

  @inject(TYPES.PODCAST_REPOSITORY)
  private podcastRepository!: PodcastRepository

  private readonly dtoToVtvFormTransform: DtoToPodcastListTransform = new DtoToPodcastListTransform()

  constructor(
  ) {
    super();
  }

  async internalExecute(): Promise<PodcastList> {
    const podcastList = await this.podcastRepository.getAll()
    return podcastList
    //return this.stateManager.state.feed!;
  }
}

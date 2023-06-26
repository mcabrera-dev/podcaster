import { decorate, inject, injectable } from "inversify";
import { TYPES } from "../../core/types/types";
import type { PodcastRepository } from "../../domain/podcast/podcast-repository";
import { Query } from "../../domain/use-cases/query";
import type { StateManager } from "../state-manager";
import { PodcastDetail, PodcastList } from "../../domain/podcast/podcast";
import { DtoToPodcastListTransform } from "../../infrastructure/dto-to-podcast-list.transform";



@injectable()
export class GetPodcastDetailtQry extends Query<Promise<PodcastDetail>, string> {

  @inject(TYPES.PODCAST_REPOSITORY)
  private podcastRepository!: PodcastRepository

  private readonly dtoToVtvFormTransform: DtoToPodcastListTransform = new DtoToPodcastListTransform()

  constructor(
  ) {
    super();
  }

  async internalExecute(id: string): Promise<PodcastDetail> {
    const podcastList = await this.podcastRepository.findById(id)
    return podcastList
    //return this.stateManager.state.feed!;
  }
}

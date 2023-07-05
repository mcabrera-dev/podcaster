import { inject, injectable } from "inversify";
import { TYPES } from "../../core/types/types";
import type { PodcastRepository } from "../../domain/podcast/podcast-repository";
import { Query } from "../../domain/use-cases/query";
import { PodcastDetail } from "../../domain/podcast/podcast";

@injectable()
export class GetPodcastDetailtQry extends Query<
  Promise<PodcastDetail>,
  string
> {
  @inject(TYPES.PODCAST_REPOSITORY)
  private podcastRepository!: PodcastRepository;

  async internalExecute(id: string): Promise<PodcastDetail> {
    const podcastList = await this.podcastRepository.findById(id);
    return podcastList;
  }
}

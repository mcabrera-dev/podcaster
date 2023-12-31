import { inject, injectable } from "inversify";
import { TYPES } from "../../core/types/types";
import type { PodcastRepository } from "../../domain/podcast/podcast-repository";
import { Query } from "../../domain/use-cases/query";
import { PodcastEpisode } from "../../domain/podcast/podcast";

@injectable()
export class GetPodcastEpisodesQry extends Query<
  Promise<PodcastEpisode[]>,
  string
> {
  @inject(TYPES.PODCAST_REPOSITORY)
  private podcastRepository!: PodcastRepository;

  async internalExecute(id: string): Promise<PodcastEpisode[]> {
    const podcastEpisodeList = await this.podcastRepository.getEpisodes(id);
    return podcastEpisodeList;
  }
}

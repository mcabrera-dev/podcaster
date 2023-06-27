import { PodcastDetail, PodcastEpisode, PodcastList } from "./podcast";


export interface PodcastRepository {
  getAll(): Promise<PodcastList>;
  findById(id: string): Promise<PodcastDetail>;
  getEpisodes(feedUrl: string): Promise<PodcastEpisode[]>;
}

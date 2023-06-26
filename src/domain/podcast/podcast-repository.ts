import { PodcastList } from "./podcast";

export interface PodcastRepository {
  getAll(): Promise<PodcastList>;
  findById(): Promise<PodcastList>;
}

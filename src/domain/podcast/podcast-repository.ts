import { PodcastDetail, PodcastList } from "./podcast";


export interface PodcastRepository {
  getAll(): Promise<PodcastList>;
  findById(id: string): Promise<PodcastDetail>;
}

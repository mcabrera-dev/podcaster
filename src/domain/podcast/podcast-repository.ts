import { PodcastListDTO } from "./podcast-dto";

export interface PodcastRepository {
  getAll(): Promise<PodcastListDTO>;
  findById(): Promise<PodcastListDTO>;
}

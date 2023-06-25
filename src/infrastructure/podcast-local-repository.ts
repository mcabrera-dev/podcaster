import { injectable } from "inversify";
import { PodcastRepository } from "../domain/podcast/podcast-repository";
import { PodcastListDTO } from "../domain/podcast/podcast-dto";

@injectable()
export class PodcastLocalRepository implements PodcastRepository {
  getAll(): Promise<PodcastListDTO> {
    console.log("GET_ALLL");
    throw new Error("Method not implemented.");
  }
  findById(): Promise<PodcastListDTO> {
    throw new Error("Method not implemented.");
  }
}

import { injectable } from "inversify";
import { PodcastRepository } from "../domain/podcast/podcast-repository";
import { PodcastListDTO } from "../domain/podcast/podcast-dto";
import { PodcastList } from "../domain/podcast/podcast";
import { DtoToPodcastListTransform } from "./dto-to-vtv-form.transform";


//const CORS_PROXY = "https://cors.io/?";
//const CORS_PROXY = "https://crossorigin.me/";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";


@injectable()
export class PodcastHttpRepository implements PodcastRepository {
  async getAll(): Promise<PodcastList> {
    const dtoToPodcastListTransform: DtoToPodcastListTransform = new DtoToPodcastListTransform()
    console.log("GET_ALLL_HTTP");

    const response = await fetch(`${CORS_PROXY}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`)
    const jsonData = await response.json();


    const podcastListDTO: PodcastListDTO = jsonData.feed

    return dtoToPodcastListTransform.transform(podcastListDTO)


  }

  findById(): Promise<PodcastList> {
    throw new Error("Method not implemented.");
  }
}

import { injectable } from "inversify";
import { PodcastRepository } from "../domain/podcast/podcast-repository";
import { PodcastEpisodeDTO, PodcastDetailDTO, PodcastListDTO } from "../domain/podcast/podcast-dto";
import { PodcastDetail, PodcastEpisode, PodcastList } from "../domain/podcast/podcast";
import { DtoToPodcastListTransform } from "./dto-to-podcast-list.transform";
import { DtoToPodcastDetailTransform } from "./dto-to-podcast-detail.transform";
import Parser from "rss-parser";
import { DtoToPodcastEpisodeTransform } from "./dto-to-podcast-episode.transform";


const CORS_PROXY_RAW = "https://api.allorigins.win/raw?";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";


@injectable()
export class PodcastHttpRepository implements PodcastRepository {
  async getAll(): Promise<PodcastList> {
    const dtoToPodcastListTransform: DtoToPodcastListTransform = new DtoToPodcastListTransform()

    const response = await fetch(`${CORS_PROXY}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`)
    const jsonData = await response.json();


    const podcastListDTO: PodcastListDTO = jsonData.feed

    return dtoToPodcastListTransform.transform(podcastListDTO)


  }

  async findById(id: string): Promise<PodcastDetail> {
    const dtoToPodcastDetailTransform: DtoToPodcastDetailTransform = new DtoToPodcastDetailTransform()

    const response = await fetch(`${CORS_PROXY_RAW}url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)}`)
    const jsonData = await response.json()

    const podcastDetailDTO: PodcastDetailDTO = jsonData.results[0]

    return dtoToPodcastDetailTransform.transform(podcastDetailDTO)
  }


  async getEpisodes(feedUrl: string): Promise<PodcastEpisode[]> {
    const parser = new Parser();
    const dtoToPodcastEpisodeTransform: DtoToPodcastEpisodeTransform = new DtoToPodcastEpisodeTransform()
    let episodes: PodcastEpisode[] = [];
    const feed = await parser.parseURL(`${CORS_PROXY}${feedUrl}`);
    feed.items.forEach((episode: PodcastEpisodeDTO) => {
      episodes.push(dtoToPodcastEpisodeTransform.transform(episode));
    });

    return episodes;
  }
}

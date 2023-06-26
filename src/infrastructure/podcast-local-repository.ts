import { injectable } from "inversify";
import { PodcastRepository } from "../domain/podcast/podcast-repository";
import { PodcastListDTO } from "../domain/podcast/podcast-dto";
import dataPodCastList from '../core/dataPodcastList.json';
import { PodcastList } from "../domain/podcast/podcast";
import { DtoToPodcastListTransform } from "./dto-to-vtv-form.transform";


@injectable()
export class PodcastLocalRepository implements PodcastRepository {
  getAll(): Promise<PodcastList> {

    const dtoToPodcastListTransform: DtoToPodcastListTransform = new DtoToPodcastListTransform()
    const data = dataPodCastList

    const podcastListDTO: PodcastListDTO = data.feed

    return Promise.resolve(dtoToPodcastListTransform.transform(podcastListDTO))

  }
  findById(): Promise<PodcastList> {
    throw new Error("Method not implemented.");
  }
}

import { injectable } from "inversify";
import { PodcastListDTO } from "../domain/podcast/podcast-dto";
import { PodcastList, Entry } from "../domain/podcast/podcast";
import { Transformer } from "../core/types/transformer"


@injectable()
export class DtoToPodcastListTransform implements Transformer<PodcastListDTO, PodcastList> {
  transform(dto?: PodcastListDTO): PodcastList {
    let podcastList: Partial<PodcastList> = {};

    let entries: Entry[] = []
    if (dto) {
      podcastList.author = dto.author.name.label

      dto.entry.map((entry) => {
        entries.push({
          id: entry.id.attributes["im:id"],
          img: entry["im:image"][2].label,
          name: entry["im:name"].label,
          author: entry["im:artist"].label,
          summary: entry.summary.label || ""
        })

        podcastList.entry = entries
      }
      )


    }
    return podcastList as PodcastList;
  }
}

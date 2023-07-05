import { injectable } from "inversify";
import { PodcastEpisodeDTO } from "../domain/podcast/podcast-dto";
import { PodcastEpisode } from "../domain/podcast/podcast";
import { Transformer } from "../core/types/transformer";

@injectable()
export class DtoToPodcastEpisodeTransform
  implements Transformer<PodcastEpisodeDTO, PodcastEpisode>
{
  transform(dto?: PodcastEpisodeDTO): PodcastEpisode {
    let PodcastEpisode: Partial<PodcastEpisode> = {};

    if (dto) {
      PodcastEpisode.id = dto.guid;
      PodcastEpisode.title = dto.title;
      PodcastEpisode.date = dto.pubDate;
      PodcastEpisode.duration = dto.itunes.duration;
      PodcastEpisode.content = dto.content;
      PodcastEpisode.url = dto.enclosure ? dto.enclosure.url : undefined;
    }
    return PodcastEpisode as PodcastEpisode;
  }
}

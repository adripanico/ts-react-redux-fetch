import { useCallback, useEffect, useState } from 'react';

import { getEpisode } from 'http/rickAndMorty';
import { IEpisode } from 'models/episode';

interface IEpisodesProps {
  episodeUrls?: string[];
}

export const Episodes = ({ episodeUrls }: IEpisodesProps) => {
  const [episodes, setEpisodes] = useState<IEpisode[]>();

  const getAllCharacterEpisodes = useCallback(async () => {
    if (!episodeUrls) {
      return;
    }

    const response = await Promise.all(episodeUrls.map((url) => getEpisode(url)));

    setEpisodes(response);
  }, [episodeUrls]);

  useEffect(() => {
    void getAllCharacterEpisodes();
  }, [getAllCharacterEpisodes]);

  if (!episodes) {
    return <></>;
  }

  return (
    <div>
      <p>
        Seen in {episodes.length} episode{episodes.length > 1 ? 's' : ''}:
      </p>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            {episode.name} <span>({episode.episode})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

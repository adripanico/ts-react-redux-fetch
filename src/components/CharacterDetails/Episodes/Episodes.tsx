import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getEpisode } from 'http/rickAndMorty';
import { IEpisode } from 'models/episode';

interface IEpisodesProps {
  episodeUrls?: string[];
}

export const Episodes = ({ episodeUrls }: IEpisodesProps) => {
  const { t } = useTranslation();
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
      <p>{t('seenInEpisode', { count: episodes.length })}</p>
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

import { IEpisode } from 'models/episode';

import { ICharactersResponse } from '../models/charactersResponse';

export async function getCharactersByPage({
  page = 1,
  searchName,
}: {
  page?: number;
  searchName?: string;
}): Promise<ICharactersResponse> {
  const nameQuery = searchName ? `&name=${searchName}` : '';
  const url = `https://rickandmortyapi.com/api/character?page=${page}${nameQuery}`;

  const response = await fetch(url);
  const responseAsJson = (await response.json()) as ICharactersResponse;

  if (responseAsJson.error) {
    throw responseAsJson.error;
  }

  return responseAsJson;
}

export async function getEpisode(url: string): Promise<IEpisode> {
  const response = await fetch(url);
  const responseAsJson = (await response.json()) as IEpisode;
  if (responseAsJson.error) {
    throw responseAsJson.error;
  }
  return responseAsJson;
}

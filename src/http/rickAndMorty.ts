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

  try {
    const response = await fetch(url);
    const responseAsJson: ICharactersResponse = await response.json();
    if (responseAsJson.error) {
      throw responseAsJson.error;
    }
    return responseAsJson;
  } catch (error) {
    throw error;
  }
}

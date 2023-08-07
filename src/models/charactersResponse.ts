import { ICharacter } from './character';

export interface ICharactersResponse {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: ICharacter[];
  error?: string;
}

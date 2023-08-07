export interface ICharacter {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ILocation {
  name: string;
  url: string;
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

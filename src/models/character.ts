export interface ICharacter {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
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

export type CharacterSpecies =
  | 'Human'
  | 'Alien'
  | 'Humanoid'
  | 'unknown'
  | 'Poopybutthole'
  | 'Mythological Creature'
  | 'Animal'
  | 'Robot'
  | 'Cronenberg'
  | 'Disease';

export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

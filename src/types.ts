type LocAndOrigin = {
  name: string;
  url: string;
};
export interface Episode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}
export interface Location {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: LocAndOrigin;
  name: string;
  origin: LocAndOrigin;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface heroe {
    id: number;
    name: string;
    powerstats: powerstats;
    biography: biography;
    images: images;
  }
  export interface powerstats {
    intelligence: number;
    strength: number
    speed: number
    durability: number
    power: number
  }
  export interface biography {
    fullName: string;
  }
  export interface images {
    lg: string;
  }
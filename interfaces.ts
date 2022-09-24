export interface Warrior {
  fight(): string;
  sneak(): string;
}
export interface Weapon {
  hit(): string;
}

export interface ThrowableWeapon {
  throw(): string;
}

export interface Axios {
  get(url: string): Promise<any>;
}

export interface Repo {
  getOne(name: string): Promise<any>;
}

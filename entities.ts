import "reflect-metadata";
import { Weapon, Warrior, ThrowableWeapon, Axios, Repo } from "./interfaces";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import axios from "axios";

@injectable()
export class Katana implements Weapon {
  public hit() {
    return "cut!";
  }
}

@injectable()
export class Shuriken implements ThrowableWeapon {
  public throw() {
    return "hit!";
  }
}

@injectable()
export class Ninja implements Warrior {
  #katana: Weapon;
  #shuriken: Weapon;

  public constructor(
    @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: Weapon
  ) {
    this.#katana = katana;
    this.#shuriken = shuriken;
  }

  public fight() {
    return this.#katana.hit();
  }

  public sneak() {
    return this.#shuriken.hit();
  }
}

@injectable()
export class AxiosClass implements Axios {
  public async get(url: string) {
    const res = await axios.get(url);
    return res.data;
  }
}

@injectable()
export class PokemonRepo implements Repo {
  #axios;

  constructor(@inject(TYPES.AxiosClass) axios: Axios) {
    this.#axios = axios;
  }

  async getOne(name: string) {
    return await this.#axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}

import { iocContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";
import { PokemonRepo } from "./entities";

const ninja = iocContainer.get<Warrior>(TYPES.Warrior);
console.log(ninja.fight());

const pokemonRepo = iocContainer.get<PokemonRepo>(TYPES.PokemonRepo);
pokemonRepo
  .getOne("pikachu")
  .then((res: any) => console.log(res.forms[0].name));

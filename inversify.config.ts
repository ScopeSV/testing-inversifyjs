import { Container } from "inversify";
import { AxiosClass, Katana, Ninja, PokemonRepo, Shuriken } from "./entities";
import { TYPES } from "./types";

const iocContainer = new Container();
iocContainer.bind(TYPES.Warrior).to(Ninja);
iocContainer.bind(TYPES.Weapon).to(Katana);
iocContainer.bind(TYPES.ThrowableWeapon).to(Shuriken);
iocContainer.bind(TYPES.AxiosClass).to(AxiosClass);
iocContainer.bind(TYPES.PokemonRepo).to(PokemonRepo);

export { iocContainer };

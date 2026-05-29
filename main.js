import { createAtom } from "./physics/atom.js";
import { fillShells } from "./physics/shells.js";
import { calculateEnergyLevel } from "./physics/energy.js";

const hydrogen = createAtom(
    "Hydrogen",
    1,
    1
);

// const energy = calculateEnergyLevel(1);

fillShells(hydrogen);

console.log(hydrogen);
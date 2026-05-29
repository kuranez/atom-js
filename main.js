import { createAtom } from "./physics/atom.js";
import { calculateEnergyLevel } from "./physics/energy.js";

const hydrogen = createAtom(
    "Hydrogen",
    1,
    1
);

const energy = calculateEnergyLevel(1);

console.log(hydrogen.name);
console.log(`Energy: ${energy} eV`);
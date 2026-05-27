import { Atom } from "./atom.js";

const hydrogen = new Atom(
    "Hydrogen",
    1,
    1
);

const energy =
    hydrogen.calculateEnergyLevel(1);

console.log(hydrogen.name);
console.log(`Energy: ${energy} eV`);

import { createAtom } from "./physics/atom.js";
import { fillShells } from "./physics/shells.js";
import { calculateEnergyLevel } from "./physics/energy.js";
import { renderAtom } from "./render/renderer.js";

const hydrogen = createAtom(
    "Hydrogen",
    1,
    1
);

// const energy = calculateEnergyLevel(1);

fillShells(hydrogen);

renderAtom(hydrogen);

console.log(hydrogen);
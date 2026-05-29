// physics/atom.js
// Atom als Factory-Funktion - Funktionaler Ansatz

import { createShell } from "./shells.js";

export function createAtom(
    name,
    protonNumber,
    electronCount
) {
    return {
        name,
        protonNumber,
        electronCount,
        shells: [
            createShell(1),
            createShell(2),
            createShell(3),
        ]
    };
}
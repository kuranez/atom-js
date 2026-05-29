// physics/atom.js
// Atom als Klasse - Objektorientierter Ansatz
export class Atom {

    constructor(name, protonNumber, electronCount) {
        this.name = name;
        this.protonNumber = protonNumber;
        this.electronCount = electronCount;
    }

    calculateEnergyLevel(n) {
        return -13.6 / (n * n);
    }
}
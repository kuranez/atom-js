// physics/energy.js
// Berechnung der Energie eines Elektrons in einem Atom

export function calculateEnergyLevel(n) {
    return -13.6 / (n * n);
}
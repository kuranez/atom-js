// physics/shells.js
// Schalenmodell - Berechnung der Elektronenverteilung auf den Schalen

// Funktion zur Erstellung einer Schale
export function createShell(n) {

    return {

        n: n,

        maxElectrons: 2 * n * n,

        electrons: 0
    };
}

// Funktion zur Verteilung der Elektronen auf die Schalen
export function fillShells(atom) {

    let remaining =
        atom.electronCount;

    for (const shell of atom.shells) {

        while (

            remaining > 0 &&

            shell.electrons
            <
            shell.maxElectrons

        ) {

            shell.electrons++;

            remaining--;
        }
    }
}
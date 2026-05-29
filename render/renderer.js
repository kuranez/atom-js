// renderer.js
// Renderer - Darstellung des Atoms auf dem Canvas

// Funktion zur Darstellung des Atoms
export function renderAtom(atom) {

    // Konstanten für die Canvas-Darstellung
    // Canvas-Element
    const canvas =
        document.getElementById("canvas");

    // Kontext für die Darstellung: 2D
    const ctx =
        canvas.getContext("2d");

    // Mittelpunkt der Darstellung
    const centerX = 400;
    const centerY = 400;

    // Kern
    // Beginne einen neuen Pfad
    ctx.beginPath();

    // Zeichne einen Kreis für den Kern
    ctx.arc(
        centerX,
        centerY,
        10,
        0,
        Math.PI * 2
    );

    // Fülle den Kreis mit Farbe
    ctx.fill();

    // Schalen
    // Start-Radius für die erste Schale
    let radius = 60;

    // Iteriere über die Schalen des Atoms
    for (const shell of atom.shells) {

        // Beginne einen neuen Pfad
        ctx.beginPath();

        // Zeichne einen Kreis für die Schale
        ctx.arc(
            centerX,
            centerY,
            radius,
            0,
            Math.PI * 2
        );

        // Zeichne die Schale als Linie
        ctx.stroke();

        // Elektronen auf der Schale
        for (let i = 0; i < shell.electrons; i++) {

            // Berechne den Winkel für die Position des Elektrons
            const angle =
                (i / shell.maxElectrons) *
                Math.PI *
                2;

            // Berechne die Position des Elektrons auf der Schale
            const electronX =
                centerX +
                radius *
                Math.cos(angle);
            const electronY =
                centerY +
                radius *
                Math.sin(angle);

            // Zeichne das Elektron als kleinen Kreis
            ctx.beginPath();
            ctx.arc(
                electronX,
                electronY,
                5,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }

        // Erhöhe den Radius für die nächste Schale
        radius += 60;
    }
}
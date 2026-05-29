# Schalenmodell - Implementierung in JavaScript

- [x] Atom-Factory
- [x] Schalenmodell
- [x] Energie für wasserstoffähnliche Systeme
- [x] Renderer für HTML-Canvas

## Phase 1:

- Atom als Klasse (analog zu [Java-Version](https://github.com/kuranez/atom-shells-java))

**Objektorientierter** Ansatz

```
main.js 
│ 
└── atom.js
     └── calculateEnergy() 
```

## Phase 2:

- Umdenken zu Modulen : Atomdaten und Energieberechnung als zwei Module

**JS-typische** modulare Architektur.

```
main.js 
│ 
├── atom.js 
└── energy.js 
```

## Phase 3:

- Implementierung von Schalen
- Ausgabe über Konsole


```
main.js 
│ 
└── physics/ 
     ├── atom.js 
     ├── shells.js 
     └── energy.js 
```

## Phase 4:

- Rendern von Schalen auf HTML-Canvas
- Programm wird nun über `npx http-server` ausgeführt.

### Darstellung auf Canvas

```
Browser lädt HTML
↓
HTML lädt JS
↓
JS läuft im Browserkontext
``` 

### Modellhierarchie

```
main.js 
│ 
├── physics/ 
│     ├── atom.js 
│     ├── shells.js 
│     └── energy.js 
│ 
└── render/ 
      └── renderer.js 
```

## Phase 5:

- Implementierung von Programm-states in states.js
- z.B. für Auswahl von Atomen

## Modellhierarchie

```
main.js 
│ 
├── physics/ 
│     ├── atom.js 
│     ├── shells.js 
│     └── energy.js 
│ 
├── render/ 
│     └── renderer.js 
│ 
└── state.js
```

**Charakteristisch für JS:**

- Module statt großer Klassenhierarchien
- Funktionen transformieren Daten
- Datenobjekte oft simpel
- Rendering getrennt
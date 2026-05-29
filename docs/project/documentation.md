# Schalenmodell - Implementierung in JavaScript

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
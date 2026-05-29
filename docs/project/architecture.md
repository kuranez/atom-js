# Schalenmodell - Architektur in JS

```yaml 
main.js 
│ 
├── physics/ 
│     ├── atom.js 
│     ├── shell.js 
│     └── energy.js 
│ 
├── render/ 
│     └── renderer.js 
│ 
└── state.js
``` 

## Mermaid-Diagramm


```mermaid
classDiagram
		class Main {
			+ main()
		}

		class Atom {
			+ name: string
			+ protonNumber: number
			+ electronCount: number
			+ shells: Shell[]
		}

		class Shell {
			+ n: number
			+ maxElectrons: number
			+ electrons: number
		}

		class AtomFactory {
			+ createAtom(name, protonNumber, electronCount) Atom
		}

		class ShellFactory {
			+ createShell(n) Shell
			+ fillShells(atom)
		}

		class Energy {
			+ calculateEnergyLevel(n)
		}

		Main --> AtomFactory : creates
		Main --> ShellFactory : fills shells
		Main --> Energy : optional energy calc
		AtomFactory --> Atom : returns
		AtomFactory --> ShellFactory : uses
		ShellFactory --> Shell : creates
		Atom o-- "0..*" Shell : shells
```

---

**Author** : kuranez
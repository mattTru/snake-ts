import { Dimension } from "./dimension";

export class Grid {
    public init(): void {
        alert('Initialisation de la partie');

        this.generate();
    }

    public generate(): void {
        alert('Dimension de la grille: largeur -> ' + Dimension.grid.x + ' / ' + 'hauteur -> ' + Dimension.grid.y);
    }
} 
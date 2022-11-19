import { Dimension } from "./dimension";

export class Grid {
    public init(): void {
        this.generate();
    }

    public generate(): void {
        const grid = document.createElement('canvas');

        const gridSize = Dimension.grid.box * Dimension.grid.size;

        grid.setAttribute('width', gridSize.toString());
        grid.setAttribute('height', gridSize.toString());

        document.getElementById('grid')?.appendChild(grid);
    
        for (let x = 0; x < Dimension.grid.size; x++) {
            for (let y = 0; y < Dimension.grid.size; y++) {
                const box = grid.getContext('2d')!

                box.fillStyle = 'white';
                box.fillRect(Dimension.grid.box * x, Dimension.grid.box * y, Dimension.grid.box, Dimension.grid.box);

                box.strokeStyle = "lightgray";
                box.strokeRect(Dimension.grid.box * x, Dimension.grid.box * y, Dimension.grid.box, Dimension.grid.box);
            }
        }
    }
} 
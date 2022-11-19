import { Dimension } from "./dimension";

export class Grid {
    public init(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        canvas.width = Dimension.grid.width;
        canvas.height = Dimension.grid.height;
        canvas.style.display = 'block';
        for (let x = 0; x < Dimension.grid.width; x++) {
            for (let y = 0; y < Dimension.grid.height; y++) {
                context.fillStyle = 'white';
                context.fillRect(Dimension.grid.box * x, Dimension.grid.box * y, Dimension.grid.box, Dimension.grid.box);
                
                context.strokeStyle = "lightgray";
                context.strokeRect(Dimension.grid.box * x, Dimension.grid.box * y, Dimension.grid.box, Dimension.grid.box);
            }
        }
    }
} 
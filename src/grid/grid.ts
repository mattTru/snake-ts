import { Dimension } from "./dimension";

export class Grid {
    public init(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        canvas.width = Dimension.grid.width;
        canvas.height = Dimension.grid.height;
        canvas.style.display = 'block';
    }

    public generate(context: CanvasRenderingContext2D, snake: { x: number; y: number; }[]) {
        context.clearRect(0, 0, Dimension.grid.width, Dimension.grid.height);
        snake.forEach((item, index) => {
            context.fillStyle = 'red';
            context.beginPath();
            context.rect(item.x, item.y, Dimension.grid.boxSize, Dimension.grid.boxSize);
            context.fill();
        })
    }
} 
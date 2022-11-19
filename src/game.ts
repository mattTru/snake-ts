import { Grid } from "./grid/grid";

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
const context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');

export class Game {
    public start() {
        new Grid().init(canvas, context);
    }
}
import type { Pos } from "./whiteboard";

class Pencil {
  mousePos: Pos = { x: 0, y: 0 };
  paths: Pos[][] = [];
  pencilThickness = 2;

  updateMousePos(pos: Pos) {
    this.mousePos = pos;
  }

  startStroke() {
    this.paths.push([]);
  }

  addPoint(pos: Pos) {
    this.paths[this.paths.length - 1]?.push(pos);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = this.pencilThickness;
    ctx.strokeStyle = "black";

    for (const path of this.paths) {
      if (path.length > 0) {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
          ctx.lineTo(path[i].x, path[i].y);
        }
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

export default Pencil;

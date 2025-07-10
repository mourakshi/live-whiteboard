import Pencil from "./Pencil";
import Rectangle from "./rectangle";

export interface Pos {
  x: number;
  y: number;
}

export const enum Tool {
  PENCIL,
  RECTANGLE,
  TEXT,
  NO_TOOL,
}

class Whiteboard extends EventTarget{
  activeTool: Tool = Tool.NO_TOOL;
  mousePOS: Pos = { x: 0, y: 0 };
  pencil = new Pencil();
  rectangle = new Rectangle();

  mouseDown = false;

  constructor(canvas: HTMLCanvasElement) {
    super();
    canvas.onmousedown = (e) => {
      this.mouseDown = true;

      if (this.activeTool === Tool.PENCIL) {
        this.pencil.startStroke();
      } else if (this.activeTool === Tool.RECTANGLE) {
        this.rectangle.currentRect = {
          pos: { x: e.clientX, y: e.clientY },
          width: 0,
          height: 0,
        };
      }
    };

    canvas.onmouseup = () => {
      this.mouseDown = false;

      if (this.activeTool === Tool.RECTANGLE && this.rectangle.currentRect) {
        this.rectangle.rects.push(this.rectangle.currentRect);
        this.rectangle.currentRect = undefined;
      }
    };

    canvas.addEventListener("mousemove", (e) => {
      if (!this.mouseDown) return;
      this.dispatchEvent(new Event('state_change'));

      const pos = { x: e.clientX, y: e.clientY };
      this.mousePOS = pos;

      if (this.activeTool === Tool.PENCIL) {
        this.pencil.updateMousePos(pos);
        this.pencil.addPoint(pos);
      } else if (this.activeTool === Tool.RECTANGLE) {
        this.rectangle.updateMouse(pos);
      }
    });
  }
  setTool(tool : Tool){
   this.activeTool=tool;
  }

  update() {
    this.rectangle.update();
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.pencil.draw(ctx);
    
      this.rectangle.draw(ctx);
    }
  }


export default Whiteboard;

import Socket from 'socket.io-client';
import {CANVAS_HEIGHT, CANVAS_WIDTH} from "./constants";
import Whiteboard, { Tool } from "./whiteboard";
const canvas=document.createElement('canvas');
const pencil=document.getElementById('pencil');
const rectangle=document.getElementById('rectangle');

const io=Socket('http://localhost:3000');


document.body.append(canvas);
canvas.width=CANVAS_WIDTH;
canvas.height=CANVAS_HEIGHT;


const ctx = canvas.getContext('2d');
const whiteboard= new Whiteboard(canvas);
pencil?.addEventListener('click',()=>{
whiteboard.setTool(Tool.PENCIL);
});
rectangle?.addEventListener('click',()=>{
whiteboard.setTool(Tool.RECTANGLE);
});
whiteboard.addEventListener('state_change',()=>{
  const state={
    pencil:whiteboard.pencil.paths,
    rectangle:whiteboard.rectangle.rects,

  };
  io.emit('state_change',state);
})


const animationLoop=()=>{
  if(ctx){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
   whiteboard.draw(ctx);
   whiteboard.update();
  }
   requestAnimationFrame(animationLoop);
};
animationLoop();

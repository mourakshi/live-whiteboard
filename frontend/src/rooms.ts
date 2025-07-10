import {io} from 'socket.io-client';
const createBtn=document.getElementById('create_btn');
const room_name_ele=document.getElementById('name');
let room_name="";
const socket=io('http://localhost:3000');
room_name_ele?.addEventListener('change',e=>{
    //@ts-ignore
    const value=e.target.value;
    room_name=value;

});
createBtn?.addEventListener('change',e=>{
    if(room_name){
        socket.emit('create room', room_name);
    }

});

import { Server } from "socket.io";
import { randomUUID } from "crypto";


interface Room {
  roomName: string;
  users: string[];
  room_id: string;
}
const io=new Server();

const rooms: Room[] = [];

io.on("connection", (socket) => {
  socket.on("create room", (roomName) => {
    const room_id = randomUUID();
    rooms.push({
      roomName,
      users: [],
      room_id,
    });
    socket.join(room_id);
  });

  socket.on("get rooms", (cb) => {
    const list = rooms.map((room) => ({
      name: room.roomName,
      id: room.room_id,
    }));
    cb(list); // Send the list back via callback
  });

  socket.on("join room", (room_id: string) => {
    const room = rooms.find((r) => r.room_id === room_id);
    if (room) {
      room.users.push(socket.id);
      socket.join(room_id);
    }
  });
});

io.listen(3000);
console.log('server started on port 3000');

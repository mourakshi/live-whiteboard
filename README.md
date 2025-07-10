# 🧑‍🏫 Live Whiteboard App

A collaborative, real-time whiteboard built using TypeScript, Node.js, and Socket.IO. Users can draw with pencils, create rectangles, and eventually add text — all within shared rooms for seamless collaboration.

---

## 🚧 Status: In Progress

- 🟢 Core drawing tools implemented (Pencil, Rectangle)
- 🟢 Room creation and joining with Socket.IO
- 🔄 Real-time sync between users: **ongoing**

---

## ✨ Features

- 🎨 **Canvas Drawing Tools**: Use pencil and rectangle tools to draw freely.
- 🧑‍🤝‍🧑 **Room-Based Collaboration**: Create or join drawing rooms dynamically.
- ⚡ **Real-Time Updates**: Integrating live socket-based sync between users.
- 🧱 **Modular Codebase**: Clean, scalable TypeScript structure with tool-based classes.

---

## 🛠 Tech Stack

- **Frontend**: HTML, TypeScript, Canvas API, Vite
- **Backend**: Node.js, Socket.IO, TypeScript
- **Bundler**: Bun / Yarn (optional)

---

## 🚀 Getting Started

### Clone the repo

```bash
git clone https://github.com/your-username/live-whiteboard.git
cd live-whiteboard
```
## Install dependencies

```bash
# For frontend
cd frontend
yarn install
yarn dev

# For backend
cd ../
yarn install
yarn dev

```
## 🖼 Screenshots


https://github.com/user-attachments/assets/5835d2d4-96ad-4ca4-9ec8-034c0537e2ce

## 📁 Project Structure

```
mumlivewhiteboard/
├── frontend/
│   ├── src/
│   │   ├── Whiteboard.ts        # Main canvas logic and tool switching
│   │   ├── Pencil.ts            # Pencil drawing tool
│   │   ├── Rectangle.ts         # Rectangle drawing tool
│   │   └── rooms.ts             # Frontend socket logic for room creation/joining
│   └── index.html               # UI for room interaction
├── src/
│   └── index.ts                 # Socket.IO server for real-time communication
├── package.json                # Project metadata and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project overview and documentation
```
## 💡 Future Plans
 -✅ Add Text Tool
 -✅ Show Active Users in Room
 -🔄 Sync Drawing State Across Clients in Real-Time
 -💾 Save Canvas to Image or PDF


## 📬 Feedback
Have suggestions or found a bug? Feel free to open an issue or contribute via a pull request.

## 📜 License
MIT © 2025 [Mourakshi Thakuria]








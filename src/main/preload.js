const { contextBridge, ipcRenderer, ipcMain} = require('electron');
const fs = require('fs');
const chokidar = require('chokidar');
const path = require('path');

// contextBridge.exposeInMainWorld('electron', {
//   ipcRenderer: {
//     myPing() {
//       ipcRenderer.send('ipc-example', 'ping');
//     },
//     on(channel, func) {
//       const validChannels = ['ipc-example'];
//       if (validChannels.includes(channel)) {
//         // Deliberately strip event as it includes `sender`
//         ipcRenderer.on(channel, (event, ...args) => func(...args));
//       }
//     },
//     once(channel, func) {
//       const validChannels = ['ipc-example'];
//       if (validChannels.includes(channel)) {
//         // Deliberately strip event as it includes `sender`
//         ipcRenderer.once(channel, (event, ...args) => func(...args));
//       }
//     },
//   },
// });

chokidar.watch('.', {
    ignored: ["./node_modules", "./.git"],
    ignoreInitial: true
}).on('all', (event, path) => {
    console.log(event, path);
});

contextBridge.exposeInMainWorld('handleChokidar', );

contextBridge.exposeInMainWorld('fs', fs);
contextBridge.exposeInMainWorld('chokidar', chokidar);
contextBridge.exposeInMainWorld('path', path);

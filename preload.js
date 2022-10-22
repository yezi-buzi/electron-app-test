// 预加载
const { contextBridge, ipcRenderer } = require('electron');

// 函数和变量暴露
contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),
});
contextBridge.exposeInMainWorld('yezi', {
    msg: 'hello yezi',
});
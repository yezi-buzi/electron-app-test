const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');

// 创建窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 450,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    // 加载视图
    win.loadFile('index.html');
};

// 进程通信
ipcMain.handle('ping', () => 'pong');

// app ready
app.whenReady().then(() => {
    // app准备好创建窗口
    createWindow();

    // 适配macOS
    app.on('activate', () => {
        !BrowserWindow.getAllWindows().length && createWindow();
    });
});

// app事件监听
app.on('window-all-closed', () => {
    // 所有窗口关闭时非macOS则退出应用
    process.platfrom != 'darwin' && app.quit();
});

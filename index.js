const { BrowserWindow, app, crashReporter } = require("electron");
const path = require('path')
// let segfaultHandler = require(`segfault-handler`);

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      webSecurity: false,
      contextIsolation: false,
      nodeIntegration: false,
    },
    show: false,
  });
  mainWindow.loadURL("http://localhost:8088")
  mainWindow.webContents.on('render-process-gone', (event, details) => {
    console.log('Window - Render process gone', {
      event,
      details,
      name: windowName,
      windowId: newWindow.id,
    });
  });
}
app.setPath('crashDumps', '/Users/tn185075/electron-edge-id/crashes')
crashReporter.start({
  uploadToServer: false,
})
// console.log(path.join(app.getPath('temp'), app.getName() + ' Crashes'))
app.on('ready', () => {
  // segfaultHandler.registerHandler()
  createWindow();
});
app.on('render-process-gone', (_event, webContents, details) => {
  console.log(`App - Render process gone: ${details.reason}`, {
    id: webContents.id,
    details,
  });
  if (details.reason === 'crashed' || details.reason === 'oom') {
    webContents.reload();
  }
});
// process.crash()

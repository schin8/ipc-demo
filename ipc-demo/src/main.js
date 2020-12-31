// Electron setup
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on("ready", (_) => {

  mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    webPreferences: {
        nodeIntegration: true
    }
  });

  mainWindow.loadURL(`file://${__dirname}/countdown.html`)

  mainWindow.on("closed", (_) => {
    mainWindow = null;
    console.log("Cleanup");
  });

});
const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // For simplicity, not recommended for production
    },
  });

  // Load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  const startURL = url.format({
    pathname: path.resolve("/app/build/index.html"),
    protocol: "file:",
  });

  // Load the start URL
  mainWindow.loadURL('http://localhost:5173/');
}

app.whenReady().then(createWindow);
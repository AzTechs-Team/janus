const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

if (require("electron-squirrel-startup")) {
  app.quit();
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1450,
    height: 800,
    minWidth: 1450,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: true,
    },
    // frame: false,
    // transparent: true,
    // titleBarStyle: "hidden"
  });
  win.setMenuBarVisibility(false);

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

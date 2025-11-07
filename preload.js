// Preload script for security
// This runs before the web page loads and can expose safe APIs to the renderer

const { contextBridge } = require('electron');

// Expose protected methods that allow the renderer process to use
// ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'worxDesktop', {
    version: '1.0.0',
    platform: process.platform
  }
);

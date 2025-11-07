# Worx Safety Desktop Application

A desktop application wrapper for Worx Safety web application using Electron.

## Features

- Desktop application that loads https://app.worxsafety.com.au/login
- Creates desktop shortcut during installation
- Native application menu
- Cross-platform support (Windows, macOS, Linux)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the application in development mode:
```bash
npm start
```

## Building Installers

### Windows
```bash
npm run build:win
```
This will create an installer in the `dist` folder with:
- NSIS installer (.exe)
- Desktop shortcut creation during installation

### macOS
```bash
npm run build:mac
```
This will create a DMG installer in the `dist` folder.

### Linux
```bash
npm run build:linux
```
This will create AppImage and deb packages in the `dist` folder.

### Build for all platforms
```bash
npm run build
```

## Adding Custom Icons

To use your own Worx Safety icon, replace the following files:

1. **icon.png** - PNG format (512x512 or larger, square)
2. **icon.ico** - Windows icon format (can be generated from PNG)
3. **icon.icns** - macOS icon format (can be generated from PNG)

### Converting Icons

You can use online tools or command-line utilities to convert your PNG to ICO and ICNS:

- ICO: Use tools like ImageMagick or online converters
- ICNS: Use tools like `png2icns` or online converters

Example with ImageMagick:
```bash
# For ICO (Windows)
convert icon.png -define icon:auto-resize=256,128,64,48,32,16 icon.ico

# For ICNS (macOS) - requires iconutil on macOS
mkdir icon.iconset
sips -z 16 16     icon.png --out icon.iconset/icon_16x16.png
sips -z 32 32     icon.png --out icon.iconset/icon_16x16@2x.png
sips -z 32 32     icon.png --out icon.iconset/icon_32x32.png
sips -z 64 64     icon.png --out icon.iconset/icon_32x32@2x.png
sips -z 128 128   icon.png --out icon.iconset/icon_128x128.png
sips -z 256 256   icon.png --out icon.iconset/icon_128x128@2x.png
sips -z 256 256   icon.png --out icon.iconset/icon_256x256.png
sips -z 512 512   icon.png --out icon.iconset/icon_256x256@2x.png
sips -z 512 512   icon.png --out icon.iconset/icon_512x512.png
cp icon.png icon.iconset/icon_512x512@2x.png
iconutil -c icns icon.iconset
rm -rf icon.iconset
```

## Application Structure

- `main.js` - Main Electron process, handles window creation and app lifecycle
- `preload.js` - Preload script for secure context bridging
- `package.json` - Project configuration and dependencies
- Icon files - Application icons for different platforms

## Configuration

The web app URL is configured in `main.js`:
```javascript
const WORX_URL = 'https://app.worxsafety.com.au/login';
```

## Distribution

After building, installers will be available in the `dist` folder:
- Windows: `.exe` installer
- macOS: `.dmg` file
- Linux: `.AppImage` and `.deb` files

Users can install the application and it will create a desktop shortcut to launch Worx Safety.

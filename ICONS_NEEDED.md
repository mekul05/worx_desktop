# Icons Required

To complete the desktop application, you need to add icon files in the following formats:

## Required Icon Files

1. **icon.png** (512x512 or larger)
   - Square PNG image
   - Used for Linux builds
   - Can be used as source for converting to other formats

2. **icon.ico** (Windows)
   - Windows icon format
   - Should contain multiple sizes (16, 32, 48, 64, 128, 256)
   - Can be generated from icon.png

3. **icon.icns** (macOS)
   - macOS icon format
   - Can be generated from icon.png

## Where to Place Icons

Place all three icon files in the root directory of this project:
```
/home/user/worx_desktop/
├── icon.png
├── icon.ico
└── icon.icns
```

## Quick Setup

### Option 1: Use your existing Worx Safety logo
If you have a high-resolution Worx Safety logo (PNG, at least 512x512):
1. Rename it to `icon.png` and place it in the project root
2. Use online converters or tools to create .ico and .icns versions

### Option 2: Use online conversion tools
1. Create or obtain a 512x512 PNG of your Worx logo
2. Convert to ICO: https://convertio.co/png-ico/
3. Convert to ICNS: https://convertio.co/png-icns/

### Option 3: Use ImageMagick (if installed)
```bash
# Install ImageMagick first if needed
# sudo apt install imagemagick  (Linux)
# brew install imagemagick       (macOS)

# Convert PNG to ICO
convert icon.png -define icon:auto-resize=256,128,64,48,32,16 icon.ico
```

For macOS ICNS, you'll need to use macOS-specific tools or online converters.

## Temporary Workaround

The application will work without icons, but:
- Windows installer will use a default icon
- Desktop shortcuts will have a generic icon
- Application window will have a default icon

To proceed without icons for testing, you can comment out the icon references in package.json temporarily.

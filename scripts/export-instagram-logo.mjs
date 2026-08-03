import sharp from "sharp";
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";

const desktop = join(process.env.HOME, "Desktop");
const fontBase64 = readFileSync("/tmp/SpaceGrotesk-SemiBold.ttf").toString(
  "base64"
);

function buildInstagramSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: "Space Grotesk";
        src: url("data:font/truetype;base64,${fontBase64}") format("truetype");
        font-weight: 600;
        font-style: normal;
      }
    </style>
  </defs>

  <rect width="1080" height="1080" fill="#0A0A0A"/>

  <!-- Logo icon -->
  <g transform="translate(400 300) scale(5.8333333333)">
    <rect width="48" height="48" rx="12" fill="#3B82F6"/>
    <rect x="1" y="1" width="46" height="46" rx="11" stroke="white" stroke-opacity="0.12" fill="none"/>
    <rect x="14" y="15" width="3.5" height="18" rx="1.75" fill="white" fill-opacity="0.95"/>
    <path d="M22.5 16.5V31.5L34.5 24Z" fill="white" fill-opacity="0.95"/>
  </g>

  <!-- NitiPlay wordmark -->
  <text
    x="540"
    y="680"
    text-anchor="middle"
    font-family="Space Grotesk, system-ui, sans-serif"
    font-size="96"
    font-weight="600"
    letter-spacing="-2"
    fill="#FAFAFA"
  >Niti<tspan fill="#3B82F6">Play</tspan></text>
</svg>`;
}

function buildFullLogoSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: "Space Grotesk";
        src: url("data:font/truetype;base64,${fontBase64}") format("truetype");
        font-weight: 600;
        font-style: normal;
      }
    </style>
  </defs>

  <rect width="1200" height="400" fill="#0A0A0A"/>

  <g transform="translate(120 80) scale(5)">
    <rect width="48" height="48" rx="12" fill="#3B82F6"/>
    <rect x="1" y="1" width="46" height="46" rx="11" stroke="white" stroke-opacity="0.12" fill="none"/>
    <rect x="14" y="15" width="3.5" height="18" rx="1.75" fill="white" fill-opacity="0.95"/>
    <path d="M22.5 16.5V31.5L34.5 24Z" fill="white" fill-opacity="0.95"/>
  </g>

  <text
    x="420"
    y="250"
    font-family="Space Grotesk, system-ui, sans-serif"
    font-size="120"
    font-weight="600"
    letter-spacing="-3"
    fill="#FAFAFA"
  >Niti<tspan fill="#3B82F6">Play</tspan></text>
</svg>`;
}

const iconOnlySvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1024" height="1024" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#3B82F6"/>
  <rect x="1" y="1" width="46" height="46" rx="11" stroke="white" stroke-opacity="0.12" fill="none"/>
  <rect x="14" y="15" width="3.5" height="18" rx="1.75" fill="white" fill-opacity="0.95"/>
  <path d="M22.5 16.5V31.5L34.5 24Z" fill="white" fill-opacity="0.95"/>
</svg>`;

async function exportLogo() {
  const instagramSvg = buildInstagramSvg();
  const fullLogoSvg = buildFullLogoSvg();

  const instagramPngPath = join(
    desktop,
    "NitiPlay-Instagram-Profile-1080x1080.png"
  );
  const instagramSvgPath = join(
    desktop,
    "NitiPlay-Instagram-Profile-1080x1080.svg"
  );
  const fullLogoPngPath = join(desktop, "NitiPlay-Logo-Full-1200x400.png");
  const fullLogoSvgPath = join(desktop, "NitiPlay-Logo-Full-1200x400.svg");
  const iconPngPath = join(desktop, "NitiPlay-Logo-Icon-1024x1024.png");
  const iconSvgPath = join(desktop, "NitiPlay-Logo-Icon-1024x1024.svg");

  writeFileSync(instagramSvgPath, instagramSvg);
  writeFileSync(fullLogoSvgPath, fullLogoSvg);
  writeFileSync(iconSvgPath, iconOnlySvg);

  await sharp(Buffer.from(instagramSvg))
    .png({ compressionLevel: 9 })
    .toFile(instagramPngPath);

  await sharp(Buffer.from(fullLogoSvg))
    .png({ compressionLevel: 9 })
    .toFile(fullLogoPngPath);

  await sharp(Buffer.from(iconOnlySvg))
    .resize(1024, 1024)
    .png({ compressionLevel: 9 })
    .toFile(iconPngPath);

  console.log("Saved:");
  console.log(instagramPngPath);
  console.log(instagramSvgPath);
  console.log(fullLogoPngPath);
  console.log(fullLogoSvgPath);
  console.log(iconPngPath);
  console.log(iconSvgPath);
}

exportLogo().catch((err) => {
  console.error(err);
  process.exit(1);
});

import sharp from "sharp";
import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const root = process.cwd();
const desktop = join(process.env.HOME, "Desktop");
const iconPath = join(root, "public/logo.png");
const socialDir = join(root, "public/social/instagram");

async function exportLogo() {
  if (!existsSync(iconPath)) {
    throw new Error(`Missing brand icon: ${iconPath}`);
  }

  const profilePath = join(socialDir, "profile.png");
  const desktopProfile = join(desktop, "NitiPlay-Instagram-Profile.png");
  const desktopIcon = join(desktop, "NitiPlay-Icon-1024.png");

  await sharp(iconPath)
    .resize(1080, 1080, { fit: "contain", background: "#050508" })
    .png({ compressionLevel: 9 })
    .toFile(profilePath);

  copyFileSync(iconPath, desktopIcon);
  copyFileSync(profilePath, desktopProfile);

  await sharp(iconPath)
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(join(root, "public/apple-touch-icon.png"));

  console.log("Saved:");
  console.log(profilePath);
  console.log(desktopProfile);
  console.log(desktopIcon);
}

exportLogo().catch((err) => {
  console.error(err);
  process.exit(1);
});

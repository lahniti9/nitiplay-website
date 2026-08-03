import Image from "next/image";

interface StoreBadgesProps {
  appStoreUrl?: string;
  playStoreUrl?: string;
  size?: "sm" | "md";
  className?: string;
}

const sizes = {
  sm: { appStore: 40, googlePlay: 60 },
  md: { appStore: 48, googlePlay: 72 },
};

export function StoreBadges({
  appStoreUrl,
  playStoreUrl,
  size = "md",
  className,
}: StoreBadgesProps) {
  const { appStore, googlePlay } = sizes[size];

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          className="inline-block transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <Image
            src="/badges/app-store.svg"
            alt="Download on the App Store"
            width={Math.round(appStore * 2.99)}
            height={appStore}
            className="h-auto w-auto"
            style={{ height: appStore, width: "auto" }}
          />
        </a>
      )}
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          className="inline-block transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <Image
            src="/badges/google-play.png"
            alt="Get it on Google Play"
            width={Math.round(googlePlay * 2.584)}
            height={googlePlay}
            className="h-auto w-auto"
            style={{ height: googlePlay, width: "auto" }}
          />
        </a>
      )}
    </div>
  );
}

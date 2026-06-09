import Image from "next/image";

interface EntityVisualProps {
  src?: string;
  alt: string;
  title: string;
  label: string;
  context?: string;
  tone?: "blue" | "orange" | "green" | "purple" | "navy";
  aspect?: "square" | "wide" | "portrait";
  monogram?: string;
  color?: string;
}

const toneClasses = {
  blue: "from-navy via-navy-700 to-primary",
  orange: "from-navy via-navy-700 to-accent",
  green: "from-navy via-navy-700 to-green",
  purple: "from-navy via-navy-700 to-purple",
  navy: "from-navy via-navy-700 to-navy-600",
};

const aspectClasses = {
  square: "aspect-square",
  wide: "aspect-[4/3]",
  portrait: "aspect-[5/4]",
};

export function EntityVisual({
  src,
  alt,
  title,
  label,
  context,
  tone = "navy",
  aspect = "wide",
  monogram,
  color,
}: EntityVisualProps) {
  const realImageSrc = src && !src.includes("placeholder-") ? src : undefined;
  const visualText = monogram ?? getInitials(title);

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white/10 bg-navy shadow-inner ${aspectClasses[aspect]}`}
    >
      {realImageSrc ? (
        <Image
          src={realImageSrc}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, calc(100vw - 2rem)"
          className="object-cover"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${toneClasses[tone]}`}
          style={color ? { background: color } : undefined}
          aria-label={alt}
          role="img"
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,.075)_0,rgba(255,255,255,.075)_1px,transparent_1px,transparent_32px)]" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/28 to-transparent" />
          <div className="relative flex h-full flex-col justify-between p-4 text-white">
            <p className="bid-kicker text-white/85">{label}</p>
            <p className="bid-display self-center text-center text-5xl leading-none sm:text-6xl">
              {visualText}
            </p>
            <p className="bid-kicker text-right text-blue-light">
              {context ?? "BID"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function getInitials(value: string) {
  const initials = value
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return initials || "BID";
}

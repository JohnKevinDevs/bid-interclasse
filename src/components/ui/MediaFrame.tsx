import Image from "next/image";

interface MediaFrameProps {
  src?: string;
  alt: string;
  aspect?: "portrait" | "wide";
  className?: string;
}

export function MediaFrame({
  src,
  alt,
  aspect = "wide",
  className = "",
}: MediaFrameProps) {
  const aspectClass = aspect === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]";

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-inner ${aspectClass} ${className}`}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-foreground/10 via-transparent to-white/10" />
      <Image
        src={src ?? "/images/sports/placeholder-sport.svg"}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, calc(100vw - 2rem)"
        className="object-cover transition duration-300"
      />
    </div>
  );
}

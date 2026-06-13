import { useState } from "react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  isShort?: boolean;
  testId?: string;
}

export default function LiteYouTube({ videoId, title, isShort = false, testId }: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);

  const aspectClass = isShort ? "aspect-[9/16] max-h-[400px]" : "aspect-video";
  const thumbUrl = isShort
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (activated) {
    return (
      <div className={`relative w-full ${aspectClass}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          data-testid={testId}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspectClass} cursor-pointer group`}
      onClick={() => setActivated(true)}
      role="button"
      aria-label={`Play ${title}`}
      data-testid={testId}
    >
      <img
        src={thumbUrl}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[#ff0000] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-1" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

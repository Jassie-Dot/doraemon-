import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VideoMemory } from "@/config/birthday";
import { Reveal } from "./Reveal";

export function VideoGallery({ videos }: { videos: VideoMemory[] }) {
  const [selected, setSelected] = useState<VideoMemory | null>(null);
  if (videos.length === 0) return null;
  return (
    <section className="section-shell">
      <Reveal className="text-center"><h2 className="section-title">little pieces of us 🎥</h2><p className="section-subtitle">tiny moments worth keeping forever</p></Reveal>
      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {videos.map((video, index) => (
          <Reveal key={video.src} delay={index * 80}>
            <button type="button" className="video-card group" onClick={() => setSelected(video)} aria-label={`Play ${video.caption ?? `video ${index + 1}`}`}>
              <video src={`${video.src}#t=0.1`} poster={video.poster} preload="metadata" muted playsInline />
              <span className="play-badge"><Play fill="currentColor" /></span>
              {video.caption && <span className="block p-4 font-hand text-2xl">{video.caption}</span>}
            </button>
          </Reveal>
        ))}
      </div>
      {selected && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
        <Button variant="glass" size="iconLg" className="absolute right-4 top-4" onClick={() => setSelected(null)} aria-label="Close video"><X /></Button>
        <video className="max-h-[80svh] max-w-[92vw] rounded-lg" src={selected.src} controls autoPlay playsInline onClick={(event) => event.stopPropagation()} />
      </div>}
    </section>
  );
}
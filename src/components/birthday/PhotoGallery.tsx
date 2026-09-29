import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PhotoMemory } from "@/config/birthday";
import { Reveal } from "./Reveal";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function PhotoGallery({ photos }: { photos: PhotoMemory[] }) {
  const [selected, setSelected] = useState<PhotoMemory | null>(null);
  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [selected]);

  return (
    <section className="section-shell">
      <Reveal className="text-center">
        <p className="section-kicker">our little scrapbook</p>
        <h2 className="section-title">some memories ♡</h2>
        <p className="section-subtitle">proof that we&apos;ve actually had some good moments</p>
      </Reveal>
      {photos.length > 0 ? (
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-12 px-4 sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={(index % 3) * 80}>
              <button type="button" onClick={() => setSelected(photo)} className={`polaroid ${rotations[index % rotations.length]}`} aria-label={`Open ${photo.caption ?? `memory ${index + 1}`}`}>
                <span className="tape" aria-hidden="true" />
                <img src={photo.src} alt={photo.alt ?? photo.caption ?? `Memory ${index + 1}`} loading="lazy" />
                {photo.caption && <span className="font-hand text-2xl text-foreground">{photo.caption}</span>}
              </button>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal className="memory-placeholder mx-auto mt-12 max-w-sm text-center">
          <span className="text-4xl" aria-hidden="true">🎀</span>
          <p className="mt-3 font-hand text-3xl text-primary">our favourite moments go here</p>
          <p className="mt-2 text-sm text-muted-foreground">waiting for the photos that only we understand ♡</p>
        </Reveal>
      )}
      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo memory" onClick={() => setSelected(null)}>
          <Button variant="glass" size="iconLg" className="absolute right-4 top-4" onClick={() => setSelected(null)} aria-label="Close photo"><X /></Button>
          <figure onClick={(event) => event.stopPropagation()} className="max-w-[92vw] text-center">
            <img src={selected.src} alt={selected.alt ?? selected.caption ?? "Birthday memory"} className="max-h-[78svh] max-w-full rounded-lg object-contain shadow-2xl" />
            {selected.caption && <figcaption className="mt-5 font-hand text-3xl text-primary-foreground">{selected.caption}</figcaption>}
          </figure>
        </div>
      )}
    </section>
  );
}
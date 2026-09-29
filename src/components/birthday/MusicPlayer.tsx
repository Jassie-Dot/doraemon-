import { useCallback, useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MusicPlayer({ src, startSignal }: { src: string | null; startSignal: number }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const play = useCallback(async () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0;
    try {
      await audioRef.current.play();
      setPlaying(true);
      let volume = 0;
      const fade = window.setInterval(() => {
        volume = Math.min(volume + 0.04, 0.28);
        if (audioRef.current) audioRef.current.volume = volume;
        if (volume >= 0.28) window.clearInterval(fade);
      }, 80);
    } catch { setPlaying(false); }
  }, []);

  useEffect(() => { if (src && startSignal > 0) void play(); }, [src, startSignal, play]);
  if (!src) return null;
  const toggle = async () => {
    if (playing) { audioRef.current?.pause(); setPlaying(false); }
    else await play();
  };
  return <><audio ref={audioRef} src={src} loop preload="none" /><Button variant="music" size="music" onClick={toggle} aria-label={playing ? "Turn music off" : "Turn music on"}>{playing ? <Music /> : <VolumeX />}</Button></>;
}
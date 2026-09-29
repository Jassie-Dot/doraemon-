import { useState } from "react";
import { birthdayConfig } from "@/config/birthday";
import { Hero } from "./Hero";
import { IntroMessage } from "./IntroMessage";
import { PhotoGallery } from "./PhotoGallery";
import { VideoGallery } from "./VideoGallery";
import { Letter } from "./Letter";
import { FinalMemory, FinalMessage } from "./FinalMessage";
import { MusicPlayer } from "./MusicPlayer";
import { Reveal } from "./Reveal";

export function BirthdaySite() {
  const [startSignal, setStartSignal] = useState(0);
  return (
    <main className="birthday-site overflow-hidden">
      <Hero onBegin={() => setStartSignal((value) => value + 1)} />
      <IntroMessage />
      <PhotoGallery photos={birthdayConfig.photos} />
      <section className="interlude px-5 py-28 text-center sm:py-36">
        <Reveal className="mx-auto max-w-xl">
          <p className="font-hand text-5xl leading-tight text-foreground sm:text-6xl">life would be a lot more boring without you.</p>
          <p className="mt-8 text-lg text-muted-foreground">and probably a lot more peaceful too.</p>
          <p className="mt-5 font-hand text-4xl text-primary">but who wants peace anyway? 💀</p>
        </Reveal>
      </section>
      <VideoGallery videos={birthdayConfig.videos} />
      <Letter />
      <FinalMemory photo={birthdayConfig.photos[0]} />
      <FinalMessage />
      <MusicPlayer src={birthdayConfig.music} startSignal={startSignal} />
    </main>
  );
}
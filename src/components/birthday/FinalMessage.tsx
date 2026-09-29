import type { PhotoMemory } from "@/config/birthday";
import { Reveal } from "./Reveal";

export function FinalMemory({ photo }: { photo?: PhotoMemory }) {
  return (
    <section className="section-shell text-center">
      <Reveal><h2 className="section-title">and one last thing...</h2></Reveal>
      {photo && <Reveal className="mx-auto mt-10 max-w-md"><div className="final-photo"><img src={photo.src} alt={photo.alt ?? "A favourite memory with Doraemon"} /></div></Reveal>}
      <Reveal delay={120} className="mx-auto mt-10 max-w-md text-xl leading-relaxed">
        <p>thank you for being my sister,<br />my supporter,<br />my guide,<br />and sometimes...<br /><span className="font-hand text-4xl text-primary">my personal headache.</span></p>
        <p className="mt-7 font-semibold">wouldn&apos;t trade you for anyone ❤️</p>
      </Reveal>
    </section>
  );
}

export function FinalMessage() {
  return (
    <section className="final-section relative overflow-hidden px-5 py-28 text-center sm:py-36">
      <div aria-hidden="true" className="final-confetti"><span>♡</span><span>✦</span><span>♥</span><span>☆</span><span>♡</span></div>
      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <p className="mb-6 text-3xl" aria-hidden="true">🎂</p>
        <h2 className="font-hand text-6xl leading-none text-primary sm:text-8xl">Once again Happy Birthday Guuuuuuuu🎂❤️</h2>
        <p className="mt-10 text-xl leading-relaxed">Stay happy.<br />Keep smiling.<br />Keep annoying me.</p>
        <p className="mt-10 text-xl font-semibold">Love you always.</p>
        <p className="mt-8 font-hand text-4xl text-primary">— Mr Jassu 🦬💞</p>
      </Reveal>
    </section>
  );
}
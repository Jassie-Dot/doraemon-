import { Reveal } from "./Reveal";

export function IntroMessage() {
  return (
    <section id="intro" className="section-shell scroll-mt-10 text-center">
      <Reveal><p className="font-hand text-4xl text-primary sm:text-5xl">Okay... before anything else...</p></Reveal>
      <Reveal delay={100} className="mx-auto mt-10 max-w-lg text-xl leading-relaxed">
        <p>Today is your day.<br />So you are officially allowed to be annoying for the next 24 hours.</p>
        <p className="my-8 text-3xl" aria-label="hearts, pig, ribbon">💗 🐷 🎀</p>
        <p>Actually... let&apos;s be honest.<br />You&apos;re annoying every day.</p>
        <p className="mt-6 font-hand text-4xl text-primary">but you&apos;re my favourite one.</p>
      </Reveal>
    </section>
  );
}
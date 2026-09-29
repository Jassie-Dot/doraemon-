import { Reveal } from "./Reveal";

const letterParagraphs = [
  "Happy Birthday to someone truly special!🎂",
  "Bache apko Janamdin par bohot sarii happy hapyyy walii whishingss,\nJaise k apko patta hai aap iss din jamme the, orr rab ne aisa mental peice ek he bnaya tha.",
  "Baki baba g thora dmaag v den kyuki upparlaa dabba khalli e.",
  "Chall mzaak side te, ajj special day a ta apna din enjoy kri and sad na hoya kr guu.",
  "Am so lucky tere vrgi bhen milli jo ena support te care krdi a te kde jatondi b ni har moment te menu guide krdi a, thanks for everything 🐷.",
  "Baki bakwaas me phone te kruga, hehehe 🌚",
  "Love you  🥰",
];

export function Letter() {
  return (
    <section className="section-shell px-4">
      <Reveal className="text-center"><p className="section-kicker">from your very sensible brother</p><h2 className="section-title">okay... one serious thing</h2></Reveal>
      <article className="letter-paper mx-auto mt-12 max-w-2xl">
        <span className="letter-tape" aria-hidden="true" />
        <Reveal><p className="font-hand text-4xl text-primary sm:text-5xl">Adarniee Doraemon ji💩 ,</p></Reveal>
        <div className="mt-8 space-y-6 text-[1.05rem] leading-[1.9] sm:text-lg">
          {letterParagraphs.map((paragraph, index) => <Reveal key={paragraph} delay={Math.min(index * 70, 350)}><p className="whitespace-pre-line">{paragraph}</p></Reveal>)}
        </div>
        <Reveal delay={300} className="mt-10">
          <p>With love and best wishes,</p>
          <p className="mt-3 font-hand text-3xl text-primary">Apka sohna sunakhaa bhai 💝<br />Mr Jassu 🦬💞</p>
        </Reveal>
      </article>
    </section>
  );
}
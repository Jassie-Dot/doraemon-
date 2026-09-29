import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero({ onBegin }: { onBegin: () => void }) {
  const begin = () => {
    onBegin();
    document.querySelector("#intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[94svh] overflow-hidden px-5 py-10 text-center">
      <div aria-hidden="true" className="sparkle-field">
        <span>♡</span><span>✦</span><span>☆</span><span>♡</span><span>✦</span><span>♡</span>
      </div>
      <div className="relative z-10 m-auto flex max-w-xl flex-col items-center">
        <p className="mb-6 text-sm font-semibold text-muted-foreground">for my favourite headache ♡</p>
        <div className="mb-5 heart-pulse text-4xl" aria-hidden="true">♥</div>
        <h1 className="font-hand text-6xl leading-[0.96] text-foreground sm:text-8xl">
          Happy Birthday,<br /><span className="text-primary">Doraemon</span>🎂
        </h1>
        <p className="mt-7 text-base text-muted-foreground sm:text-lg">someone very special was born today...</p>
        <Button variant="scroll" size="scroll" onClick={begin} className="mt-14" aria-label="Start the birthday story">
          <span>scroll down</span><ChevronDown className="scroll-arrow" />
        </Button>
      </div>
    </section>
  );
}
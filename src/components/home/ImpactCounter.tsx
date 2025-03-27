
import { useState, useEffect, useRef } from "react";

type CounterProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

function Counter({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observedRef = useRef(false);

  useEffect(() => {
    if (!countRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observedRef.current) {
            observedRef.current = true;
            const startTime = Date.now();
            const timer = setInterval(() => {
              const timePassed = Date.now() - startTime;
              const progress = Math.min(timePassed / duration, 1);
              const currentCount = progress * end;
              setCount(currentCount);

              if (progress === 1) {
                clearInterval(timer);
              }
            }, 16);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef} className="font-medium tabular-nums">
      {prefix}
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {suffix}
    </span>
  );
}

export function ImpactCounter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = containerRef.current?.querySelectorAll(".fade-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: 4500,
      label: "Wildlife protected",
      suffix: "+",
    },
    {
      value: 78,
      label: "Conservation projects",
    },
    {
      value: 12500,
      label: "Tonnes CO₂ reduced",
    },
    {
      value: 95,
      label: "Supply chain transparency",
      suffix: "%",
    },
  ];

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight fade-item opacity-0">
            Our Impact
          </h2>
          <p className="text-muted-foreground fade-item opacity-0">
            Every purchase directly contributes to wildlife conservation and sustainable initiatives
            around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-item opacity-0">
              <div className="text-3xl md:text-4xl lg:text-5xl font-serif mb-2">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

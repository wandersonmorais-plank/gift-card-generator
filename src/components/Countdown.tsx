"use client";

import { useEffect, useRef, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, new Date("2026-06-06T00:00:00").getTime() - Date.now());
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);
  const secRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => {
      setTime(getTimeLeft());
      if (secRef.current) {
        secRef.current.classList.remove("tick");
        void secRef.current.offsetWidth; // reflow to restart animation
        secRef.current.classList.add("tick");
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return <div className="h-5" />;

  const expired = !time.days && !time.hours && !time.minutes && !time.seconds;
  if (expired) return <span className="text-xs tracking-widest text-amber-400/80">chegou o momento ✨</span>;

  return (
    <div className="flex items-center gap-3 tabular-nums">
      {[
        { v: time.days,    l: "d" },
        { v: time.hours,   l: "h" },
        { v: time.minutes, l: "m" },
        { v: time.seconds, l: "s", ref: secRef },
      ].map(({ v, l, ref }) => (
        <div key={l} className="flex items-baseline gap-0.5">
          <span
            ref={ref as React.RefObject<HTMLSpanElement>}
            className="text-sm font-semibold text-white"
          >
            {pad(v)}
          </span>
          <span className="text-[10px] text-white/30 font-normal">{l}</span>
        </div>
      ))}
    </div>
  );
}

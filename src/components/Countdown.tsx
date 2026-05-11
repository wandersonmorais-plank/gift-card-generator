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

const units = [
  { key: "days",    l: "d" },
  { key: "hours",   l: "h" },
  { key: "minutes", l: "m" },
  { key: "seconds", l: "s" },
] as const;

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);
  const secRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => {
      setTime(getTimeLeft());
      if (secRef.current) {
        secRef.current.classList.remove("tick-anim");
        void secRef.current.offsetWidth;
        secRef.current.classList.add("tick-anim");
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  const expired = !time.days && !time.hours && !time.minutes && !time.seconds;
  if (expired) {
    return (
      <span className="text-[10px] tracking-widest uppercase" style={{ color: "#d4af37" }}>
        chegou o momento ✨
      </span>
    );
  }

  return (
    <div className="flex items-baseline gap-2.5 tabular-nums">
      {units.map(({ key, l }) => (
        <div key={key} className="flex items-baseline gap-[2px]">
          <span
            ref={key === "seconds" ? secRef : undefined}
            className="text-[11px] font-semibold text-white/90"
          >
            {pad(time[key])}
          </span>
          <span className="text-[9px] font-normal" style={{ color: "rgba(212,175,55,0.45)" }}>
            {l}
          </span>
        </div>
      ))}
    </div>
  );
}

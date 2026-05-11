"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-06-06T00:00:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className="text-center">
        <p
          className="text-2xl font-serif"
          style={{ color: "#d4af37", fontFamily: "var(--font-playfair)" }}
        >
          O momento chegou! ✨
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="relative flex items-center justify-center rounded-xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            style={{
              background: "rgba(212, 175, 55, 0.08)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "#d4af37",
              }}
            >
              {pad(value)}
            </span>
          </div>
          <span
            className="mt-2 text-xs sm:text-sm uppercase tracking-widest"
            style={{ color: "rgba(212, 175, 55, 0.6)" }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

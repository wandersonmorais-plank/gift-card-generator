import Countdown from "@/components/Countdown";

export default function GiftCardPage() {
  return (
    <div
      className="h-full min-h-screen flex items-center justify-center"
      style={{ background: "#080808" }}
    >
      {/* Credit-card proportions: 85.6 × 53.98 mm → ~1.586 ratio */}
      <article
        className="fade-in relative flex flex-col justify-between rounded-2xl overflow-hidden"
        style={{
          width: "min(88vw, 420px)",
          aspectRatio: "85.6 / 54",
          background: "linear-gradient(135deg, #111 0%, #1a1410 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 0 0 1px rgba(212,175,55,0.08), 0 32px 64px rgba(0,0,0,0.7)",
          padding: "6.5% 7%",
        }}
      >
        {/* Subtle glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.06) 0%, transparent 60%)",
          }}
        />

        {/* TOP ROW */}
        <div className="fade-in delay-1 relative flex items-start justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-white/30">
              presente especial
            </span>
            <span className="text-lg leading-none">🎁</span>
          </div>
          <div className="flex items-center gap-1 text-white/40">
            <span className="text-xs tracking-wide">✈️</span>
            <span
              className="text-[11px] font-semibold tracking-widest uppercase"
              style={{ color: "rgba(212,175,55,0.7)" }}
            >
              Madrid
            </span>
          </div>
        </div>

        {/* MIDDLE — date + message */}
        <div className="fade-in delay-2 relative flex flex-col gap-1">
          <div
            className="text-3xl font-bold tracking-tight leading-none"
            style={{ color: "#d4af37", letterSpacing: "-0.02em" }}
          >
            06.06
          </div>
          <p className="text-[11px] font-light text-white/50 leading-snug max-w-[60%]">
            algo incrível te espera.<br />
            fica ansiosa — vai valer cada segundo 🥂
          </p>
        </div>

        {/* BOTTOM ROW — countdown + chip */}
        <div className="fade-in delay-3 relative flex items-end justify-between">
          <Countdown />
          <span
            className="text-[10px] font-medium tracking-[0.12em] uppercase"
            style={{ color: "rgba(212,175,55,0.35)" }}
          >
            2026
          </span>
        </div>
      </article>
    </div>
  );
}

import Countdown from "@/components/Countdown";

export default function GiftCardPage() {
  return (
    <div
      className="h-full min-h-screen flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #150f08 0%, #080604 100%)",
      }}
    >
      {/* Animated conic-gradient border wrapper */}
      <div
        className="card-border card-in rounded-2xl"
        style={{ width: "min(90vw, 440px)" }}
      >
        {/* Card — 85.6:54 credit card ratio */}
        <article
          className="noise relative flex flex-col rounded-2xl overflow-hidden"
          style={{
            aspectRatio: "85.6 / 54",
            background:
              "linear-gradient(145deg, #161208 0%, #1c1508 55%, #120f07 100%)",
            padding: "4% 5%",
          }}
        >
          {/* Ambient glow top-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 85% 10%, rgba(212,175,55,0.09) 0%, transparent 55%)",
            }}
          />
          {/* Ambient glow bottom-left */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 10% 90%, rgba(180,120,20,0.06) 0%, transparent 50%)",
            }}
          />

          {/* ── TOP ROW ───────────────────────────────── */}
          <div className="fu d1 relative flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-base leading-none">🎁</span>
              <span
                className="text-[9px] font-medium tracking-[0.22em] uppercase"
                style={{ color: "rgba(212,175,55,0.4)" }}
              >
                presente especial
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px]">✈️</span>
              <span
                className="text-[9px] font-bold tracking-[0.2em] uppercase"
                style={{ color: "rgba(212,175,55,0.65)" }}
              >
                Madrid
              </span>
            </div>
          </div>

          {/* ── MIDDLE — fills remaining space ────────── */}
          <div className="fu d2 relative flex flex-1 flex-col justify-center gap-1.5 mt-2">
            {/* Date */}
            <div className="flex items-baseline gap-2">
              <span
                className="shimmer font-bold leading-none"
                style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}
              >
                06 de junho
              </span>
              <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                — Madrid
              </span>
            </div>

            {/* Message */}
            <p
              className="text-[10.5px] font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", maxWidth: "78%" }}
            >
              fica ansiosa — tem uma surpresa muito especial esperando por
              você 🥂
            </p>
          </div>

          {/* ── BOTTOM ROW ────────────────────────────── */}
          <div className="fu d3 relative flex items-end justify-between mt-2">
            {/* Address (like cardholder name) */}
            <div className="flex flex-col gap-0.5">
              <span
                className="text-[8px] font-medium tracking-[0.18em] uppercase"
                style={{ color: "rgba(212,175,55,0.3)" }}
              >
                endereço
              </span>
              <span
                className="text-[10px] font-semibold tracking-wide"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Gran Vía, 32
              </span>
            </div>

            {/* Countdown (like expiry) */}
            <div className="flex flex-col items-end gap-0.5">
              <span
                className="text-[8px] font-medium tracking-[0.18em] uppercase"
                style={{ color: "rgba(212,175,55,0.3)" }}
              >
                falta
              </span>
              <Countdown />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

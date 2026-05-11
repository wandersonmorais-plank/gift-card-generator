import Countdown from "@/components/Countdown";

export default function GiftCardPage() {
  return (
    <div
      className="h-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "#07060a" }}
    >
      {/* Page background glows */}
      <div
        aria-hidden
        className="spotlight pointer-events-none absolute"
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: 600,
          maxHeight: 600,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(140, 100, 10, 0.18) 0%, rgba(80, 55, 5, 0.08) 50%, transparent 75%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      {/* Animated conic-gradient border wrapper */}
      <div
        className="card-border card-in rounded-[18px]"
        style={{ width: "min(90vw, 460px)" }}
      >
        {/* Card — 85.6:54 credit card ratio */}
        <article
          className="noise relative flex flex-col rounded-[17px] overflow-hidden"
          style={{
            aspectRatio: "85.6 / 54",
            background:
              "linear-gradient(160deg, #18130a 0%, #221a0a 40%, #150f08 70%, #0f0b06 100%)",
            padding: "4.5% 5.5%",
          }}
        >
          {/* Inner glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 90% 0%, rgba(212,175,55,0.13) 0%, transparent 50%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 5% 100%, rgba(180,130,20,0.07) 0%, transparent 45%)",
            }}
          />

          {/* Large decorative emoji — background element */}
          <div
            aria-hidden
            className="pointer-events-none select-none absolute"
            style={{
              right: "2%",
              top: "8%",
              fontSize: "clamp(80px, 22vw, 130px)",
              lineHeight: 1,
              opacity: 0.06,
              filter: "blur(3px)",
              userSelect: "none",
            }}
          >
            🎁
          </div>

          {/* ── TOP ROW ───────────────────────────────── */}
          <div className="fu d1 relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[13px] leading-none">🎁</span>
              <span
                className="text-[8.5px] font-semibold tracking-[0.25em] uppercase"
                style={{ color: "rgba(212,175,55,0.5)" }}
              >
                presente especial
              </span>
            </div>
            <div className="flex items-center gap-[5px]">
              <span className="text-[9px]">✈️</span>
              <span
                className="text-[8.5px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "rgba(212,175,55,0.75)" }}
              >
                Madrid
              </span>
            </div>
          </div>

          {/* ── MIDDLE ────────────────────────────────── */}
          <div className="relative z-10 flex flex-1 flex-col justify-center">

            {/* Date */}
            <div className="fu d2 flex items-baseline gap-2 mb-2">
              <span
                className="shimmer font-bold leading-none tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 5.5vw, 2.2rem)" }}
              >
                06 de junho
              </span>
              <span
                className="text-[9px] font-medium"
                style={{ color: "rgba(212,175,55,0.35)" }}
              >
                ✦
              </span>
            </div>

            {/* Message */}
            <p
              className="fu d3 text-[11px] font-light leading-[1.7]"
              style={{ color: "rgba(255,240,210,0.62)", maxWidth: "72%" }}
            >
              você tem uma surpresa muito especial esperando — e eu mal posso
              esperar pra ver sua reação 🥂
            </p>
          </div>

          {/* ── DIVIDER ───────────────────────────────── */}
          <div
            className="fu d3 relative z-10 my-2"
            style={{
              height: 1,
              background:
                "linear-gradient(to right, rgba(212,175,55,0.25), rgba(212,175,55,0.08) 60%, transparent)",
            }}
          />

          {/* ── BOTTOM ROW ────────────────────────────── */}
          <div className="fu d4 relative z-10 flex items-end justify-between">
            {/* Address */}
            <div className="flex flex-col gap-[3px]">
              <span
                className="text-[7.5px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "rgba(212,175,55,0.35)" }}
              >
                local
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[9px]">📍</span>
                <span
                  className="text-[10px] font-medium tracking-wide"
                  style={{ color: "rgba(255,240,210,0.7)" }}
                >
                  Gran Vía, 32 · Madrid
                </span>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex flex-col items-end gap-[3px]">
              <span
                className="text-[7.5px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "rgba(212,175,55,0.35)" }}
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

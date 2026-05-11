import Countdown from "@/components/Countdown";

export default function GiftCardPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d0a0a 0%, #1a0e1a 40%, #0d0a12 100%)",
      }}
    >
      {/* Decorative background orbs */}
      <div
        aria-hidden
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 69, 100, 0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-2xl rounded-3xl p-8 sm:p-12 md:p-16 animate-fade-in-up"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(212, 175, 55, 0.2)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 0 0 1px rgba(212,175,55,0.05), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Top ornament */}
        <div className="flex items-center justify-center mb-8 animate-float">
          <span className="text-5xl sm:text-6xl" role="img" aria-label="presente">
            🎁
          </span>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 mb-8 opacity-50">
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to right, transparent, #d4af37)" }}
          />
          <span style={{ color: "#d4af37" }}>✦</span>
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to left, transparent, #d4af37)" }}
          />
        </div>

        {/* Main heading */}
        <h1
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up delay-100"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="animate-shimmer">Um Presente Muito Especial</span>
        </h1>

        {/* Gift message */}
        <div className="space-y-5 text-center animate-fade-in-up delay-200">
          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{
              color: "rgba(255, 245, 220, 0.9)",
              fontFamily: "var(--font-lato)",
              fontWeight: 300,
            }}
          >
            Olha, você tem um presente esperando por você — e pode ter certeza
            que é algo muito especial mesmo.
          </p>

          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{
              color: "rgba(255, 245, 220, 0.9)",
              fontFamily: "var(--font-lato)",
              fontWeight: 300,
            }}
          >
            No dia{" "}
            <span
              className="font-semibold"
              style={{ color: "#d4af37", fontFamily: "var(--font-playfair)" }}
            >
              06 de junho
            </span>
            , em plena{" "}
            <span
              className="font-semibold"
              style={{ color: "#d4af37", fontFamily: "var(--font-playfair)" }}
            >
              Madrid
            </span>
            , sua surpresa vai ser revelada. Guarda esse momento com carinho —
            porque ele foi pensado com muito amor.
          </p>

          <p
            className="text-base sm:text-lg italic"
            style={{
              color: "rgba(212, 175, 55, 0.7)",
              fontFamily: "var(--font-playfair)",
            }}
          >
            Espero que você esteja tão ansiosa quanto eu estou animado. 🥂
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 my-10 opacity-40">
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to right, transparent, #d4af37)" }}
          />
          <span style={{ color: "#d4af37" }}>❧</span>
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to left, transparent, #d4af37)" }}
          />
        </div>

        {/* Countdown section */}
        <div className="animate-fade-in-up delay-400">
          <p
            className="text-center text-sm uppercase tracking-[0.3em] mb-6"
            style={{
              color: "rgba(212, 175, 55, 0.6)",
              fontFamily: "var(--font-lato)",
            }}
          >
            Faltam apenas
          </p>
          <Countdown />
          <p
            className="text-center text-sm mt-6 uppercase tracking-[0.2em]"
            style={{
              color: "rgba(212, 175, 55, 0.5)",
              fontFamily: "var(--font-lato)",
            }}
          >
            para o grande dia ✨
          </p>
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center gap-3 mt-10 opacity-30">
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to right, transparent, #d4af37)" }}
          />
          <span style={{ color: "#d4af37" }}>♦</span>
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to left, transparent, #d4af37)" }}
          />
        </div>
      </div>
    </main>
  );
}

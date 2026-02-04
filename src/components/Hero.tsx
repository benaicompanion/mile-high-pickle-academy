export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pickle-dark via-pickle-green to-pickle-light">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute top-40 right-20 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border-2 border-white rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-16 h-16 border-2 border-white rounded-full" />
        {/* Court lines pattern */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-16">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-pickle-lime rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Now accepting waitlist signups · Denver Metro Area
            </span>
          </div>
        </div>

        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
          MILE HIGH
          <br />
          <span className="text-pickle-lime">PICKLE</span>
          <br />
          ACADEMY
        </h1>

        <p className="animate-fade-in-up animate-delay-200 mt-8 text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Denver&apos;s premier youth pickleball program for ages 5–18.
          <br className="hidden sm:block" />
          Build skills. Build character. Build champions.
        </p>

        <div className="animate-fade-in-up animate-delay-400 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="bg-pickle-gold text-pickle-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg"
          >
            Join the Waitlist →
          </a>
          <a
            href="#programs"
            className="text-white/90 px-8 py-4 rounded-full text-lg font-medium border border-white/30 hover:bg-white/10 transition-all"
          >
            View Programs
          </a>
        </div>

        <div className="animate-fade-in-up animate-delay-600 mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">5-18</div>
            <div className="text-white/60 text-sm mt-1">Ages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">4</div>
            <div className="text-white/60 text-sm mt-1">Skill Tiers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">Pro</div>
            <div className="text-white/60 text-sm mt-1">Coaching</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

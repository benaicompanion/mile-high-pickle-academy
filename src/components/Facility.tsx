const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Dedicated Indoor Courts",
    description: "Climate-controlled facility with professional-grade courts designed exclusively for pickleball.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Video Analysis Room",
    description: "Multi-angle court cameras with instant replay for technique breakdown and strategy review.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fitness & Conditioning",
    description: "Dedicated training area with age-appropriate strength, agility, and conditioning equipment.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Parent Viewing Lounge",
    description: "Comfortable viewing area with Wi-Fi so parents can watch sessions, work, or relax.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safe & Supervised",
    description: "Background-checked coaches, secure check-in/out procedures, and first-aid trained staff.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Pro Shop & Equipment",
    description: "On-site pro shop with paddles, gear, and expert advice. Demo paddles available for all students.",
  },
];

export default function Facility() {
  return (
    <section id="facility" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pickle-lime font-semibold text-sm uppercase tracking-wider">
            The Facility
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-pickle-dark mt-3">
            Built for the Next Generation
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We&apos;re building a world-class facility in the Denver metro area,
            designed from the ground up for youth pickleball development.
          </p>
        </div>

        {/* Facility mockup */}
        <div className="relative bg-gradient-to-br from-pickle-green to-pickle-dark rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {/* Court lines */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-white" />
            <div className="absolute top-[20%] bottom-[20%] left-1/2 w-px bg-white" />
            <div className="absolute top-[20%] left-[10%] right-[10%] bottom-[20%] border border-white" />
          </div>
          <div className="relative z-10 text-center text-white">
            <div className="text-6xl mb-4">🏟️</div>
            <h3 className="text-2xl sm:text-3xl font-bold">Coming Soon to Denver Metro</h3>
            <p className="text-white/70 mt-3 max-w-lg mx-auto">
              Location announcement coming soon. Join the waitlist to be the first to know when we reveal our facility and opening date.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-white/60 text-sm">Indoor Courts</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold">10K</div>
                <div className="text-white/60 text-sm">Sq Ft</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold">Pro</div>
                <div className="text-white/60 text-sm">Grade Surface</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold">Full</div>
                <div className="text-white/60 text-sm">A/C & Heat</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 rounded-xl hover:bg-pickle-cream transition-colors"
            >
              <div className="w-12 h-12 bg-pickle-green/10 rounded-xl flex items-center justify-center text-pickle-green shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-pickle-dark">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

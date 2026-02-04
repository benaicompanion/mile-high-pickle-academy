const programs = [
  {
    name: "Little Dinkers",
    ages: "5–7",
    emoji: "🌟",
    color: "from-green-400 to-emerald-500",
    description:
      "Introduction to pickleball through fun, game-based learning. Focus on coordination, paddle skills, and falling in love with the sport.",
    features: [
      "2x per week, 45-min sessions",
      "Max 8 kids per coach",
      "Fun games & relay races",
      "Basic paddle & ball skills",
      "End-of-session mini tournaments",
    ],
    price: "$149/mo",
  },
  {
    name: "Rally Builders",
    ages: "8–11",
    emoji: "🔥",
    color: "from-emerald-500 to-teal-600",
    description:
      "Developing consistent rallies, court positioning, and competitive mindset. Players begin understanding strategy and doubles play.",
    features: [
      "3x per week, 60-min sessions",
      "Max 6 kids per coach",
      "Stroke development & drills",
      "Introduction to scoring & rules",
      "Monthly DUPR-tracked matches",
    ],
    price: "$249/mo",
    popular: true,
  },
  {
    name: "Court Crushers",
    ages: "12–15",
    emoji: "⚡",
    color: "from-teal-600 to-cyan-700",
    description:
      "Advanced technique, match strategy, and tournament preparation. Players develop a competitive game and learn to manage pressure.",
    features: [
      "4x per week, 75-min sessions",
      "Max 4 players per coach",
      "Video analysis & feedback",
      "Tournament prep & mental game",
      "DUPR rating tracking",
    ],
    price: "$399/mo",
  },
  {
    name: "Elite Pathway",
    ages: "15–18",
    emoji: "🏆",
    color: "from-cyan-700 to-blue-800",
    description:
      "For serious competitors targeting national tournaments and potential collegiate play. Intensive training with professional-level coaching.",
    features: [
      "5x per week, 90-min sessions",
      "Max 3 players per coach",
      "1-on-1 strategy sessions",
      "Strength & conditioning",
      "Tournament travel support",
    ],
    price: "$599/mo",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pickle-lime font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-pickle-dark mt-3">
            Four Tiers. Every Level.
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            From first-time players to tournament competitors, we have a
            structured pathway for every young athlete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.name}
              className={`relative rounded-2xl overflow-hidden border-2 ${
                program.popular
                  ? "border-pickle-gold shadow-xl scale-[1.02]"
                  : "border-gray-100"
              } bg-white hover:shadow-lg transition-all duration-300 flex flex-col`}
            >
              {program.popular && (
                <div className="absolute top-0 right-0 bg-pickle-gold text-pickle-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div
                className={`bg-gradient-to-br ${program.color} p-6 text-white`}
              >
                <span className="text-3xl">{program.emoji}</span>
                <h3 className="text-xl font-bold mt-2">{program.name}</h3>
                <p className="text-white/80 text-sm">Ages {program.ages}</p>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>

                <ul className="mt-4 space-y-2 flex-1">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-pickle-green mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-black text-pickle-dark">
                        {program.price}
                      </span>
                    </div>
                    <a
                      href="#waitlist"
                      className="text-pickle-green font-semibold text-sm hover:text-pickle-dark transition-colors"
                    >
                      Join Waitlist →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          * Pricing is projected. Final pricing will be confirmed at launch.
          Waitlist members get early-bird discounts.
        </p>
      </div>
    </section>
  );
}

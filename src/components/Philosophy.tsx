const pillars = [
  {
    icon: "🎯",
    title: "Skill-First Development",
    description:
      "Proper technique from day one. We build fundamentals that scale — no shortcuts, no bad habits. Every drill has a purpose.",
  },
  {
    icon: "🧠",
    title: "Mental Toughness",
    description:
      "Pickleball is 80% mental at competitive levels. We teach focus, composure, and the ability to perform under pressure.",
  },
  {
    icon: "🤝",
    title: "Character Building",
    description:
      "Sportsmanship, respect, and integrity are non-negotiable. We develop great people who happen to be great players.",
  },
  {
    icon: "📈",
    title: "Data-Driven Progress",
    description:
      "DUPR-tracked ratings, video analysis, and measurable milestones. Parents and players always know where they stand.",
  },
  {
    icon: "🏆",
    title: "Competition Pathways",
    description:
      "From local leagues to national tournaments, we create clear pathways for players who want to compete at every level.",
  },
  {
    icon: "❤️",
    title: "Love for the Game",
    description:
      "Above all, we want kids to love pickleball. If they're having fun, the skill development follows naturally.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-pickle-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pickle-lime font-semibold text-sm uppercase tracking-wider">
            Our Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-pickle-dark mt-3">
            More Than a Sport
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We&apos;re not just teaching pickleball. We&apos;re building confident,
            resilient young athletes who carry these lessons for life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-4xl">{pillar.icon}</span>
              <h3 className="text-xl font-bold text-pickle-dark mt-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Stats() {
  const stats = [
    {
      number: "20M+",
      label: "Americans play pickleball",
      detail: "Fastest growing sport in the US for 3 years running",
    },
    {
      number: "45%",
      label: "Year-over-year growth",
      detail: "Player participation surged in 2024",
    },
    {
      number: "#1",
      label: "Youth sport opportunity",
      detail: "Junior programs are the next frontier",
    },
    {
      number: "300%",
      label: "Junior participation growth",
      detail: "Youth pickleball is exploding nationwide",
    },
  ];

  return (
    <section className="py-16 bg-pickle-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-pickle-green">
                {stat.number}
              </div>
              <div className="font-semibold text-pickle-dark mt-1 text-sm sm:text-base">
                {stat.label}
              </div>
              <div className="text-gray-500 text-xs mt-1">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

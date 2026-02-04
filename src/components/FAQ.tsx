"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does my child need any experience?",
    a: "Not at all! Our Little Dinkers program (ages 5-7) and Rally Builders program (ages 8-11) are designed for complete beginners. We provide all equipment for first-timers to try before they buy.",
  },
  {
    q: "What is DUPR and why do you use it?",
    a: "DUPR (Dynamic Universal Pickleball Rating) is the gold standard rating system in pickleball. We use it to objectively track every player's progress, ensure fair matchups, and give parents clear data on their child's development. Think of it like a handicap in golf.",
  },
  {
    q: "When will the academy open?",
    a: "We're targeting a 2025 launch in the Denver metro area. Exact location and dates will be announced to our waitlist first. Waitlist members will also get early-bird pricing and priority enrollment.",
  },
  {
    q: "What's the coach-to-student ratio?",
    a: "It varies by tier: Little Dinkers (1:8), Rally Builders (1:6), Court Crushers (1:4), Elite Pathway (1:3). We keep ratios low to ensure personalized attention and rapid improvement.",
  },
  {
    q: "Can my child switch between tiers?",
    a: "Absolutely. We assess players regularly and recommend tier changes when they're ready. Advancement is based on skill level and maturity, not just age. Some kids move up quickly!",
  },
  {
    q: "Do you offer sibling discounts?",
    a: "Yes! We offer a 15% sibling discount for additional children enrolled in any program. We're a family-first academy.",
  },
  {
    q: "Is there a competitive travel team?",
    a: "For our Court Crushers and Elite Pathway tiers, we organize tournament travel to regional and national events. This is optional and discussed individually with families.",
  },
  {
    q: "What if my child doesn't like it?",
    a: "We offer a satisfaction guarantee for the first month. If your child isn't loving it, we'll refund the remaining sessions. But honestly? Kids almost always love it — pickleball is incredibly fun.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-pickle-dark group-hover:text-pickle-green transition-colors pr-4">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed pr-8">{a}</div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-pickle-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-pickle-lime font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-pickle-dark mt-3">
            Questions? We&apos;ve Got Answers.
          </h2>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

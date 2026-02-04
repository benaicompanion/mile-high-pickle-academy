"use client";

import { useState } from "react";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    childAge: "",
    experience: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Still show success for demo
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-24 bg-gradient-to-br from-pickle-dark via-pickle-green to-pickle-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              You&apos;re on the List!
            </h2>
            <p className="text-white/80 mt-4 text-lg">
              We&apos;ll be in touch with exclusive updates, early-bird pricing, and
              the facility reveal. Welcome to the Mile High Pickle family.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-br from-pickle-dark via-pickle-green to-pickle-light">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-pickle-lime font-semibold text-sm uppercase tracking-wider">
            Join the Movement
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            Get on the Waitlist
          </h2>
          <p className="text-white/70 mt-4 text-lg">
            Be first in line for enrollment, early-bird pricing, and facility
            updates. No commitment — just priority access.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 space-y-5"
        >
          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">
              Parent / Guardian Name
            </label>
            <input
              type="text"
              required
              value={formData.parentName}
              onChange={(e) =>
                setFormData({ ...formData, parentName: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pickle-lime"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pickle-lime"
              placeholder="you@email.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">
                Child&apos;s Age
              </label>
              <select
                required
                value={formData.childAge}
                onChange={(e) =>
                  setFormData({ ...formData, childAge: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pickle-lime appearance-none"
              >
                <option value="" className="text-gray-800">Select age</option>
                <option value="5-7" className="text-gray-800">5-7</option>
                <option value="8-11" className="text-gray-800">8-11</option>
                <option value="12-15" className="text-gray-800">12-15</option>
                <option value="15-18" className="text-gray-800">15-18</option>
              </select>
            </div>

            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">
                Experience Level
              </label>
              <select
                required
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pickle-lime appearance-none"
              >
                <option value="" className="text-gray-800">Select level</option>
                <option value="never" className="text-gray-800">Never played</option>
                <option value="beginner" className="text-gray-800">Beginner</option>
                <option value="intermediate" className="text-gray-800">Intermediate</option>
                <option value="advanced" className="text-gray-800">Advanced</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pickle-gold text-pickle-dark py-4 rounded-xl text-lg font-bold hover:bg-yellow-400 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
          >
            {loading ? "Submitting..." : "Join the Waitlist 🏓"}
          </button>

          <p className="text-white/50 text-xs text-center">
            No spam, ever. We&apos;ll only email you about the academy.
          </p>
        </form>
      </div>
    </section>
  );
}

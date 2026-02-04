export default function Footer() {
  return (
    <footer className="bg-pickle-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pickle-green rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🏓</span>
            </div>
            <span className="font-bold text-white">Mile High Pickle Academy</span>
          </div>

          <div className="flex items-center gap-6 text-white/50 text-sm">
            <a href="#programs" className="hover:text-white transition-colors">Programs</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#facility" className="hover:text-white transition-colors">Facility</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="text-white/40 text-sm">
            Denver Metro Area · Coming 2025
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          © {new Date().getFullYear()} Mile High Pickle Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

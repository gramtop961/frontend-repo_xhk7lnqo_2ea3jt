import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-slate-600 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Vibe Sandbox. Built with React, Tailwind, and FastAPI.
        </p>
        <nav className="flex items-center gap-5">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#get-started" className="hover:text-slate-900">Get Started</a>
          <a href="https://lucide.dev" target="_blank" rel="noreferrer" className="hover:text-slate-900">Icons</a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;

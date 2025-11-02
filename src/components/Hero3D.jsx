import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6YVwBEm90LkAMPxS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="pointer-events-none max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
              <Rocket className="h-4 w-4 text-indigo-600" />
              <span>Vibe-ready React + FastAPI sandbox</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Build polished apps fast.
              <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"> Right in your browser.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Design the interface, wire up APIs, and preview instantly in a live environment. No setup. No friction.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;

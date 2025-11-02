import React from 'react';
import { Rocket } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="get-started" className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 px-8 py-14 text-white shadow-lg">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
          <Rocket className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold sm:text-3xl">Start building in seconds</h3>
        <p className="mt-2 text-white/90">
          Use this live sandbox to scaffold features, connect APIs, and iterate quickly. No local setup required.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Explore the Stack
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-700/40 px-5 py-3 text-white ring-1 ring-inset ring-white/20 transition hover:bg-indigo-700/50"
          >
            View Examples
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import React from 'react';
import { Shield, Zap, Star } from 'lucide-react';

const features = [
  {
    title: 'Instant Preview',
    description:
      'See changes as you make them. Frontend and backend restart automatically when you update code.',
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Type-Safe APIs',
    description:
      'Define your data models once and get validated endpoints with FastAPI + Pydantic out of the box.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Beautiful UI Toolkit',
    description:
      'Tailwind, shadcn patterns, and Lucide icons are prewired so your app looks great by default.',
    icon: Star,
    color: 'from-indigo-500 to-violet-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to move fast</h2>
          <p className="mt-3 text-slate-600">A curated stack designed to help you prototype and ship in minutes.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow`}> 
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

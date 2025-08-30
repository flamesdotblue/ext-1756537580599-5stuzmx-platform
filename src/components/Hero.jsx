import Spline from '@splinetool/react-spline';
import { Sparkles, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-neutral-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-white/90">AI-powered HR & Operations</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Orchestrate your workforce with intelligent task distribution
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80">
            A manager-first platform for planning, scheduling, and monitoring work across teams. Let AI assign tasks, balance workloads, and keep operations on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#dashboard" className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-white/90 transition">
              <Bot className="h-5 w-5" />
              Try the Manager View
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

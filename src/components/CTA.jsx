export default function CTA() {
  return (
    <section className="relative py-16 md:py-24 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to streamline your operations?</h3>
            <p className="mt-2 text-white/70">Start with the manager view and invite your team. No credit card required.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="rounded-lg bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-white/90">Create free workspace</a>
              <a href="#features" className="rounded-lg border border-white/20 px-5 py-3 font-medium hover:bg-white/10">See features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

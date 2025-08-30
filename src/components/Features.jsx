import { Users, Calendar, Bot, BarChart3, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Task Routing',
    desc: 'Distribute tasks based on skills, availability, and priorities. Reduce bottlenecks with automatic rebalancing.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Plan shifts and project timelines with conflict detection and instant what-if scenarios.',
  },
  {
    icon: Users,
    title: 'Team Capacity',
    desc: 'See workload at a glance. Prevent burnout by capping allocations and tracking SLA risks.',
  },
  {
    icon: BarChart3,
    title: 'Operational Insights',
    desc: 'KPIs for throughput, cycle time, and utilization. Spot trends and optimize processes.',
  },
  {
    icon: CheckCircle2,
    title: 'Compliance-ready',
    desc: 'Audit trails and approvals built in. Role-based access keeps sensitive data secure.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Everything managers need to keep work flowing</h2>
          <p className="mt-3 text-white/70">Designed for operations leaders who want clarity, speed, and control without the busywork.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2.5">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

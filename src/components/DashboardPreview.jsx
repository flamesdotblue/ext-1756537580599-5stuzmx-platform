import { LayoutDashboard, Users, Calendar, CheckCircle2, Bell, Settings, Clock } from 'lucide-react';

function Stat({ label, value, trend }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm text-white/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {trend && <div className="mt-1 text-xs text-emerald-400">{trend}</div>}
    </div>
  );
}

function TaskRow({ title, assignee, eta, status }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-neutral-900/60 p-3">
      <div className="flex items-center gap-3">
        <CheckCircle2 className={`h-5 w-5 ${status === 'Blocked' ? 'text-rose-400' : status === 'In Progress' ? 'text-amber-300' : 'text-emerald-400'}`} />
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-white/60">{assignee}</div>
        </div>
      </div>
      <div className="flex items-center gap-6 text-xs">
        <div className="flex items-center gap-1 text-white/70">
          <Clock className="h-4 w-4" /> {eta}
        </div>
        <span className={`rounded-full px-2 py-0.5 ${status === 'Blocked' ? 'bg-rose-500/20 text-rose-300' : status === 'In Progress' ? 'bg-amber-500/20 text-amber-200' : 'bg-emerald-500/20 text-emerald-200'}`}>{status}</span>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-16 md:py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center gap-2 text-white/80">
          <LayoutDashboard className="h-5 w-5" />
          <h2 className="text-2xl md:text-3xl font-semibold">Manager View</h2>
        </div>
        <p className="mt-2 max-w-2xl text-white/70">Get a live snapshot of capacity, assignments, and schedules. Approve AI suggestions in one click or fine-tune manually.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm text-white/80">Team Workload</span>
                </div>
                <div className="text-xs text-white/60">Next 7 days</div>
              </div>
              <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                <Stat label="Utilization" value="78%" trend="+3% vs last week" />
                <Stat label="On-time tasks" value="92%" trend="+5%" />
                <Stat label="Backlog" value="34" trend="-11%" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm text-white/80">Today\'s Schedule</span>
                </div>
                <div className="text-xs text-white/60">Conflicts auto-detected</div>
              </div>
              <div className="p-4 space-y-3">
                <TaskRow title="Prep Q4 onboarding kits" assignee="Assigned to: Alex" eta="Due 2:00 PM" status="In Progress" />
                <TaskRow title="Line A maintenance check" assignee="Assigned to: Priya" eta="Due 3:30 PM" status="On Track" />
                <TaskRow title="Vendor contract review" assignee="Assigned to: Mei" eta="Overdue" status="Blocked" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="text-sm text-white/80">AI Suggestions</span>
                </div>
                <button className="text-xs rounded-md border border-white/20 px-2 py-1 hover:bg-white/10">Refresh</button>
              </div>
              <div className="p-4 space-y-3 text-sm">
                <div className="rounded-lg bg-emerald-500/10 p-3">
                  Reassign "Contract review" from Mei to Jordan to balance workload (+18% availability).
                </div>
                <div className="rounded-lg bg-amber-500/10 p-3">
                  Shift "Maintenance check" by 30 minutes to avoid resource conflict in Line A.
                </div>
                <div className="rounded-lg bg-blue-500/10 p-3">
                  Automate daily onboarding kit checklist at 9:00 AM for Ops Assistants.
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 rounded-lg bg-white text-neutral-900 px-3 py-2 text-sm font-medium hover:bg-white/90">Approve All</button>
                  <button className="flex-1 rounded-lg border border-white/20 px-3 py-2 text-sm hover:bg-white/10">Review</button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="text-sm text-white/80">Policies</span>
                </div>
              </div>
              <div className="p-4 space-y-3 text-sm text-white/80">
                <div className="flex items-center justify-between">
                  <span>Max daily hours</span>
                  <span className="rounded bg-white/10 px-2 py-0.5">8h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Weekend approvals</span>
                  <span className="rounded bg-white/10 px-2 py-0.5">Manager</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SLA threshold</span>
                  <span className="rounded bg-white/10 px-2 py-0.5">48h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

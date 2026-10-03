import { Building2, Check, ChevronDown, LayoutGrid, Pencil, Plus, Search, Settings, SlidersHorizontal, Trash2, Users } from 'lucide-react'
import { Chrome } from './MockupStage.jsx'

const C = {
  ink: '#12161f',
  mute: '#667085',
  dim: '#98a2b3',
  line: '#e7eaf1',
  soft: '#f6f8fb',
  cobalt: '#2f5bff',
  cobaltSoft: '#eaf0ff',
  green: '#12a36a',
  amber: '#d99a00',
}

const dept = {
  Engineering: '#2f5bff',
  Design: '#c13fd8',
  'Human Resources': '#e0651f',
  Finance: '#0e9f8e',
  Operations: '#7a5af8',
}

const people = [
  { n: 'Ayesha Memon', r: 'Frontend Developer', d: 'Engineering', s: 'Active', g: ['#6f8cff', '#2f5bff'] },
  { n: 'Bilal Khoso', r: 'Backend Developer', d: 'Engineering', s: 'Active', g: ['#34d1a8', '#0e9f8e'], sel: true },
  { n: 'Sana Soomro', r: 'UI Designer', d: 'Design', s: 'Active', g: ['#e48bf2', '#a52dc0'] },
  { n: 'Imran Shaikh', r: 'HR Executive', d: 'Human Resources', s: 'Active', g: ['#ffb36b', '#e0651f'] },
  { n: 'Hina Qureshi', r: 'Accountant', d: 'Finance', s: 'On leave', g: ['#5fd6c8', '#0e8f80'] },
  { n: 'Zeeshan Ansari', r: 'QA Engineer', d: 'Engineering', s: 'Active', g: ['#8aa4ff', '#3f63f0'] },
  { n: 'Rabia Siddiqui', r: 'Operations Lead', d: 'Operations', s: 'Active', g: ['#a995ff', '#6d4af0'] },
  { n: 'Farhan Baloch', r: 'Support Specialist', d: 'Operations', s: 'Active', g: ['#c2b4ff', '#7a5af8'] },
]

const deptCounts = Object.keys(dept).map((d) => [d, people.filter((p) => p.d === d).length])

const initials = (n) => n.split(' ').map((p) => p[0]).join('')

function Avatar({ p, size = 30, fs = 11 }) {
  return (
    <span className="grid shrink-0 place-items-center rounded-full font-semibold text-white" style={{ width: size, height: size, fontSize: fs, background: `linear-gradient(140deg, ${p.g[0]}, ${p.g[1]})` }}>
      {initials(p.n)}
    </span>
  )
}

function Status({ s }) {
  const active = s === 'Active'
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium" style={{ color: active ? C.green : C.amber }}>
      <i className="block size-[6px] rounded-full not-italic" style={{ background: active ? C.green : C.amber, boxShadow: `0 0 0 3px ${active ? 'rgba(18,163,106,.14)' : 'rgba(217,154,0,.16)'}` }} />
      {s}
    </span>
  )
}

function App() {
  const nav = [
    [LayoutGrid, 'Dashboard'],
    [Users, 'Employees', true],
    [Building2, 'Departments'],
    [Settings, 'Settings'],
  ]
  const sel = people.find((p) => p.sel)
  return (
    <div className="flex h-full whitespace-nowrap" style={{ background: '#fff', color: C.ink, fontFamily: 'var(--font-sans)' }}>
      {/* sidebar */}
      <div className="flex w-[176px] shrink-0 flex-col px-3 py-4" style={{ background: '#fafbfd', borderRight: `1px solid ${C.line}` }}>
        <div className="flex items-center gap-2 px-2 pb-5">
          <span className="grid size-7 place-items-center rounded-lg" style={{ background: C.cobalt }}>
            <Users size={14} color="#fff" />
          </span>
          <span className="text-[13px] font-semibold tracking-[-0.01em]">Staff Manager</span>
        </div>
        <div className="space-y-1">
          {nav.map(([I, t, on]) => (
            <div key={t} className="flex h-[34px] items-center gap-2.5 rounded-[9px] px-2.5 text-[12px] font-medium" style={on ? { background: C.cobaltSoft, color: C.cobalt } : { color: C.mute }}>
              <I size={14} /> {t}
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 rounded-[10px] p-2" style={{ boxShadow: `inset 0 0 0 1px ${C.line}`, background: '#fff' }}>
          <span className="grid size-7 place-items-center rounded-full text-[10px] font-semibold" style={{ background: C.ink, color: '#fff' }}>AD</span>
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold">Admin</span>
            <span className="block text-[9.5px]" style={{ color: C.dim }}>HR manager</span>
          </span>
        </div>
      </div>

      {/* main */}
      <div className="min-w-0 flex-1 px-5 py-[18px]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[21px] font-semibold tracking-[-0.02em]">Employees</h3>
            <p className="mt-0.5 text-[11.5px]" style={{ color: C.mute }}>8 people across 5 departments</p>
          </div>
          <span className="inline-flex h-9 items-center gap-1.5 rounded-[10px] px-3.5 text-[12px] font-semibold text-white" style={{ background: C.cobalt, boxShadow: '0 8px 18px -8px rgba(47,91,255,.7)' }}>
            <Plus size={14} strokeWidth={2.6} /> Add employee
          </span>
        </div>

        <div className="mt-3.5 flex items-center gap-2">
          <span className="flex h-8 w-[210px] items-center gap-2 rounded-[9px] px-3 text-[11.5px]" style={{ boxShadow: `inset 0 0 0 1px ${C.line}`, color: C.dim }}>
            <Search size={13} /> Search by name or role
          </span>
          {['Department', 'Status'].map((f) => (
            <span key={f} className="inline-flex h-8 items-center gap-1.5 rounded-[9px] px-3 text-[11.5px] font-medium" style={{ boxShadow: `inset 0 0 0 1px ${C.line}`, color: C.mute }}>
              {f}: All <ChevronDown size={12} />
            </span>
          ))}
          <span className="ml-auto grid size-8 place-items-center rounded-[9px]" style={{ boxShadow: `inset 0 0 0 1px ${C.line}`, color: C.mute }}>
            <SlidersHorizontal size={13} />
          </span>
        </div>

        <div className="mt-3 grid grid-cols-[1fr_232px] gap-4">
          {/* table */}
          <div className="min-w-0 overflow-hidden rounded-[12px]" style={{ boxShadow: `inset 0 0 0 1px ${C.line}` }}>
            <div className="grid grid-cols-[1fr_100px_80px] px-3.5 py-2 text-[10.5px] font-medium" style={{ background: C.soft, color: C.dim, borderBottom: `1px solid ${C.line}` }}>
              <span>Employee</span>
              <span>Department</span>
              <span className="pl-[6px]">Status</span>
            </div>
            {people.map((p) => (
              <div
                key={p.n}
                className="grid h-[43px] grid-cols-[1fr_100px_80px] items-center px-3.5"
                style={{ borderBottom: `1px solid ${C.line}`, background: p.sel ? C.cobaltSoft : undefined, boxShadow: p.sel ? `inset 3px 0 0 ${C.cobalt}` : undefined }}
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <Avatar p={p} size={28} fs={10} />
                  <span className="min-w-0 leading-tight">
                    <span className="block text-[12px] font-semibold">{p.n}</span>
                    <span className="block text-[10.5px]" style={{ color: C.mute }}>{p.r}</span>
                  </span>
                </span>
                <span className="flex items-center gap-1.5 text-[10.5px]" style={{ color: C.mute }}>
                  <i className="block size-[6px] rounded-full not-italic" style={{ background: dept[p.d] }} />
                  {p.d === 'Human Resources' ? 'HR' : p.d}
                </span>
                <span className="pl-[6px]"><Status s={p.s} /></span>
              </div>
            ))}
          </div>

          {/* profile */}
          <div className="self-start">
          <div className="rounded-[14px] p-4" style={{ boxShadow: `inset 0 0 0 1px ${C.line}, 0 22px 40px -26px rgba(16,24,40,.5)`, background: '#fff' }}>
            <div className="flex items-start justify-between">
              <Avatar p={sel} size={52} fs={17} />
              <Status s={sel.s} />
            </div>
            <h4 className="mt-3 text-[16px] font-semibold tracking-[-0.01em]">{sel.n}</h4>
            <p className="text-[11.5px]" style={{ color: C.mute }}>{sel.r}</p>
            <dl className="mt-3.5 space-y-2.5 text-[11px]" style={{ borderTop: `1px solid ${C.line}`, paddingTop: 12 }}>
              {[
                ['Employee ID', 'EMP-0102'],
                ['Department', sel.d],
                ['Joined', 'Mar 2024'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between">
                  <dt style={{ color: C.dim }}>{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex gap-2">
              <span className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-[9px] text-[11.5px] font-semibold text-white" style={{ background: C.cobalt }}>
                <Pencil size={12} /> Edit
              </span>
              <span className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-[9px] text-[11.5px] font-semibold" style={{ boxShadow: 'inset 0 0 0 1px #f3c9c9', color: '#d33b3b', background: '#fff6f6' }}>
                <Trash2 size={12} /> Delete
              </span>
            </div>
          </div>

            <div className="mt-3.5 rounded-[14px] p-3.5" style={{ boxShadow: `inset 0 0 0 1px ${C.line}`, background: C.soft }}>
              <p className="text-[11px] font-semibold">By department</p>
              <div className="mt-2.5 flex h-[7px] gap-[3px] overflow-hidden rounded-full">
                {deptCounts.map(([d, n]) => (
                  <i key={d} className="block h-full rounded-full not-italic" style={{ flex: n, background: dept[d] }} />
                ))}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
                {deptCounts.map(([d, n]) => (
                  <span key={d} className="flex items-center gap-1 text-[10px]" style={{ color: C.mute }}>
                    <i className="block size-[5px] rounded-full not-italic" style={{ background: dept[d] }} />
                    {d === 'Human Resources' ? 'HR' : d} {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EmployeeMockup() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: 'linear-gradient(150deg,#dfe6f6 0%,#eef1f9 55%,#e6ebf6 100%)' }}>
      <div className="absolute -right-20 -top-24 size-[460px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(47,91,255,.22), transparent 65%)' }} />
      <div className="absolute -bottom-40 -left-10 size-[460px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(193,63,216,.16), transparent 65%)' }} />
      <div
        className="absolute overflow-hidden rounded-[14px]"
        style={{ left: 34, top: 30, width: 892, height: 640, boxShadow: '0 40px 80px -28px rgba(22,34,80,.55), 0 0 0 1px rgba(16,24,40,.08)' }}
      >
        <Chrome dark={false} title="Employee Management">
          <App />
        </Chrome>
      </div>

      {/* confirmation toast */}
      <div
        className="absolute flex items-center gap-2.5 whitespace-nowrap rounded-[12px] py-2 pl-2.5 pr-4"
        style={{ left: 12, top: 536, background: C.ink, color: '#fff', boxShadow: '0 22px 40px -14px rgba(10,16,40,.6)', fontFamily: 'var(--font-sans)' }}
      >
        <span className="grid size-6 place-items-center rounded-full" style={{ background: C.green }}>
          <Check size={13} strokeWidth={3} />
        </span>
        <span className="leading-tight">
          <span className="block text-[12px] font-semibold">Employee updated</span>
          <span className="block text-[10px] opacity-60">Bilal Khoso</span>
        </span>
      </div>
    </div>
  )
}

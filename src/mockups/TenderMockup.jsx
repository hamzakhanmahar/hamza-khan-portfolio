import { Bell, Check, FileText, LayoutDashboard, Layers, Plus, Search, Settings, Sparkles } from 'lucide-react'
import { Chrome } from './MockupStage.jsx'

const C = {
  bg: '#050a14',
  panel: '#0c1426',
  panel2: '#101a31',
  line: 'rgba(150,178,255,.11)',
  line2: 'rgba(150,178,255,.2)',
  text: '#e9eefb',
  mute: '#8794b4',
  dim: '#5d6a8a',
  teal: '#2ee6c8',
  amber: '#f5b84a',
  blue: '#7392ff',
  green: '#3ddc97',
}
const mono = { fontFamily: 'var(--font-mono)' }

const stages = ['Draft', 'Document parsing', 'Review', 'Submission', 'Closed']
const ACTIVE = 2

const status = {
  Draft: { c: '#9aa6c4', bg: 'rgba(154,166,196,.12)' },
  Parsing: { c: C.teal, bg: 'rgba(46,230,200,.12)' },
  'In review': { c: C.amber, bg: 'rgba(245,184,74,.13)' },
  Submitted: { c: C.blue, bg: 'rgba(115,146,255,.14)' },
  Closed: { c: '#6f7b99', bg: 'rgba(111,123,153,.14)' },
}

const rows = [
  { id: 'TN-0142', title: 'Supply of IT equipment', due: '24 Nov', s: 'In review', sel: true },
  { id: 'TN-0141', title: 'Annual generator maintenance', due: '02 Dec', s: 'Parsing' },
  { id: 'TN-0139', title: 'Boundary wall construction', due: '18 Nov', s: 'Submitted' },
  { id: 'TN-0137', title: 'Medical supplies procurement', due: '09 Dec', s: 'Draft' },
  { id: 'TN-0134', title: 'Office furniture supply', due: '12 Nov', s: 'Submitted' },
  { id: 'TN-0130', title: 'Network cabling works', due: '30 Oct', s: 'Closed' },
]

function Pill({ s }) {
  const t = status[s]
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-[3px] text-[10.5px] font-medium" style={{ background: t.bg, color: t.c }}>
      {s === 'Parsing' ? <Sparkles size={10} /> : <i className="block size-[5px] rounded-full not-italic" style={{ background: t.c }} />}
      {s}
    </span>
  )
}

function Stepper() {
  return (
    <div className="relative flex items-start justify-between px-2">
      <div className="absolute left-[34px] right-[34px] top-[11px] h-px" style={{ background: C.line2 }} />
      <div className="absolute left-[34px] top-[11px] h-px" style={{ width: `calc((100% - 68px) * ${ACTIVE / (stages.length - 1)})`, background: `linear-gradient(90deg, ${C.teal}, ${C.teal})`, boxShadow: `0 0 12px ${C.teal}` }} />
      {stages.map((st, i) => {
        const done = i < ACTIVE
        const active = i === ACTIVE
        return (
          <div key={st} className="relative flex w-[88px] flex-col items-center gap-2">
            <span
              className="grid size-[23px] place-items-center rounded-full"
              style={
                done
                  ? { background: C.teal, color: '#04141a' }
                  : active
                    ? { background: C.panel, boxShadow: `0 0 0 2px ${C.teal}, 0 0 18px rgba(46,230,200,.45)`, color: C.teal }
                    : { background: C.panel, boxShadow: `inset 0 0 0 1.5px ${C.line2}`, color: C.dim }
              }
            >
              {done ? <Check size={12} strokeWidth={3} /> : active ? <i className="block size-[7px] rounded-full bg-current not-italic" /> : null}
            </span>
            <span className="text-[10.5px] font-medium" style={{ color: active ? C.text : done ? C.mute : C.dim }}>{st}</span>
          </div>
        )
      })}
    </div>
  )
}

function Line({ w, hi, strong }) {
  return (
    <div
      className="h-[5px] rounded-full"
      style={{
        width: w,
        background: hi ? 'rgba(14,170,150,.55)' : strong ? '#2a3350' : '#c3cadc',
        boxShadow: hi ? '0 0 0 3px rgba(46,230,200,.22)' : undefined,
      }}
    />
  )
}

function Dashboard() {
  const nav = [LayoutDashboard, FileText, Layers, Bell, Settings]
  return (
    <div className="flex h-full whitespace-nowrap" style={{ background: C.bg, color: C.text, fontFamily: 'var(--font-sans)' }}>
      {/* rail */}
      <div className="flex w-[54px] shrink-0 flex-col items-center gap-3 py-4" style={{ borderRight: `1px solid ${C.line}`, background: '#070d1b' }}>
        <span className="mb-2 grid size-8 place-items-center rounded-[10px]" style={{ background: `linear-gradient(135deg, ${C.teal}, #2a7bff)` }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3h10M3 8h7M3 13h10" stroke="#04141a" strokeWidth="2" strokeLinecap="round" /></svg>
        </span>
        {nav.map((I, i) => (
          <span key={i} className="grid size-8 place-items-center rounded-[9px]" style={i === 1 ? { background: 'rgba(46,230,200,.12)', color: C.teal } : { color: C.dim }}>
            <I size={15} />
          </span>
        ))}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3.5 px-[22px] py-[16px]">
        {/* header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10.5px]" style={{ color: C.dim }}>Tenders / Pipeline</p>
            <h3 className="mt-0.5 text-[19px] font-semibold tracking-[-0.015em]">Tender pipeline</h3>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-[170px] items-center gap-2 rounded-[9px] px-3 text-[11px]" style={{ background: C.panel, boxShadow: `inset 0 0 0 1px ${C.line}`, color: C.dim }}>
              <Search size={12} /> Search tenders
            </span>
            <span className="inline-flex h-8 items-center gap-1.5 rounded-[9px] px-3 text-[11.5px] font-semibold" style={{ background: C.teal, color: '#04141a' }}>
              <Plus size={13} strokeWidth={2.6} /> New tender
            </span>
          </div>
        </div>

        {/* lifecycle */}
        <div className="rounded-[14px] px-3 pb-3 pt-3.5" style={{ background: C.panel, boxShadow: `inset 0 0 0 1px ${C.line}` }}>
          <Stepper />
        </div>

        {/* body */}
        <div className="grid min-h-0 flex-1 grid-cols-[1fr_318px] gap-3.5">
          {/* table */}
          <div className="min-w-0 overflow-hidden rounded-[14px]" style={{ background: C.panel, boxShadow: `inset 0 0 0 1px ${C.line}` }}>
            <div className="flex items-center justify-between px-4 py-2.5 text-[10.5px]" style={{ color: C.dim, borderBottom: `1px solid ${C.line}` }}>
              <span>Tender</span>
              <span className="flex gap-[40px]">
                <span className="w-[44px]">Closing</span>
                <span className="w-[92px]">Status</span>
              </span>
            </div>
            {rows.map((r) => (
              <div
                key={r.id}
                className="flex h-[42px] items-center justify-between px-4"
                style={{ borderBottom: `1px solid ${C.line}`, background: r.sel ? 'linear-gradient(90deg, rgba(46,230,200,.1), rgba(46,230,200,0))' : undefined, boxShadow: r.sel ? `inset 2px 0 0 ${C.teal}` : undefined }}
              >
                <span className="min-w-0">
                  <span className="block text-[12px] font-medium">{r.title}</span>
                  <span className="block text-[9.5px]" style={{ ...mono, color: C.dim }}>{r.id}</span>
                </span>
                <span className="flex items-center gap-[40px]">
                  <span className="w-[44px] text-[11px]" style={{ color: C.mute }}>{r.due}</span>
                  <span className="w-[92px]"><Pill s={r.s} /></span>
                </span>
              </div>
            ))}
          </div>

          {/* document */}
          <div className="relative min-w-0 overflow-hidden rounded-[14px] p-3.5" style={{ background: C.panel, boxShadow: `inset 0 0 0 1px ${C.line}` }}>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[11.5px] font-semibold"><FileText size={13} style={{ color: C.mute }} /> Tender document</span>
              <span className="inline-flex items-center gap-1 rounded-full px-2 py-[3px] text-[9.5px] font-semibold" style={{ background: 'rgba(46,230,200,.13)', color: C.teal }}>
                <Sparkles size={10} /> AI parsed
              </span>
            </div>

            <div className="relative mt-3 rounded-[8px] px-3.5 py-3" style={{ background: '#edf0f8', boxShadow: '0 14px 30px -14px rgba(0,0,0,.8)' }}>
              <div className="flex items-center justify-between">
                <div className="h-[7px] w-[92px] rounded-full" style={{ background: '#1d2744' }} />
                <div className="h-[16px] w-[16px] rounded-[4px]" style={{ background: '#c3cadc' }} />
              </div>
              <div className="mt-2.5 space-y-[6px]">
                <Line w="100%" />
                <Line w="88%" />
                <Line w="94%" hi />
                <Line w="62%" />
                <div className="h-[3px]" />
                <Line w="96%" />
                <Line w="82%" hi />
                <Line w="90%" />
                <div className="h-[3px]" />
                <Line w="98%" />
                <Line w="72%" hi />
              </div>
            </div>

            <div className="mt-2.5 space-y-1.5">
              {[
                ['Closing date', '24 Nov, 11:00'],
                ['Bid security', '2% of bid value'],
                ['Eligibility', 'Registered suppliers'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between rounded-[8px] px-2.5 py-[6px] text-[10.5px]" style={{ background: C.panel2, boxShadow: `inset 0 0 0 1px ${C.line}` }}>
                  <span className="flex items-center gap-1.5" style={{ color: C.mute }}><i className="block size-[5px] rounded-full not-italic" style={{ background: C.teal }} />{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TenderMockup() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#03060d' }}>
      <div className="absolute -left-24 -top-24 size-[420px] rounded-full opacity-60" style={{ background: 'radial-gradient(circle, rgba(46,230,200,.22), transparent 65%)' }} />
      <div className="absolute -bottom-32 right-0 size-[520px] rounded-full opacity-70" style={{ background: 'radial-gradient(circle, rgba(88,110,255,.3), transparent 65%)' }} />
      <div
        className="absolute overflow-hidden rounded-[14px]"
        style={{ left: 28, top: 28, width: 904, height: 560, boxShadow: '0 40px 90px -20px rgba(0,0,0,.9), 0 0 0 1px rgba(150,178,255,.16)' }}
      >
        <Chrome title="Tender Management System">
          <Dashboard />
        </Chrome>
      </div>

      {/* floating submission checklist */}
      <div
        className="absolute flex items-center gap-4 whitespace-nowrap rounded-[14px] px-3.5 py-2.5"
        style={{ left: 64, top: 524, background: 'rgba(16,26,49,.94)', backdropFilter: 'blur(14px)', boxShadow: `0 28px 50px -14px rgba(0,0,0,.85), 0 0 0 1px ${C.line2}`, color: C.text, fontFamily: 'var(--font-sans)' }}
      >
        <span className="text-[11.5px] font-semibold">Checklist</span>
        {[
          ['Documents parsed', true],
          ['Eligibility confirmed', true],
          ['Bid security', false],
        ].map(([t, d]) => (
          <div key={t} className="flex items-center gap-2 text-[11px]">
            <span className="grid size-[15px] place-items-center rounded-full" style={d ? { background: C.teal, color: '#04141a' } : { boxShadow: `inset 0 0 0 1.5px ${C.line2}` }}>
              {d && <Check size={10} strokeWidth={3.2} />}
            </span>
            <span style={{ color: d ? C.text : C.mute }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

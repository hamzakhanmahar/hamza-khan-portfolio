import '@fontsource/instrument-serif/latin-400.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import { ShoppingBag } from 'lucide-react'
import { Biryani, GulabJamun, Karahi, Kebab } from './art.jsx'

const C = {
  bg: '#120a0a',
  cream: '#f4e9d5',
  gold: '#d9aa4c',
  wine: '#6d1727',
  mute: 'rgba(244,233,213,.58)',
  line: 'rgba(244,233,213,.16)',
}
const serif = { fontFamily: "'Instrument Serif', Georgia, serif" }

const tabs = ['All', 'Starters', 'BBQ', 'Mains', 'Desserts']

const dishes = [
  { n: 'Chicken biryani', d: 'Basmati rice, saffron, slow-cooked chicken, raita', p: 'Rs 950' },
  { n: 'Chicken karahi', d: 'Tomato, green chilli, ginger, fresh coriander', p: 'Rs 1,350' },
  { n: 'Seekh kebab platter', d: 'Charcoal-grilled, mint chutney, onion rings', p: 'Rs 1,100' },
  { n: 'Gulab jamun', d: 'Warm, in cardamom syrup with pistachio', p: 'Rs 450' },
]

function Plate({ children, size, left, top, rotate = 0 }) {
  return (
    <div className="absolute" style={{ left, top, width: size, height: size, transform: `rotate(${rotate}deg)` }}>
      {children}
    </div>
  )
}

function Tag({ left, top, name, price }) {
  return (
    <div
      className="absolute flex items-center gap-2.5 whitespace-nowrap rounded-full py-1.5 pl-3 pr-3.5"
      style={{ left, top, background: 'rgba(244,233,213,.96)', color: '#1d1210', boxShadow: '0 18px 30px -12px rgba(0,0,0,.8)', fontFamily: 'var(--font-sans)' }}
    >
      <i className="block size-[7px] rounded-full not-italic" style={{ background: C.wine }} />
      <span className="text-[11.5px] font-semibold">{name}</span>
      <span className="text-[11.5px]" style={{ ...serif, fontSize: 15 }}>{price}</span>
    </div>
  )
}

export default function RestaurantMockup() {
  return (
    <div className="absolute inset-0 overflow-hidden whitespace-nowrap" style={{ background: C.bg, color: C.cream, fontFamily: 'var(--font-sans)' }}>
      {/* atmosphere */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 75% at 72% 55%, rgba(135,28,48,.62) 0%, rgba(80,16,30,.35) 45%, rgba(18,10,10,0) 75%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(40% 50% at 12% 0%, rgba(217,170,76,.12), transparent 70%)' }} />
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="rm-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="13" cy="13" r="1" fill="#f4e9d5" fillOpacity=".06" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rm-dots)" />
      </svg>

      {/* top bar */}
      <div className="absolute left-14 right-14 top-[30px] z-10 flex items-center justify-between">
        <span className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <path d="M11 1L21 11 11 21 1 11z" fill="none" stroke={C.gold} strokeWidth="1.4" />
            <path d="M11 6.5L15.5 11 11 15.5 6.5 11z" fill={C.gold} />
          </svg>
          <span className="text-[27px] leading-none" style={serif}>Dastarkhwan</span>
        </span>
        <span className="inline-flex h-8 items-center gap-2 rounded-full px-3.5 text-[11.5px] font-medium" style={{ boxShadow: `inset 0 0 0 1px ${C.gold}`, color: C.gold }}>
          <ShoppingBag size={13} /> Order · 2 items
        </span>
      </div>

      {/* heading */}
      <h3 className="absolute left-14 top-[84px] text-[88px] leading-[0.95] tracking-[-0.02em]" style={serif}>
        Our menu
      </h3>

      {/* category tabs */}
      <div className="absolute left-14 top-[196px] flex gap-1.5 text-[11.5px] font-medium">
        {tabs.map((t, i) => (
          <span
            key={t}
            className="rounded-full px-3.5 py-[6px]"
            style={i === 0 ? { background: C.gold, color: '#241407' } : { boxShadow: `inset 0 0 0 1px ${C.line}`, color: 'rgba(244,233,213,.8)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* menu list */}
      <div className="absolute left-14 top-[246px] w-[404px]">
        {dishes.map((x, i) => (
          <div key={x.n} className="py-[11px]" style={{ borderTop: i === 0 ? `1px solid ${C.line}` : undefined, borderBottom: `1px solid ${C.line}` }}>
            <div className="flex items-baseline gap-2">
              <span className="text-[25px] leading-none" style={serif}>{x.n}</span>
              <span className="mb-1 flex-1 self-end" style={{ borderBottom: `1.5px dotted rgba(244,233,213,.28)` }} />
              <span className="text-[22px] leading-none" style={{ ...serif, color: C.gold }}>{x.p}</span>
            </div>
            <p className="mt-1.5 text-[11.5px]" style={{ color: C.mute }}>{x.d}</p>
          </div>
        ))}
      </div>

      {/* plates */}
      <Plate size={158} left={512} top={30} rotate={-8}><GulabJamun /></Plate>
      <Plate size={272} left={696} top={52} rotate={14}><Karahi /></Plate>
      <Plate size={402} left={498} top={168} rotate={-10}><Biryani /></Plate>
      <Plate size={206} left={742} top={392} rotate={6}><Kebab /></Plate>

      <Tag left={520} top={514} name="Chicken biryani" price="Rs 950" />
      <Tag left={724} top={300} name="Chicken karahi" price="Rs 1,350" />
    </div>
  )
}

import '@fontsource/fraunces/latin-500.css'
import '@fontsource/fraunces/latin-600.css'
import { ArrowRight, Check, ChevronLeft, Heart, Minus, Plus, Search, ShoppingBag, Share2 } from 'lucide-react'
import { Chrome } from './MockupStage.jsx'
import { AjrakArt, CushionArt, JewelryArt, PotteryArt, RilliArt, TopiArt } from './art.jsx'

const C = {
  cream: '#f6eddc',
  paper: '#fbf6ea',
  indigo: '#16224f',
  indigo2: '#101a3f',
  madder: '#b3262a',
  saffron: '#e3a02f',
  ink: '#241a14',
  mute: '#85725d',
  line: 'rgba(36,26,20,.12)',
}
const serif = { fontFamily: "'Fraunces', Georgia, serif" }

const products = [
  { name: 'Indigo ajrak shawl', note: 'Block-printed', price: 'Rs 6,500', Art: AjrakArt },
  { name: 'Rilli patchwork quilt', note: 'Hand-stitched', price: 'Rs 12,000', Art: RilliArt },
  { name: 'Glazed ceramic vase', note: 'Hand-painted', price: 'Rs 3,200', Art: PotteryArt },
  { name: 'Mirror-work Sindhi topi', note: 'Embroidered', price: 'Rs 1,800', Art: TopiArt },
]

const roles = ['Guest', 'Buyer', 'Seller', 'Admin']
const categories = ['All', 'Clothing', 'Jewelry', 'Beauty', 'Handicrafts', 'Home décor']

function Lattice() {
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="shc-lattice" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M28 4L52 28 28 52 4 28z" fill="none" stroke="#fff" strokeOpacity=".07" strokeWidth="1.2" />
          <path d="M28 16L40 28 28 40 16 28z" fill="none" stroke="#e3a02f" strokeOpacity=".12" strokeWidth="1" />
          <circle cx="0" cy="0" r="2.2" fill="#fff" fillOpacity=".08" />
          <circle cx="56" cy="0" r="2.2" fill="#fff" fillOpacity=".08" />
          <circle cx="0" cy="56" r="2.2" fill="#fff" fillOpacity=".08" />
          <circle cx="56" cy="56" r="2.2" fill="#fff" fillOpacity=".08" />
        </pattern>
        <radialGradient id="shc-glow" cx="78%" cy="18%" r="70%">
          <stop offset="0" stopColor="#3a4a9a" stopOpacity=".55" />
          <stop offset="1" stopColor="#16224f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shc-lattice)" />
      <rect width="100%" height="100%" fill="url(#shc-glow)" />
    </svg>
  )
}

function Tile({ children, className = '', style }) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[14px] ${className}`}
      style={{ boxShadow: '0 18px 34px -14px rgba(36,26,20,.55), 0 0 0 3px #fff', ...style }}
    >
      {children}
    </div>
  )
}

function Storefront() {
  return (
    <div className="flex h-full flex-col whitespace-nowrap" style={{ background: C.cream, color: C.ink, fontFamily: 'var(--font-sans)' }}>
      {/* role bar */}
      <div className="flex h-[26px] shrink-0 items-center justify-between px-[22px]" style={{ background: C.indigo2, color: 'rgba(255,255,255,.72)' }}>
        <span className="text-[10.5px]">Handmade by women artisans of Sindh</span>
        <span className="flex items-center gap-2 text-[10px]">
          Viewing as
          <span className="flex rounded-full p-[2px]" style={{ background: 'rgba(255,255,255,.1)' }}>
            {roles.map((r) => (
              <span
                key={r}
                className="rounded-full px-2.5 py-[2px] text-[10px] font-medium"
                style={r === 'Buyer' ? { background: C.saffron, color: C.ink } : undefined}
              >
                {r}
              </span>
            ))}
          </span>
        </span>
      </div>

      {/* header */}
      <div className="flex h-[52px] shrink-0 items-center gap-5 px-[22px]">
        <span className="flex items-center gap-2">
          <span className="grid size-[26px] place-items-center rounded-lg" style={{ background: C.madder }}>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M7 1L13 7 7 13 1 7z" fill="#f6eddc" />
              <path d="M7 4.4L9.6 7 7 9.6 4.4 7z" fill={C.madder} />
            </svg>
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.01em]" style={serif}>She Commerce</span>
        </span>
        <span className="ml-1 flex gap-4 text-[11.5px] font-medium" style={{ color: C.mute }}>
          {categories.slice(1).map((c) => (
            <span key={c}>{c}</span>
          ))}
        </span>
        <span className="ml-auto flex items-center gap-3">
          <span className="grid size-7 place-items-center rounded-full" style={{ background: 'rgba(36,26,20,.08)', color: C.ink }}>
            <Search size={13} />
          </span>
          <span className="relative grid size-7 place-items-center rounded-full" style={{ background: C.ink, color: C.cream }}>
            <ShoppingBag size={13} />
            <i className="absolute -right-1 -top-1 grid size-[15px] place-items-center rounded-full text-[9px] font-bold not-italic" style={{ background: C.madder, color: '#fff' }}>2</i>
          </span>
        </span>
      </div>

      {/* hero */}
      <div className="relative mx-[22px] mt-1.5 h-[172px] shrink-0 overflow-hidden rounded-[18px]" style={{ background: 'linear-gradient(120deg,#f1dfbd 0%,#ecd3a3 60%,#e7c488 100%)' }}>
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <pattern id="shc-hero" width="34" height="34" patternUnits="userSpaceOnUse">
              <path d="M17 3L31 17 17 31 3 17z" fill="none" stroke="#b3262a" strokeOpacity=".13" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shc-hero)" />
        </svg>
        <div className="relative z-10 flex h-full w-[318px] flex-col justify-center whitespace-normal pl-[26px]">
          <h3 className="text-[30px] font-semibold leading-[1.04] tracking-[-0.02em]" style={{ ...serif, color: C.indigo }}>
            Crafted by hand, by the women of Sindh.
          </h3>
          <p className="mt-2.5 text-[11.5px] leading-snug" style={{ color: '#6a4f33' }}>
            Ajrak, rilli, pottery and jewelry, straight from the artisans who make them.
          </p>
          <span className="mt-3.5 flex gap-2 text-[11px] font-semibold">
            <span className="inline-flex h-[30px] items-center gap-1.5 rounded-full px-3.5" style={{ background: C.madder, color: '#fff' }}>
              Shop the collection <ArrowRight size={12} />
            </span>
            <span className="inline-flex h-[30px] items-center rounded-full px-3.5" style={{ boxShadow: `inset 0 0 0 1.3px ${C.indigo}`, color: C.indigo }}>
              Sell your craft
            </span>
          </span>
        </div>
        <Tile style={{ left: 352, top: 16, width: 138, height: 148, transform: 'rotate(-3deg)' }}><AjrakArt /></Tile>
        <Tile style={{ left: 476, top: 38, width: 112, height: 128, transform: 'rotate(2.5deg)' }}><PotteryArt /></Tile>
        <Tile style={{ left: 566, top: -8, width: 96, height: 96, transform: 'rotate(5deg)' }}><RilliArt /></Tile>
      </div>

      {/* chips */}
      <div className="flex shrink-0 items-center gap-1.5 px-[22px] pt-3 text-[11px] font-medium">
        {categories.map((c, i) => (
          <span
            key={c}
            className="rounded-full px-3 py-[5px]"
            style={i === 0 ? { background: C.indigo, color: '#fff' } : { boxShadow: `inset 0 0 0 1px ${C.line}`, color: C.ink }}
          >
            {c}
          </span>
        ))}
        <span className="ml-auto text-[10.5px]" style={{ color: C.mute }}>Featured first</span>
      </div>

      {/* grid */}
      <div className="grid grid-cols-4 gap-3 px-[22px] pt-3">
        {products.map(({ name, note, price, Art }, i) => (
          <div key={name}>
            <div className="relative aspect-square overflow-hidden rounded-[12px]" style={{ boxShadow: '0 10px 22px -14px rgba(36,26,20,.6)' }}>
              <Art />
              <span className="absolute right-2 top-2 grid size-6 place-items-center rounded-full bg-white/90" style={{ color: i === 1 ? C.madder : C.ink }}>
                <Heart size={12} fill={i === 1 ? C.madder : 'none'} />
              </span>
            </div>
            <p className="mt-2 truncate text-[12px] font-semibold">{name}</p>
            <div className="flex items-baseline justify-between">
              <span className="text-[10.5px]" style={{ color: C.mute }}>{note}</span>
              <span className="text-[12.5px] font-semibold" style={{ ...serif, color: C.madder }}>{price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Phone() {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: 724,
        top: 64,
        width: 212,
        height: 600,
        borderRadius: 34,
        background: '#0b0b10',
        padding: 7,
        boxShadow: '0 40px 70px -18px rgba(0,0,0,.75), inset 0 0 0 1.5px rgba(255,255,255,.14)',
      }}
    >
      <div className="relative h-full overflow-hidden whitespace-nowrap" style={{ borderRadius: 28, background: C.paper, color: C.ink, fontFamily: 'var(--font-sans)' }}>
        <div className="flex h-[26px] items-center justify-between px-5 pt-1 text-[9px] font-semibold">
          <span>9:41</span>
          <span className="h-[14px] w-[56px] rounded-full" style={{ background: '#0b0b10' }} />
          <span className="flex gap-1"><i className="block h-[6px] w-[9px] rounded-[2px] bg-current not-italic" /><i className="block h-[6px] w-[13px] rounded-[2px] bg-current not-italic" /></span>
        </div>
        <div className="flex items-center justify-between px-3 py-2">
          <span className="grid size-6 place-items-center rounded-full" style={{ background: 'rgba(36,26,20,.07)' }}><ChevronLeft size={13} /></span>
          <span className="text-[11px] font-semibold">Product</span>
          <span className="grid size-6 place-items-center rounded-full" style={{ background: 'rgba(36,26,20,.07)' }}><Share2 size={11} /></span>
        </div>
        <div className="mx-2.5 aspect-[1/0.96] overflow-hidden rounded-[18px]" style={{ boxShadow: '0 14px 26px -16px rgba(36,26,20,.7)' }}>
          <AjrakArt />
        </div>
        <div className="mt-2 flex justify-center gap-1">
          <i className="block h-[4px] w-4 rounded-full not-italic" style={{ background: C.madder }} />
          <i className="block size-[4px] rounded-full not-italic" style={{ background: 'rgba(36,26,20,.25)' }} />
          <i className="block size-[4px] rounded-full not-italic" style={{ background: 'rgba(36,26,20,.25)' }} />
        </div>
        <div className="px-4 pt-2.5">
          <h4 className="text-[17px] font-semibold leading-tight tracking-[-0.01em]" style={serif}>Indigo ajrak shawl</h4>
          <p className="mt-0.5 text-[10.5px]" style={{ color: C.mute }}>Block-printed cotton, handmade</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[19px] font-semibold" style={{ ...serif, color: C.madder }}>Rs 6,500</span>
            <span className="flex items-center gap-1.5">
              {['#16224f', '#b3262a', '#2f2a28', '#1f8a8a'].map((c, i) => (
                <i key={c} className="block size-[14px] rounded-full not-italic" style={{ background: c, boxShadow: i === 0 ? `0 0 0 2px ${C.paper}, 0 0 0 3.5px ${C.ink}` : undefined }} />
              ))}
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="flex h-9 items-center gap-2.5 rounded-full px-2.5 text-[11px] font-semibold" style={{ boxShadow: `inset 0 0 0 1.2px ${C.line}` }}>
              <Minus size={11} /> 1 <Plus size={11} />
            </span>
            <span className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full text-[11.5px] font-semibold" style={{ background: C.madder, color: '#fff' }}>
              <ShoppingBag size={12} /> Add to cart
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2.5 rounded-2xl p-2.5" style={{ background: 'rgba(36,26,20,.05)' }}>
            <span className="grid size-8 place-items-center rounded-full text-[13px] font-semibold" style={{ ...serif, background: C.indigo, color: C.cream }}>S</span>
            <span className="min-w-0 leading-tight">
              <span className="block text-[11px] font-semibold">Craft Studio</span>
              <span className="block text-[9.5px]" style={{ color: C.mute }}>Seller · view shop</span>
            </span>
            <ArrowRight size={12} className="ml-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SheCommerceMockup() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: `linear-gradient(160deg, ${C.indigo} 0%, ${C.indigo2} 100%)` }}>
      <Lattice />

      <div
        className="absolute overflow-hidden rounded-[14px]"
        style={{ left: 28, top: 30, width: 676, height: 640, boxShadow: '0 40px 80px -24px rgba(0,0,0,.75), 0 0 0 1px rgba(255,255,255,.1)' }}
      >
        <Chrome dark={false} title="She Commerce">
          <Storefront />
        </Chrome>
      </div>

      <Phone />

      {/* add-to-cart confirmation, straddling window and phone */}
      <div
        className="absolute flex items-center gap-2.5 rounded-[14px] py-2 pl-2.5 pr-4"
        style={{ left: 694, top: 548, background: C.ink, color: C.cream, boxShadow: '0 22px 40px -12px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.08)', fontFamily: 'var(--font-sans)' }}
      >
        <span className="grid size-7 place-items-center rounded-full" style={{ background: C.saffron, color: C.ink }}>
          <Check size={14} strokeWidth={3} />
        </span>
        <span className="leading-tight">
          <span className="block text-[12px] font-semibold">Added to cart</span>
          <span className="block text-[10px] opacity-60">Indigo ajrak shawl</span>
        </span>
      </div>
    </div>
  )
}

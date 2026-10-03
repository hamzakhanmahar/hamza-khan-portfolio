/**
 * Flat illustrations for the service cards (viewBox 200×150).
 * Colours come from CSS variables set by the card surface:
 *   --a1 primary stroke/fill · --a2 soft fill · --ac accent
 */
const A1 = 'var(--a1)'
const A2 = 'var(--a2)'
const AC = 'var(--ac)'

function Window({ x = 28, y = 20, w = 144, h = 106 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="11" fill={A2} />
      <rect x={x} y={y} width={w} height="20" rx="11" fill={A1} opacity=".92" />
      <rect x={x} y={y + 10} width={w} height="10" fill={A1} opacity=".92" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={x + 12 + i * 9} cy={y + 10} r="2.6" fill={i === 0 ? AC : A2} />
      ))}
    </g>
  )
}

const art = {
  web: (
    <g>
      <Window />
      <rect x="42" y="54" width="62" height="9" rx="4.5" fill={A1} />
      <rect x="42" y="69" width="48" height="5" rx="2.5" fill={A1} opacity=".45" />
      <rect x="42" y="78" width="40" height="5" rx="2.5" fill={A1} opacity=".45" />
      <rect x="42" y="92" width="30" height="11" rx="5.5" fill={AC} />
      <rect x="114" y="52" width="46" height="58" rx="7" fill={AC} />
      <circle cx="137" cy="74" r="9" fill={A1} opacity=".9" />
      <path d="M118 108c4-12 14-16 19-16s15 4 19 16z" fill={A1} opacity=".9" />
    </g>
  ),
  webapp: (
    <g>
      <Window />
      <rect x="36" y="48" width="26" height="70" rx="6" fill={A1} opacity=".16" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="41" y={55 + i * 14} width="16" height="6" rx="3" fill={i === 0 ? AC : A1} opacity={i === 0 ? 1 : 0.5} />
      ))}
      <rect x="70" y="48" width="42" height="30" rx="7" fill={A1} opacity=".9" />
      <rect x="118" y="48" width="46" height="30" rx="7" fill={AC} />
      <rect x="70" y="84" width="94" height="34" rx="7" fill={A1} opacity=".16" />
      <polyline points="78,110 92,100 104,106 120,94 136,100 154,90" fill="none" stroke={AC} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  custom: (
    <g>
      <circle cx="82" cy="78" r="33" fill="none" stroke={A1} strokeWidth="11" strokeDasharray="9.4 7" />
      <circle cx="82" cy="78" r="27" fill={A2} />
      <circle cx="82" cy="78" r="11" fill={AC} />
      <circle cx="82" cy="78" r="4.5" fill={A1} />
      <rect x="124" y="30" width="38" height="38" rx="9" fill={AC} />
      <rect x="132" y="76" width="30" height="30" rx="8" fill={A1} opacity=".9" />
      <rect x="118" y="108" width="22" height="22" rx="6" fill={A2} />
      <path d="M131 49l5 5 9-10" fill="none" stroke={A1} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  system: (
    <g>
      {/* client */}
      <rect x="14" y="22" width="58" height="44" rx="8" fill={A2} />
      <rect x="14" y="22" width="58" height="12" rx="8" fill={A1} opacity=".92" />
      <rect x="14" y="28" width="58" height="6" fill={A1} opacity=".92" />
      <rect x="22" y="42" width="26" height="5" rx="2.5" fill={A1} opacity=".55" />
      <rect x="22" y="51" width="38" height="5" rx="2.5" fill={A1} opacity=".35" />
      {/* API */}
      <rect x="86" y="30" width="30" height="30" rx="8" fill={A1} />
      <text x="101" y="50" textAnchor="middle" fontSize="13" fontWeight="700" fill={AC} style={{ fontFamily: 'var(--font-mono)' }}>{'{ }'}</text>
      {/* database */}
      <path d="M134 32v26c0 6 11 10 26 10s26-4 26-10V32" fill={A2} />
      <ellipse cx="160" cy="32" rx="26" ry="9" fill={A1} opacity=".92" />
      <ellipse cx="160" cy="46" rx="26" ry="9" fill="none" stroke={A1} strokeOpacity=".3" strokeWidth="2" />
      <path d="M72 44h14M116 45h18" stroke={AC} strokeWidth="3.4" strokeLinecap="round" />
      {/* workflow */}
      <path d="M43 66v22M101 60v28M160 68v20" stroke={A1} strokeWidth="2.4" strokeDasharray="3 4" strokeLinecap="round" opacity=".5" />
      <path d="M26 100h148" stroke={A1} strokeWidth="2.4" opacity=".25" />
      <rect x="22" y="88" width="42" height="24" rx="7" fill={A1} opacity=".9" />
      <rect x="80" y="88" width="42" height="24" rx="7" fill={AC} />
      <rect x="138" y="88" width="42" height="24" rx="7" fill={A2} />
      <circle cx="92" cy="100" r="2.4" fill={A1} /><circle cx="101" cy="100" r="2.4" fill={A1} /><circle cx="110" cy="100" r="2.4" fill={A1} />
      <path d="M151 100l6 6 11-12" fill="none" stroke={A1} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="22" y="97" width="22" height="5" rx="2.5" fill={A2} />
      <rect x="40" y="124" width="120" height="6" rx="3" fill={A1} opacity=".14" />
      <rect x="40" y="124" width="78" height="6" rx="3" fill={AC} />
    </g>
  ),
  dashboard: (
    <g>
      <Window x="14" y="14" w="172" h="122" />
      {/* sidebar */}
      <rect x="22" y="40" width="26" height="88" rx="6" fill={A1} opacity=".14" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="27" y={47 + i * 13} width="16" height="6" rx="3" fill={i === 0 ? AC : A1} opacity={i === 0 ? 1 : 0.5} />
      ))}
      {/* KPI tiles */}
      <rect x="54" y="40" width="38" height="22" rx="6" fill={AC} />
      <rect x="97" y="40" width="38" height="22" rx="6" fill={A1} opacity=".9" />
      <rect x="140" y="40" width="38" height="22" rx="6" fill={A1} opacity=".16" />
      {/* chart */}
      <rect x="54" y="68" width="62" height="38" rx="6" fill={A1} opacity=".12" />
      <polyline points="60,98 72,88 82,93 94,80 104,84 111,74" fill="none" stroke={AC} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* donut */}
      <circle cx="148" cy="87" r="13" fill="none" stroke={A1} strokeOpacity=".18" strokeWidth="8" />
      <circle cx="148" cy="87" r="13" fill="none" stroke={AC} strokeWidth="8" strokeDasharray="50 100" strokeLinecap="round" transform="rotate(-90 148 87)" />
      {/* employee / record rows */}
      {[0, 1].map((i) => (
        <g key={i}>
          <circle cx="60" cy={115 + i * 9} r="3" fill={A1} opacity=".85" />
          <rect x="68" y={113 + i * 9} width="46" height="4" rx="2" fill={A1} opacity=".4" />
          <rect x="128" y={113 + i * 9} width="22" height="4" rx="2" fill={i === 0 ? AC : A1} opacity={i === 0 ? 1 : 0.4} />
        </g>
      ))}
    </g>
  ),
  mern: (
    <g>
      {[
        ['M', 30, 22, A1, AC],
        ['E', 104, 22, A2, A1],
        ['R', 30, 80, A2, A1],
        ['N', 104, 80, AC, A1],
      ].map(([l, x, y, f, c]) => (
        <g key={l}>
          <rect x={x} y={y} width="66" height="48" rx="12" fill={f} />
          <text x={x + 33} y={y + 33} textAnchor="middle" fontSize="28" fontWeight="700" fill={c} style={{ fontFamily: 'var(--font-sans)' }}>{l}</text>
        </g>
      ))}
      <path d="M96 46h8M63 70v10M137 70v10M96 104h8" stroke={AC} strokeWidth="3.4" strokeLinecap="round" />
      <rect x="40" y="136" width="120" height="6" rx="3" fill={A1} opacity=".14" />
    </g>
  ),
  shop: (
    <g>
      <path d="M72 52c0-16 10-26 28-26s28 10 28 26" fill="none" stroke={A1} strokeWidth="6" strokeLinecap="round" />
      <path d="M56 50h88l7 72a8 8 0 0 1-8 9H57a8 8 0 0 1-8-9z" fill={A2} />
      <path d="M56 50h88l7 72a8 8 0 0 1-8 9H57a8 8 0 0 1-8-9z" fill="none" stroke={A1} strokeWidth="4" strokeLinejoin="round" />
      <circle cx="100" cy="88" r="17" fill={AC} />
      <path d="M92 89l6 6 11-12" fill="none" stroke={A1} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="34" r="6" fill={AC} />
      <circle cx="40" cy="40" r="4" fill={A1} opacity=".6" />
    </g>
  ),
  api: (
    <g>
      <rect x="20" y="48" width="48" height="54" rx="11" fill={A2} />
      <rect x="132" y="48" width="48" height="54" rx="11" fill={A2} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="30" y={60 + i * 13} width="28" height="5" rx="2.5" fill={A1} opacity={i === 1 ? 1 : 0.5} />
          <rect x="142" y={60 + i * 13} width="28" height="5" rx="2.5" fill={A1} opacity={i === 1 ? 1 : 0.5} />
        </g>
      ))}
      <circle cx="100" cy="75" r="22" fill={A1} />
      <text x="100" y="82" textAnchor="middle" fontSize="20" fontWeight="700" fill={AC} style={{ fontFamily: 'var(--font-mono)' }}>{'{ }'}</text>
      <path d="M72 62h16M128 62h-16" stroke={AC} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M128 90h-16M72 90h16" stroke={A1} strokeWidth="3.6" strokeLinecap="round" opacity=".6" />
      <path d="M84 57l5 5-5 5M116 85l-5 5 5 5" fill="none" stroke={AC} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  db: (
    <g>
      {[0, 1, 2].map((i) => {
        const y = 38 + i * 30
        return (
          <g key={i}>
            <path d={`M46 ${y}v22c0 8 24 14 54 14s54-6 54-14V${y}`} fill={i === 1 ? AC : A2} />
            <ellipse cx="100" cy={y} rx="54" ry="14" fill={i === 1 ? AC : A1} opacity={i === 1 ? 1 : 0.9} />
            <ellipse cx="100" cy={y} rx="54" ry="14" fill="none" stroke={A1} strokeOpacity=".25" strokeWidth="2" />
          </g>
        )
      })}
      <circle cx="146" cy="66" r="3.2" fill={A1} />
      <circle cx="146" cy="96" r="3.2" fill={A1} />
      <circle cx="146" cy="126" r="3.2" fill={A1} />
    </g>
  ),
  auth: (
    <g>
      <path d="M100 18l50 18v38c0 28-22 46-50 56-28-10-50-28-50-56V36z" fill={A2} />
      <path d="M100 18l50 18v38c0 28-22 46-50 56-28-10-50-28-50-56V36z" fill="none" stroke={A1} strokeWidth="4.5" strokeLinejoin="round" />
      <rect x="82" y="68" width="36" height="30" rx="8" fill={AC} />
      <path d="M89 68V58a11 11 0 0 1 22 0v10" fill="none" stroke={A1} strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="82" r="4.4" fill={A1} />
      <rect x="98" y="84" width="4" height="8" rx="2" fill={A1} />
    </g>
  ),
  dash: (
    <g>
      <Window />
      <rect x="40" y="50" width="38" height="24" rx="6" fill={AC} />
      <rect x="84" y="50" width="38" height="24" rx="6" fill={A1} opacity=".9" />
      <rect x="128" y="50" width="32" height="24" rx="6" fill={A1} opacity=".16" />
      {[16, 30, 22, 40, 28, 46].map((h, i) => (
        <rect key={i} x={42 + i * 11} y={118 - h} width="7" height={h} rx="3" fill={i === 5 ? AC : A1} opacity={i === 5 ? 1 : 0.55} />
      ))}
      <circle cx="140" cy="98" r="15" fill="none" stroke={A1} strokeOpacity=".18" strokeWidth="9" />
      <circle cx="140" cy="98" r="15" fill="none" stroke={AC} strokeWidth="9" strokeDasharray="56 100" strokeLinecap="round" transform="rotate(-90 140 98)" />
    </g>
  ),
  ui: (
    <g>
      <rect x="22" y="30" width="118" height="78" rx="9" fill={A2} />
      <rect x="22" y="30" width="118" height="78" rx="9" fill="none" stroke={A1} strokeWidth="4" />
      <path d="M12 112h138l-8 10H20z" fill={A1} opacity=".9" />
      <rect x="32" y="42" width="46" height="8" rx="4" fill={A1} />
      <rect x="32" y="56" width="62" height="5" rx="2.5" fill={A1} opacity=".45" />
      <rect x="32" y="82" width="26" height="12" rx="6" fill={AC} />
      <rect x="104" y="44" width="26" height="50" rx="6" fill={AC} opacity=".95" />
      <rect x="140" y="52" width="40" height="72" rx="9" fill={A1} />
      <rect x="145" y="60" width="30" height="50" rx="5" fill={AC} />
      <circle cx="160" cy="118" r="2.2" fill={A2} />
    </g>
  ),
}

export default function ServiceArt({ kind }) {
  return (
    <svg viewBox="0 0 200 150" className="block h-full w-full" aria-hidden="true" focusable="false">
      {art[kind]}
    </svg>
  )
}

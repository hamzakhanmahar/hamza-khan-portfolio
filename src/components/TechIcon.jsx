import {
  siCss,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siMongoose,
  siMysql,
  siNodedotjs,
  siPostman,
  siPython,
  siReact,
  siTailwindcss,
} from 'simple-icons'

const icons = {
  react: siReact,
  html5: siHtml5,
  css: siCss,
  tailwind: siTailwindcss,
  node: siNodedotjs,
  express: siExpress,
  mongodb: siMongodb,
  mongoose: siMongoose,
  mysql: siMysql,
  javascript: siJavascript,
  python: siPython,
  git: siGit,
  github: siGithub,
  postman: siPostman,
}

const luminance = (hex) => {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Official brand colour, swapped for the page's off-white when it would vanish on a dark background. */
export function brandColor(key) {
  const i = icons[key]
  if (!i) return '#f3f1ee'
  return luminance(i.hex) < 0.1 ? '#f3f1ee' : `#${i.hex}`
}

export default function TechIcon({ name, size = 28 }) {
  const icon = icons[name]
  if (!icon) return null
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  )
}

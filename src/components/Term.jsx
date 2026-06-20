import { useEffect, useRef, useState } from 'react'
import { useReducedMotion, useInView } from 'framer-motion'

export function Cursor({ char = '█' }) {
  return <span className="cursor" aria-hidden="true">{char}</span>
}

export function BootLog({ lines, speed = 12, lineGap = 90, className = '' }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [shown, setShown] = useState(() => (reduce ? lines.map((l) => l.text) : lines.map(() => '')))
  const [active, setActive] = useState(-1)

  useEffect(() => {
    if (reduce || !inView) return
    let cancelled = false
    let li = 0
    let ci = 0
    const acc = lines.map(() => '')
    const timers = []
    const step = () => {
      if (cancelled) return
      if (li >= lines.length) {
        setActive(-1)
        return
      }
      setActive(li)
      const full = lines[li].text
      ci += 1
      acc[li] = full.slice(0, ci)
      setShown([...acc])
      if (ci >= full.length) {
        li += 1
        ci = 0
        timers.push(setTimeout(step, lineGap))
      } else {
        timers.push(setTimeout(step, speed))
      }
    }
    timers.push(setTimeout(step, 250))
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [inView, reduce]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={ref} className={`bootlog ${className}`} aria-hidden="true">
      {lines.map((l, i) => (
        <div key={i} className={`bootlog__line ${l.cls || ''}`}>
          <span>{shown[i]}</span>
          {!reduce && active === i && <Cursor />}
        </div>
      ))}
    </div>
  )
}

const FRAMES = ['|', '/', '-', '\\']
export function Spinner() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((n) => (n + 1) % FRAMES.length), 110)
    return () => clearInterval(t)
  }, [reduce])
  return <span aria-hidden="true">{reduce ? '*' : FRAMES[i]}</span>
}

export function BlockBar({ value = 68, width = 24, animate = true }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [pct, setPct] = useState(reduce || !animate ? value : 0)

  useEffect(() => {
    if (reduce || !animate || !inView) return
    let raf
    const start = performance.now()
    const dur = 1500
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - t, 3)
      setPct(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, animate, value])

  const filled = Math.round((pct / 100) * width)
  const bar = '#'.repeat(filled) + '-'.repeat(Math.max(0, width - filled))
  return (
    <span ref={ref} className="blockbar" aria-hidden="true">
      [{bar}] {String(pct).padStart(3, ' ')}%
    </span>
  )
}

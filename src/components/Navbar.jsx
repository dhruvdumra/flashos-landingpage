import { useEffect, useState } from 'react'
import { Github, Download, Coffee } from './Icons'
import { GITHUB_URL, RELEASES_URL, BMC_URL, APP_VERSION } from '../data/site'

const links = [
  { href: '#capabilities', label: 'caps' },
  { href: '#boot', label: 'boot' },
  { href: '#catalog', label: 'systems' },
  { href: '#support', label: 'support' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="FlashOS home">
          <i aria-hidden="true" />
          <b>flashos</b>
          <span className="nav__caret">:~</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <span className="nav__status">
          <span className="on">MEM OK</span> · UEFI · v{APP_VERSION}
        </span>

        <div className="nav__actions">
          <a className="btn btn--icon" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="FlashOS on GitHub">
            <Github width={17} height={17} />
            <span className="nav__star">star</span>
          </a>
          <a className="btn btn--icon" href={BMC_URL} target="_blank" rel="noreferrer" aria-label="Buy me a coffee">
            <Coffee width={16} height={16} />
            <span className="nav__star">donate</span>
          </a>
          <a className="btn btn--solid" href={RELEASES_URL} target="_blank" rel="noreferrer">
            <Download width={16} height={16} />
            download
          </a>
        </div>
      </div>
    </header>
  )
}

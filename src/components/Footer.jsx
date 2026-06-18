import { Github } from './Icons'
import { Cursor } from './Term'
import { GITHUB_URL, RELEASES_URL, BMC_URL } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top"><span className="i" aria-hidden="true" /><b>flashos</b></a>
          <p>One-click OS downloader and USB flasher. Pick a target, plug in, flash.</p>
        </div>

        <nav className="footer__cols" aria-label="Footer">
          <div>
            <h4>product</h4>
            <a href="#capabilities">capabilities</a>
            <a href="#boot">boot sequence</a>
            <a href="#catalog">systems</a>
            <a href={RELEASES_URL} target="_blank" rel="noreferrer">download</a>
          </div>
          <div>
            <h4>project</h4>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">github</a>
            <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noreferrer">issues</a>
            <a href={BMC_URL} target="_blank" rel="noreferrer">buy me a coffee</a>
            <a href={`${GITHUB_URL}/blob/main/LICENSE`} target="_blank" rel="noreferrer">license (mit)</a>
          </div>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span className="footer__prompt">
          flashos@web<span className="s">:~$</span> © {new Date().getFullYear()} · mit licensed<Cursor />
        </span>
        <div className="footer__right">
          <span className="footer__warn">always verify the target drive before flashing</span>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Github width={17} height={17} /></a>
        </div>
      </div>
    </footer>
  )
}

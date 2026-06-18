import Reveal from './Reveal'
import { Coffee } from './Icons'
import { BMC_URL, GITHUB_URL } from '../data/site'

export default function Donate() {
  return (
    <section className="section" id="support">
      <div className="container">
        <Reveal className="support">
          <div className="support__main">
            <div className="shead__cmd" style={{ marginBottom: 16 }}>
              <span className="p">~/flashos</span> <span className="s">$</span> <span className="c">flashos --support</span>
            </div>
            <h2>FlashOS is free.<br />Coffee keeps it shipping.</h2>
            <p className="support__lead">
              no ads, no telemetry, no paywall — just an open-source tool that does one
              thing well. If FlashOS saved you a headache, a coffee funds new OS entries,
              builds and bug fixes.
            </p>
            <a className="btn btn--solid btn--lg" href={BMC_URL} target="_blank" rel="noreferrer">
              <Coffee width={18} height={18} /> buy me a coffee
            </a>
          </div>
          <aside className="support__aside">
            <Coffee width={72} height={72} />
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">or ⭐ the repo →</a>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}

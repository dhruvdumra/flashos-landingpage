import Reveal from './Reveal'
import { Windows, Linux, Apple, Download as DownloadIcon } from './Icons'
import { RELEASES_URL, APP_VERSION } from '../data/site'

const platforms = [
  { icon: Windows, name: 'windows', file: 'FlashOS-Setup.exe', note: 'run as administrator' },
  { icon: Linux, name: 'linux', file: 'FlashOS.AppImage', note: 'chmod +x then run' },
  { icon: Apple, name: 'macos', file: 'FlashOS.dmg', note: 'drag to applications' },
]

export default function Download() {
  return (
    <section className="section section--alt" id="download">
      <div className="container">
        <Reveal className="shead">
          <div className="shead__cmd">
            <span className="p">~/flashos</span> <span className="s">$</span> <span className="c">flashos --download</span>
          </div>
          <h2 className="shead__title">Make a bootable USB in five minutes</h2>
          <p className="shead__lead">
            Free, open source, and available for every major platform. Grab the build for
            your OS — version {APP_VERSION}.
          </p>
        </Reveal>

        <div className="getgrid">
          {platforms.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.name} delay={i * 0.06} className="getrow">
                <span className="getrow__icon"><Icon width={24} height={24} /></span>
                <span className="getrow__name">{p.name}</span>
                <span className="getrow__file">{p.file}</span>
                <span className="getrow__note">{p.note}</span>
                <a className="btn btn--solid" href={RELEASES_URL} target="_blank" rel="noreferrer">
                  <DownloadIcon width={15} height={15} /> get build
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal as="p" className="getfine">
          antivirus note: tools that write to raw disk are sometimes flagged as false
          positives. The full source is public and auditable — or build it yourself.
        </Reveal>
      </div>
    </section>
  )
}

import { Download, Github, Usb } from './Icons'
import { BootLog, BlockBar, Spinner, Cursor } from './Term'
import { GITHUB_URL, RELEASES_URL, APP_VERSION } from '../data/site'
import { operatingSystems, catalogStats } from '../data/osCatalog'

const boot = [
  { text: 'FlashOS firmware ' + APP_VERSION + ' — initializing', cls: 'accent' },
  { text: 'detect usb controller .................. OK', cls: 'ok' },
  { text: 'scan removable targets ............. 1 found', cls: 'ok' },
  { text: 'load catalog .... ' + catalogStats.families + ' systems / ' + catalogStats.versions + '+ versions', cls: 'ok' },
  { text: 'ready_', cls: 'accent' },
]

const log = [
  { tag: '[OK]', label: 'download iso', cls: 'is-done' },
  { tag: '[OK]', label: 'partition gpt + uefi', cls: 'is-done' },
  { tag: 'run', label: 'copy files', cls: 'is-active' },
  { tag: '...', label: 'install bootloader', cls: '' },
]

const gridIds = ['ubuntu', 'windows', 'debian', 'fedora', 'arch', 'mint']
const gridOS = gridIds.map((id) => operatingSystems.find((o) => o.id === id))

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__head">
          <div className="hero__meta">
            FlashOS firmware · <b>v{APP_VERSION}</b> · MIT · open source
          </div>

          <h1 className="hero__title">
            Pick an OS. Plug in a USB. <span className="accent">Flash&nbsp;it.</span>
          </h1>

          <div className="hero__cmd">
            <span className="s">$</span>
            <span className="a">flashos&nbsp;</span>
            <span className="v">--flash&nbsp;&lt;os&gt;&nbsp;--to&nbsp;/dev/usb</span>
            <Cursor />
          </div>

          <p className="hero__sub">
            FlashOS downloads the operating system, detects your drive, and writes a
            bootable installer automatically. No manual ISO hunting, no Rufus, no
            command line — unless you want one.
          </p>

          <div className="hero__cta">
            <a className="btn btn--solid btn--lg" href={RELEASES_URL} target="_blank" rel="noreferrer">
              <Download width={18} height={18} /> download
            </a>
            <a className="btn btn--ghost btn--lg" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github width={17} height={17} /> view source
            </a>
          </div>

          <dl className="hero__stats">
            <div><dt>{catalogStats.families}+</dt><dd>systems</dd></div>
            <div><dt>{catalogStats.versions}+</dt><dd>versions</dd></div>
            <div><dt>3</dt><dd>platforms</dd></div>
          </dl>
        </div>

        <div className="hero__shots">
          <div className="panel shot">
            <div className="panel__bar">
              <span className="panel__dots"><i /><i /><i /></span>
              <span className="panel__name"><b>FlashOS</b> — desktop</span>
              <span className="panel__meta">GUI</span>
            </div>
            <div className="panel__body gui">
              <div className="gui__label">select target os</div>
              <div className="gui__grid">
                {gridOS.map((os) => {
                  const sel = os.id === 'ubuntu'
                  return (
                    <div
                      key={os.id}
                      className={`gui__os ${sel ? 'is-sel' : ''}`}
                      style={sel ? { borderColor: os.color } : undefined}
                    >
                      <i style={{ background: os.color }} />
                      <b>{os.name}</b>
                    </div>
                  )
                })}
              </div>
              <div className="gui__target">
                <Usb width={15} height={15} /> <b>SanDisk 32G</b>
                <span className="dim">&nbsp;/dev/sdb</span>
                <span className="free">29.8G free</span>
              </div>
              <a className="btn btn--solid btn--block" href={RELEASES_URL} target="_blank" rel="noreferrer">
                flash ubuntu 24.04 →
              </a>
              <div className="gui__hint">auto: gpt + uefi · fat32 · install.wim split if &gt; 4g</div>
            </div>
          </div>

          <div className="panel shot cli">
            <div className="panel__bar">
              <span className="panel__dots"><i /><i /><i /></span>
              <span className="panel__name"><b>flashos</b> — /dev/sdb</span>
              <span className="panel__meta">CLI</span>
            </div>
            <div className="panel__body">
              <BootLog lines={boot} />
              <div className="cli__div" />
              <div className="console__os">
                <span className="console__bar" style={{ background: '#e95420' }} />
                <span className="console__osmain">
                  <b>Ubuntu 24.04 LTS</b>
                  <span>ubuntu-24.04-desktop.iso · 6.0G</span>
                </span>
              </div>
              <div className="console__phead">
                <span>writing…</span>
                <span>do not remove drive</span>
              </div>
              <div className="console__bararea"><BlockBar value={68} width={22} /></div>
              <ul className="console__log">
                {log.map((s) => (
                  <li key={s.label} className={s.cls}>
                    <span className="console__tag">
                      {s.cls === 'is-active' ? <>[<Spinner />]</> : s.tag}
                    </span>
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
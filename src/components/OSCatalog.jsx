import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import { operatingSystems, categories, badgeMeta, catalogStats } from '../data/osCatalog'
import { RELEASES_URL } from '../data/site'

export default function OSCatalog() {
  const [active, setActive] = useState('all')
  const [selId, setSelId] = useState(operatingSystems[0].id)

  const list = useMemo(
    () => (active === 'all' ? operatingSystems : operatingSystems.filter((o) => o.category === active)),
    [active]
  )

  const selected =
    list.find((o) => o.id === selId) || list[0] || operatingSystems[0]

  const count = (id) =>
    id === 'all' ? operatingSystems.length : operatingSystems.filter((o) => o.category === id).length

  return (
    <section className="section" id="catalog">
      <div className="container">
        <Reveal className="shead">
          <div className="shead__cmd">
            <span className="p">~/flashos</span> <span className="s">$</span> <span className="c">flashos --list-targets</span>
          </div>
          <h2 className="shead__title">{catalogStats.families} systems, {catalogStats.versions}+ versions</h2>
          <p className="shead__lead">
            Select a target to flash. The catalog updates over the air, so new entries
            appear without a reinstall. From Windows and Ubuntu LTS to Arch, Kali and Alpine.
          </p>
        </Reveal>

        <Reveal>
          <div className="seltabs" role="tablist" aria-label="Filter systems">
            {categories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                className={`seltabs__btn ${active === c.id ? 'is-active' : ''}`}
                onClick={() => setActive(c.id)}
              >
                {c.label}<span className="n">{count(c.id)}</span>
              </button>
            ))}
          </div>

          <div className="selector">
            <ul className="bootmenu" role="listbox" aria-label="Operating systems">
              {list.map((os, i) => (
                <li key={os.id}>
                  <button
                    role="option"
                    aria-selected={selected.id === os.id}
                    className={`bootrow ${selected.id === os.id ? 'is-sel' : ''}`}
                    onClick={() => setSelId(os.id)}
                  >
                    <span className="bootrow__caret">&gt;</span>
                    <span className="bootrow__dot" style={{ background: os.color }} />
                    <span className="bootrow__idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="bootrow__name">{os.name.toLowerCase()}</span>
                    <span className="bootrow__rel">{os.release}</span>
                    <span className="bootrow__lead" />
                    <span className="bootrow__size">{os.size}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="detail" key={selected.id}>
              <span className="detail__bar" style={{ background: selected.color }} />
              <div className="detail__body">
                <div className="detail__top">
                  <span className="detail__name">{selected.name}</span>
                  <span className="detail__badge">{badgeMeta[selected.badge]?.label || selected.badge}</span>
                </div>
                <p className="detail__desc">{selected.description}</p>

                <dl className="detail__specs">
                  <div className="detail__spec"><dt>release</dt><dd>{selected.release}</dd></div>
                  <div className="detail__spec"><dt>iso size</dt><dd>{selected.size}</dd></div>
                  <div className="detail__spec"><dt>versions</dt><dd>{selected.versions}</dd></div>
                  <div className="detail__spec"><dt>category</dt><dd>{selected.category}</dd></div>
                </dl>

                <div className="detail__cmd">
                  <span className="s">$ </span>flashos --flash <span className="v">{selected.id}</span> --to /dev/usb
                </div>

                <a className="btn btn--solid btn--block detail__flash" href={RELEASES_URL} target="_blank" rel="noreferrer">
                  flash {selected.name.toLowerCase()}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

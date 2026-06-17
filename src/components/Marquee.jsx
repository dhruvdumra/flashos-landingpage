import { operatingSystems } from '../data/osCatalog'

export default function Marquee() {
  const loop = [...operatingSystems, ...operatingSystems]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((os, i) => (
          <span className="marquee__item" key={`${os.id}-${i}`}>
            <i style={{ background: os.color }} />
            {os.name.toLowerCase()}
          </span>
        ))}
      </div>
    </div>
  )
}

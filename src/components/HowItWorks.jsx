import Reveal from './Reveal'

const steps = [
  { n: '01', title: 'pick an operating system', body: 'Choose from 14+ systems and dozens of versions. FlashOS fetches the official ISO for you.' },
  { n: '02', title: 'plug in your usb drive', body: 'Drives are detected automatically. Select the right one — a confirmation guards against mistakes.' },
  { n: '03', title: 'firmware is detected', body: 'It picks GPT + UEFI or MBR + BIOS and the correct filesystem based on your machine and ISO size.' },
  { n: '04', title: 'partition, format & copy', body: 'The drive is partitioned and formatted, files are copied, and install.wim is split if it exceeds 4 GB.' },
  { n: '05', title: 'bootloader written — done', body: 'The bootloader is installed and your USB is ready to boot. The whole thing took one click.' },
]

const firmware = [
  { fw: 'UEFI (modern PC)', scheme: 'GPT', fs: 'FAT32', note: 'Windows ISOs split via wimlib' },
  { fw: 'BIOS (older PC)', scheme: 'MBR', fs: 'FAT32 / NTFS', note: 'NTFS for ISOs over 4 GB' },
  { fw: 'macOS', scheme: 'GPT', fs: '—', note: 'Uses dd directly' },
]

export default function HowItWorks() {
  return (
    <section className="section section--alt" id="boot">
      <div className="container">
        <Reveal className="shead">
          <div className="shead__cmd">
            <span className="p">~/flashos</span> <span className="s">$</span> <span className="c">flashos --boot-sequence</span>
          </div>
          <h2 className="shead__title">Five steps. You do the first two.</h2>
          <p className="shead__lead">
            Everything after "plug in the drive" is automatic. Here is exactly what
            happens under the hood.
          </p>
        </Reveal>

        <ol className="seq">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.05} className="seq__item">
              <div className="seq__tag">
                proc <b>[{s.n}]</b>{i < steps.length - 1 ? '' : <span className="seq__done"> · complete</span>}
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="fwtable" delay={0.1}>
          <div className="fwtable__head">
            <div className="t">// partition logic</div>
            <h3>Picks the right scheme automatically</h3>
          </div>
          <div role="table" aria-label="Partition logic by firmware">
            <div className="fwtable__row fwtable__row--head" role="row">
              <span role="columnheader">firmware</span>
              <span role="columnheader">scheme</span>
              <span role="columnheader">filesystem</span>
              <span role="columnheader">notes</span>
            </div>
            {firmware.map((r) => (
              <div className="fwtable__row" role="row" key={r.fw}>
                <span role="cell" data-label="firmware">{r.fw}</span>
                <span role="cell" data-label="scheme">{r.scheme}</span>
                <span role="cell" data-label="filesystem">{r.fs}</span>
                <span role="cell" data-label="notes" className="fwtable__note">{r.note}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

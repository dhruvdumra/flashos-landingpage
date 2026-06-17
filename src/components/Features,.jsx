import Reveal from './Reveal'

const caps = [
  {
    key: 'core',
    title: 'one_click_flash',
    body: 'Pick an OS, pick a drive, hit flash. FlashOS handles the download, partitioning, formatting and bootloader for you.',
    accent: true,
  },
  {
    key: 'fw.detect',
    title: 'auto_firmware',
    body: 'Detects your machine and selects GPT + UEFI or MBR + BIOS automatically — no guesswork, no wrong scheme.',
  },
  {
    key: 'fs.wim',
    title: 'fat32_4gb_fix',
    body: 'Large Windows ISOs? FlashOS splits install.wim with wimlib so it fits FAT32 without you lifting a finger.',
  },
  {
    key: 'io.live',
    title: 'live_progress',
    body: 'Real-time download and flash progress with clear, stage-by-stage feedback so you always know what is happening.',
  },
  {
    key: 'usb.scan',
    title: 'usb_autodetect',
    body: 'Plugged-in drives appear automatically and refresh every 5 seconds. Confirmation prompt before any write.',
  },
  {
    key: 'sys.xplat',
    title: 'cross_platform',
    body: 'One codebase runs natively on Windows, Linux and macOS — with a matching CLI for headless setups.',
  },
]

export default function Features() {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <Reveal className="shead">
          <div className="shead__cmd">
            <span className="p">~/flashos</span> <span className="s">$</span> <span className="c">flashos --capabilities</span>
          </div>
          <h2 className="shead__title">Everything Rufus does, automated</h2>
          <p className="shead__lead">
            FlashOS automates the tedious, error-prone parts of making a bootable USB —
            go from "I need to install an OS" to a working drive in minutes.
          </p>
        </Reveal>

        <div className="caps">
          {caps.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.05}
              className={`cap ${c.accent ? 'cap--accent' : ''}`}
            >
              <div className="cap__key">
                <span>[{String(i + 1).padStart(2, '0')}]</span>
                <b>{c.key}</b>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

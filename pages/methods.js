import Link from 'next/link';

export default function Methods({ brightness, setBrightness }) {
  return (
    <main className="wrap fadeIn">
      <header className="hdr">
        <h1 className="logo">exmade</h1>
        <div className="hdr-actions">
          <input
            aria-label="Brightness slider"
            type="range"
            min="0.5"
            max="1.5"
            step="0.05"
            value={brightness}
            onChange={e => setBrightness(parseFloat(e.target.value))}
            className="brightness-slider"
          />
        </div>
      </header>

      <section className="content">
        <a
          className="link-card btn-fade"
          href="https://app.splunk.gg/u/exmadeGG"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="ln">SPLUNK</div>
          <div className="sub">Open in new tab</div>
        </a>

        <a
          className="link-card btn-fade"
          href="https://www.logged.tg/auth/exmade"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="ln">INJURIES</div>
          <div className="sub">Open in new tab</div>
        </a>

        <a
          className="link-card btn-fade"
          href="https://dsprs.vercel.app/hyperlink"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="ln">HyperLink Gen</div>
          <div className="sub">Open in new tab</div>
        </a>

        <a
          className="link-card btn-fade"
          href="https://app.splunk.gg/u/exmadeGG"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="ln">Cookie Bypasser</div>
          <div className="sub">Open in new tab</div>
        </a>

        <nav className="btn-row" aria-label="Navigation buttons">
          <Link href="/" passHref>
            <a className="btn small btn-fade">Go Back</a>
          </Link>
        </nav>
      </section>
    </main>
  );
}

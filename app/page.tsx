import Seasons from "./components/Seasons";
import { profile, recap, seasons, spinoffs, awards, scrapbook, crew } from "@/lib/show";

const episodeCount = seasons.reduce((n, s) => n + s.episodes.length, 0);
const ticker = ["Product", "Drama", "0 → 1", "User research", "Fintech", "GenAI", "Shipping on time", "Plot twists", "A/B tests", "Diet Coke"];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#top" className="nav-logo">
          AR<span>tv</span>
        </a>
        <nav>
          <a href="#seasons">Seasons</a>
          <a href="#spinoffs">Spin-offs</a>
          <a href="#bts">Behind the scenes</a>
          <a href="#credits" className="nav-cta">
            Cast me
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="hero-inner">
          <p className="eyebrow">
            <span className="dot" /> Now airing · Season 3
          </p>
          <h1 className="title">
            <span>{profile.showTitle[0]}</span>
            <span className="title-name">{profile.showTitle[1]}</span>
            <span>{profile.showTitle[2]}</span>
          </h1>
          <p className="hero-meta">
            <b>98% match for APM roles</b>
            <span>2019 – present</span>
            <span>{seasons.length} seasons</span>
            <span>{episodeCount} episodes</span>
            <span className="rating">PM</span>
          </p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#seasons" className="btn btn-primary">
              ▶ Start watching
            </a>
            <a href="#credits" className="btn btn-ghost">
              + Cast Abitha
            </a>
          </div>
          <p className="starring">
            Starring <strong>{profile.name}</strong> · Product manager in the making · ISB PGP ’27
          </p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i}>{t} ✦</span>
          ))}
        </div>
      </div>

      <section className="section" id="recap">
        <p className="section-kicker">Previously on</p>
        <h2 className="section-title">The story so far</h2>
        <div className="recap-grid">
          {recap.map((r) => (
            <article key={r.kicker} className="recap-card">
              <span>{r.kicker}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="seasons">
        <p className="section-kicker">Episodes</p>
        <h2 className="section-title">Pick a season</h2>
        <Seasons seasons={seasons} />
      </section>

      <section className="section" id="spinoffs">
        <p className="section-kicker">Spin-offs</p>
        <h2 className="section-title">Things built between episodes</h2>
        <div className="poster-grid">
          {spinoffs.map((p) => (
            <article key={p.title} className="poster">
              <div
                className="poster-art"
                style={{ background: `linear-gradient(140deg, ${p.from}, ${p.to})` }}
              >
                <span className="poster-mark">{p.mark}</span>
                <span className="poster-genre">{p.genre}</span>
                <h3>{p.title}</h3>
              </div>
              <p>{p.blurb}</p>
              <div className="poster-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    ▶ Watch live
                  </a>
                )}
                <a href={p.code} target="_blank" rel="noreferrer">
                  Code ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="awards">
        <p className="section-kicker">Awards season</p>
        <h2 className="section-title">What the critics said</h2>
        <div className="awards-grid">
          {awards.map((a) => (
            <div key={a.label} className="award">
              <strong>{a.big}</strong>
              <span>{a.label}</span>
              <small>{a.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="bts" id="bts">
        <div className="bts-inner">
          <p className="section-kicker">Behind the scenes</p>
          <h2 className="section-title">The bits that didn’t fit in an episode</h2>
          <div className="polaroids">
            {scrapbook.map((s) => (
              <figure
                key={s.caption}
                className="polaroid"
                style={{ ["--tilt" as string]: `${s.tilt}deg` }}
              >
                <span className="tape" />
                <div className="polaroid-photo" style={{ background: s.tint }}>
                  {s.emoji}
                </div>
                <figcaption>
                  <strong>{s.caption}</strong>
                  {s.note}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="crew">
            <h3>The crew</h3>
            <p className="crew-note">(a.k.a. tools I actually use)</p>
            <div className="crew-grid">
              {crew.map((c) => (
                <div key={c.role}>
                  <h4>{c.role}</h4>
                  <ul>
                    {c.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="credits" id="credits">
        <div className="blob blob-c" />
        <p className="section-kicker">End credits</p>
        <h2>
          Renewed for Season 4.
          <br />
          <em>Now casting a product team.</em>
        </h2>
        <p className="credits-sub">
          Looking for APM and product roles from 2027. If your team has an opening, I’d love to hear
          about it.
        </p>
        <div className="hero-actions">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
            Message me on LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            GitHub ↗
          </a>
        </div>
        <p className="disclaimer">
          No Diet Cokes were harmed in the making of this portfolio. Several were consumed.
        </p>
        <p className="copyright">Written, produced and starring {profile.name} · © 2026</p>
      </footer>
    </main>
  );
}

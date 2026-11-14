"use client";

import { useState } from "react";
import type { Season } from "@/lib/show";

export default function Seasons({ seasons }: { seasons: Season[] }) {
  const [active, setActive] = useState(seasons.length - 1);
  const season = seasons[active];

  return (
    <div style={{ ["--season" as string]: season.color }}>
      <div className="season-tabs" role="tablist" aria-label="Seasons">
        {seasons.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === active}
            className={`season-tab ${i === active ? "is-active" : ""}`}
            style={{ ["--season" as string]: s.color }}
            onClick={() => setActive(i)}
          >
            <span className="season-tab-num">S{s.number}</span>
            <span className="season-tab-text">
              <strong>{s.title}</strong>
              <small>{s.setting}</small>
            </span>
          </button>
        ))}
      </div>

      <div className="season-head" key={season.id}>
        <div>
          <p className="season-meta">
            Season {season.number} · {season.years} · {season.episodes.length} episodes
            {season.status && <span className="live-pill">{season.status}</span>}
          </p>
          <h3 className="season-title">{season.title}</h3>
        </div>
        <p className="season-synopsis">{season.synopsis}</p>
      </div>

      <ol className="episodes" key={season.id + "-eps"}>
        {season.episodes.map((ep, i) => (
          <li
            key={ep.title}
            className={`episode ${ep.upcoming ? "is-upcoming" : ""}`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <span className="ep-num">{String(i + 1).padStart(2, "0")}</span>
            <div className="ep-body">
              <h4>{ep.title}</h4>
              <p>{ep.logline}</p>
              <div className="ep-tags">
                {ep.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
                {ep.link && (
                  <a href={ep.link.href} target="_blank" rel="noreferrer">
                    {ep.link.label} ↗
                  </a>
                )}
              </div>
            </div>
            <div className="ep-stat">
              <strong>{ep.stat}</strong>
              <small>{ep.statLabel}</small>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

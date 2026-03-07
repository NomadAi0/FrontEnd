import { useState, useEffect, useRef } from "react";

function SEOHead() {
  useEffect(() => {
    document.title = "The World Is At War — Again | The Nomad Review";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "An unflinching look at the wars reshaping our world in 2026 — the US-Israel strikes on Iran, the grinding war in Ukraine, the forgotten catastrophe in Sudan, and what it all means for the global order.");
    setMeta("keywords", "Iran war 2026, US Israel Iran strikes, Ukraine war 2026, Sudan civil war, global conflicts 2026, Operation Epic Fury, Middle East war, Strait of Hormuz, Khamenei death, war news");
    setMeta("robots", "index, follow");
    setMeta("author", "The Nomad Review");
    setMeta("viewport", "width=device-width, initial-scale=1");
    setMeta("og:title", "The World Is At War — Again | The Nomad Review", true);
    setMeta("og:description", "From Tehran to Kyiv to Khartoum — a sharp editorial on every major conflict burning right now, and what they mean for the rest of us.", true);
    setMeta("og:type", "article", true);
    setMeta("og:site_name", "The Nomad Review", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "The World Is At War — Again | The Nomad Review");
    setMeta("twitter:description", "Iran. Ukraine. Sudan. Myanmar. The world is burning on multiple fronts. Here's everything you need to know.");
    setMeta("article:published_time", "2026-03-06T09:00:00Z");
    setMeta("article:section", "War & Conflict");

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "The World Is At War — Again",
      "description": "An unflinching editorial on every major conflict burning in 2026.",
      "author": { "@type": "Organization", "name": "The Nomad Review" },
      "publisher": { "@type": "Organization", "name": "The Nomad Review" },
      "datePublished": "2026-03-06",
      "dateModified": "2026-03-06",
      "articleSection": "War & Conflict",
      "keywords": ["Iran war", "Ukraine", "Sudan", "Myanmar", "Middle East", "global conflict 2026"]
    };
    let ld = document.querySelector("#ld-json") as HTMLScriptElement;
    if (!ld) { ld = document.createElement("script"); ld.id = "ld-json"; ld.type = "application/ld+json"; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify(schema);
  }, []);
  return null;
}

const conflicts = [
  {
    id: "iran",
    label: "BREAKING",
    labelBg: "#c0392b",
    theater: "Middle East",
    headline: "Operation Epic Fury: The War Nobody Voted For",
    subhead: "On February 28, the United States and Israel launched strikes on Iran. Six days later, the Middle East is on fire — and nobody has an exit plan.",
    lede: `It began before most of the world woke up. In the early hours of February 28, 2026, a coordinated barrage of US and Israeli missiles struck Tehran — targeting Iran's supreme leader compound, military installations, and nuclear infrastructure. By morning, Supreme Leader Ali Khamenei was dead. The Middle East had not seen a moment like it since the fall of Saddam Hussein.`,
    body: [
      `What followed was swift, brutal, and is still unfolding. Iran retaliated with over 500 ballistic missiles and nearly 2,000 drones, aimed at both Israeli territory and the 27 US military bases spread across the Gulf. Kuwait has intercepted 178 ballistic missiles and 384 drones. The UAE intercepted 169 missiles. Bahrain, Qatar, and Saudi Arabia have all reported strikes on their territory. An Iranian ballistic missile struck the Al Udeid air base in Qatar — home to the forward headquarters of US Central Command. Qatar Airways has suspended all flights. Schools are closed.`,
      `The human toll is rising by the hour. Iranian state media put the death toll inside Iran at over 1,000, with more than 6,000 wounded in just five days. Eleven Israelis have been killed. Six US service members died in a drone strike on a port in Kuwait. In Lebanon, 77 people have been killed in Israeli strikes on Hezbollah infrastructure, with another 527 wounded. A US submarine sank an Iranian frigate in the Indian Ocean — off the coast of Sri Lanka — expanding the warzone to waters most people had never imagined.`,
      `The stated goals have shifted almost daily. Initially framed as strikes on Iran's nuclear programme, Trump released a video statement at 2:30am Eastern on February 28 declaring the true purpose was "effectively regime change." Netanyahu went on Fox News to promise that Operation Epic Fury would deliver "an era of peace we haven't even dreamed of." Defense Secretary Hegseth told reporters that the US and Israel expect "complete control of Iranian skies" within days, adding that Iran will be "looking up and seeing only us and Israeli air power every minute of every day, until we decide it's over."`,
      `The Senate voted down an effort to halt the war, clearing the path for Trump to continue without explicit congressional authorisation. Trump has said he expects the campaign to last four to five weeks. There is no clear exit strategy. The Strait of Hormuz — through which roughly 20% of the world's oil passes — has effectively shut down for commercial tankers. Oil markets are in freefall. And in northwest Iran, Kurdish armed groups have reportedly launched a ground offensive against the Islamic government, adding yet another front to a conflict that is already the most complex military operation the United States has conducted in decades.`,
    ],
    stats: [
      { value: "1,000+", label: "dead in Iran in 5 days" },
      { value: "2,000+", label: "Iranian drones & missiles launched" },
      { value: "20%", label: "of world oil at risk via Hormuz" },
    ],
    quote: "The US and Israel have successfully destroyed a significant portion of Iran's military capabilities. With air supremacy achieved, Israeli and US jets are able to fly uncontested over Iranian territory.",
    quoteSource: "— US & Western officials, March 2026",
    pullLine: "There is no clear exit strategy. The Strait of Hormuz has shut down. Oil markets are in freefall.",
  },
  {
    id: "ukraine",
    label: "YEAR 4",
    labelBg: "#2c5f8a",
    theater: "Eastern Europe",
    headline: "Ukraine: The War the World Stopped Watching",
    subhead: "Russia's invasion is now in its fourth year. The front lines have barely moved. The cost has been staggering. And now Ukraine is being asked to help fight someone else's war.",
    lede: `Four years into the largest land war in Europe since 1945, the conflict in Ukraine has settled into a grim stalemate that neither side can break and neither side will end. Heavy fighting continues in the Donbas. Russian missile and drone strikes on Ukrainian infrastructure are a near-daily reality. And Western military aid — once flowing freely — has become entangled in the politics of a changed Washington.`,
    body: [
      `The numbers are almost too large to absorb. Hundreds of thousands of casualties on both sides. Millions displaced. Ukraine's energy grid has been systematically destroyed and rebuilt, destroyed and rebuilt, in a grinding war of attrition that Moscow has calculated it can sustain longer than Kyiv can endure. Russia captured Bakhmut in 2023 at enormous cost — a symbolic gain that illustrated the brutal arithmetic of this conflict: every kilometer of ground costs thousands of lives.`,
      `Now Ukraine finds itself drawn into the new Middle East crisis in a way that would have seemed surreal even a year ago. Ukrainian President Zelensky has offered to deploy Ukrainian experts to Gulf nations to help defend against Iranian drone and missile attacks — the same Shahed drones that Russia has been raining down on Ukrainian cities. Trump has accepted the offer. Ukraine, a country fighting for its own survival, is being asked to share its hard-won knowledge of drone warfare with a conflict on the other side of the world.`,
      `The deeper question — one that few Western capitals are addressing directly — is what happens to Ukraine's support now that American attention and resources are consumed by the Iran campaign. The Council on Foreign Relations has rated a Russia-NATO clash as having an "even chance" of occurring in 2026. The risk of great power miscalculation has never been higher in the post-Cold War era.`,
    ],
    stats: [
      { value: "4th", label: "year of Russia's full-scale invasion" },
      { value: "Millions", label: "displaced inside Ukraine" },
      { value: "50%", label: "even odds of Russia-NATO clash in 2026" },
    ],
    quote: "Peace talks have been discussed multiple times, but a permanent solution has not yet been reached.",
    quoteSource: "— Global conflict analysts, 2026",
    pullLine: "Ukraine is fighting for its survival while being asked to share its drone expertise with a war on the other side of the world.",
  },
  {
    id: "sudan",
    label: "FORGOTTEN",
    labelBg: "#7d4a1a",
    theater: "Northeast Africa",
    headline: "Sudan: The War the Cameras Don't Show",
    subhead: "More than two years into a civil war that has produced some of the worst atrocities of the 21st century, Sudan remains nearly invisible in the Western news cycle.",
    lede: `In October 2025, the Rapid Support Forces — a paramilitary group that grew from the same militias that carried out the Darfur genocide — seized the town of El Fasher. What followed was a killing spree. Gruesome footage circulated on social media. The UN and human rights groups issued urgent warnings. The world largely looked away.`,
    body: [
      `Sudan's civil war erupted in April 2023, triggered by a power struggle within the military junta that had governed the country since the fall of Omar al-Bashir. The war pits the Sudanese Armed Forces against the RSF — a force that had grown enormously wealthy through gold trafficking and foreign contracts in Yemen. Both sides have committed atrocities. Both sides have received support from foreign powers pursuing their own interests in the region.`,
      `The humanitarian catastrophe is almost incomprehensible in scale. The UN has described the situation in Darfur as potentially the worst humanitarian crisis on earth. Food, medicine, and aid cannot reach most of the country. And the international community's response has been, at best, inadequate. Trump pledged personally to help end the war in November 2025. Nothing has materialised.`,
      `Sudan is a reminder of a brutal geopolitical truth: the urgency with which the world responds to a conflict is determined not by the suffering of its victims, but by the strategic interests of the nations powerful enough to intervene. In 2026, those nations are busy elsewhere.`,
    ],
    stats: [
      { value: "2023", label: "year the war erupted" },
      { value: "Millions", label: "facing famine conditions" },
      { value: "0", label: "credible peace talks underway" },
    ],
    quote: "Gruesome footage from Darfur, where the RSF went on a killing spree after seizing the town of El Fasher in late October, should spur greater efforts to end a war that remains largely ignored.",
    quoteSource: "— International Crisis Group, January 2026",
    pullLine: "The urgency with which the world responds to a conflict is determined not by the suffering of its victims, but by the strategic interests of the nations powerful enough to intervene.",
  },
  {
    id: "myanmar",
    label: "ONGOING",
    labelBg: "#5a3a7e",
    theater: "Southeast Asia",
    headline: "Myanmar: The Most Fragmented War on Earth",
    subhead: "Since a military coup in 2021 shattered a decade of democratic progress, Myanmar has descended into a conflict involving over 1,600 armed factions. It has produced over 80,000 deaths and three million displaced.",
    lede: `The military junta that seized power in Myanmar in February 2021 believed it could crush resistance quickly. Five years later, the Tatmadaw controls roughly one fifth of Myanmar's territory — down from near-total control at the start of the war. The country has fragmented into a patchwork of competing armed groups, ethnic militias, and resistance forces, making it arguably the most complex armed conflict on the planet.`,
    body: [
      `Over 80,000 people have been killed since 2021. More than three million are internally displaced, with another million having fled the country entirely. Myanmar, one of the poorest nations in Asia, is being destroyed not by one war but by dozens of overlapping ones, each with its own history, grievances, and goals.`,
      `A severe earthquake struck in March 2026, prompting various ceasefires as humanitarian access became even more critical. But many of those ceasefires have already been broken. Rebel groups used the pause to demonstrate governance capabilities — distributing aid, reopening schools. The Tatmadaw used it to regroup and launch targeted attacks. Even disaster has been weaponised.`,
      `China's shadow looms large. Beijing has gradually increased its influence along its shared border with Myanmar, reportedly supporting the junta in fear that a military collapse would destabilise the region and undermine Chinese infrastructure investments. As with so many conflicts in 2026, the great powers are present — shaping outcomes while avoiding accountability.`,
    ],
    stats: [
      { value: "80,000+", label: "killed since 2021 coup" },
      { value: "1,600+", label: "armed factions involved" },
      { value: "⅕", label: "of territory still held by junta" },
    ],
    quote: "The current war is considered the most fragmented in the world, involving at least 1,600 different ethnic and political groups with a multitude of alliances and goals.",
    quoteSource: "— Conflict analysts, 2026",
    pullLine: "Even disaster has been weaponised. The earthquake ceasefires were broken within days.",
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function ConflictCard({ conflict, index }: { conflict: typeof conflicts[0]; index: number }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`conflict-card ${visible ? "visible" : ""}`} style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="card-header">
        <span className="conflict-label" style={{ background: conflict.labelBg }}>{conflict.label}</span>
        <span className="conflict-theater">{conflict.theater}</span>
      </div>
      <h2 className="conflict-headline">{conflict.headline}</h2>
      <p className="conflict-subhead">{conflict.subhead}</p>
      <div className="stat-strip">
        {conflict.stats.map((s, i) => (
          <div key={i} className="mini-stat">
            <div className="mini-stat-value">{s.value}</div>
            <div className="mini-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="conflict-body">
        <p className="lede-para">{conflict.lede}</p>
        {conflict.body.map((para, i) => {
          if (i === 1) return (
            <div key={i}>
              <blockquote className="inline-quote">
                <p>"{conflict.pullLine}"</p>
              </blockquote>
              <p>{para}</p>
            </div>
          );
          return <p key={i}>{para}</p>;
        })}
      </div>
      <div className="source-quote">
        <p className="sq-text">"{conflict.quote}"</p>
        <p className="sq-source">{conflict.quoteSource}</p>
      </div>
    </div>
  );
}

export default function WarBlog() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
    const onScroll = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, p * 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SEOHead />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0d0d0d;
          --surface: #141414;
          --border: #2a2a2a;
          --text: #e8e4da;
          --muted: #8a8278;
          --accent: #c0392b;
          --gold: #c9962a;
          --mono: 'IBM Plex Mono', monospace;
          --serif: 'IBM Plex Serif', Georgia, serif;
          --display: 'Bebas Neue', Impact, sans-serif;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--serif);
          line-height: 1.75;
          overflow-x: hidden;
        }

        ::selection { background: var(--accent); color: white; }

        .progress-bar {
          position: fixed; top: 0; left: 0;
          height: 3px; background: var(--accent);
          z-index: 200; transition: width 0.1s linear;
          box-shadow: 0 0 10px var(--accent);
        }

        /* MASTHEAD */
        .masthead {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 1.2rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky; top: 0; z-index: 100;
        }
        .masthead-name {
          font-family: var(--display);
          font-size: 1.6rem;
          letter-spacing: 0.1em;
          color: var(--text);
        }
        .masthead-date {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .masthead-live {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .live-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        /* HERO */
        .hero {
          max-width: 900px;
          margin: 0 auto;
          padding: 5rem 2rem 3rem;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero.visible { opacity: 1; transform: translateY(0); }

        .hero-kicker {
          font-family: var(--mono);
          font-size: 0.62rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .hero-kicker::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--accent);
          opacity: 0.4;
        }

        .hero-headline {
          font-family: var(--display);
          font-size: clamp(3rem, 9vw, 7rem);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: var(--text);
          margin-bottom: 2rem;
        }

        .hero-headline span {
          color: var(--accent);
        }

        .hero-deck {
          font-size: 1.1rem;
          color: var(--muted);
          font-style: italic;
          line-height: 1.7;
          max-width: 640px;
          border-left: 3px solid var(--accent);
          padding-left: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .hero-meta {
          display: flex;
          gap: 1.5rem;
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          border-top: 1px solid var(--border);
          padding-top: 1.25rem;
          flex-wrap: wrap;
        }

        .conflict-toc {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border);
        }

        .toc-chip {
          font-family: var(--mono);
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.35rem 0.75rem;
          border: 1px solid var(--border);
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .toc-chip:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* MAIN */
        .main-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }

        /* CONFLICT CARD */
        .conflict-card {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 1px solid var(--border);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .conflict-card.visible {
          opacity: 1; transform: translateY(0);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .conflict-label {
          font-family: var(--mono);
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem;
          color: white;
          border-radius: 2px;
        }

        .conflict-theater {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .conflict-headline {
          font-family: var(--display);
          font-size: clamp(1.8rem, 5vw, 3.2rem);
          line-height: 1.0;
          letter-spacing: 0.02em;
          color: var(--text);
          margin-bottom: 0.75rem;
        }

        .conflict-subhead {
          font-size: 1rem;
          font-style: italic;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 700px;
        }

        .stat-strip {
          display: flex;
          gap: 0;
          margin: 1.5rem 0 2rem;
          border: 1px solid var(--border);
        }

        .mini-stat {
          flex: 1;
          padding: 1.25rem 1rem;
          border-right: 1px solid var(--border);
          text-align: center;
        }
        .mini-stat:last-child { border-right: none; }

        .mini-stat-value {
          font-family: var(--display);
          font-size: 1.8rem;
          color: var(--text);
          line-height: 1;
        }

        .mini-stat-label {
          font-family: var(--mono);
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.35rem;
          line-height: 1.4;
        }

        .conflict-body {
          font-size: 1rem;
          line-height: 1.85;
          color: var(--text);
        }
        .conflict-body p { margin-bottom: 1.2rem; }

        .lede-para {
          font-size: 1.08rem;
          font-weight: 600;
          color: var(--text);
        }

        .inline-quote {
          margin: 2rem 0;
          padding: 1.25rem 1.5rem;
          border-left: 4px solid var(--accent);
          background: var(--surface);
          font-style: italic;
          font-size: 1.05rem;
          color: var(--text);
          line-height: 1.6;
        }

        .source-quote {
          margin-top: 2rem;
          padding: 1.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .sq-text {
          font-style: italic;
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .sq-source {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
        }

        /* CLOSING */
        .closing-block {
          border-top: 3px solid var(--accent);
          padding: 3rem 0;
          margin-top: 4rem;
        }
        .closing-block h2 {
          font-family: var(--display);
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: var(--text);
          margin-bottom: 1rem;
        }
        .closing-block p {
          font-size: 0.98rem;
          color: var(--muted);
          font-style: italic;
          line-height: 1.8;
          margin-bottom: 1rem;
          max-width: 680px;
        }

        .tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 2.5rem;
        }
        .tag-pill {
          font-family: var(--mono);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem;
          border: 1px solid var(--border);
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .tag-pill:hover { border-color: var(--text); color: var(--text); }

        /* FOOTER */
        footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 2.5rem 2rem;
          text-align: center;
        }
        .footer-name {
          font-family: var(--display);
          font-size: 1.5rem;
          letter-spacing: 0.15em;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        .footer-copy {
          font-family: var(--mono);
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 600px) {
          .masthead { flex-direction: column; gap: 0.5rem; text-align: center; }
          .stat-strip { flex-direction: column; }
          .mini-stat { border-right: none; border-bottom: 1px solid var(--border); }
          .mini-stat:last-child { border-bottom: none; }
          .hero { padding: 3rem 1.25rem 2rem; }
          .main-wrap { padding: 0 1.25rem 4rem; }
        }
      `}</style>

      <div style={{ width: `${progress}%` }} className="progress-bar" />

      <header className="masthead" role="banner">
        <div className="masthead-name">The Nomad Review</div>
        <div className="masthead-live"><span className="live-dot" />Live Coverage</div>
        <div className="masthead-date">March 6, 2026 · War & Conflict</div>
      </header>

      <main>
        <article itemScope itemType="https://schema.org/NewsArticle">
          <div className={`hero ${mounted ? "visible" : ""}`}>
            <div className="hero-kicker">Special War Report · March 2026</div>
            <h1 className="hero-headline" itemProp="headline">
              The World Is<br />At <span>War</span><br />— Again
            </h1>
            <p className="hero-deck" itemProp="description">
              Iran is burning. Ukraine grinds on into its fourth year. Sudan is being destroyed in near-total silence. Myanmar is fracturing into a thousand pieces. As of March 2026, there are nine major active armed conflicts on earth. Here is what is actually happening — and what it means.
            </p>
            <div className="hero-meta">
              <span itemProp="author">The Nomad Review Editorial Board</span>
              <span>·</span>
              <time dateTime="2026-03-06" itemProp="datePublished">March 6, 2026</time>
              <span>·</span>
              <span>16 min read</span>
              <span>·</span>
              <span itemProp="articleSection">War & Conflict</span>
            </div>
            <nav className="conflict-toc" aria-label="Conflict sections">
              {conflicts.map(c => (
                <a key={c.id} href={`#${c.id}`} className="toc-chip" style={{ textDecoration: "none" }}>
                  {c.theater}
                </a>
              ))}
            </nav>
          </div>

          <div className="main-wrap">
            {conflicts.map((c, i) => (
              <div key={c.id} id={c.id}>
                <ConflictCard conflict={c} index={i} />
              </div>
            ))}

            <div className="closing-block">
              <h2>What Comes Next</h2>
              <p>
                Nine active armed conflicts. Millions displaced. A new war in the Middle East with no exit strategy. A grinding stalemate in Europe. Forgotten catastrophes in Africa and Asia. The world in March 2026 is more violent, more fragmented, and more unpredictable than at any point since the Cold War's end.
              </p>
              <p>
                What is most striking — and most alarming — is not the wars themselves. Wars, tragically, are a constant of human history. What is striking is the collapse of the mechanisms that once contained them: international institutions, diplomatic back-channels, the credibility of international law, the basic principle that civilian infrastructure cannot be a military target. Each of these guardrails is being dismantled, quietly or loudly, by the very powers that built them.
              </p>
              <p>
                The children in a school in Minab who woke up on the morning of February 28 did not start a war. They are paying for one. That is the oldest and most enduring truth of armed conflict — and the one that the world's leaders seem most determined to forget.
              </p>
            </div>

            <nav className="tags-row" aria-label="Article tags">
              {["Iran War 2026", "Operation Epic Fury", "Ukraine War", "Sudan Civil War", "Myanmar", "Middle East", "Strait of Hormuz", "Khamenei", "Global Conflict", "US Military", "Israel", "IRGC", "War Crimes", "Humanitarian Crisis"].map(t => (
                <span key={t} className="tag-pill" tabIndex={0} role="link">{t}</span>
              ))}
            </nav>
          </div>
        </article>
      </main>

      <footer role="contentinfo">
        <div className="footer-name">The Nomad Review</div>
        <div className="footer-copy">© 2026 · All rights reserved · Independent analysis on a world at war</div>
      </footer>
    </>
  );
}
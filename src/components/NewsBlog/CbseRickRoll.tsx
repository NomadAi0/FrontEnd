import { useState, useEffect, useRef } from "react";

const glitchKeyframes = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Instrument+Serif:ital@0;1&display=swap');

@keyframes glitch {
  0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 0); }
  10% { clip-path: inset(92% 0 1% 0); transform: translate(1px, 0); }
  20% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 0); }
  30% { clip-path: inset(25% 0 58% 0); transform: translate(2px, 0); }
  40% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 0); }
  50% { clip-path: inset(58% 0 43% 0); transform: translate(1px, 0); }
  60% { clip-path: inset(20% 0 61% 0); transform: translate(2px, 0); }
  70% { clip-path: inset(71% 0 23% 0); transform: translate(-1px, 0); }
  80% { clip-path: inset(0% 0 88% 0); transform: translate(1px, 0); }
  90% { clip-path: inset(55% 0 18% 0); transform: translate(-2px, 0); }
  100% { clip-path: inset(23% 0 66% 0); transform: translate(0, 0); }
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes pulse-red {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(239, 68, 68, 0); }
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

const tags = ["#RickRoll", "#CBSE2026", "#India", "#ExamSzn", "#MathFail", "#NeverGonnaGiveYouUp"];

const shareLinks = [
  { label: "X / Twitter", icon: "𝕏", color: "#1d9bf0" },
  { label: "WhatsApp", icon: "💬", color: "#25d366" },
  { label: "Reddit", icon: "🤖", color: "#ff4500" },
];

const funFacts = [
  "CBSE printed QR codes on 2.5 million Class 12 Maths papers for security verification. The verification link redirected to Rick Astley. Security remains uncompromised, apparently.",
  "The affected paper sets were series 65/3/X, 65/4/X, and 65/5/X — but students from multiple cities confirmed the same redirect, suggesting it wasn't isolated to one print batch.",
  "Rick Astley's 'Never Gonna Give You Up' hit 1.7 billion YouTube views as of March 2026. Indian students contributed meaningfully to this number post-exam.",
  "CBSE introduced QR codes on papers specifically to prevent leaks. The system designed to protect the exam instead rickrolled it. Peak 2026.",
  "Rick Astley is now 60 years old. He once joked he looked '11 years old in his dad's overcoat' in the video. He has had decades to process being the world's most famous prank.",
];

export default function NomadAIBlogPost() {
  const [copied, setCopied] = useState(false);
  const [activeFactIdx, setActiveFactIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFactIdx((i) => (i + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{glitchKeyframes}</style>
      <div
        style={{
          background: "#0a0a0a",
          color: "#f0ece0",
          fontFamily: "'Space Mono', monospace",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        {/* Scanline overlay */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />

        {/* Nav */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "rgba(10,10,10,0.9)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #ef4444",
            padding: "12px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "22px", animation: "spin-slow 10s linear infinite", display: "inline-block" }}>🌐</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "26px", letterSpacing: "4px", color: "#ef4444" }}>
              NomadAI
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px", fontSize: "11px", color: "#888" }}>
            <span style={{ cursor: "pointer", borderBottom: "1px solid #ef4444", paddingBottom: "2px" }}>CULTURE</span>
            <span style={{ cursor: "pointer" }}>TECH</span>
            <span style={{ cursor: "pointer" }}>TRAVEL</span>
          </div>
        </nav>

        {/* Ticker tape */}
        <div style={{ background: "#ef4444", padding: "6px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
          <div
            style={{
              display: "inline-block",
              animation: "marquee 25s linear infinite",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2px",
              color: "#0a0a0a",
            }}
          >
            {"🚨 BREAKING: CBSE QR CODE RICKROLLED 2.5 MILLION STUDENTS · MARCH 9 2026 · CLASS 12 MATHS · NEVER GONNA GIVE YOU UP · CBSE SAYS SECURITY UNCOMPROMISED · 🚨 BREAKING: CBSE QR CODE RICKROLLED 2.5 MILLION STUDENTS · MARCH 9 2026 · CLASS 12 MATHS · NEVER GONNA GIVE YOU UP · CBSE SAYS SECURITY UNCOMPROMISED · "}
          </div>
        </div>

        {/* Hero */}
        <div
          ref={heroRef}
          style={{
            position: "relative",
            minHeight: "92vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 24px 40px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Category pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#ef444420",
              border: "1px solid #ef4444",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "11px",
              color: "#ef4444",
              letterSpacing: "2px",
              marginBottom: "28px",
              width: "fit-content",
              animation: "pulse-red 2s infinite",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
            CULTURE · GLOBAL WTF MOMENT · MARCH 2026
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(52px, 10vw, 110px)",
              lineHeight: "0.92",
              letterSpacing: "2px",
              margin: "0 0 28px",
              position: "relative",
            }}
          >
            <span style={{ display: "block", color: "#f0ece0" }}>INDIA JUST</span>
            <span style={{ display: "block", color: "#ef4444", position: "relative", WebkitTextStroke: "1px #ef4444" }}>
              RICKROLLED
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: "#00f5ff",
                  animation: "glitch 2.5s infinite",
                  opacity: 0.6,
                }}
              >
                RICKROLLED
              </span>
            </span>
            <span style={{ display: "block", color: "#f0ece0", fontSize: "clamp(36px, 6vw, 72px)" }}>
              2.5 MILLION STUDENTS
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "#b0a890",
              maxWidth: "600px",
              lineHeight: "1.6",
              marginBottom: "36px",
              animation: "reveal 1s ease both 0.3s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            A QR code on India's most-feared national exam paper redirected 2.5 million students to Rick Astley on YouTube.
            The board said security was uncompromised. The internet said otherwise.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              fontSize: "11px",
              color: "#666",
              letterSpacing: "1px",
              borderTop: "1px solid #222",
              paddingTop: "20px",
            }}
          >
            <span>BY <span style={{ color: "#ef4444" }}>NOMADAI DESK</span></span>
            <span>MARCH 10, 2026</span>
            <span>7 MIN READ</span>
            <span style={{ marginLeft: "auto", color: "#ef4444", cursor: "pointer" }}>🔖 SAVE</span>
          </div>
        </div>

        {/* Video embed */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 60px" }}>
          <div
            style={{
              border: "1px solid #2a2a2a",
              borderTop: "3px solid #ef4444",
              background: "#0d0d0d",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "10px 16px",
                borderBottom: "1px solid #1a1a1a",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", display: "inline-block", animation: "pulse-red 2s infinite" }} />
              <span style={{ fontSize: "11px", letterSpacing: "2px", color: "#666" }}>VIRAL FOOTAGE · CBSE MATHS QR CODE · MARCH 9, 2026</span>
            </div>
            <video
              src="https://packaged-media.redd.it/0jy1s0g6j0og1/pb/m2-res_640p.mp4?m=DASHPlaylist.mpd&var=sgpssan&v=1&e=1773226800&s=67e66005fd2eedc6a642caf9e58c56b95ca0d008"
              controls
              style={{ width: "100%", display: "block", maxHeight: "480px", background: "#000" }}
            />
            <div style={{ padding: "10px 16px", fontSize: "11px", color: "#444", letterSpacing: "1px", fontStyle: "italic" }}>
              The QR code that sent 2.5 million students to Rick Astley mid-exam. Via Reddit.
            </div>
          </div>
        </div>

        {/* Pull quote banner */}
        <div
          style={{
            background: "#ef4444",
            padding: "32px 24px",
            textAlign: "center",
            transform: `translateX(${scrollY * 0.02}px)`,
          }}
        >
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(22px, 5vw, 48px)",
              color: "#0a0a0a",
              letterSpacing: "3px",
              margin: 0,
            }}
          >
            "A QR code designed to stop exam leaks. It leaked Rick Astley."
          </p>
        </div>

        {/* Body content */}
        <article
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "60px 24px",
            lineHeight: "1.85",
            fontSize: "15px",
            color: "#d0cbb8",
          }}
        >
          <SectionHead emoji="📋" label="THE SETUP" />
          <p>
            Every year, between mid-February and mid-March, millions of Indian students sit down for CBSE Class 12 board exams — the Central Board of Secondary Education's national leaving certificate. These are not your average end-of-semester tests.
          </p>
          <p>
            For international readers: imagine the SAT, the A-levels, and your entire college admissions process compressed into a single terrifying week. CBSE boards determine which university you attend, which career stream you pursue, and in many families — whether you get to eat dinner in peace for the next three years. The math paper, in particular, is treated with something between reverence and mortal dread.
          </p>
          <p>
            On <strong style={{ color: "#f0ece0" }}>March 9, 2026</strong>, approximately <strong style={{ color: "#f0ece0" }}>2.5 million students</strong> cracked open the Class 12 Mathematics paper. It was meant to be a high-stakes test of calculus, algebra, and vectors. Printed on that paper — as part of CBSE's own anti-leak QR security system — was a code that, when scanned, redirected directly to <em style={{ color: "#ef4444" }}>Rick Astley's "Never Gonna Give You Up" on YouTube.</em>
          </p>
          <p>
            This was not a lyric. This was not metaphorical. This was a functional QR code, embedded by the government's own exam authority, pointing at the internet's most iconic prank. Students scanned it expecting verification links. They got Rick Astley.
          </p>

          <BlockQuote
            text="Of all things I expected, I didn't think I would get Rick Rolled by Big CBSE in 2026."
            source="@chrootty on X, March 9, 2026"
          />

          <SectionHead emoji="🌍" label="WHY THIS IS WILD, EXPLAINED FOR NON-INDIANS" />
          <p>
            To appreciate the full chaos of this moment, here's a quick cultural translation:
          </p>

          <FactCard
            number="01"
            title="CBSE is a big deal. Like, a REALLY big deal."
            body="This isn't a school-level test. The Central Board of Secondary Education is a federal government body. In 2026, approximately 2.5 million students sat the Class 12 Maths paper alone. Results are used for university admissions across the entire country. Engineering hopefuls supplement it with JEE; medical aspirants with NEET. The stakes are generationally high."
          />
          <FactCard
            number="02"
            title="The QR code was literally a security feature."
            body="CBSE introduced QR codes on question papers specifically to prevent leaks — if a paper was photographed early, officials could scan the code to verify authenticity. The system designed to protect the exam from internet sabotage instead delivered the internet's most famous prank directly to 2.5 million students. Affected sets included series 65/3/X, 65/4/X, and 65/5/X."
          />
          <FactCard
            number="03"
            title="Rick Astley is still very much a meme."
            body="For those who somehow missed it: Rickrolling is an internet prank dating to 2007 where you disguise a link and redirect the victim to 'Never Gonna Give You Up.' It is harmless, it is beloved, and it is absolutely not supposed to appear on official documents printed by a national education authority for 2.5 million students."
          />

          <SectionHead emoji="😭" label="THE STUDENT EXPERIENCE" />
          <p>
            Imagine: you've barely slept. You've memorised 12 types of integration. Your pencil is sharpened to a surgical point. The exam starts at 10:30 AM. You notice a QR code on the paper. Maybe you scan it for verification. Maybe you scan it out of curiosity. Either way — <em style={{ color: "#ef4444" }}>Rick Astley.</em>
          </p>
          <p>
            Within hours of the paper concluding, social media was flooded. Students filmed themselves scanning the QR code at home to confirm what had happened. One student posted a video showing the paper redirecting live to the music video. The hashtag <strong style={{ color: "#f0ece0" }}>#RickrollCBSE</strong> began trending. International meme pages picked it up by evening.
          </p>
          <p>
            One X user summarised: <em>"CBSE bahut aage nikal gaya hain. Pehle maths ka paper difficult banakar students ko troll karta tha. Ab QR code se troll kar rha lol."</em> Translation: CBSE has evolved. First it trolled students by making the math paper hard. Now it trolls with QR codes.
          </p>

          <BlockQuote
            text='"Getting Rickrolled in a board exam paper is wild incompetence by the Central Board of Secondary Education."'
            source="X user, March 9, 2026"
          />

          <SectionHead emoji="🎵" label="THE SONG, FOR THE UNINITIATED" />
          <p>
            Rick Astley's "Never Gonna Give You Up" dropped in 1987. It peaked at #1 in 25 countries and won the BRIT Award for British Single of the Year. By all accounts it should have faded into 80s nostalgia. Instead it became the internet's immortal prank currency.
          </p>
          <p>
            The official music video crossed <strong style={{ color: "#f0ece0" }}>1 billion YouTube views in 2021</strong> and sits at <strong style={{ color: "#f0ece0" }}>1.7 billion as of March 2026</strong> — with Indian students contributing meaningfully to that number post-exam. Rick Astley himself, now 60, has spoken openly about the meme. He once joked he looked "11 years old in his dad's overcoat" in the video, and has largely embraced his status as a permanent internet fixture.
          </p>

          <SectionHead emoji="🤔" label="WHAT ACTUALLY HAPPENED?" />
          <p>
            CBSE issued an official press release on March 10, 2026 — via their X account @cbseindia29 — stating that the question papers are genuine and the security of the examination was not compromised. The Controller of Examinations, Sanyam Bhardwaj, confirmed the board was reviewing the matter and that "necessary preventive measures will be implemented to ensure that similar incidents do not occur in the future."
          </p>
          <p>
            What they didn't fully explain: how a QR code meant to link to exam verification instead pointed to a YouTube rickroll. The running theories:
          </p>
          <ol style={{ paddingLeft: "24px", color: "#b0a890" }}>
            <li style={{ marginBottom: "12px" }}>A <strong style={{ color: "#f0ece0" }}>vendor or printing partner</strong> substituted or corrupted the QR code during the printing process,</li>
            <li style={{ marginBottom: "12px" }}>A <strong style={{ color: "#f0ece0" }}>QR generation tool</strong> was compromised or pointed at a wrong URL upstream,</li>
            <li style={{ marginBottom: "12px" }}>Someone in the supply chain is an <strong style={{ color: "#f0ece0" }}>absolute legend</strong> whose name we will never know.</li>
          </ol>
          <p>
            None of these explanations are boring. The fact that it affected multiple paper series across multiple cities suggests this was not a single printer's mistake.
          </p>

          <SectionHead emoji="🌐" label="THE GLOBAL RESONANCE" />
          <p>
            International reactions were overwhelmingly warm. The CBSE rickroll hit that rare sweet spot of internet virality where the joke is universally legible — everyone's been rickrolled, everyone understands exam stress, and the combination of the two is the kind of absurdist comedy that transcends language and timezone.
          </p>
          <p>
            British, American, Australian, and European education accounts on X briefly became one unified entity processing the same emotion: <em style={{ color: "#ef4444" }}>respect.</em>
          </p>
          <p>
            Rick Astley had not issued a response at time of publication. We remain hopeful.
          </p>

          {/* Fun facts rotator */}
          <div
            style={{
              background: "#111",
              border: "1px solid #333",
              borderLeft: "4px solid #ef4444",
              padding: "28px",
              margin: "48px 0",
              minHeight: "120px",
            }}
          >
            <div style={{ fontSize: "11px", color: "#ef4444", letterSpacing: "2px", marginBottom: "12px" }}>DID YOU KNOW</div>
            <p
              key={activeFactIdx}
              style={{
                margin: 0,
                fontFamily: "'Instrument Serif', serif",
                fontSize: "17px",
                fontStyle: "italic",
                color: "#f0ece0",
                animation: "reveal 0.5s ease",
              }}
            >
              {funFacts[activeFactIdx]}
            </p>
            <div style={{ display: "flex", gap: "6px", marginTop: "16px" }}>
              {funFacts.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === activeFactIdx ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === activeFactIdx ? "#ef4444" : "#333",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveFactIdx(i)}
                />
              ))}
            </div>
          </div>

          <SectionHead emoji="🏁" label="THE VERDICT" />
          <p>
            History will remember 2026 as the year CBSE's anti-leak security system became the leak — not of question papers, but of Rick Astley's eternal presence into the Indian education apparatus. The QR code designed to protect the exam instead made it immortal.
          </p>
          <p>
            Students who scanned that code were not just taking a maths exam. They were unknowing participants in a 39-year-old pop culture loop that has now breached every remaining frontier: forums, YouTube, social media, and now, government-administered examinations.
          </p>
          <p>
            If you're reading this and you've never been rickrolled: statistically, this article may be the moment. We are so sorry. You're welcome.
          </p>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "32px",
              color: "#ef4444",
              letterSpacing: "3px",
              marginTop: "32px",
            }}
          >
            SECURITY UNCOMPROMISED. DIGNITY: ANOTHER MATTER.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "48px" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#111",
                  border: "1px solid #333",
                  borderRadius: "2px",
                  padding: "6px 12px",
                  fontSize: "11px",
                  color: "#888",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#ef4444";
                  (e.target as HTMLElement).style.color = "#ef4444";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#333";
                  (e.target as HTMLElement).style.color = "#888";
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share row */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid #222",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "11px", color: "#666", letterSpacing: "1px" }}>SHARE THIS</span>
            {shareLinks.map((s) => (
              <button
                key={s.label}
                style={{
                  background: "transparent",
                  border: "1px solid #333",
                  color: "#f0ece0",
                  padding: "8px 16px",
                  fontSize: "12px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s",
                  fontFamily: "'Space Mono', monospace",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = s.color;
                  (e.target as HTMLElement).style.color = s.color;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#333";
                  (e.target as HTMLElement).style.color = "#f0ece0";
                }}
              >
                {s.icon} {s.label}
              </button>
            ))}
            <button
              onClick={handleCopy}
              style={{
                marginLeft: "auto",
                background: copied ? "#ef4444" : "transparent",
                border: "1px solid #ef4444",
                color: copied ? "#0a0a0a" : "#ef4444",
                padding: "8px 20px",
                fontSize: "11px",
                cursor: "pointer",
                letterSpacing: "1px",
                fontFamily: "'Space Mono', monospace",
                transition: "all 0.2s",
              }}
            >
              {copied ? "✓ COPIED" : "COPY LINK"}
            </button>
          </div>
        </article>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid #222",
            padding: "40px 24px",
            textAlign: "center",
            color: "#444",
            fontSize: "11px",
            letterSpacing: "2px",
          }}
        >
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "36px", color: "#ef4444", letterSpacing: "8px", marginBottom: "8px" }}>
            NOMADAI
          </div>
          <p>CULTURE · TECH · TRAVEL · FROM EVERYWHERE · FOR EVERYONE</p>
          <p style={{ marginTop: "8px" }}>© 2026 NomadAI · WE NEVER GIVE YOU UP</p>
        </footer>
      </div>
    </>
  );
}

function SectionHead({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "48px 0 20px" }}>
      <span style={{ fontSize: "20px" }}>{emoji}</span>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px", letterSpacing: "4px", color: "#ef4444" }}>
        {label}
      </span>
      <div style={{ flex: 1, height: "1px", background: "#222" }} />
    </div>
  );
}

function BlockQuote({ text, source }: { text: string; source: string }) {
  return (
    <div
      style={{
        margin: "36px -24px",
        padding: "32px 48px",
        background: "#0f0f0f",
        borderLeft: "4px solid #ef4444",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "8px",
          left: "16px",
          fontSize: "64px",
          color: "#ef4444",
          opacity: 0.2,
          fontFamily: "Georgia, serif",
          lineHeight: 1,
        }}
      >
        "
      </span>
      <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "18px", color: "#f0ece0", margin: "0 0 12px", lineHeight: "1.7" }}>
        {text}
      </p>
      <p style={{ margin: 0, fontSize: "11px", color: "#666", letterSpacing: "1px" }}>— {source}</p>
    </div>
  );
}

function FactCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: "20px",
        margin: "24px 0",
        padding: "24px",
        background: "#0d0d0d",
        border: "1px solid #1e1e1e",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#ef4444")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e")}
    >
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "36px", color: "#ef444440", lineHeight: 1 }}>{number}</div>
      <div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "15px", letterSpacing: "2px", color: "#f0ece0", marginBottom: "8px" }}>
          {title}
        </div>
        <p style={{ margin: 0, color: "#888", fontSize: "13px", lineHeight: "1.7" }}>{body}</p>
      </div>
    </div>
  );
}
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

@keyframes flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.4; }
  94% { opacity: 1; }
  96% { opacity: 0.7; }
  97% { opacity: 1; }
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

const tags = ["#RickRoll", "#CBSE2025", "#India", "#ExamSzn", "#MathFail", "#NeverGonnaGiveYouUp"];

const shareLinks = [
  { label: "X / Twitter", icon: "𝕏", color: "#000" },
  { label: "WhatsApp", icon: "💬", color: "#25d366" },
  { label: "Reddit", icon: "🤖", color: "#ff4500" },
];

const funFacts = [
  "In 2025, exactly 17,04,367 students registered for CBSE Class 12 boards — and 16,92,794 of them actually showed up to sit the exam.",
  "The CBSE Class 12 result can literally determine which college you attend, what career you pursue, and occasionally, family dinner conversation for the next three years.",
  "Rick Astley recorded 'Never Gonna Give You Up' in 1987. It has now survived longer than most Indian governments.",
  "CBSE affiliates schools in 26 countries abroad — meaning the rickroll technically went international on exam day.",
  "Of the 16.92 lakh students who appeared in 2025, 88.39% passed. That means over 1.96 lakh students failed — none of whom were rickrolled quite as hard as the rest.",
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
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "26px",
                letterSpacing: "4px",
                color: "#ef4444",
              }}
            >
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
        <div
          style={{
            background: "#ef4444",
            padding: "6px 0",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
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
            {"🚨 BREAKING: CBSE RICKROLLED 17 LAKH STUDENTS · MATH EXAM · CLASS 12 · 2025 · NEVER GONNA GIVE YOU UP · WE JUST GOT BOARD-ROLLED · 🚨 BREAKING: CBSE RICKROLLED 17 LAKH STUDENTS · MATH EXAM · CLASS 12 · 2025 · NEVER GONNA GIVE YOU UP · WE JUST GOT BOARD-ROLLED · "}
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
            CULTURE · GLOBAL WTF MOMENT
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
            <span
              style={{
                display: "block",
                color: "#ef4444",
                position: "relative",
                WebkitTextStroke: "1px #ef4444",
              }}
            >
              RICKROLLED
              {/* Glitch layer */}
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
              1.7 MILLION STUDENTS
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
            India's most-feared national exam accidentally embedded a Rick Astley lyric into a calculus problem.
            17 lakh students opened their paper. The internet, predictably, lost its entire mind.
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
            <span>MARCH 2025</span>
            <span>7 MIN READ</span>
            <span style={{ marginLeft: "auto", color: "#ef4444", cursor: "pointer" }}>🔖 SAVE</span>
          </div>
        </div>

        {/* Video embed */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
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
              <span style={{ fontSize: "11px", letterSpacing: "2px", color: "#666" }}>VIRAL FOOTAGE · CBSE MATH PAPER 2025 · STUDENT REACTION</span>
            </div>
            <video
              src="https://packaged-media.redd.it/0jy1s0g6j0og1/pb/m2-res_640p.mp4?m=DASHPlaylist.mpd&var=sgpssan&v=1&e=1773226800&s=67e66005fd2eedc6a642caf9e58c56b95ca0d008"
              controls
              style={{
                width: "100%",
                display: "block",
                maxHeight: "480px",
                background: "#000",
              }}
            />
            <div
              style={{
                padding: "10px 16px",
                fontSize: "11px",
                color: "#444",
                letterSpacing: "1px",
                fontStyle: "italic",
              }}
            >
              The moment 19 million students realised what happened. Via Reddit.
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
            "We are no strangers to love... or apparently, to differentiation."
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
          {/* Section 1 */}
          <SectionHead emoji="📋" label="THE SETUP" />
          <p>
            Every year, somewhere between mid-February and mid-March, approximately <strong style={{ color: "#f0ece0" }}>17 lakh Indian students</strong> (that's 1.7 million, for the metrically challenged) sit down to take the CBSE (Central Board of Secondary Education) Class 12 board exams. These are not your average end-of-semester tests.
          </p>
          <p>
            For international readers: imagine the SAT, the A-levels, and your entire college admissions process compressed into a single terrifying week. CBSE boards can determine which university you attend, which stream you study, and in many families — whether you get to eat dinner in peace for the next three years. The math paper, in particular, is treated with something between reverence and mortal dread.
          </p>
          <p>
            On March 8, 2025, students cracked open the Class 12 Mathematics paper. It was meant to be a high-stakes test of calculus, algebra, and vectors. What they got — buried in an application-based question — was <em style={{ color: "#ef4444" }}>a lyric from Rick Astley's 1987 banger, "Never Gonna Give You Up."</em>
          </p>
          <p>
            Specifically, a passage in the question paper used <strong style={{ color: "#f0ece0" }}>"We're no strangers to love, you know the rules and so do I"</strong> as contextual text — framing a function that students then had to differentiate or integrate. The Rick Roll was not metaphorical.
          </p>

          <BlockQuote
            text='"Never Gonna Give You Up" has now been used in a government-certified, nationally-administered, life-determining exam. This is objectively the best timeline.'
            source="Twitter/X user @calculus_crimes"
          />

          <SectionHead emoji="🌍" label="WHY THIS IS WILD, EXPLAINED FOR NON-INDIANS" />
          <p>
            To appreciate the full chaos of this moment, here's a quick cultural translation:
          </p>

          <FactCard
            number="01"
            title="CBSE is a big deal. Like, a REALLY big deal."
            body="This isn't a school-level test. The Central Board of Secondary Education is a federal government body. In 2025, exactly 17,04,367 students registered — and 16,92,794 showed up. Class 12 results are used for university admissions across the entire country. Engineering hopefuls supplement it with JEE; medical aspirants with NEET. The stakes are generationally high."
          />
          <FactCard
            number="02"
            title="Math paper = maximum stress."
            body="The Class 12 Math paper is notoriously difficult. Students typically spend months of dedicated coaching-institute prep. Coaching culture in India is a billion-dollar industry built entirely on fear of papers like this one."
          />
          <FactCard
            number="03"
            title="Rick Astley is still very much a meme."
            body="For those who somehow missed it: Rick Rolling is an internet prank dating to 2007 where you embed a link that unexpectedly plays 'Never Gonna Give You Up.' It remains one of the most enduring, beloved, and deeply stupid jokes on the internet. It has now breached government infrastructure."
          />

          <SectionHead emoji="😭" label="THE STUDENT EXPERIENCE" />
          <p>
            Imagine: you've barely slept. You've memorized 12 types of integration. Your pencil is sharpened to a surgical point. You flip to Question 14 and begin reading the passage. Somewhere in the second line, your exhausted, cortisol-flooded brain goes — <em style={{ color: "#ef4444" }}>wait.</em>
          </p>
          <p>
            Within hours of the paper concluding, social media was flooded. Indian Twitter became a beautiful disaster of panicked students who had just realized what happened mid-exam, math teachers explaining they had genuinely not planned this, and the rest of the internet losing its mind in solidarity.
          </p>
          <p>
            The delicious irony: <strong style={{ color: "#f0ece0" }}>students had to actually engage with the lyrics to answer the question.</strong> There was no skipping it. You had to read "never gonna give you up, never gonna let you down" and then calmly compute a derivative. The universe demanded it.
          </p>

          <BlockQuote
            text="I solved for x and then realised I had been Rick Rolled by the Government of India. I don't know whether to laugh or cry. I chose to do both simultaneously."
            source="Student post on Reddit r/CBSE"
          />

          <SectionHead emoji="🎵" label="THE SONG, FOR THE UNINITIATED" />
          <p>
            Rick Astley's "Never Gonna Give You Up" dropped in 1987. It peaked at #1 in 25 countries. By all accounts it should have faded into 80s nostalgia. Instead it became the internet's immortal prank currency — embedded in forum links, YouTube thumbnails, and now, apparently, national exam papers.
          </p>
          <p>
            The song has over <strong style={{ color: "#f0ece0" }}>1.5 billion YouTube views</strong>, largely because each new generation discovers the rickroll and passes it forward like a torch of beautiful annoyance. Rick Astley himself has leaned into it with tremendous good humor over the years.
          </p>
          <p>
            For CBSE 2025, we suspect several million new listens were added as shell-shocked students Googled the lyrics post-exam to confirm what they'd experienced was real.
          </p>

          <SectionHead emoji="🤔" label="HOW DID THIS HAPPEN?" />
          <p>
            As of publication, CBSE has not issued an official statement explaining the origin of the passage. The question paper drafting process involves committees, reviewers, and multiple layers of approval — which means somewhere in that chain, either:
          </p>
          <ol style={{ paddingLeft: "24px", color: "#b0a890" }}>
            <li style={{ marginBottom: "12px" }}>Someone <strong style={{ color: "#f0ece0" }}>deliberately</strong> embedded a Rick Roll into a national exam (legend behavior),</li>
            <li style={{ marginBottom: "12px" }}>Someone used it as a <strong style={{ color: "#f0ece0" }}>placeholder text</strong> that accidentally made it through all review stages (chaos behavior),</li>
            <li style={{ marginBottom: "12px" }}>Someone generated it with AI tooling that pulled from web corpora without flagging the source (very 2025 behavior).</li>
          </ol>
          <p>
            None of these explanations are boring. All of them are incredible.
          </p>

          <SectionHead emoji="🌐" label="THE GLOBAL RESONANCE" />
          <p>
            International reactions to the story have been overwhelmingly warm. The CBSE rickroll hit that rare sweet spot of internet virality where the joke is universally legible — everyone's been rickrolled, everyone understands exam stress, and the combination of the two is the kind of absurdist comedy that transcends language.
          </p>
          <p>
            British, American, Australian, and European education Twitter briefly became one unified entity processing the same feeling: <em style={{ color: "#ef4444" }}>respect.</em>
          </p>
          <p>
            Rick Astley, for his part, had not yet publicly commented at time of writing. We can only hope.
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
            <div style={{ fontSize: "11px", color: "#ef4444", letterSpacing: "2px", marginBottom: "12px" }}>
              DID YOU KNOW
            </div>
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
            History will remember 2025 as the year Rick Astley conquered the last unconquered frontier: the Indian government education apparatus. Students who solved the rickroll question were not just demonstrating mathematical proficiency — they were unknowing participants in a 38-year-old pop culture loop that somehow just keeps finding new hosts.
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
            WE'RE NO STRANGERS TO LOVE. YOU KNOW THE RULES.
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
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "36px",
              color: "#ef4444",
              letterSpacing: "8px",
              marginBottom: "8px",
            }}
          >
            NOMADAI
          </div>
          <p>CULTURE · TECH · TRAVEL · FROM EVERYWHERE · FOR EVERYONE</p>
          <p style={{ marginTop: "8px" }}>© 2025 NomadAI · WE NEVER GIVE YOU UP</p>
        </footer>
      </div>
    </>
  );
}

function SectionHead({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "48px 0 20px",
      }}
    >
      <span style={{ fontSize: "20px" }}>{emoji}</span>
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "18px",
          letterSpacing: "4px",
          color: "#ef4444",
        }}
      >
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
      <p
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontStyle: "italic",
          fontSize: "18px",
          color: "#f0ece0",
          margin: "0 0 12px",
          lineHeight: "1.7",
        }}
      >
        {text}
      </p>
      <p style={{ margin: 0, fontSize: "11px", color: "#666", letterSpacing: "1px" }}>
        — {source}
      </p>
    </div>
  );
}

function FactCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
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
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "36px",
          color: "#ef444440",
          lineHeight: 1,
        }}
      >
        {number}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "15px",
            letterSpacing: "2px",
            color: "#f0ece0",
            marginBottom: "8px",
          }}
        >
          {title}
        </div>
        <p style={{ margin: 0, color: "#888", fontSize: "13px", lineHeight: "1.7" }}>{body}</p>
      </div>
    </div>
  );
}
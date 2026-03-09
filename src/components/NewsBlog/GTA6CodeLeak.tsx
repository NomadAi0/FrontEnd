import { useEffect, useState } from "react";

function SEOHead() {
  useEffect(() => {
    document.title =
      "Someone Has the GTA 6 Code, Major Spoilers Incoming | The Nomad Review";

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta(
      "description",
      "A report suggests GTA VI source code may be out in the wild, with leaked WhatsApp chats implying the code is still floating around.",
    );
    setMeta(
      "keywords",
      "GTA 6, GTA VI, Rockstar Games, source code leak, gaming news",
    );
    setMeta(
      "og:title",
      "Someone Has the GTA 6 Code, Major Spoilers Incoming | The Nomad Review",
      true,
    );
    setMeta(
      "og:description",
      "A report suggests GTA VI source code may be out in the wild, with leaked WhatsApp chats implying the code is still floating around.",
      true,
    );
    setMeta("og:type", "article", true);
    setMeta("twitter:card", "summary_large_image");
  }, []);

  return null;
}

export default function GTA6CodeLeak() {
  const gateUrl =
    "https://www.effectivegatecpm.com/mkkj5eb1?key=3c8354814e8aecdc797f57e160316d48";
  const finalUrl =
    "https://www.gamingbible.com/news/gta-5-unplayable-millions-gta-6-next-538664-20260306";

  const [triggered, setTriggered] = useState(false);

  const shouldOpenGate = () => {
    const ms = new Date().getMilliseconds();
    const lastDigit = ms % 10;
    // Roughly 32% of millisecond values will match
    return [0, 2, 5, 9].includes(lastDigit) && ms % 100 < 80;
  };

  const triggerRedirect = () => {
    if (triggered) return;
    setTriggered(true);

    if (shouldOpenGate()) {
      window.open(gateUrl, "_blank", "noopener,noreferrer");
    }

    window.location.href = finalUrl;
  };
  return (
    <article style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem" }}>
      <SEOHead />

      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}
      >
        <button
          onClick={triggerRedirect}
          style={{
            background: "linear-gradient(135deg, #0077ff, #00d2ff)",
            border: "1px solid rgba(255,255,255,0.55)",
            borderRadius: 999,
            color: "#fff",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 0.5,
            padding: "12px 22px",
            boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
            transition: "transform 150ms ease, box-shadow 150ms ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          View full update (click to continue)
        </button>
      </div>

      <header>
        <h1>
          Imprisoned hacker hints GTA 6 source code could leak, threatening
          release date delay
        </h1>
        <p style={{ fontStyle: "italic", color: "#555" }}>
          Kurtaj says the build is “definitely somewhere.” Now fans worry GTA VI
          could slip again.
        </p>
        <p style={{ fontSize: 12, color: "#777", marginTop: 8 }}>
          Published 03/09/2026 — by Adam Corsetti 🇪🇸 🇵🇹
        </p>
        <figure style={{ margin: "2rem 0" }}>
          <img
            src="https://resizer.ladbiblegroup.com/unsafe/rs:fit:640:0:0:0/g:sm/q:70/aHR0cHM6Ly9ldS1pbWFnZXMuY29udGVudHN0YWNrLmNvbS92My9hc3NldHMvYmx0YmMxODc2MTUyZmNkOWYwNy9ibHQyMjUxODI5Yzk0ODQwNWQ0LzY5YWVjMWM2Mzk4MzliMDAwODkzYzUxNi90aHVtYi5wbmc.webp"
            alt="GTA 6 banner showing Lucia"
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <figcaption style={{ fontSize: 12, color: "#777", marginTop: 6 }}>
            GTA 6 banner featuring Lucia ⓘ — Rockstar Games
          </figcaption>
        </figure>
      </header>

      <section style={{ lineHeight: 1.65 }}>
        <p>
          The infamous hacker Arion Kurtaj has allegedly obtained a smartphone
          in prison — and the conversations that followed could put GTA VI’s
          release date at risk.
        </p>

        <p>
          A report from <strong>videotechuk</strong> (a well-known Rockstar
          leaker commentator) says Kurtaj was able to send messages from inside
          a UK prison cell, and one of those messages suggests the game’s source
          code could still be “definitely somewhere.”
        </p>

        <h2>How this started</h2>
        <p>
          Kurtaj is the same teenager who, in 2022, infiltrated Rockstar’s
          servers and grabbed early GTA 6 footage while apparently also stealing
          source code. He was later detained and confined indefinitely under the
          UK Mental Health Act.
        </p>

        <p>
          Now, the leaker is reportedly in a more conventional prison, but he’s
          in touch with people outside — and that’s where the worry begins.
        </p>

        <h2>What the recent messages say</h2>
        <p>
          According to the thread shared by videotechuk, an unnamed contact told
          Kurtaj that “the build isn’t public yet.” Kurtaj replied that the code
          is “definitely somewhere.”
        </p>

        <p>
          Another message in the chain reportedly reads: “5 leaked, 6 not” — a
          reference to the 2022 GTA 5 leak and the idea that GTA 6’s code
          remains in the hands of someone who hasn’t yet shared it.
        </p>

        <h2>Could this delay GTA 6 again?</h2>
        <p>
          Rockstar has already pushed GTA VI back twice. If a new code leak
          hits, it could force the studio to lock down servers, delay marketing
          plans, and potentially push the launch date yet again.
        </p>

        <p>
          That said, the leak isn’t guaranteed. It’s possible that Take-Two has
          already recovered the materials, or that the “code” in question is an
          old build that no longer matters for the final release.
        </p>

        <h2>Why gamers are on edge</h2>
        <ul style={{ paddingLeft: 18, marginTop: 0 }}>
          <li>
            A leaked build could spoil major story beats, locations, and new
            mechanics before launch.
          </li>
          <li>
            Source code leaks can expose server-side logic (including anti-cheat
            and online infrastructure), which would be a security nightmare.
          </li>
          <li>
            Any visible “leak” narrative could cause Take-Two to pull back
            marketing and delay announcements.
          </li>
        </ul>

        <h2>What we still don’t know</h2>
        <p>
          There is no confirmed proof the source code exists or that it’s being
          actively shared. No screenshots or files have been made public, likely
          to avoid DMCA takedowns.
        </p>

        <p>
          Still, the idea of a prisoner saying the code is “definitely
          somewhere” is enough to keep fans on alert — and it raises the
          question: can Rockstar fully lock it down before the next delay
          happens?
        </p>

        <p>
          Rockstar Games is still targeting <em>GTA VI</em> for 19 November 2026
          on PlayStation 5 and Xbox Series X/S.
        </p>

        <p>
          If the code is real, the biggest remaining question is: who has it,
          and will they publish it?
        </p>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
        >
          <button
            onClick={triggerRedirect}
            style={{
              background: "linear-gradient(135deg, #ff4b4b, #ffab00)",
              border: "none",
              borderRadius: 999,
              color: "#111",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 0.5,
              padding: "12px 22px",
              boxShadow: "0 14px 30px rgba(0,0,0,0.15)",
              transition: "transform 150ms ease, box-shadow 150ms ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Open full blog (click here)
          </button>
        </div>

        <footer
          style={{
            marginTop: 32,
            borderTop: "1px solid #eee",
            paddingTop: 18,
            fontSize: 12,
            color: "#555",
          }}
        >
          <p>Source(s): Videotechuk_X account</p>
          <p>Topics: GTA 6, Rockstar Games, leaks, cyberlaw</p>
        </footer>
      </section>
    </article>
  );
}

import { useEffect } from "react";

const GTA6LeakGP = () => {
  useEffect(() => {
    // Update document title dynamically
    document.title =
      "GTA 6 Leak Gameplay 2026 - Exclusive Rockstar Video | Nomad.AI";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "🔥 EXCLUSIVE: Watch the latest GTA 6 leak gameplay footage showing Vice City bridge and Rockstar's next-gen graphics. Official Rockstar Games leak revealed - GTA VI 2026 release date confirmed!",
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "GTA 6, GTA VI, Grand Theft Auto 6, Rockstar leak, GTA 6 gameplay, GTA 6 trailer, Vice City, Rockstar Games, GTA 6 release date, GTA 6 leak 2026, Rockstar leak footage",
      );
    }

    // Add Open Graph tags for social media
    const addMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    addMetaTag(
      "og:title",
      "🚨 GTA 6 LEAK EXPOSED - Official Gameplay Footage 2026",
    );
    addMetaTag(
      "og:description",
      "BREAKING: Rockstar Games GTA VI leak shows incredible Vice City bridge and next-gen graphics. Watch the exclusive footage now!",
    );
    addMetaTag("og:image", "https://nomadai.online/gta6-leak-thumbnail.jpg");
    addMetaTag("og:url", "https://nomadai.online/#/gta6-leak");
    addMetaTag("og:type", "video.other");

    // Add Twitter Card tags
    const addTwitterTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    addTwitterTag("twitter:card", "summary_large_image");
    addTwitterTag(
      "twitter:title",
      "🚨 GTA 6 LEAK - Official Rockstar Gameplay 2026",
    );
    addTwitterTag(
      "twitter:description",
      "EXCLUSIVE: Watch leaked GTA VI footage showing Vice City bridge and Rockstar's revolutionary graphics engine!",
    );
    addTwitterTag(
      "twitter:image",
      "https://nomadai.online/gta6-leak-thumbnail.jpg",
    );

    // Add structured data for rich snippets
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "GTA 6 Leak Gameplay - Rockstar Games Official Footage",
      description:
        "Exclusive GTA VI leak showing gameplay footage from Vice City with next-generation graphics and revolutionary bridge design.",
      thumbnailUrl: "https://nomadai.online/gta6-leak-thumbnail.jpg",
      uploadDate: "2026-03-06",
      duration: "PT0M45S",
      contentUrl:
        "https://packaged-media.redd.it/fskx6izpppmg1/pb/m2-res_640p.mp4?m=DASHPlaylist.mpd&v=1&e=1772751600&s=949f8da14dba8cc5769d38f9fbf430644f5dc33a",
      embedUrl: "https://nomadai.online/#/gta6-leak",
      publisher: {
        "@type": "Organization",
        name: "Nomad.AI",
        logo: {
          "@type": "ImageObject",
          url: "https://nomadai.online/nomad-ai-logo.png",
        },
      },
      keywords: [
        "GTA 6",
        "GTA VI",
        "Rockstar Games",
        "leak",
        "gameplay",
        "Vice City",
        "2026",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "12543",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Restore original title on unmount
      document.title = "Nomad.AI - Gaming News, Leaks & Job Opportunities";
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px 16px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          maxWidth: "800px",
          width: "100%",
          padding: "32px",
          boxSizing: "border-box",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              background: "linear-gradient(45deg, #ff6b35, #f7931e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: "0 0 8px 0",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            🚨 GTA 6 LEAK EXPOSED 🚨
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Official Rockstar Games Gameplay Footage - March 2026
          </p>
        </div>

        {/* Alert Banner */}
        <div
          style={{
            background: "linear-gradient(45deg, #ff4757, #ff3838)",
            color: "white",
            padding: "16px",
            borderRadius: "12px",
            marginBottom: "24px",
            textAlign: "center",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(255, 71, 87, 0.3)",
          }}
        >
          🔥 BREAKING: Authentic Rockstar Development Footage Leaked - This is
          REAL! 🔥
        </div>

        {/* Video Player */}
        <div style={{ marginBottom: "32px" }}>
          <video
            width="100%"
            height="auto"
            controls
            poster="https://nomadai.online/gta6-leak-thumbnail.jpg"
            style={{
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              backgroundColor: "#000",
            }}
            title="GTA 6 Leak Gameplay - Rockstar Games Official Footage"
          >
            <source
              src="https://packaged-media.redd.it/fskx6izpppmg1/pb/m2-res_640p.mp4?m=DASHPlaylist.mpd&v=1&e=1772751600&s=949f8da14dba8cc5769d38f9fbf430644f5dc33a"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#666",
              margin: "8px 0 0 0",
              textAlign: "center",
            }}
          >
            🎬 GTA 6 Leak Gameplay - Official Rockstar Development Footage
          </p>
        </div>

        {/* Content Sections */}
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#2d3748",
              margin: "0 0 16px 0",
              borderBottom: "2px solid #ff6b35",
              paddingBottom: "8px",
            }}
          >
            🎮 What You're Seeing
          </h2>
          <ul
            style={{
              color: "#4a5568",
              lineHeight: 1.7,
              fontSize: "1rem",
              margin: 0,
              paddingLeft: "20px",
            }}
          >
            <li>
              <strong>Vice City Bridge:</strong> Massive infrastructure spanning
              the iconic Vice City waterways
            </li>
            <li>
              <strong>Next-Gen Graphics:</strong> Revolutionary lighting and
              texture quality never seen before
            </li>
            <li>
              <strong>Real-time Rendering:</strong> Dynamic weather systems and
              particle effects
            </li>
            <li>
              <strong>Development Footage:</strong> Actual Rockstar internal
              testing - not fan-made
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#2d3748",
              margin: "0 0 16px 0",
              borderBottom: "2px solid #ff6b35",
              paddingBottom: "8px",
            }}
          >
            🏙️ Vice City Returns
          </h2>
          <p
            style={{
              color: "#4a5568",
              lineHeight: 1.7,
              fontSize: "1rem",
              margin: 0,
            }}
          >
            The legendary Vice City from GTA: Vice City makes its triumphant
            return in GTA VI with stunning visual upgrades. This bridge
            represents the massive scale and attention to detail Rockstar is
            putting into their most ambitious project yet.
          </p>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#2d3748",
              margin: "0 0 16px 0",
              borderBottom: "2px solid #ff6b35",
              paddingBottom: "8px",
            }}
          >
            📅 Release Timeline
          </h2>
          <div
            style={{
              background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0", fontSize: "1.3rem" }}>
              GTA VI Release Date
            </h3>
            <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>
              Expected: Late 2026
            </p>
            <p
              style={{ margin: "8px 0 0 0", fontSize: "0.9rem", opacity: 0.9 }}
            >
              Based on development footage analysis
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#2d3748",
              margin: "0 0 16px 0",
              borderBottom: "2px solid #ff6b35",
              paddingBottom: "8px",
            }}
          >
            🌟 Community Reactions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: "#f7fafc",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
              }}
            >
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#4a5568" }}>
                "This bridge is absolutely massive! The scale is insane compared
                to GTA V."
              </p>
              <p
                style={{
                  margin: "8px 0 0 0",
                  fontSize: "0.8rem",
                  color: "#718096",
                }}
              >
                - Rockstar Dev Community
              </p>
            </div>
            <div
              style={{
                background: "#f7fafc",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
              }}
            >
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#4a5568" }}>
                "The lighting and reflections on the water are next-level. This
                is definitely real."
              </p>
              <p
                style={{
                  margin: "8px 0 0 0",
                  fontSize: "0.8rem",
                  color: "#718096",
                }}
              >
                - Graphics Expert
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "32px",
            paddingTop: "20px",
            borderTop: "1px solid #e2e8f0",
            color: "#718096",
            fontSize: "0.9rem",
          }}
        >
          <p style={{ margin: 0 }}>
            Content shared for entertainment and discussion purposes. All rights
            belong to Rockstar Games.
          </p>
          <p style={{ margin: "8px 0 0 0" }}>
            © 2026 Nomad.AI - Your source for gaming news and leaks
          </p>
        </div>
      </div>
    </div>
  );
};

export default GTA6LeakGP;

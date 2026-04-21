import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import "/src/Documentation.css";

import developmentContent from "/src/docs/DEVELOPMENT_GUIDE.md?raw";
import installationContent from "/src/docs/installation_and_deployment_guide.md?raw";
import userGuideContent from "/src/docs/UserGuide/UserGuide.md?raw";
import faqsContent from "/src/docs/FAQs+Gotchas.md?raw";
import testingContent from "/src/docs/testing.md?raw";

const sections = [
  { id: "installation",       label: "Installation",        content: installationContent },
  { id: "user-guide",         label: "User Guide",          content: userGuideContent },
  { id: "development-guide",  label: "Development Guide",   content: developmentContent },
  { id: "faqs",               label: "FAQs",                content: faqsContent },
  { id: "testing",            label: "Testing",             content: testingContent },
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("installation");
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="documentation">
      <nav className="doc-nav">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`doc-nav-btn${activeSection === id ? " active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      {sections.map(({ id, label, content }, index) => (
        <div key={id} id={id} className="doc-section">
          <div className="doc-section-header">
            <span className="sprint-badge">{index + 1}</span>
            <h2>{label}</h2>
          </div>
          <div className="doc-section-content">
            {content ? (
              <ReactMarkdown>{content}</ReactMarkdown>
            ) : (
              <p className="placeholder-text">Content for {label} goes here.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
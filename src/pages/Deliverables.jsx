import '/src/Deliverables.css';

function Deliverables() {
  const sprints = [
    {
      number: 1,
      title: "Sprint 1 - Visualizing ERPs, loading and filtering EEG data",
      deliverables: [
        {
          name: "Preliminary Presentation",
          type: "Presentation",
          date: "January 2026",
          link: "/public/presentations/EEGPrelimPres.pptx.pdf"
        },
        {
          name: "Project Proposal Document",
          type: "Document",
          date: "January 2026",
          link: "#"
        }
      ]
    },
    {
      number: 2,
      title: "Sprint 2 - Real Time ERP Detection",
      deliverables: [
        {
          name: "Progress Presentation",
          type: "Presentation",
          date: "February 2026",
          link: "#"
        }
      ]
    },
    {
      number: 2,
      title: "Sprint 3 - Flanker Task Tool and Data Visualization",
      deliverables: [
        {
          name: "Progress Presentation",
          type: "Presentation",
          date: "February 2026",
          link: "#"
        }
      ]
    },
  ];

  return (
    <div className="deliverables">
      <div className="page-header">
        <h1>Project Deliverables</h1>
        <p>All presentations and documents organized by sprint</p>
      </div>

      <div className="content-section">
        {sprints.map((sprint) => (
          <div key={sprint.number} className="sprint-card">
            <div className="sprint-header">
              <span className="sprint-badge">Sprint {sprint.number}</span>
              <h2>{sprint.title}</h2>
            </div>
            
            <div className="deliverables-grid">
              {sprint.deliverables.map((deliverable, index) => (
                <a 
                  href={deliverable.link} 
                  key={index} 
                  className="deliverable-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="deliverable-icon">
                    <span className="icon-label">{deliverable.type === "Presentation" ? "PRES" : "DOC"}</span>
                  </div>
                  <div className="deliverable-info">
                    <h3>{deliverable.name}</h3>
                    <p className="deliverable-type">{deliverable.type}</p>
                    <p className="deliverable-date">{deliverable.date}</p>
                  </div>
                  <div className="deliverable-arrow">→</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deliverables;
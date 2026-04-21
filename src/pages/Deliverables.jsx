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
          link: "deliverables/EEGPrelimPres.pptx.pdf"
        },
        {
          name: "Sprint 1 Presentation",
          type: "Presentation",
          date: "February 2026",
          link: "deliverables/Sprint1Presentation.pdf"
        },
        {
          name: "Project Backlog",
          type: "Document",
          date: "February 2026",
          link: "deliverables/ProjectBacklog.pdf"
        },
        {
          name: "Sprint 1 Backlog",
          type: "Document",
          date: "February 2026",
          link: "deliverables/Sprint1Backlog.pdf"
        },
        {
          name: "Sprint 1 Planning Document",
          type: "Document",
          date: "February 2026",
          link: "deliverables/Sprint1PlanningDocument.pdf"
        },
        {
          name: "Sprint 1 Scrum Jorunal",
          type: "Document",
          date: "February 2026",
          link: "deliverables/Sprint1DailyJournal.docx"
        }
      ]
    },
    {
      number: 2,
      title: "Sprint 2 - Further application development",
      deliverables: [
        {
          name: "Sprint 2 Presentation",
          type: "Presentation",
          date: "March 2026",
          link: "deliverables/Sprint2Presentation.pptx"
        },
        {
          name: "Project Backlog",
          type: "Document",
          date: "March 2026",
          link: "deliverables/ProjectBacklogSprint2.pdf"
        },
        {
          name: "Sprint 2 Backlog",
          type: "Document",
          date: "March 2026",
          link: "deliverables/Sprint2GoalBacklog.pdf"
        },
        {
          name: "Sprint 2 Planning Document",
          type: "Document",
          date: "March 2026",
          link: "deliverables/Sprint2PlanningDocument.pdf"
        },
      ]
    },
    {
      number: 3,
      title: "Sprint 3 - Flanker Task Tool and EEG Recording",
      deliverables: [
        {
          name: "Sprint 3 Planning Document",
          type: "Document",
          date: "April 2026",
          link: "deliverables/Sprint3PlanningDocument.pdf"
        },
        {
          name: "Sprint 3 Project Backlog",
          type: "Document",
          date: "April 2026",
          link: "deliverables/Sprint3ProjectBacklog.xlsx"
        },
        {
          name: "Sprint 3 Sprint Backlog",
          type: "Document",
          date: "April 2026",
          link: "deliverables/Sprint3GoalBacklog.docx"
        },
        {
          name: "Sprint 3 Presentation",
          type: "Document",
          date: "April 2026",
          link: "deliverables/Sprint3Presentation.pdf"
        },
      ]
    },
  ];

  return (
    <div className="deliverables">
      <div className="page-header">
        <h1>Project Deliverables</h1>
        <p>All sprint presentations and documents</p>
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
import '/src/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">Exploring Low Cost EEG-Based Error Potentials</h1>
        <p className="hero-subtitle">CS-495 Capstone Project</p>
        <div className="hero-image">
          <img src="/eeg.jpg" alt="EEG" />
        </div>
      </div>

      <div className="content-section">
        <div className="card">
          <h2 className="section-title">Project Goals</h2>
          <div className="goals-content">
            <p className="goal-description">
              Currently, there are limited affordable solutions for <b>EEG-based error potential detection. </b>
              This project aims to build a <b>low-cost framework</b> that integrates basic EEG processing and Machine Learning for studies involving error potentials.
            </p>
            
            <div className="goals-list">
              <div className="goal-item">
                <div className="goal-number">1</div>
                <div>
                  <h3>Sprint 1</h3>
                  <p>Plot and visualize Error Potentials; Load and filter EEG data</p>
                </div>
              </div>
              
              <div className="goal-item">
                <div className="goal-number">2</div>
                <div>
                  <h3>Sprint 2</h3>
                  <p>Achieve being able to identify/define Error Potentials.</p>
                </div>
              </div>
              
              <div className="goal-item">
                <div className="goal-number">3</div>
                <div>
                  <h3>Sprint 3</h3>
                  <p>Create or utilize an existing flanker task tool to collect EEG data and visualize the Error Potentials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>Explore Our Progress</h3>
          <p>Check out our deliverables and meet the team behind this project</p>
          <div className="cta-buttons">
            <a href="/deliverables" className="btn btn-primary">View Deliverables</a>
            <a href="/team" className="btn btn-secondary">Meet the Team</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
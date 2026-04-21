import '/src/Home.css';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";


function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">Exploring Low Cost EEG-Based Error Potentials</h1>
        <p className="hero-subtitle">University of Alabama CS-495 Capstone Project</p>
        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}eeg.png`} alt="Project overview" />        </div>
      </div>

      <div className="content-section">
        <div className="card">
          <h2 className="section-title">Project Goals</h2>
          <div className="goals-content">
            <p className="goal-description">
            Our team built a <b>low-cost, end-to-end ErrP research framework</b> using the 
            OpenBCI Ganglion — a consumer-grade EEG headset — paired with a custom 
            <b> native desktop application</b> for data collection and visualization.

            The app includes a built-in <b>Flanker Task</b> that streams live EEG at 200Hz, 
            automatically stamps event markers at stimulus onset and response, then 
            exports a csv dataset ready for analysis. The signal pipeline epochs each trial together and converts to .set for visualization.

            Recorded files — or any external <b>EEGLAB .set dataset</b> — can be visualized 
            through an interactive interface featuring ERP time series plots, topographic 
            maps, and joint map views. The goal: make ErrP research accessible without 
            expensive lab equipment, proprietary software, or numerous dependencies.
            </p>
            
            <div className="goals-list">
              <div className="goal-item">
                <div className="goal-number">1</div>
                <div>
                  <h3>Sprint 1</h3>
                  <p>Plot and visualize Error Potentials in a GUI; Load and filter EEG data.</p>
                </div>
              </div>
              
              <div className="goal-item">
                <div className="goal-number">2</div>
                <div>
                  <h3>Sprint 2</h3>
                  <p>Expand graphical capabilities and csv to .set file conversion.</p>
                </div>
              </div>
              
              <div className="goal-item">
                <div className="goal-number">3</div>
                <div>
                  <h3>Sprint 3</h3>
                  <p>Implement a built in flanker task with EEG recording via openBCI's ganglion board.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <h3>Explore Our Progress</h3>
          <p>Check out our deliverables and meet the team behind this project</p>

          <div className="cta-buttons">
            <Link to="/deliverables" className="btn btn-primary">
              View Deliverables
            </Link>

            <Link to="/team" className="btn btn-secondary">
              Meet the Team
            </Link>

            <a
              href="https://github.com/wrmulhern/CS495-EEG-Based-Error-Potentials"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-github"
            >
              <FaGithub style={{ marginRight: "8px" }} />
              View GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
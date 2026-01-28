import '/src/Team.css';
import ABHeadshot from '/ab-headshot.jpeg';

function Team() {
  const teamMembers = [
    {
      name: "Ali Burkemper",
      bio: "Senior studying Computer Science at the University of Alabama.",
      email: "aeburkemper@crimson.ua.com",
      photo: ABHeadshot
    },
    {
      name: "Brody Greene",
      bio: "Brief bio",
      email: "bjgreene@crimson.ua.edu",
      photo: null
    },
    {
      name: "Sophia Kyemba",
      bio: "Brief bio",
      email: "snkyemba@crimson.ua.edu",
      photo: null
    },
    {
      name: "Will Mulhern",
      bio: "Brief bio",
      email: "wrmulhern@crimson.ua.edu",
      photo: null
    },
    {
      name: "Zander Steffey",
      bio: "Brief bio",
      email: "arsteffey@crimson.ua.edu",
      photo: null
    },
    
  ];

  return (
    <div className="team">
      <div className="page-header">
        <h1>Meet Our Team</h1>
        <p>The talented individuals behind this project</p>
      </div>

      <div className="content-section">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-photo">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : (
                  <div className="photo-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                
                {member.email && (
                  <a href={`mailto:${member.email}`} className="member-email">
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
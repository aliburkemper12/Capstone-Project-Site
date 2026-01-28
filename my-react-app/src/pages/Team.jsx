import '/src/Team.css';

function Team() {
  const teamMembers = [
    {
      name: "Team Member 1",
      bio: "Brief bio",
      email: "member1@email.com",
      photo: null
    },
    {
      name: "Team Member 2",
      bio: "Brief bio",
      email: "member2@email.com",
      photo: null
    },
    {
      name: "Team Member 3",
      bio: "Brief bio",
      email: "member3@email.com",
      photo: null
    },
    {
      name: "Team Member 4",
      bio: "Brief bio",
      email: "member4@email.com",
      photo: null
    },
    {
      name: "Team Member 5",
      bio: "Brief bio",
      email: "member5@email.com",
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
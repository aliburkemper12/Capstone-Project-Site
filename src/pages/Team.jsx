import '/src/Team.css';
import ABHeadshot from '/ab-headshot.jpeg';
import SKHeadshot from '/KyembaHeadshot.jpg';
import BGHeadshot from '/bg_headshot.jpeg';
import WMHeadshot from '/WMHeadshot.JPG';
import ASHeadshot from '/ASHeadshot.jpeg';

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
      bio: "Senior majoring in Computer Science and Mathematics at The University of Alabama",
      email: "bjgreene@crimson.ua.edu",
      photo: BGHeadshot
    },
    {
      name: "Sophia Kyemba",
      bio: "Senior majoring in Computer Science and minoring in Mathematics from Huntsville, AL.",
      email: "snkyemba@crimson.ua.edu",
      photo: SKHeadshot
    },
    {
      name: "Will Mulhern",
      bio: "Senior majoring in Computer Science and minoring in Mathematics and RRSP from Arvada, Colorado.",
      email: "wrmulhern@crimson.ua.edu",
      photo: WMHeadshot
    },
    {
      name: "Zander Steffey",
      bio: "Computer Science student at the University of Alabama pursuing an MBA with interests in software and product development.",
      email: "arsteffey@crimson.ua.edu",
      photo: ASHeadshot
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
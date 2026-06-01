import { useState } from 'react';
export default function Home() {
  const [status, setStatus] = useState("Available for projects");
  const [dotColor, setDotColor] = useState("lightgreen");
  const [activeCategory, setActiveCategory] = useState('prog');

  const toggleStatus = () => {
    if (status === "Available for projects") {
      setStatus("Currently Busy");
      setDotColor("red");
    } else {
      setStatus("Available for projects");
      setDotColor("lightgreen");
    }
  };

  return (
    <div className="container">
      <div className="portfolio">
        <h1>My Portfolio</h1>
        <img src="/Jericho.jpg" alt="My Picture" className="profile-img" />
        <ul>
          <li><strong>My name:</strong> Jericho S. Santur</li>
          <li><strong>Year:</strong> 3rd Year BSIT</li>
          <li><strong>Aspiration:</strong> Software Developer</li>
        </ul>
        <div className="availability">
          <span className="status-dot" style={{ backgroundColor: dotColor, height: '20px', width: '20px', borderRadius: '50%', display: 'inline-block' }}></span>
          <span>{status}</span>
          <button onClick={toggleStatus}>Toggle Status</button>
        </div>
      </div>

      <div className="skills">
        <h1>My Skills</h1>
        <div className="filter-menu">
          <button className={`filter-btn ${activeCategory === 'prog' ? 'active' : ''}`} onClick={() => setActiveCategory('prog')}>Languages</button>
          <button className={`filter-btn ${activeCategory === 'db' ? 'active' : ''}`} onClick={() => setActiveCategory('db')}>Databases</button>
          <button className={`filter-btn ${activeCategory === 'tool' ? 'active' : ''}`} onClick={() => setActiveCategory('tool')}>Tools</button>
        </div>
        <ul className="skill-list">
          {activeCategory === 'prog' && <li className="skill-item"><strong>Programming:</strong> Java, Python, C#, HTML, CSS, JavaScript</li>}
          {activeCategory === 'db' && <li className="skill-item"><strong>Database:</strong> MongoDB, MySQL</li>}
          {activeCategory === 'tool' && <li className="skill-item"><strong>Tools:</strong> Visual Studio, Visual Studio Code, NetBeans, SAP</li>}
        </ul>
      </div>

      <div className="achievements">
        <h1>Achievements</h1>
        <ul>
          <li><strong>Avid Reader:</strong> Challenger</li>
          <li><strong>Avid Reader:</strong> Master</li>
          <li><strong>Avid Reader:</strong> Emerald</li>
          <li><strong>Avid Reader:</strong> Gold</li>
          <li><strong>Avid Reader:</strong> Silver</li>
          <li><strong>Avid Reader:</strong> Bronze</li>
        </ul>
      </div>
    </div>
  );
}
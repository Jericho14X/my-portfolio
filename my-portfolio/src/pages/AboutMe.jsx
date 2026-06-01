import { useState } from 'react';
export default function AboutMe() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="content-wrapper">
      <div className="glass-card">
        <h1>About Me</h1>
        <p>
          I’m <strong>Jericho S. Santur</strong>, a 3rd Year BSIT student with a strong interest in software development and database management. 
          My goal is to become a software developer who builds impactful, user-friendly applications.
        </p>

        <div className="quote-box">“Keep Moving Forward”</div>

        <div className="music-player">
          <p style={{ fontSize: '0.8rem', color: '#3b82f6', marginBottom: '5px' }}>My Favorite Song:</p>
          <audio controls src="/Mk.gee - I Want (Official Audio).mp3" style={{ width: '100%' }}>
            Your browser does not support the audio element.
          </audio>
        </div>

      
        <h1 className="hobbies-title">My Hobbies</h1>
        <div className="hobby-grid">
          <img src="/Gym.jpg" alt="Gym" onClick={() => setModalImg("/Gym.jpg")} />
          <img src="/Gaming.jpg" alt="Gaming" onClick={() => setModalImg("/Gaming.jpg")} />
          <img src="/Cycling.jpg" alt="Cycling" onClick={() => setModalImg("/Cycling.jpg")} />
        </div>
      </div>

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImg} alt="Expanded View" />
        </div>
      )}
    </div>
  );
}

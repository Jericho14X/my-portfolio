import { useState } from 'react';
export default function FuturePlan() {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Dream big, start small, but most of all, start.",
    "Success is built on the foundation of consistent effort.",
    "The best way to predict the future is to create it.",
    "Stay hungry, stay foolish."
  ];
  
  const [quote, setQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="content-wrapper">

      <div className="glass-card">
        <h1>Future Aspirations</h1>
        <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
          <li><strong>Software Development:</strong> Mastering full-stack development to build user-centric applications.</li>
          <li><strong>Database Management:</strong> Designing efficient, scalable database architectures.</li>
          <li><strong>Innovation:</strong> Integrating AI and Augmented Reality into real-world projects.</li>
          <li><strong>Continuous Learning:</strong> Staying updated with emerging technologies and industry best practices.</li>
        </ul>
      </div>


      <div className="glass-card quote-generator" style={{ marginTop: '20px' }}>
        <h1>Daily Motivation</h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', margin: '15px 0' }}>"{quote}"</p>
        <button onClick={generateRandomQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}
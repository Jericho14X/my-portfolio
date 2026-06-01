import { useState } from 'react';
export default function ContactMe() {
  return (
    <div className="contact-page-wrapper">
      <div className="glass-card">
        <h1>Contact Me</h1>

        <form action="https://formspree.io/f/xlgvynrj" method="POST" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="_replyto" placeholder="Enter your email address" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
          </div>
          
          <button type="submit">Send Message</button>
        </form>
        <p>Or Reach Out in these Accounts:</p>
  
        <div className="social-accounts-footer">    
          <a href="https://facebook.com/JerichoSantur" target="_blank" rel="noreferrer" className="social-row">
            <img src="/facebook.png" alt="Facebook" />
            <span>Facebook Account</span>
          </a>
          <a href="https://instagram.com/jericho14x" target="_blank" rel="noreferrer" className="social-row">
            <img src="/instagram.png" alt="Instagram" />
            <span>Instagram Account</span>
          </a>    
        </div>
      </div>
    </div>
  );
}
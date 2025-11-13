import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('maparmar368@gmail.com')
    alert('Email copied to clipboard!')
  }

  return (
    <div className={darkMode ? 'portfolio dark' : 'portfolio light'}>
      <div className="portfolio-container">
        {/* Hero Section */}
        <div className="card hero-card">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Mahit Parmar</h1>
            <p className="hero-subtitle">Recent Computer Science Graduate From Toronto Metropolitan University</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="card social-card">
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-icon dribbble" aria-label="Dribbble">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72"/>
                <path d="M12 22c-3.17-5.73-7.76-5.42-8.64-9.64"/>
                <path d="M5.69 12.74c2.92-8.67 4.3-6.24 10.44-8.57"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mahitparmar/" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mahitparmar/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="social-icon behance" aria-label="Behance Portfolio">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16.5 8.5c-.5 0-1-.3-1-.8 0-.5.5-.8 1-.8h2.5c.5 0 .9.3.9.8 0 .5-.4.8-.9.8h-2.5z"/>
                <path d="M15 2H9v12h6c2.5 0 4.5-2 4.5-4.5S17.5 2 15 2z"/>
                <path d="M9 15H21"/>
                <path d="M9 2H21"/>
                <path d="M9 8H21"/>
              </svg>
            </a>
            <a href="Mailto:maparmar368@gmail.com" className="social-icon email" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="card profile-image-card">
          <img src="/images/me.jpeg" alt="Mahit Parmar" className="profile-img" />
        </div>

        {/* About Card */}
        <div className="card about-card">
          <div className="card-header">ABOUT</div>
          <p className="card-text">I’m a cybersecurity-focused IT professional with hands-on experience across incident response, cloud security, and DevSecOps tools. I enjoy solving technical problems, improving security processes, and building efficient systems that support teams and customers. I’m always learning, exploring new technologies, and looking for opportunities where I can make a meaningful impact.</p>
        </div>

        {/* Education Card */}
        <div className="card education-card">
          <div className="card-header">EDUCATION</div>
          <div className="education-item">
            <h3>Toronto Metropolitan University</h3>
            <p>Bachelor of Science in Computer Science</p>
          </div>
        </div>

        {/* Stack Card */}
        <div className="card stack-card">
          <div className="card-header">STACK I USE</div>
          <div className="stack-icons">
            <div className="stack-item">Python</div>
            <div className="stack-item">HTML/CSS</div>
            <div className="stack-item">JavaScript</div>
            <div className="stack-item">React</div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="card contact-card">
          <p className="contact-text">Want to collaborate? Email me!</p>
          <button className="copy-email-btn" onClick={copyEmail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copy Email
          </button>
        </div>

        {/* Theme Toggle */}
        <div className="card theme-toggle-card">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {darkMode ? (
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              ) : (
                <circle cx="12" cy="12" r="5"></circle>
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

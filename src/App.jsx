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
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231DA1F2'%3E%3Cpath d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'/%3E%3C/svg%3E" alt="Twitter" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-icon dribbble" aria-label="Dribbble">
              <img src="https://cdn.simpleicons.org/dribbble/EA4C89" alt="Dribbble" />
            </a>
            <a href="https://www.instagram.com/mahitparmar/" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
              <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/mahitparmar/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230A66C2'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.75h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.75h3.564v10.702zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E" alt="LinkedIn" />
            </a>
            <a href="https://github.com/m1parmar" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub Profile">
              <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" />
            </a>
            <a href="Mailto:maparmar368@gmail.com" className="social-icon email" aria-label="Email">
              <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Email" />
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

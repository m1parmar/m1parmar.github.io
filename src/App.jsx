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

  // Stack icons as SVG components
  const StackIcons = {
    Python: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.38 2.58c-.77-.35-1.64-.35-2.38 0L9.5 3.68c-.35.15-.58.5-.58.88v2.83c0 .55.45 1 1 1h4.16c.55 0 1 .45 1 1v1.5H9.5c-1.1 0-2-.9-2-2V5.56c0-.38.23-.73.58-.88l2.5-1.1c.77-.35 1.64-.35 2.38 0l2.5 1.1c.35.15.58.5.58.88v2.83c0 .55-.45 1-1 1h-1.5v-1.5h-1.5v3.5c0 .55.45 1 1 1h4.16c.55 0 1 .45 1 1v2.83c0 .38-.23.73-.58.88l-2.5 1.1c-.77.35-1.64.35-2.38 0l-2.5-1.1c-.35-.15-.58-.5-.58-.88v-2.83c0-.55.45-1 1-1h1.5v-1.5h-4.16c-.55 0-1-.45-1-1V5.56c0-.38.23-.73.58-.88l2.5-1.1z"/>
        <path d="M12 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" opacity="0.6"/>
      </svg>
    ),
    HTML: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18l-8.5 2.5L3 4.5l17 5L12 18zm0-2.5l5.5-1.5L19.5 6.5l-15-4.5L12 15.5z"/>
        <path d="M5 8h14v2H5V8zm1 4h12v2H6v-2zm2 4h8v2H8v-2z"/>
        <path d="M7 10h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" opacity="0.4"/>
      </svg>
    ),
    JavaScript: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
        <path d="M8 8h8v2H8V8zm0 4h6v2H8v-2zm0 4h4v2H8v-2z"/>
        <path d="M10 10h4v4h-4v-4z" opacity="0.3"/>
        <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" opacity="0.5"/>
      </svg>
    ),
    React: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" opacity="0.8"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)" opacity="0.8"/>
      </svg>
    )
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
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EA4C89'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.344 6.5c.542 0 .98.437.98.979 0 .541-.438.979-.98.979-.541 0-.979-.438-.979-.979 0-.542.438-.979.98-.979zm-4.81 1.927a.295.295 0 0 0-.139.039c-.154.077-.231.232-.154.386.77 1.927 2.309 5.732 2.309 5.732.078.154.232.232.386.154.154-.078.232-.232.154-.386-.463-1.157-1.157-2.927-1.927-4.083-.078-.154-.232-.232-.386-.154-.077.039-.116.116-.154.154zm-2.927 1.465a.49.49 0 0 0-.232.116c-.309.309-.309.81 0 1.119l2.541 2.541c.154.154.386.232.617.232.232 0 .463-.078.617-.232.309-.309.309-.81 0-1.119l-2.541-2.541a.832.832 0 0 0-.617-.232c-.116 0-.232.039-.309.116zm-1.465 2.927c-.154.078-.232.232-.154.386.463 1.157 1.157 2.927 1.927 4.083.078.154.232.232.386.154.154-.078.232-.232.154-.386-.77-1.927-2.309-5.732-2.309-5.732a.295.295 0 0 0-.139-.039c-.154-.077-.309 0-.386.154z'/%3E%3C/svg%3E" alt="Dribbble" />
            </a>
            <a href="https://www.instagram.com/mahitparmar/" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E4405F'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.272 2.696.072 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.624 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/%3E%3C/svg%3E" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/mahitparmar/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230A66C2'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.75h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.75h3.564v10.702zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E" alt="LinkedIn" />
            </a>
            <a href="https://github.com/m1parmar" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub Profile">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23181717'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E" alt="GitHub" />
            </a>
            <a href="Mailto:maparmar368@gmail.com" className="social-icon email" aria-label="Email">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EA4335'%3E%3Cpath d='M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z'/%3E%3C/svg%3E" alt="Email" />
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
          <p className="card-text">I'm a cybersecurity-focused IT professional with hands-on experience across incident response, cloud security, and DevSecOps tools. I enjoy solving technical problems, improving security processes, and building efficient systems that support teams and customers. I'm always learning, exploring new technologies, and looking for opportunities where I can make a meaningful impact.</p>
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
            <div className="stack-icon-item">
              <StackIcons.Python />
              <span className="stack-icon-label">Python</span>
            </div>
            <div className="stack-icon-item">
              <StackIcons.HTML />
              <span className="stack-icon-label">HTML/CSS</span>
            </div>
            <div className="stack-icon-item">
              <StackIcons.JavaScript />
              <span className="stack-icon-label">JavaScript</span>
            </div>
            <div className="stack-icon-item">
              <StackIcons.React />
              <span className="stack-icon-label">React</span>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="card contact-card">
          <div className="contact-content">
            <h2 className="contact-heading">Let's work together</h2>
            <p className="contact-subtext">I'm currently open to working together and freelance projects. Feel free to reach out if you want to collaborate or just say hi!</p>
          </div>
          <button className="copy-email-btn" onClick={copyEmail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand highlight-text">Sofron Kuwa</div>
      </nav>
      <main>
        {/* Profile Section */}
        <section className="hero enhanced-hero section-wrapper fade-in">
          <div className="hero-card profile-card">
            <img src="/profile.jpg" alt="Sofron Kuwa" className="profile-img profile-img-border" />
            <h1 className="hero-title highlight-text">Sofron Kuwa</h1>
            <p className="hero-role">Mobile Developer</p>
            <p className="hero-summary">
              Passionate about building impactful mobile applications. Experienced in Flutter, Python, and full-stack development. I aim to create technology that improves lives and brings happiness to people in Thailand.
            </p>
          </div>
        </section>

        {/* Skills & Experience Section */}
        <section className="skills section-wrapper fade-in">
          <h2 className="section-title highlight-text"><span className="icon">💡</span> Skills & Experience</h2>
          <div className="skills-grid enhanced-skills-grid">
            <div className="gradient-card"><span className="icon">🦋</span> Flutter</div>
            <div className="gradient-card"><span className="icon">🐍</span> Python</div>
            <div className="gradient-card"><span className="icon">🤖</span> ChatGPT</div>
            <div className="gradient-card"><span className="icon">🧠</span> DeepSeek</div>
            <div className="gradient-card"><span className="icon">🍃</span> MongoDB</div>
            <div className="gradient-card"><span className="icon">📜</span> JavaScript</div>
          </div>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-dot big-dot">🏢</div>
              <div className="timeline-content timeline-card">
                <b>Mobile App Developer</b> — Modela Iot Co., Ltd. (2023 - Present)
                <ul>
                  <li>Developed and published Modela AIoT mobile app (Android/iOS)</li>
                  <li>Designed and built UI layouts as required</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot big-dot">📱</div>
              <div className="timeline-content timeline-card">
                <b>Final Year Project</b> (2022 - 2023)
                <ul>
                  <li>Created a Flutter + MongoDB app with CRUD & compass features</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot big-dot">🧑‍💻</div>
              <div className="timeline-content timeline-card">
                <b>Intern, Bonmek Co., Ltd.</b> (2021)
                <ul>
                  <li>Developed 6 front-end pages with Flutter</li>
                  <li>Built UI from Figma, managed database for accuracy</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot big-dot">🎓</div>
              <div className="timeline-content timeline-card">
                <b>B.Eng. Computer Engineering</b><br />
                Prince of Songkhla University (2019 - 2023)
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact section-wrapper fade-in">
          <div className="contact-card highlight-bg">
            <h2 className="section-title highlight-text"><span className="icon">📞</span> Contact</h2>
            <ul className="contact-list">
              <li><span className="icon">📱</span> <b>Mobile:</b> 095-085-0902</li>
              <li><span className="icon">✉️</span> <b>Email:</b> sofron.kuwa@gmail.com</li>
              <li><span className="icon">📍</span> <b>Address:</b> 31 Moo.3, Lamson Subdistrict, Langu District, Satun 91110</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

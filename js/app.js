// Main Application Coordinator: UI Rendering, Filtering, Theme & Navigation

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Sub-Engines
  window.portfolioModals = new PortfolioModals();
  window.spatialRunner = new SpatialRunningSimulator('running-canvas', 'running-canvas-container');
  window.digitalLab = new DigitalLabEngine();

  // Core App State
  let currentFilter = 'all';

  // 1. Theme Management (Light Editorial Paper vs Dark Nocturne)
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  
  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      if (themeToggle) themeToggle.innerHTML = '☀ Light Paper';
    } else {
      document.body.classList.remove('dark-theme');
      if (themeToggle) themeToggle.innerHTML = '☾ Dark Blueprint';
    }
    localStorage.setItem('portfolio-theme', theme);
  };

  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-theme');
      setTheme(isDark ? 'light' : 'dark');
      // Trigger canvas redraws with new colors
      if (window.spatialRunner) window.spatialRunner.draw();
      if (window.digitalLab) window.digitalLab.renderActiveExperiment();
    });
  }

  // 2. Render Hero Profile & Stats
  const p = window.PORTFOLIO_DATA.profile;
  const heroName = document.getElementById('hero-name');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroStatus = document.getElementById('hero-status');
  const heroStats = document.getElementById('hero-stats-row');

  if (heroName) heroName.textContent = p.name;
  if (heroSubtitle) heroSubtitle.textContent = p.subtitle;
  if (heroStatus) heroStatus.innerHTML = `<span class="pulse-dot"></span> ${p.status}`;
  if (heroStats) {
    heroStats.innerHTML = p.stats.map(s => `
      <div class="stat-col">
        <span class="stat-num">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }

  // 3. Render Architectural Projects Grid
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('[data-filter]');

  const renderProjects = (filter = 'all') => {
    if (!projectsGrid) return;
    const allProjects = window.PORTFOLIO_DATA.projects;
    const filtered = filter === 'all' 
      ? allProjects 
      : allProjects.filter(item => item.category.toLowerCase().includes(filter.toLowerCase()));

    projectsGrid.innerHTML = filtered.map((proj, idx) => `
      <article class="project-card" data-project-id="${proj.id}">
        <div class="card-media">
          <img src="assets/images/${proj.coverImage}" alt="${proj.title}" loading="lazy" class="card-img">
          <div class="card-badge-row">
            <span class="card-tag">${proj.category}</span>
            <span class="card-year">${proj.year}</span>
          </div>
        </div>
        <div class="card-info">
          <div class="card-loc-scale">
            <span>${proj.location}</span>
            <span class="dot-divider">/</span>
            <span>${proj.scale}</span>
          </div>
          <h3 class="card-title">${proj.title}</h3>
          <p class="card-summary">${proj.summary}</p>
          <div class="card-footer-cta">
            <span class="card-link-text">Examine Case Study</span>
            <span class="card-arrow">↗</span>
          </div>
        </div>
      </article>
    `).join('');
  };

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(filter);
    });
  });

  // 4. Render Interconnection Manifesto & Pillars
  const inter = window.PORTFOLIO_DATA.intersections;
  const manifestoP = document.getElementById('manifesto-text');
  const pillarsGrid = document.getElementById('inter-pillars-grid');

  if (manifestoP) manifestoP.textContent = inter.manifesto;
  if (pillarsGrid) {
    pillarsGrid.innerHTML = inter.pillars.map((pill, idx) => `
      <div class="pillar-card">
        <span class="pillar-num">0${idx + 1}</span>
        <h4 class="pillar-title">${pill.title}</h4>
        <p class="pillar-desc">${pill.desc}</p>
      </div>
    `).join('');
  }

  // 5. Render Soft Skills & Leadership Matrix
  const soft = window.PORTFOLIO_DATA.softSkills;
  const softSkillsGrid = document.getElementById('soft-skills-grid');

  if (softSkillsGrid) {
    softSkillsGrid.innerHTML = soft.skills.map((s, idx) => `
      <div class="soft-skill-cell">
        <div class="skill-header">
          <span class="skill-index">0${idx + 1} // ${s.context.toUpperCase()}</span>
          <h4 class="skill-title">${s.title}</h4>
        </div>
        <p class="skill-desc">${s.desc}</p>
        <div class="skill-metric-badge">
          <span class="metric-icon">✦</span>
          <span>${s.metric}</span>
        </div>
      </div>
    `).join('');
  }

  // 6. Smooth Scroll for Nav Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 7. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('nav-open');
    });
    // Close nav when clicking a link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
      });
    });
  }
});

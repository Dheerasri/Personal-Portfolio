// Modals & Drawers Engine: Project Case Studies, Contact Inquiries, and Interactive CV

class PortfolioModals {
  constructor() {
    this.projects = window.PORTFOLIO_DATA.projects;
    this.currentProjectId = null;

    this.modalOverlay = document.getElementById('global-modal-overlay');
    this.modalContent = document.getElementById('global-modal-content');
    this.closeBtn = document.getElementById('global-modal-close');

    this.bindEvents();
  }

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.modalOverlay) {
          this.close();
        }
      });
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });

    // Delegate project card clicks
    document.addEventListener('click', (e) => {
      const card = e.target.closest('[data-project-id]');
      if (card) {
        const id = card.getAttribute('data-project-id');
        this.openProject(id);
      }

      // Contact button triggers
      const contactTrigger = e.target.closest('[data-open-contact]');
      if (contactTrigger) {
        e.preventDefault();
        this.openContact();
      }

      // Resume button triggers
      const resumeTrigger = e.target.closest('[data-open-resume]');
      if (resumeTrigger) {
        e.preventDefault();
        this.openResume();
      }
    });
  }

  isOpen() {
    return this.modalOverlay && !this.modalOverlay.classList.contains('hidden');
  }

  open() {
    if (!this.modalOverlay) return;
    this.modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.modalOverlay) return;
    this.modalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // --- PROJECT CASE STUDY MODAL ---
  openProject(projectId) {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return;
    this.currentProjectId = projectId;

    const currentIndex = this.projects.findIndex(p => p.id === projectId);
    const prevProject = this.projects[(currentIndex - 1 + this.projects.length) % this.projects.length];
    const nextProject = this.projects[(currentIndex + 1) % this.projects.length];

    this.modalContent.innerHTML = `
      <div class="case-study-container">
        <!-- Technical Monograph Header -->
        <div class="case-study-header">
          <div class="case-meta-top">
            <span class="mono-badge">${project.category.toUpperCase()} // ${project.year}</span>
            <span class="mono-badge">${project.location}</span>
            <span class="mono-badge">${project.scale}</span>
          </div>
          <h2 class="case-title">${project.title}</h2>
          <p class="case-subtitle">${project.subtitle}</p>
        </div>

        <!-- Hero Architectural Diagram / Image -->
        <div class="case-hero-image-wrap">
          <img src="assets/images/${project.coverImage}" alt="${project.title}" class="case-hero-img">
          <div class="case-image-caption">
            <span>FIGURE 1.0 — AXONOMETRIC / SECTIONAL SYNTHESIS</span>
            <span>STATUS: ${project.status.toUpperCase()}</span>
          </div>
        </div>

        <!-- Key Metrics Ribbon -->
        <div class="case-metrics-grid">
          ${project.metrics.map(m => `
            <div class="case-metric-cell">
              <span class="metric-label">${m.label}</span>
              <span class="metric-value">${m.value}</span>
            </div>
          `).join('')}
        </div>

        <!-- Editorial Narrative & Socio-Spatial Deep Dive -->
        <div class="case-body-grid">
          <div class="case-main-col">
            <section class="case-section">
              <h3 class="section-tag">01 / DESIGN BRIEF & CHALLENGE</h3>
              <p class="narrative-p">${project.narrative.brief}</p>
            </section>

            <section class="case-section">
              <h3 class="section-tag">02 / SPATIAL CONCEPT & METHODOLOGY</h3>
              <p class="narrative-p">${project.narrative.concept}</p>
            </section>

            <section class="case-section">
              <h3 class="section-tag">03 / SOCIO-SPATIAL & ECOLOGICAL IMPACT</h3>
              <p class="narrative-p">${project.narrative.spatialImpact}</p>
            </section>
          </div>

          <div class="case-side-col">
            <!-- Soft Skills Highlight Box -->
            <div class="soft-skills-card">
              <h4 class="soft-card-title">HUMAN DIMENSION & LEADERSHIP</h4>
              <p class="soft-card-text">${project.softSkillsHighlight}</p>
            </div>

            <!-- Material Taxonomy -->
            <div class="case-materials-card">
              <h4 class="meta-label">MATERIAL PALETTE</h4>
              <ul class="material-list">
                ${project.narrative.materials.map(mat => `
                  <li><span class="mat-bullet">▪</span> ${mat}</li>
                `).join('')}
              </ul>
            </div>

            <!-- Available Drawings -->
            <div class="case-drawings-card">
              <h4 class="meta-label">DRAWING ARCHIVE</h4>
              <ul class="drawings-list">
                ${project.drawings.map(d => `
                  <li>
                    <span class="d-type">${d.type}</span>
                    <span class="d-label">${d.label}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Case Study Navigation Footer -->
        <div class="case-nav-footer">
          <button class="case-nav-btn prev" data-prev-id="${prevProject.id}">
            ← Previous: <span class="nav-target-name">${prevProject.title}</span>
          </button>
          <button class="case-nav-btn next" data-next-id="${nextProject.id}">
            Next: <span class="nav-target-name">${nextProject.title}</span> →
          </button>
        </div>
      </div>
    `;

    // Bind next/prev
    this.modalContent.querySelector('[data-prev-id]').addEventListener('click', (e) => {
      const prevId = e.currentTarget.getAttribute('data-prev-id');
      this.openProject(prevId);
    });
    this.modalContent.querySelector('[data-next-id]').addEventListener('click', (e) => {
      const nextId = e.currentTarget.getAttribute('data-next-id');
      this.openProject(nextId);
    });

    this.open();
  }

  // --- DIRECT CONTACT & INQUIRY MODAL ---
  openContact() {
    const p = window.PORTFOLIO_DATA.profile;

    this.modalContent.innerHTML = `
      <div class="contact-modal-container">
        <div class="contact-header">
          <span class="mono-badge">DIRECT INQUIRIES & COLLABORATION</span>
          <h2 class="contact-title">Let's build something thoughtful.</h2>
          <p class="contact-subtitle">Whether an architectural commission, spatial research initiative, running collaboration, or computational experiment—I'd love to connect.</p>
        </div>

        <div class="contact-grid">
          <!-- Direct Quick Copy -->
          <div class="contact-card-direct">
            <h4 class="card-eyebrow">DIRECT EMAIL</h4>
            <div class="email-copy-row">
              <span class="email-address">${p.socials.email}</span>
              <button id="copy-email-btn" class="btn-copy">Copy Email</button>
            </div>
            <div id="email-toast" class="email-toast hidden">✓ Email copied to clipboard</div>

            <h4 class="card-eyebrow" style="margin-top: 2rem;">STUDIO LOCATION & AVAILABILITY</h4>
            <p class="location-text">📍 ${p.location}</p>
            <p class="status-indicator"><span class="pulse-dot"></span> ${p.status}</p>

            <h4 class="card-eyebrow" style="margin-top: 2rem;">PROFESSIONAL & SOCIAL CHANNELS</h4>
            <div class="social-badges">
              <a href="${p.socials.github}" target="_blank" rel="noopener" class="social-chip">GitHub ↗</a>
              <a href="${p.socials.linkedin}" target="_blank" rel="noopener" class="social-chip">LinkedIn ↗</a>
              <a href="${p.socials.strava}" target="_blank" rel="noopener" class="social-chip">Strava / Athletics ↗</a>
              <a href="${p.socials.instagram}" target="_blank" rel="noopener" class="social-chip">Instagram ↗</a>
            </div>
          </div>

          <!-- Direct Form -->
          <form id="contact-form" class="contact-form" onsubmit="event.preventDefault(); window.portfolioModals.handleFormSubmit();">
            <div class="form-group">
              <label for="contact-name">YOUR NAME</label>
              <input type="text" id="contact-name" required placeholder="e.g. Elena Rostova">
            </div>
            <div class="form-group">
              <label for="contact-email">YOUR EMAIL</label>
              <input type="email" id="contact-email" required placeholder="elena@studio.com">
            </div>
            <div class="form-group">
              <label for="contact-type">INQUIRY DISCIPLINE</label>
              <select id="contact-type">
                <option value="arch">Architecture & Spatial Commission</option>
                <option value="urban">Socio-Spatial Research & Advisory</option>
                <option value="digital">Digital Lab / Creative Web Prototype</option>
                <option value="running">Kinesthetic Urban Run / Keynote</option>
                <option value="other">General Dialogue</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact-msg">PROJECT BRIEF / MESSAGE</label>
              <textarea id="contact-msg" rows="4" required placeholder="Outline the vision, timeline, or question..."></textarea>
            </div>
            <button type="submit" class="btn-primary" style="width: 100%;">Transmit Message →</button>
            <div id="form-success-note" class="form-success hidden">Message received. I will reply within 24 hours.</div>
          </form>
        </div>
      </div>
    `;

    const copyBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('email-toast');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(p.socials.email).then(() => {
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 2500);
        });
      });
    }

    this.open();
  }

  handleFormSubmit() {
    const successNote = document.getElementById('form-success-note');
    if (successNote) {
      successNote.classList.remove('hidden');
      const form = document.getElementById('contact-form');
      if (form) form.reset();
    }
  }

  // --- INTERACTIVE CV & RESUME MODAL ---
  openResume() {
    const r = window.PORTFOLIO_DATA.resume;
    const p = window.PORTFOLIO_DATA.profile;

    this.modalContent.innerHTML = `
      <div class="resume-modal-container">
        <div class="resume-header">
          <div class="resume-title-wrap">
            <h2 class="resume-name">${p.name}</h2>
            <p class="resume-discipline">${p.title}</p>
          </div>
          <button class="btn-secondary" onclick="window.print();" style="display: flex; align-items: center; gap: 6px;">
            🖨 Print / Save as PDF
          </button>
        </div>

        <div class="resume-body">
          <!-- Experience -->
          <section class="resume-section">
            <h3 class="resume-section-title">PROFESSIONAL PRACTICE</h3>
            <div class="resume-items">
              ${r.experience.map(exp => `
                <div class="resume-item">
                  <div class="item-meta">
                    <span class="item-period">${exp.period}</span>
                    <span class="item-loc">${exp.location}</span>
                  </div>
                  <div class="item-content">
                    <h4 class="item-role">${exp.role}</h4>
                    <p class="item-org">${exp.organization}</p>
                    <ul class="item-highlights">
                      ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Education -->
          <section class="resume-section">
            <h3 class="resume-section-title">ACADEMIC BACKGROUND</h3>
            <div class="resume-items">
              ${r.education.map(edu => `
                <div class="resume-item">
                  <div class="item-meta">
                    <span class="item-period">${edu.year}</span>
                  </div>
                  <div class="item-content">
                    <h4 class="item-role">${edu.degree}</h4>
                    <p class="item-org">${edu.institution}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Exhibitions -->
          <section class="resume-section">
            <h3 class="resume-section-title">EXHIBITIONS & SYMPOSIA</h3>
            <div class="resume-items">
              ${r.exhibitions.map(ex => `
                <div class="resume-item simple">
                  <span class="item-year">${ex.year}</span>
                  <span class="item-title">${ex.title}</span>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Technical Capabilities -->
          <section class="resume-section">
            <h3 class="resume-section-title">TOOL MATRIX & DISCIPLINES</h3>
            <div class="tool-matrix-grid">
              ${r.technicalStack.map(stack => `
                <div class="tool-stack-col">
                  <h4 class="stack-cat">${stack.category}</h4>
                  <div class="stack-tags">
                    ${stack.tools.map(t => `<span class="stack-pill">${t}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        </div>
      </div>
    `;

    this.open();
  }
}

window.PortfolioModals = PortfolioModals;

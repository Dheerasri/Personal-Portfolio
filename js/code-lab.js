// Digital Lab & Interactive Web Experiments Engine
// Provides live browser sandboxes, source code inspector, and GitHub links

class DigitalLabEngine {
  constructor() {
    this.experiments = window.PORTFOLIO_DATA.digitalLab.experiments;
    this.currentExpId = this.experiments[0].id;
    this.activeTab = 'preview'; // 'preview' or 'code'

    // Experiment State
    this.shadowParams = { altitude: 45, azimuth: 135, louverAngle: 40 };
    this.voronoiSeeds = [
      { x: 120, y: 80, label: "Civic Library", color: "#8F5938" },
      { x: 260, y: 140, label: "Community Park", color: "#4A5849" },
      { x: 180, y: 220, label: "Transit Hub", color: "#3A6073" },
      { x: 340, y: 80, label: "Health Clinic", color: "#9E4738" }
    ];
    this.cadenceParams = { spm: 180, amplitude: 35 };
    this.gridParams = { columns: 6, gutter: 16, baseline: 8 };

    this.init();
  }

  init() {
    this.renderTabs();
    this.bindEvents();
    this.loadExperiment(this.currentExpId);
  }

  renderTabs() {
    const listEl = document.getElementById('lab-experiment-list');
    if (!listEl) return;

    listEl.innerHTML = this.experiments.map((exp, idx) => `
      <button class="lab-selector-btn ${exp.id === this.currentExpId ? 'active' : ''}" data-exp-id="${exp.id}">
        <span class="exp-num">0${idx + 1}</span>
        <div class="exp-meta">
          <span class="exp-title">${exp.title}</span>
          <span class="exp-cat">${exp.category}</span>
        </div>
      </button>
    `).join('');
  }

  bindEvents() {
    // Experiment buttons
    const listEl = document.getElementById('lab-experiment-list');
    if (listEl) {
      listEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.lab-selector-btn');
        if (!btn) return;
        const id = btn.getAttribute('data-exp-id');
        this.loadExperiment(id);
        listEl.querySelectorAll('.lab-selector-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    }

    // Tab switcher (Preview vs Source Code)
    const viewPreviewBtn = document.getElementById('lab-tab-preview');
    const viewCodeBtn = document.getElementById('lab-tab-code');
    const previewContainer = document.getElementById('lab-preview-view');
    const codeContainer = document.getElementById('lab-code-view');

    if (viewPreviewBtn && viewCodeBtn) {
      viewPreviewBtn.addEventListener('click', () => {
        this.activeTab = 'preview';
        viewPreviewBtn.classList.add('active');
        viewCodeBtn.classList.remove('active');
        previewContainer.classList.remove('hidden');
        codeContainer.classList.add('hidden');
        this.renderActiveExperiment();
      });

      viewCodeBtn.addEventListener('click', () => {
        this.activeTab = 'code';
        viewCodeBtn.classList.add('active');
        viewPreviewBtn.classList.remove('active');
        previewContainer.classList.add('hidden');
        codeContainer.classList.remove('hidden');
      });
    }

    // Copy Code button
    const copyBtn = document.getElementById('lab-copy-code-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const exp = this.experiments.find(e => e.id === this.currentExpId);
        if (!exp) return;
        navigator.clipboard.writeText(exp.codeSnippet).then(() => {
          const originalText = copyBtn.innerHTML;
          copyBtn.innerHTML = `✓ Copied to Clipboard`;
          setTimeout(() => {
            copyBtn.innerHTML = originalText;
          }, 2000);
        });
      });
    }
  }

  loadExperiment(id) {
    this.currentExpId = id;
    const exp = this.experiments.find(e => e.id === id);
    if (!exp) return;

    // Update Header & Meta
    const titleEl = document.getElementById('lab-active-title');
    const descEl = document.getElementById('lab-active-desc');
    const tagsEl = document.getElementById('lab-active-tags');
    const ghLink = document.getElementById('lab-github-link');
    const codeSnippetEl = document.getElementById('lab-code-display');

    if (titleEl) titleEl.textContent = exp.title;
    if (descEl) descEl.textContent = exp.description;
    if (tagsEl) {
      tagsEl.innerHTML = exp.tags.map(t => `<span class="tag-badge">${t}</span>`).join('') +
        exp.browserSupport.map(b => `<span class="browser-badge">🌐 ${b}</span>`).join('');
    }
    if (ghLink) ghLink.href = exp.githubUrl;
    if (codeSnippetEl) codeSnippetEl.textContent = exp.codeSnippet;

    this.renderActiveExperiment();
  }

  renderActiveExperiment() {
    const sandboxEl = document.getElementById('lab-sandbox-mount');
    if (!sandboxEl) return;

    if (this.currentExpId === 'parametric-shadows') {
      this.mountParametricShadowSim(sandboxEl);
    } else if (this.currentExpId === 'voronoi-urban') {
      this.mountVoronoiUrbanSim(sandboxEl);
    } else if (this.currentExpId === 'running-tempo-matrix') {
      this.mountCadenceWaveSim(sandboxEl);
    } else if (this.currentExpId === 'swiss-grid-engine') {
      this.mountSwissGridSim(sandboxEl);
    }
  }

  // --- EXPERIMENT 1: Parametric Facade & Shadow Synthesizer ---
  mountParametricShadowSim(mount) {
    mount.innerHTML = `
      <div class="lab-runner-layout">
        <div class="lab-controls">
          <div class="control-group">
            <div class="control-header">
              <label>Solar Altitude</label>
              <span id="val-altitude">${this.shadowParams.altitude}°</span>
            </div>
            <input type="range" id="slider-altitude" min="15" max="80" value="${this.shadowParams.altitude}">
          </div>
          <div class="control-group">
            <div class="control-header">
              <label>Solar Azimuth</label>
              <span id="val-azimuth">${this.shadowParams.azimuth}°</span>
            </div>
            <input type="range" id="slider-azimuth" min="45" max="225" value="${this.shadowParams.azimuth}">
          </div>
          <div class="control-group">
            <div class="control-header">
              <label>Louver Fin Tilt</label>
              <span id="val-louver">${this.shadowParams.louverAngle}°</span>
            </div>
            <input type="range" id="slider-louver" min="0" max="85" value="${this.shadowParams.louverAngle}">
          </div>
          <div class="metrics-panel">
            <div class="metric-item">
              <span class="m-label">Daylight Penetration</span>
              <span class="m-val" id="metric-daylight">58%</span>
            </div>
            <div class="metric-item">
              <span class="m-label">Solar Heat Gain Coeff</span>
              <span class="m-val" id="metric-shgc">0.24</span>
            </div>
          </div>
        </div>
        <div class="lab-canvas-wrap">
          <canvas id="shadow-canvas" width="480" height="280"></canvas>
        </div>
      </div>
    `;

    const canvas = document.getElementById('shadow-canvas');
    const ctx = canvas.getContext('2d');

    const drawShadows = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.body.classList.contains('dark-theme');
      
      const altRad = (this.shadowParams.altitude * Math.PI) / 180;
      const azRad = (this.shadowParams.azimuth * Math.PI) / 180;
      const finRad = (this.shadowParams.louverAngle * Math.PI) / 180;

      // Isometric Facade Base Grid
      const originX = 120;
      const originY = 180;
      const bayWidth = 65;
      const bayHeight = 90;

      // Draw 3 Architectural Window Bays
      for (let bay = 0; bay < 3; bay++) {
        const bx = originX + bay * (bayWidth + 20);
        const by = originY - bay * 15;

        // Window Glass Recess
        ctx.fillStyle = isDark ? '#1a242f' : '#d5e4ec';
        ctx.fillRect(bx, by - bayHeight, bayWidth, bayHeight);
        ctx.strokeStyle = isDark ? '#ffffff' : '#141413';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(bx, by - bayHeight, bayWidth, bayHeight);

        // Louver Fin Depth calculation
        const louverCount = 5;
        const louverGap = bayHeight / louverCount;

        for (let l = 0; l < louverCount; l++) {
          const ly = (by - bayHeight) + l * louverGap;
          const finLength = 30;
          const finDx = Math.cos(finRad) * finLength;
          const finDy = Math.sin(finRad) * 10;

          // Shadow cast by louver on glass
          const shadowDepth = Math.tan(altRad) * (finLength * 0.8);
          ctx.fillStyle = isDark ? 'rgba(0,0,0,0.65)' : 'rgba(20,20,19,0.28)';
          ctx.beginPath();
          ctx.moveTo(bx, ly);
          ctx.lineTo(bx + bayWidth, ly);
          ctx.lineTo(bx + bayWidth, ly + shadowDepth);
          ctx.lineTo(bx, ly + shadowDepth);
          ctx.closePath();
          ctx.fill();

          // Physical Fin
          ctx.strokeStyle = '#8F5938';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(bx - 5, ly);
          ctx.lineTo(bx + bayWidth + 5, ly + finDy);
          ctx.stroke();
        }
      }

      // Sun Vector Indicator
      const sunDistance = 80;
      const sunX = 380 - Math.cos(azRad) * sunDistance;
      const sunY = 70 - Math.sin(altRad) * 45;

      ctx.fillStyle = '#E5A93C';
      ctx.beginPath();
      ctx.arc(sunX, sunY, 10, 0, Math.PI * 2);
      ctx.fill();

      // Sun Ray Dashed Vector
      ctx.strokeStyle = '#E5A93C';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(sunX, sunY);
      ctx.lineTo(220, 140);
      ctx.stroke();
      ctx.setLineDash([]);

      // Update calculated metrics
      const daylightVal = Math.round(Math.max(15, Math.min(95, (this.shadowParams.altitude * 1.1) - (this.shadowParams.louverAngle * 0.5))));
      const shgcVal = (0.15 + (daylightVal / 100) * 0.25).toFixed(2);
      const dlEl = document.getElementById('metric-daylight');
      const shgcEl = document.getElementById('metric-shgc');
      if (dlEl) dlEl.textContent = `${daylightVal}%`;
      if (shgcEl) shgcEl.textContent = shgcVal;
    };

    drawShadows();

    // Bind slider inputs
    const altSlider = document.getElementById('slider-altitude');
    const azSlider = document.getElementById('slider-azimuth');
    const louverSlider = document.getElementById('slider-louver');

    altSlider.addEventListener('input', (e) => {
      this.shadowParams.altitude = parseInt(e.target.value, 10);
      document.getElementById('val-altitude').textContent = `${this.shadowParams.altitude}°`;
      drawShadows();
    });

    azSlider.addEventListener('input', (e) => {
      this.shadowParams.azimuth = parseInt(e.target.value, 10);
      document.getElementById('val-azimuth').textContent = `${this.shadowParams.azimuth}°`;
      drawShadows();
    });

    louverSlider.addEventListener('input', (e) => {
      this.shadowParams.louverAngle = parseInt(e.target.value, 10);
      document.getElementById('val-louver').textContent = `${this.shadowParams.louverAngle}°`;
      drawShadows();
    });
  }

  // --- EXPERIMENT 2: Socio-Spatial Voronoi Partitioner ---
  mountVoronoiUrbanSim(mount) {
    mount.innerHTML = `
      <div class="lab-runner-layout">
        <div class="lab-controls">
          <p class="control-note">Click anywhere on the map to plant a new civic node and recalculate 15-minute walking territory boundaries in real-time.</p>
          <button id="btn-reset-voronoi" class="btn-secondary" style="padding: 6px 12px; font-size: 11px;">Reset Civic Seeds</button>
          <div class="civic-seed-legend" id="voronoi-legend">
            ${this.voronoiSeeds.map(s => `
              <div class="legend-chip"><span class="chip-dot" style="background:${s.color}"></span> ${s.label}</div>
            `).join('')}
          </div>
        </div>
        <div class="lab-canvas-wrap">
          <canvas id="voronoi-canvas" width="480" height="280" style="cursor: crosshair;"></canvas>
        </div>
      </div>
    `;

    const canvas = document.getElementById('voronoi-canvas');
    const ctx = canvas.getContext('2d');

    const drawVoronoi = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.body.classList.contains('dark-theme');

      // Grid background
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Nearest-neighbor cell boundary approximation
      const seeds = this.voronoiSeeds;
      for (let i = 0; i < seeds.length; i++) {
        for (let j = i + 1; j < seeds.length; j++) {
          const s1 = seeds[i];
          const s2 = seeds[j];
          const midX = (s1.x + s2.x) / 2;
          const midY = (s1.y + s2.y) / 2;
          const dx = s2.x - s1.x;
          const dy = s2.y - s1.y;

          // Perpendicular bisector vector
          const perpX = -dy;
          const perpY = dx;
          const len = Math.sqrt(perpX * perpX + perpY * perpY) || 1;

          ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(20,20,19,0.18)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(midX - (perpX / len) * 200, midY - (perpY / len) * 200);
          ctx.lineTo(midX + (perpX / len) * 200, midY + (perpY / len) * 200);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Draw Catchment Radii (15-min walking radius: 60px)
      seeds.forEach(seed => {
        ctx.strokeStyle = seed.color;
        ctx.fillStyle = seed.color + '15';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(seed.x, seed.y, 65, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Seed Center Pin
        ctx.fillStyle = seed.color;
        ctx.beginPath();
        ctx.arc(seed.x, seed.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.font = '10px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = isDark ? '#ffffff' : '#141413';
        ctx.fillText(seed.label, seed.x + 10, seed.y - 8);
      });
    };

    drawVoronoi();

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const palette = ["#8F5938", "#4A5849", "#3A6073", "#A44A3F", "#6B5B95"];
      const types = ["Public Plaza", "Pocket Forest", "Art Pavilion", "Co-Working Lab", "Urban Farm"];
      const nextIdx = this.voronoiSeeds.length;
      
      this.voronoiSeeds.push({
        x: Math.round(x),
        y: Math.round(y),
        label: types[nextIdx % types.length],
        color: palette[nextIdx % palette.length]
      });

      drawVoronoi();
    });

    const resetBtn = document.getElementById('btn-reset-voronoi');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.voronoiSeeds = [
          { x: 120, y: 80, label: "Civic Library", color: "#8F5938" },
          { x: 260, y: 140, label: "Community Park", color: "#4A5849" },
          { x: 180, y: 220, label: "Transit Hub", color: "#3A6073" },
          { x: 340, y: 80, label: "Health Clinic", color: "#9E4738" }
        ];
        drawVoronoi();
      });
    }
  }

  // --- EXPERIMENT 3: Kinetic Cadence Waveform ---
  mountCadenceWaveSim(mount) {
    mount.innerHTML = `
      <div class="lab-runner-layout">
        <div class="lab-controls">
          <div class="control-group">
            <div class="control-header">
              <label>Cadence (Steps / Min)</label>
              <span id="val-cadence">${this.cadenceParams.spm} SPM</span>
            </div>
            <input type="range" id="slider-cadence" min="140" max="210" value="${this.cadenceParams.spm}">
          </div>
          <div class="control-group">
            <div class="control-header">
              <label>Kinetic Amplitude</label>
              <span id="val-amp">${this.cadenceParams.amplitude} mm</span>
            </div>
            <input type="range" id="slider-amp" min="10" max="60" value="${this.cadenceParams.amplitude}">
          </div>
          <p class="control-note">Calculates the acoustic frequency resonance generated by footstrike vibrations through urban granite paving.</p>
        </div>
        <div class="lab-canvas-wrap">
          <canvas id="cadence-canvas" width="480" height="280"></canvas>
        </div>
      </div>
    `;

    const canvas = document.getElementById('cadence-canvas');
    const ctx = canvas.getContext('2d');
    let phase = 0;
    let animId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.body.classList.contains('dark-theme');
      const w = canvas.width;
      const h = canvas.height;
      const midY = h / 2;

      // Draw Center Baseline
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.stroke();

      // Dual Harmonic Waves (Cadence + Heart Rhythm)
      const freq = (this.cadenceParams.spm / 60) * 0.05;
      const amp = this.cadenceParams.amplitude;

      // Primary Wave
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = midY + Math.sin(x * freq + phase) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#8F5938';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Secondary Wave (Overtone)
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = midY + Math.cos(x * (freq * 2) - phase * 1.5) * (amp * 0.4);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = isDark ? '#ffffff' : '#141413';
      ctx.lineWidth = 1;
      ctx.stroke();

      phase += 0.04;
      animId = requestAnimationFrame(render);
    };

    render();

    const spmSlider = document.getElementById('slider-cadence');
    const ampSlider = document.getElementById('slider-amp');

    spmSlider.addEventListener('input', (e) => {
      this.cadenceParams.spm = parseInt(e.target.value, 10);
      document.getElementById('val-cadence').textContent = `${this.cadenceParams.spm} SPM`;
    });

    ampSlider.addEventListener('input', (e) => {
      this.cadenceParams.amplitude = parseInt(e.target.value, 10);
      document.getElementById('val-amp').textContent = `${this.cadenceParams.amplitude} mm`;
    });
  }

  // --- EXPERIMENT 4: Micro-Modular Swiss Grid Engine ---
  mountSwissGridSim(mount) {
    mount.innerHTML = `
      <div class="lab-runner-layout">
        <div class="lab-controls">
          <div class="control-group">
            <div class="control-header">
              <label>Grid Columns</label>
              <span id="val-cols">${this.gridParams.columns}</span>
            </div>
            <input type="range" id="slider-cols" min="2" max="12" value="${this.gridParams.columns}">
          </div>
          <div class="control-group">
            <div class="control-header">
              <label>Gutter Width</label>
              <span id="val-gutter">${this.gridParams.gutter}px</span>
            </div>
            <input type="range" id="slider-gutter" min="8" max="32" value="${this.gridParams.gutter}">
          </div>
          <p class="control-note">Strict typographic spatial proportion based on Müller-Brockmann's modular grid matrix.</p>
        </div>
        <div class="lab-canvas-wrap">
          <div id="swiss-grid-preview" style="width: 100%; height: 260px; padding: 12px; box-sizing: border-box; display: grid;"></div>
        </div>
      </div>
    `;

    const updateGrid = () => {
      const container = document.getElementById('swiss-grid-preview');
      if (!container) return;
      const cols = this.gridParams.columns;
      const gutter = this.gridParams.gutter;

      container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
      container.style.gap = `${gutter}px`;

      let cells = '';
      for (let i = 0; i < cols; i++) {
        cells += `
          <div style="border: 1px dashed rgba(143,89,56,0.5); background: rgba(143,89,56,0.06); display: flex; align-items: center; justify-content: center; font-family: monospace; font-size: 10px; color: var(--text-color);">
            COL ${i + 1}
          </div>
        `;
      }
      container.innerHTML = cells;
    };

    updateGrid();

    const colSlider = document.getElementById('slider-cols');
    const gutSlider = document.getElementById('slider-gutter');

    colSlider.addEventListener('input', (e) => {
      this.gridParams.columns = parseInt(e.target.value, 10);
      document.getElementById('val-cols').textContent = this.gridParams.columns;
      updateGrid();
    });

    gutSlider.addEventListener('input', (e) => {
      this.gridParams.gutter = parseInt(e.target.value, 10);
      document.getElementById('val-gutter').textContent = `${this.gridParams.gutter}px`;
      updateGrid();
    });
  }
}

window.DigitalLabEngine = DigitalLabEngine;

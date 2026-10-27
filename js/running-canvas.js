// Running & Spatial Systems: Kinesthetic Urban Flow Simulator
// Visualizes the intersection between bodily cadence, urban topography, and spatial perception

class SpatialRunningSimulator {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.container = document.getElementById(containerId);

    this.currentRouteIndex = 0;
    this.routes = window.PORTFOLIO_DATA.intersections.routes;
    
    this.progress = 0; // 0 to 1
    this.isPlaying = true;
    this.speed = 0.0018; // Speed of runner traversing route
    
    this.cadence = 180;
    this.heartRate = 148;
    this.elevationGain = 0;
    
    this.initCanvasSize();
    this.bindEvents();
    this.renderRouteInfo();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initCanvasSize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = rect.width || 700;
    this.height = 240;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.initCanvasSize();
    });

    // Route selectors
    const routeButtons = document.querySelectorAll('[data-route-btn]');
    routeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-route-btn'), 10);
        this.selectRoute(idx);
        routeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Play/Pause button
    const toggleBtn = document.getElementById('run-sim-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.isPlaying = !this.isPlaying;
        toggleBtn.innerHTML = this.isPlaying 
          ? '<span class="icon">⏸</span> Pause Run' 
          : '<span class="icon">▶</span> Resume Run';
      });
    }

    // Scrubber interaction
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      this.progress = Math.max(0, Math.min(1, clickX / this.width));
    });
  }

  selectRoute(index) {
    this.currentRouteIndex = index;
    this.progress = 0;
    this.renderRouteInfo();
  }

  renderRouteInfo() {
    const route = this.routes[this.currentRouteIndex];
    if (!route) return;

    const nameEl = document.getElementById('sim-route-name');
    const distEl = document.getElementById('sim-route-dist');
    const paceEl = document.getElementById('sim-route-pace');
    const noteEl = document.getElementById('sim-route-note');
    const densityEl = document.getElementById('sim-route-density');

    if (nameEl) nameEl.textContent = route.name;
    if (distEl) distEl.textContent = route.distance;
    if (paceEl) paceEl.textContent = route.pace;
    if (noteEl) noteEl.textContent = `"${route.spatialNote}"`;
    if (densityEl) densityEl.textContent = route.urbanDensity;
  }

  // Generate continuous elevation curve based on route
  getElevationAt(t) {
    const seed = this.currentRouteIndex * 1.5;
    // Multi-harmonic wave simulating realistic urban topology
    const y1 = Math.sin((t * 4 + seed) * Math.PI) * 28;
    const y2 = Math.cos((t * 8 + seed) * Math.PI) * 14;
    const y3 = Math.sin((t * 16) * Math.PI) * 6;
    return y1 + y2 + y3;
  }

  // Calculate urban spatial density at point t
  getDensityAt(t) {
    const d = 0.5 + 0.4 * Math.sin(t * 6 * Math.PI + this.currentRouteIndex);
    return Math.max(0.1, Math.min(0.95, d));
  }

  animate() {
    if (this.isPlaying) {
      this.progress += this.speed;
      if (this.progress > 1) {
        this.progress = 0;
      }
    }

    this.draw();
    this.updateHUD();
    requestAnimationFrame(this.animate);
  }

  updateHUD() {
    const currentElevation = Math.round(30 + this.getElevationAt(this.progress));
    const density = Math.round(this.getDensityAt(this.progress) * 100);
    const spm = Math.round(178 + Math.sin(this.progress * 20) * 4);
    const hr = Math.round(144 + (currentElevation / 50) * 12);

    const elevEl = document.getElementById('hud-elev');
    const spmEl = document.getElementById('hud-spm');
    const hrEl = document.getElementById('hud-hr');
    const densityEl = document.getElementById('hud-density');

    if (elevEl) elevEl.textContent = `+${currentElevation}m`;
    if (spmEl) spmEl.textContent = `${spm} SPM`;
    if (hrEl) hrEl.textContent = `${hr} BPM`;
    if (densityEl) densityEl.textContent = `${density}%`;
  }

  draw() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.clearRect(0, 0, w, h);

    const isDark = document.body.classList.contains('dark-theme');
    const bgGridColor = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
    const profileLineColor = isDark ? '#ffffff' : '#141413';
    const accentColor = '#8F5938';
    const groundFill = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(20,20,19,0.03)';
    const datumColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)';

    // 1. Grid & Datum Lines
    ctx.strokeStyle = bgGridColor;
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Baseline Ground Datum
    const baseY = h - 60;
    ctx.strokeStyle = datumColor;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, baseY);
    ctx.lineTo(w, baseY);
    ctx.stroke();
    ctx.setLineDash([]);

    // 2. Urban Skyline / Density Silhouette in Background
    ctx.fillStyle = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';
    const numBuildings = 30;
    const bWidth = w / numBuildings;
    for (let i = 0; i < numBuildings; i++) {
      const bProgress = i / numBuildings;
      const bDensity = this.getDensityAt(bProgress);
      const bHeight = bDensity * 70 + 10;
      ctx.fillRect(i * bWidth, baseY - bHeight - 20, bWidth - 2, bHeight + 20);
    }

    // 3. Continuous Elevation Profile Path
    const points = [];
    const step = 4;
    for (let x = 0; x <= w; x += step) {
      const t = x / w;
      const elev = this.getElevationAt(t);
      const y = baseY - elev - 25;
      points.push({ x, y });
    }

    // Fill under terrain
    ctx.beginPath();
    ctx.moveTo(0, baseY);
    points.forEach((p, idx) => {
      if (idx === 0) ctx.lineTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.lineTo(w, baseY);
    ctx.closePath();
    ctx.fillStyle = groundFill;
    ctx.fill();

    // Elevation Stroke
    ctx.beginPath();
    points.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.strokeStyle = profileLineColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // 4. Completed Trail (Colored Accent)
    const currentX = this.progress * w;
    ctx.beginPath();
    let first = true;
    for (let i = 0; i < points.length; i++) {
      if (points[i].x <= currentX) {
        if (first) {
          ctx.moveTo(points[i].x, points[i].y);
          first = false;
        } else {
          ctx.lineTo(points[i].x, points[i].y);
        }
      }
    }
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 3;
    ctx.stroke();

    // 5. Runner Marker (Dynamic Cadence Motion)
    const runnerElev = this.getElevationAt(this.progress);
    const runnerY = baseY - runnerElev - 25;

    // Pulse wave rings around runner
    const pulsePhase = (Date.now() / 250) % 2;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(currentX, runnerY, 8 + pulsePhase * 8, 0, Math.PI * 2);
    ctx.stroke();

    // Runner Center Pin
    ctx.fillStyle = accentColor;
    ctx.beginPath();
    ctx.arc(currentX, runnerY, 5, 0, Math.PI * 2);
    ctx.fill();

    // Vertical Scanner Coordinate Line
    ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(20,20,19,0.2)';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(currentX, 10);
    ctx.lineTo(currentX, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // Runner Tag Stamp
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillStyle = isDark ? '#ffffff' : '#141413';
    ctx.fillText(`${(this.progress * parseFloat(this.routes[this.currentRouteIndex].distance)).toFixed(1)} km`, currentX + 8, runnerY - 12);
  }
}

window.SpatialRunningSimulator = SpatialRunningSimulator;

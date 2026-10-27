# Alex Thorne — Multi-Disciplinary Portfolio

> **Spatial Architecture // Socio-Spatial Systems // Kinesthetic Movement & Running // Digital Code Lab**

An editorial, monograph-inspired personal portfolio designed for multi-disciplinary practitioners operating across physical space, computational tools, and bodily endurance.

---

## ✦ Core Architectural Pillars

1. **Curated Architecture & Spatial Systems**:
   - Monographic case studies with axonometric diagrams, structural specifications, decarbonization metrics, and socio-spatial analyses.
   - Interactive project drawer featuring deep dives into the design brief, methodology, materials, and community impact.

2. **The Intersection: Movement, City & Body**:
   - Explores the kinesthetic connection between long-distance endurance running, urban diagnostics, and psychological resilience.
   - **Live Spatial Cadence Simulator**: An interactive Canvas visualization mapping cadence (SPM), elevation profiles, heart rate curves, and real-time urban density across multi-city running routes (Berlin Wall Trail, Thames Barrier, Rotterdam Bridges).

3. **Digital Lab & Creative Code Experiments**:
   - An interactive browser-native playground showcasing creative web development experiments:
     - *01. Parametric Facade & Shadow Synthesizer* (real-time solar path and louver shadow ray-tracing)
     - *02. Socio-Spatial Voronoi Partitioner* (dynamic 15-minute city walking radius calculation)
     - *03. Kinetic Cadence Waveform* (audio-visual spatial oscillations mapped to running tempo)
     - *04. Micro-Modular Swiss Grid Engine* (Josef Müller-Brockmann modular layout generator)
   - Built-in live sandbox runner and **Source Code Inspector** with one-click copy and direct GitHub repository links.

4. **The Human Dimension & Soft Skills**:
   - Dedicated chapters highlighting empathetic stakeholder mediation, cross-disciplinary translation (architects, engineers, municipal authorities, coders), radical endurance mindset, and psychological safety in design critiques.

5. **Curriculum Vitae & Inquiries**:
   - Clean interactive resume view with timeline of professional practice, academic credentials, exhibitions, and tool matrix.
   - One-click printer/PDF ready view.
   - Direct inquiry modal with clipboard email copy and contact form.

---

## 🛠 Tech Stack & Browser Compatibility

- **Pure Modern Web (Zero Build Step Dependency)**: HTML5, CSS3 Custom Properties, Modular Vanilla JavaScript (ES6+).
- **Typography**: Google Fonts (*Instrument Serif*, *Plus Jakarta Sans*, *JetBrains Mono*).
- **Aesthetic Modes**:
  - **Light Editorial Paper**: Warm linen alabaster (`#FBFBF9`), architectural earth neutrals, terra-cotta accents.
  - **Dark Nocturne Blueprint**: Deep charcoal obsidian (`#111110`), crisp mono lines, blueprint glow.
- **Cross-Browser Verified**: Chrome 120+, Firefox 122+, Safari 17+, Microsoft Edge.

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Simply double-click or open `index.html` directly in any modern web browser.

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Or using Node / npx:
```bash
npx serve .
```
Then visit `http://localhost:8000` (or `http://localhost:3000`).

---

## 🌐 Deploying to GitHub Pages (In 60 Seconds)

1. Initialize Git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of multi-disciplinary portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link your remote repository and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings → Pages**:
   - Under **Build and deployment → Branch**, choose `main` and `/ (root)`.
   - Click **Save**. Your portfolio is live in under 1 minute!

---

## ✏️ How to Customize Your Content

All profile information, architectural case studies, running routes, code experiments, and resume data are stored in a single, clean configuration file:
- **`js/data.js`**: Edit your name, bio, statistics, projects, GitHub links, and contact email.
- **`assets/images/`**: Drop your architectural renders, sketches, plans, or photographs here and reference them in `data.js`.

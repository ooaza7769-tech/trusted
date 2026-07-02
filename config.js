/* =========================================
   GŁÓWNE ZMIENNE (CIEMNY MOTYW)
   ========================================= */
:root {
  --bg: #0f172a;           /* Główne ciemne tło */
  --panel: #1e293b;        /* Tło kart i sekcji */
  --panel-2: #334155;      /* Ramki i detale */
  --text: #f8fafc;         /* Jasny tekst */
  --text-muted: #94a3b8;   /* Zgaszony tekst */
  --accent: #5865F2;       /* Fioletowy/Niebieski (Discord) */
  --accent-hover: #4752C4;
  --success: #10b981;      /* Zielony status */
}

/* =========================================
   RESET I PODSTAWY
   ========================================= */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

/* =========================================
   NAWIGACJA
   ========================================= */
.nav {
  padding: 20px 0;
  border-bottom: 1px solid var(--panel);
}

.nav .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  margin: 0 15px;
  color: var(--text-muted);
  transition: color 0.2s;
  font-weight: 500;
}

.nav-links a:hover, .nav-links a.active {
  color: var(--text);
}

.nav-cta {
  background: var(--panel);
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  border: 1px solid var(--panel-2);
  transition: 0.2s;
}

.nav-cta:hover {
  background: var(--panel-2);
}

/* =========================================
   SEKCJA GŁÓWNA (HERO)
   ========================================= */
.hero {
  padding: 80px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.eyebrow {
  color: var(--accent);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin: 0 0 20px 0;
}

.accent {
  color: var(--accent);
}

.lead {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 30px;
}

.hero-cta {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.btn-ghost {
  border: 1px solid var(--panel-2);
  background: var(--panel);
}

.btn-ghost:hover {
  background: var(--panel-2);
}

/* KARTA ID (Prawa strona Hero) */
.id-card {
  background: var(--panel);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--panel-2);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.id-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: bold;
}

.id-status {
  color: var(--success);
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(16, 185, 129, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
}

.id-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--panel-2);
}

.id-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.id-row span:first-child {
  color: var(--text-muted);
}

/* =========================================
   STATYSTYKI
   ========================================= */
.stat-strip {
  background: var(--panel);
  padding: 40px 0;
  border-top: 1px solid var(--panel-2);
  border-bottom: 1px solid var(--panel-2);
}

.stat-strip .wrap {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.stat .num {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--accent);
}

.stat .u {
  font-size: 1.5rem;
  color: var(--text);
}

.stat .lbl {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 5px;
}

/* =========================================
   SEKCJE (ABOUT, HOW IT WORKS)
   ========================================= */
section {
  padding: 80px 0;
}

.section-head h2 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.about-grid p {
  color: var(--text-muted);
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.about-grid strong {
  color: var(--text);
}

.check-list {
  list-style: none;
}

.check-list li {
  background: var(--panel);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--panel-2);
}

.check-list b {
  display: block;
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 5px;
}

.check-list div {
  color: var(--text-muted);
}

/* KARTY "HOW IT WORKS" */
.paths {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 40px;
}

.path-card {
  background: var(--panel);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid var(--panel-2);
}

.tag {
  display: inline-block;
  background: var(--panel-2);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--text);
}

.path-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.path-card p {
  color: var(--text-muted);
  margin-bottom: 25px;
}

.path-card ol {
  padding-left: 20px;
  color: var(--text-muted);
}

.path-card ol li {
  margin-bottom: 12px;
}

/* VETTING STEPS */
.vet-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.vet-step {
  background: var(--panel);
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--panel-2);
}

.vet-step h4 {
  font-size: 1.2rem;
  margin: 15px 0 10px;
}

.vet-step p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* =========================================
   DOLNE CTA I STOPKA
   ========================================= */
.cta-band {
  background: linear-gradient(135deg, var(--panel), #2e1065);
  padding: 60px;
  border-radius: 16px;
  border: 1px solid var(--accent);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cta-text h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.cta-text p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.discord-btn {
  background: var(--accent);
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}

.discord-btn:hover {
  background: var(--accent-hover);
}

footer {
  padding: 40px 0;
  border-top: 1px solid var(--panel);
  text-align: center;
  color: var(--text-muted);
}

.f-brand {
  font-weight: bold;
  color: var(--text);
  margin-bottom: 15px;
}

/* =========================================
   STYLE PODSTRONY TEAM (TEAM.HTML)
   ========================================= */
.team-hero {
  text-align: center;
  padding: 80px 0;
  max-width: 700px;
  margin: 0 auto;
}

.team-hero p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.tier-head {
  border-bottom: 1px solid var(--panel-2);
  margin-bottom: 30px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.count {
  background: var(--panel-2);
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: bold;
}

.grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
}

.founder-card {
  background: linear-gradient(135deg, var(--panel), #1e1b4b);
  padding: 40px;
  border-radius: 16px;
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 60px;
  border: 1px solid var(--accent);
}

.member-card {
  background: var(--panel);
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--panel-2);
  transition: transform 0.2s;
}

.member-card:hover {
  transform: translateY(-5px);
}

.avatar {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  margin: 0 auto 15px;
  position: relative;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  background: var(--success);
  border-radius: 50%;
  border: 3px solid var(--panel);
}

.member-name {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--text);
}

.member-role {
  color: var(--accent);
  font-size: 0.9rem;
  margin-bottom: 12px;
  font-weight: bold;
}

.member-handle {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.dc-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--panel-2);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-top: 10px;
  color: var(--text);
}

/* Responsywność dla mniejszych ekranów */
@media (max-width: 768px) {
  .hero-grid, .about-grid, .paths, .vet-steps, .cta-band, .founder-card {
    grid-template-columns: 1fr;
    flex-direction: column;
    text-align: center;
  }
  .id-card { margin-top: 20px; }
  .nav-links { display: none; } /* Na szybko ukryte linki na telefonie */
}

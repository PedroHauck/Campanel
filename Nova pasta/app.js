/**
 * app.js — ScoutGG · Lógica principal
 * ALTERAÇÕES:
 *  - Toda lógica agora é dinâmica via TEAMS[teamId]; sem if/else hardcoded por time
 *  - selectTeam() aplica tema a partir de team.theme (suporta quantos times existirem)
 *  - renderPlayerCards(), selectPlayer(), modal: todos usam currentTeamId dinamicamente
 *  - Nenhuma funcionalidade existente foi removida
 *  - VISUAL: avatar circular removido — portrait é a única imagem do perfil
 */

// ─────────────────────────────────────────────
//  Estado global
// ─────────────────────────────────────────────
let currentTeamId      = null;
let currentPlayerId    = null;
let radarChartInstance = null;

// ─────────────────────────────────────────────
//  Navegação entre telas
// ─────────────────────────────────────────────

/** Exibe apenas a tela solicitada, ocultando as demais. */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

function goHome() {
  document.body.dataset.theme = "";
  showScreen("screen-home");
}

function goPlayers() {
  showScreen("screen-players");
}

// ─────────────────────────────────────────────
//  Tela 1 → Tela 2: Seleciona time
// ─────────────────────────────────────────────
function selectTeam(teamId) {
  currentTeamId = teamId;
  const team = TEAMS[teamId];
  if (!team) return;

  document.body.dataset.theme = team.theme;
  document.getElementById("playersTitle").textContent =
    `${team.name} · ${team.fullName}`;

  renderPlayerCards(team);
  showScreen("screen-players");
}

function renderPlayerCards(team) {
  const grid = document.getElementById("playersGrid");
  grid.innerHTML = "";

  team.players.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.style.animationDelay = `${index * 80}ms`;

    const topStat  = Object.entries(player.stats).sort((a, b) => b[1] - a[1])[0];
    const topLabel = { macro: "MACRO", micro: "MICRO", calls: "CALLS", pool: "POOL" }[topStat[0]];
    const displayName = `${player.nickname} <small>(${player.name})</small>`;

    card.innerHTML = `
      <div class="card-glow"></div>
      <div class="card-inner">
        <div class="card-avatar">
          <img src="${player.photo}" alt="${player.nickname}" loading="lazy" />
        </div>
        <div class="card-info">
          <span class="card-name">${displayName}</span>
          <span class="card-role">${player.role}</span>
          <div class="card-champs">
            ${player.champions.map(c =>
              `<img class="card-champ" src="${c.img}" alt="${c.name}" title="${c.name}" loading="lazy" />`
            ).join("")}
          </div>
        </div>
        <div class="card-stat-preview">
          <span class="stat-preview-label">${topLabel}</span>
          <span class="stat-preview-val">${topStat[1]}</span>
        </div>
      </div>
      <div class="card-arrow">›</div>
    `;

    card.addEventListener("click", () => selectPlayer(player.id));
    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  Tela 2 → Tela 3: Seleciona jogador
//  ALTERADO: linha do profileAvatar removida
// ─────────────────────────────────────────────
function selectPlayer(playerId) {
  currentPlayerId = playerId;
  const team   = TEAMS[currentTeamId];
  const player = team.players.find(p => p.id === playerId);
  if (!player) return;

  document.getElementById("profileTeamLabel").textContent =
    `${team.name} · ${team.fullName}`;
  document.getElementById("profileBackLabel").textContent = team.name;

  // ── Portrait — única imagem do perfil (avatar circular removido) ──
  const portraitEl = document.getElementById("profilePortrait");
  portraitEl.src = player.portrait || player.photo;
  portraitEl.alt = player.nickname;

  // Re-dispara animação ao trocar de jogador
  const portraitWrap = portraitEl.closest(".player-portrait-wrap");
  if (portraitWrap) {
    portraitWrap.style.animation = "none";
    portraitWrap.offsetHeight; // reflow
    portraitWrap.style.animation = "";
  }

  document.getElementById("profileName").textContent     = player.name;
  document.getElementById("profileNickname").textContent = `"${player.nickname}"`;
  document.getElementById("profileRole").textContent     = player.role;

  renderChampions(player.champions);
  renderStatBars(player.stats, team);
  renderRadar(player.stats, team);

  showScreen("screen-profile");
}

/** Renderiza os 3 ícones de campeões. */
function renderChampions(champions) {
  document.getElementById("profileChamps").innerHTML = champions.map(c => `
    <div class="champ-item">
      <img src="${c.img}" alt="${c.name}" loading="lazy" />
      <span>${c.name}</span>
    </div>
  `).join("");
}

/** Renderiza barras horizontais de habilidades com animação. */
function renderStatBars(stats, team) {
  const container = document.getElementById("statBars");
  const labels = { macro: "MACRO", micro: "MICRO", calls: "CALLS", pool: "POOL" };

  container.innerHTML = Object.entries(stats).map(([key, val]) => `
    <div class="stat-bar-row">
      <span class="stat-bar-label">${labels[key]}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill"
             data-val="${val}"
             style="width:0%; background:linear-gradient(90deg,${team.gradientA},${team.gradientB})">
        </div>
      </div>
      <span class="stat-bar-val">${val}</span>
    </div>
  `).join("");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      container.querySelectorAll(".stat-bar-fill").forEach(bar => {
        bar.style.transition = "width 0.9s cubic-bezier(.4,0,.2,1)";
        bar.style.width = bar.dataset.val + "%";
      });
    });
  });
}

function renderRadar(stats, team) {
  if (radarChartInstance) {
    radarChartInstance.destroy();
    radarChartInstance = null;
  }

  const ctx         = document.getElementById("radarChart").getContext("2d");
  const accent      = team.accentColor;
  const accentAlpha = accent + "55";

  radarChartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["MACRO", "MICRO", "CALLS", "POOL"],
      datasets: [{
        label:                team.fullName,
        data:                 [stats.macro, stats.micro, stats.calls, stats.pool],
        backgroundColor:      accentAlpha,
        borderColor:          accent,
        borderWidth:          2,
        pointBackgroundColor: accent,
        pointBorderColor:     "#111",
        pointRadius:          5,
        pointHoverRadius:     7,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: { duration: 700, easing: "easeInOutQuart" },
      scales: {
        r: {
          min: 0, max: 100,
          ticks: { display: false, stepSize: 25 },
          grid:        { color: "rgba(255,255,255,0.08)" },
          angleLines:  { color: "rgba(255,255,255,0.12)" },
          pointLabels: {
            color: "#aaa",
            font: { family: "Rajdhani", size: 13, weight: "700" },
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#111",
          borderColor:     accent,
          borderWidth:     1,
          titleColor:      accent,
          bodyColor:       "#ddd",
          titleFont: { family: "Bebas Neue", size: 15 },
          bodyFont:  { family: "Rajdhani",   size: 13 },
        },
      },
    },
  });
}

// ─────────────────────────────────────────────
//  MODAL DE EDIÇÃO
// ─────────────────────────────────────────────

function openEditModal() {
  const team   = TEAMS[currentTeamId];
  const player = team.players.find(p => p.id === currentPlayerId);
  if (!player) return;

  buildChampEditors(player.champions);
  buildStatEditors(player.stats, team);
  buildPortraitEditor(player.portrait || player.photo);

  document.getElementById("editModalOverlay").classList.add("active");
  document.body.classList.add("modal-open");
}

function closeEditModal() {
  document.getElementById("editModalOverlay").classList.remove("active");
  document.body.classList.remove("modal-open");
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById("editModalOverlay")) {
    closeEditModal();
  }
}

function buildChampEditors(champions) {
  const container = document.getElementById("champEditors");
  container.innerHTML = champions.map((champ, i) => `
    <div class="champ-editor" id="champEditor${i}">
      <div class="champ-editor-preview">
        <img id="champPreview${i}" src="${champ.img}" alt="${champ.name}"
             onerror="this.src='https://via.placeholder.com/56x56/111/555?text=?'" />
      </div>
      <div class="champ-editor-fields">
        <label class="field-label">Campeão ${i + 1}</label>
        <input
          class="modal-input"
          id="champName${i}"
          type="text"
          placeholder="Nome do campeão"
          value="${champ.name}"
        />
        <input
          class="modal-input"
          id="champUrl${i}"
          type="text"
          placeholder="URL da imagem"
          value="${champ.img}"
          oninput="previewChampImg(${i})"
        />
      </div>
    </div>
  `).join("");
}

function previewChampImg(index) {
  const url = document.getElementById(`champUrl${index}`).value.trim();
  const img = document.getElementById(`champPreview${index}`);
  if (url) img.src = url;
}

function buildPortraitEditor(currentUrl) {
  const input   = document.getElementById("portraitUrl");
  const preview = document.getElementById("portraitPreview");
  if (!input || !preview) return;
  input.value = currentUrl || "";
  preview.src = currentUrl || "https://via.placeholder.com/100x100/111/555?text=?";
}

function previewPortrait() {
  const url     = document.getElementById("portraitUrl").value.trim();
  const preview = document.getElementById("portraitPreview");
  if (preview && url) preview.src = url;
}

function buildStatEditors(stats, team) {
  const container = document.getElementById("statEditors");
  const labels    = { macro: "MACRO", micro: "MICRO", calls: "CALLS", pool: "POOL" };
  const accent    = team.accentColor;

  container.innerHTML = Object.entries(stats).map(([key, val]) => `
    <div class="stat-editor-row">
      <span class="field-label">${labels[key]}</span>
      <div class="stat-editor-controls">
        <input
          class="modal-range"
          id="statSlider_${key}"
          type="range"
          min="0" max="100"
          value="${val}"
          style="--range-accent: ${accent}"
          oninput="document.getElementById('statNum_${key}').value = this.value"
        />
        <input
          class="modal-number"
          id="statNum_${key}"
          type="number"
          min="0" max="100"
          value="${val}"
          oninput="syncSlider('${key}', this.value)"
        />
      </div>
    </div>
  `).join("");
}

function syncSlider(key, value) {
  const clamped = Math.max(0, Math.min(100, Number(value)));
  document.getElementById(`statSlider_${key}`).value = clamped;
}

function saveEdits() {
  const team   = TEAMS[currentTeamId];
  const player = team.players.find(p => p.id === currentPlayerId);
  if (!player) return;

  const newChampions = player.champions.map((_, i) => ({
    name: document.getElementById(`champName${i}`).value.trim() || player.champions[i].name,
    img:  document.getElementById(`champUrl${i}`).value.trim()  || player.champions[i].img,
  }));

  const portraitInput = document.getElementById("portraitUrl");
  const newPortrait   = (portraitInput && portraitInput.value.trim())
    ? portraitInput.value.trim()
    : player.portrait || player.photo;

  const newStats = {};
  ["macro", "micro", "calls", "pool"].forEach(key => {
    const raw = parseInt(document.getElementById(`statSlider_${key}`).value, 10);
    newStats[key] = Math.max(0, Math.min(100, isNaN(raw) ? player.stats[key] : raw));
  });

  player.champions = newChampions;
  player.stats     = newStats;
  player.portrait  = newPortrait;

  savePlayerEdits(player.id, newStats, newChampions, newPortrait);

  renderChampions(newChampions);
  renderStatBars(newStats, team);
  renderRadar(newStats, team);

  // Atualiza portrait na tela de perfil imediatamente
  const profilePortrait = document.getElementById("profilePortrait");
  if (profilePortrait) profilePortrait.src = newPortrait;

  const topStat  = Object.entries(newStats).sort((a, b) => b[1] - a[1])[0];
  const topLabel = { macro: "MACRO", micro: "MICRO", calls: "CALLS", pool: "POOL" }[topStat[0]];
  const cards = document.querySelectorAll(`#playersGrid .player-card`);
  cards.forEach(card => {
    const previewLabel = card.querySelector(".stat-preview-label");
    const previewVal   = card.querySelector(".stat-preview-val");
    if (previewLabel) previewLabel.textContent = topLabel;
    if (previewVal)   previewVal.textContent   = topStat[1];
  });

  closeEditModal();
  showSavedFeedback();
}

function showSavedFeedback() {
  const existing = document.getElementById("savedToast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "savedToast";
  toast.className = "saved-toast";
  toast.textContent = "✓ Salvo com sucesso!";
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// ─────────────────────────────────────────────
//  Canvas de partículas (fundo)
// ─────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById("bgCanvas");
  const ctx    = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.r  = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.a  = Math.random() * 0.5 + 0.1;
  }

  function init() {
    particles = [];
    const count = Math.floor((W * H) / 12000);
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;  p.y += p.vy;
      if (p.x < 0) p.x = W;  if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;  if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.a})`;
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", () => { resize(); init(); });
  resize(); init(); loop();
})();

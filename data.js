/**
 * data.js — Dados dos times e jogadores (ScoutGG)
 * ALTERAÇÕES:
 *  - Time 2 (Crimson Edge): jogadores substituídos pelos reais (Buosi, Victor, Igor, Tapes, Bruno Rizzo)
 *  - Time 3 (Donos do Jogo): novo time adicionado com tema azul escuro → preto
 *  - Estrutura TEAMS mantida; loadSavedEdits e savePlayerEdits inalterados
 */

// ─────────────────────────────────────────────
//  Helpers de imagem
// ─────────────────────────────────────────────
const DDragon = "14.9.1";

/** URL da imagem do campeão via Data Dragon da Riot */
const champImg = (name) =>
  `https://ddragon.leagueoflegends.com/cdn/${DDragon}/img/champion/${name}.png`;

/** Avatar colorido com iniciais */
const avatar = (initials, bg) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${bg}&color=fff&size=256&bold=true&font-size=0.4`;

/**
 * NOVO: Portrait — imagem quadrada estilo "jogador profissional" (busto).
 * Usa ui-avatars em tamanho maior com fonte diferente como placeholder.
 * Substitua pelas URLs reais das fotos quando disponíveis.
 */
const portrait = (initials, bg) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${bg}&color=fff&size=512&bold=true&font-size=0.35&length=2`;

// ─────────────────────────────────────────────
//  Estrutura de dados dos times
// ─────────────────────────────────────────────
const TEAMS = {

  /* ══════════════════════════
     TIME 1 — Campeões Mundiais
  ══════════════════════════ */
  team1: {
    id:          "team1",
    name:        "TIME 1",
    fullName:    "Campeões Mundiais",
    theme:       "gold",
    accentColor: "#c8962a",
    gradientA:   "#c8962a",
    gradientB:   "#6b4a00",
    players: [
      {
        id:       "t1p1",
        name:     "Pedrão Roblox",
        nickname: "Drão",
        role:     "Top Laner",
        photo:    avatar("Drão", "c8962a"),
        portrait: portrait("DR", "8a6010"),
        champions: [
          { name: "Darius",  img: champImg("Darius")  },
          { name: "Garen",   img: champImg("Garen")   },
          { name: "Camille", img: champImg("Camille") },
        ],
        stats: { macro: 23, micro: 77, calls: 12, pool: 11 },
      },
      {
        id:       "t1p2",
        name:     "Felipe Amaral",
        nickname: "Cora",
        role:     "Jungler",
        photo:    avatar("Cora", "a07820"),
        portrait: portrait("CO", "7a5810"),
        champions: [
          { name: "Evelynn", img: champImg("Evelynn") },
          { name: "Khazix",  img: champImg("Khazix")  },
          { name: "Graves",  img: champImg("Graves")  },
        ],
        stats: { macro: 79, micro: 69, calls: 60, pool: 66 },
      },
      {
        id:       "t1p3",
        name:     "Davi Tilelli",
        nickname: "Roni",
        role:     "Mid Laner",
        photo:    avatar("Doni", "d4a017"),
        portrait: portrait("DO", "9a7010"),
        champions: [
          { name: "Shyvana",     img: champImg("Shyvana")     },
          { name: "Smolder",  img: champImg("Smolder")  },
          { name: "Amumu", img: champImg("Amumu") },
        ],
        stats: { macro: 78, micro: 1, calls: 75, pool: 80 },
      },
      {
        id:       "t1p4",
        name:     "Miguel Trotski",
        nickname: "Mi",
        role:     "ADC",
        photo:    avatar("Mi", "b8860b"),
        portrait: portrait("MI", "7a5800"),
        champions: [
          { name: "Kog'Maw",    img: champImg("Kogmaw")    },
          { name: "Sion", img: champImg("Sion") },
          { name: "Jhin",  img: champImg("Jhin")  },
        ],
        stats: { macro: 21, micro: 56, calls: 19, pool: 62 },
      },
      {
        id:       "t1p5",
        name:     "Ultraguz",
        nickname: "Guz",
        role:     "Support",
        photo:    avatar("Guz", "9a7200"),
        portrait: portrait("GU", "6a5000"),
        champions: [
          { name: "Singed",   img: champImg("Singed")   },
          { name: "Tahm Kench", img: champImg("TahmKench") },
          { name: "Veigar",     img: champImg("Veigar")     },
        ],
        stats: { macro: 77, micro: 70, calls: 26, pool: 70 },
      },
    ],
  },

  /* ══════════════════════════
     TIME 2 — Crimson Edge
     ALTERADO: jogadores reais substituídos
  ══════════════════════════ */
  team2: {
    id:          "team2",
    name:        "TIME 2",
    fullName:    "Legião do mal",
    theme:       "red",
    accentColor: "#cc2233",
    gradientA:   "#cc2233",
    gradientB:   "#6b0010",
    players: [
      {
        id:       "t2p1",
        name:     "Buosi",
        nickname: "bu",
        role:     "Top Laner",
        photo:    avatar("bu", "cc2233"),
        portrait: portrait("BU", "8a0020"),
        champions: [
          { name: "Malphite", img: champImg("Malphite") },
          { name: "Shen",     img: champImg("Shen")     },
          { name: "Akali", img: champImg("Akali")  },
        ],
        stats: { macro: 74, micro: 86, calls: 60, pool: 78 },
      },
      {
        id:       "t2p2",
        name:     "Victor",
        nickname: "vivi",
        role:     "Jungler",
        photo:    avatar("vivi", "a81020"),
        portrait: portrait("VI", "780010"),
        champions: [
          { name: "LeeSin",  img: champImg("LeeSin")  },
          { name: "Elise",   img: champImg("Elise")   },
          { name: "Hecarim", img: champImg("Hecarim") },
        ],
        stats: { macro: 83, micro: 91, calls: 75, pool: 84 },
      },
      {
        id:       "t2p3",
        name:     "Igor",
        nickname: "voim da silva",
        role:     "Mid Laner",
        photo:    avatar("Igor", "c0001a"),
        portrait: portrait("IG", "850010"),
        champions: [
          { name: "Viktor",   img: champImg("Viktor")   },
          { name: "Lissandra",img: champImg("Lissandra")},
          { name: "Cassiopeia", img: champImg("Cassiopeia") },
        ],
        stats: { macro: 71, micro: 93, calls: 68, pool: 89 },
      },
      {
        id:       "t2p4",
        name:     "Tapes",
        nickname: "vô (casado)",
        role:     "ADC",
        photo:    avatar("Tapes", "991122"),
        portrait: portrait("TP", "6a0018"),
        champions: [
          { name: "Jhin",   img: champImg("Jhin")   },
          { name: "Ashe",   img: champImg("Ashe")   },
          { name: "MissFortune", img: champImg("MissFortune") },
        ],
        stats: { macro: 80, micro: 88, calls: 65, pool: 75 },
      },
      {
        id:       "t2p5",
        name:     "Bruno Rizzo",
        nickname: "brizz",
        role:     "Support",
        photo:    avatar("brizz", "800010"),
        portrait: portrait("BR", "550008"),
        champions: [
          { name: "Soraka",   img: champImg("Soraka")   },
          { name: "Morgana",  img: champImg("Morgana")  },
          { name: "Alistar",  img: champImg("Alistar")  },
        ],
        stats: { macro: 86, micro: 72, calls: 91, pool: 70 },
      },
    ],
  },

  /* ══════════════════════════
     TIME 3 — Donos do Jogo (NOVO)
     Tema: azul escuro → preto
  ══════════════════════════ */
  team3: {
    id:          "team3",
    name:        "TIME 3",
    fullName:    "Donos do Jogo",
    theme:       "blue",
    accentColor: "#1a6fc4",
    gradientA:   "#1a6fc4",
    gradientB:   "#050d1a",
    players: [
      {
        id:       "t3p1",
        name:     "Pedro Eduardo",
        nickname: "Pe",
        role:     "Top Laner",
        photo:    avatar("Pe", "1a4a8a"),
        portrait: portrait("PE", "0d2d5e"),
        champions: [
          { name: "Quinn", img: champImg("Quinn") },
          { name: "Gnar", img: champImg("Gnar")   },
          { name: "Gangplank",img: champImg("Gangplank")},
        ],
        stats: { macro: 80, micro: 85, calls: 70, pool: 82 },
      },
      {
        id:       "t3p2",
        name:     "Lucas Banhos",
        nickname: "Bagos",
        role:     "Jungler",
        photo:    avatar("Stormzy", "0d3a6e"),
        portrait: portrait("ST", "082550"),
        champions: [
          { name: "Jarvan IV", img: champImg("JarvanIV") },
          { name: "Amumu",     img: champImg("Amumu")    },
          { name: "Sejuani",   img: champImg("Sejuani")  },
        ],
        stats: { macro: 88, micro: 79, calls: 84, pool: 76 },
      },
      {
        id:       "t3p3",
        name:     "Luiz",
        nickname: "LU",
        role:     "Mid Laner",
        photo:    avatar("Luiz", "1050a0"),
        portrait: portrait("LU", "0a3878"),
        champions: [
          { name: "Garen",    img: champImg("Garen")    },
          { name: "Malphite",   img: champImg("Malphite")   },
          { name: "Malzahar", img: champImg("Malzahar") },
        ],
        stats: { macro: 76, micro: 90, calls: 73, pool: 86 },
      },
      {
        id:       "t3p4",
        name:     "Guilon",
        nickname: "Gui",
        role:     "ADC",
        photo:    avatar("Guilon", "0a2d5e"),
        portrait: portrait("GUI", "071e42"),
        champions: [
          { name: "Hwei",   img: champImg("Hwei")   },
          { name: "Malzahar",img: champImg("Malzahar")},
          { name: "RekSai",  img: champImg("RekSai")  },
        ],
        stats: { macro: 77, micro: 94, calls: 62, pool: 88 },
      },
      {
        id:       "t3p5",
        name:     "Guizão",
        nickname: "Zão",
        role:     "Support",
        photo:    avatar("zão", "071e42"),
        portrait: portrait("Z", "04122e"),
        champions: [
          { name: "Zilean",    img: champImg("Zilean")    },
          { name: "Milio",  img: champImg("Milio")  },
          { name: "Sona",   img: champImg("Sona")   },
        ],
        stats: { macro: 91, micro: 68, calls: 95, pool: 65 },
      },
    ],
  },
};

// ─────────────────────────────────────────────
//  Persistência localStorage
// ─────────────────────────────────────────────

/** Chave localStorage para cada jogador */
function storageKey(playerId) {
  return `scoutgg_player_${playerId}`;
}

/**
 * Carrega edições salvas e aplica sobre TEAMS.
 * Chamado uma única vez ao iniciar.
 */
function loadSavedEdits() {
  Object.values(TEAMS).forEach(team => {
    team.players.forEach(player => {
      const raw = localStorage.getItem(storageKey(player.id));
      if (!raw) return;
      try {
        const saved = JSON.parse(raw);
        if (saved.stats)     Object.assign(player.stats, saved.stats);
        if (saved.champions) player.champions = saved.champions;
        // NOVO: restaura portrait salvo
        if (saved.portrait)  player.portrait  = saved.portrait;
      } catch (e) {
        console.warn("Erro ao carregar edição salva para", player.id);
      }
    });
  });
}

/**
 * Salva as edições (stats + campeões + portrait) de um jogador no localStorage.
 * ALTERADO: inclui campo portrait na persistência
 */
function savePlayerEdits(playerId, stats, champions, portrait) {
  localStorage.setItem(storageKey(playerId), JSON.stringify({ stats, champions, portrait }));
}

// Aplica dados persistidos assim que o arquivo carrega
loadSavedEdits();

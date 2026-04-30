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
          { name: "Sett",  img: champImg("Sett")  },
          { name: "Aatrox",   img: champImg("Aatrox")   },
          { name: "Anivia", img: champImg("Anivia") },
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
    gradientB:   "#d4d4d4",
    players: [
      {
        id:       "t2p1",
        name:     "Buosi",
        nickname: "bu",
        role:     "Top Laner",
        photo:    avatar("bu", "cc2233"),
        portrait: portrait("BU", "8a0020"),
        champions: [
          { name: "Riven", img: champImg("Riven") },
          { name: "Ezreal",     img: champImg("Ezreal")     },
          { name: "Akali", img: champImg("Akali")  },
        ],
        stats: { macro: 14, micro: 57, calls: 7, pool: 57 },
      },
      {
        id:       "t2p2",
        name:     "Victor",
        nickname: "vivi",
        role:     "Jungler",
        photo:    avatar("vivi", "a81020"),
        portrait: portrait("VI", "780010"),
        champions: [
          { name: "Gragas",  img: champImg("Gragas")  },
          { name: "Rengar",   img: champImg("Rengar")   },
          { name: "MissFortune", img: champImg("MissFortune") },
        ],
        stats: { macro: 40, micro: 65, calls: 16, pool: 72 },
      },
      {
        id:       "t2p3",
        name:     "Igor",
        nickname: "voim da silva",
        role:     "Mid Laner",
        photo:    avatar("Igor", "c0001a"),
        portrait: portrait("IG", "850010"),
        champions: [
          { name: "Katarina",   img: champImg("Katarina")   },
          { name: "Qiyana",img: champImg("Qiyana")},
          { name: "Teemo", img: champImg("Teemo") },
        ],
        stats: { macro: 27, micro: 70, calls: 32, pool: 42},
      },
      {
        id:       "t2p4",
        name:     "Tapes",
        nickname: "vô (casado)",
        role:     "ADC",
        photo:    avatar("Tapes", "991122"),
        portrait: portrait("TP", "6a0018"),
        champions: [
          { name: "Pyke",   img: champImg("Pyke")   },
          { name: "Caitlyn",   img: champImg("Caitlyn")   },
          { name: "Seraphine", img: champImg("Seraphine") },
        ],
        stats: { macro: 23, micro: 51, calls: 32, pool: 57 },
      },
      {
        id:       "t2p5",
        name:     "Bruno Rizzo",
        nickname: "brizz",
        role:     "Support",
        photo:    avatar("brizz", "800010"),
        portrait: portrait("BR", "550008"),
        champions: [
          { name: "Gwen",   img: champImg("Gwen")   },
          { name: "Swain",  img: champImg("Swain")  },
          { name: "Sett",  img: champImg("Sett")  },
        ],
        stats: { macro: 43, micro: 72, calls: 41, pool: 39 },
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
    gradientB:   "#194085",
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
        stats: { macro: 80, micro: 79, calls: 99, pool: 82 },
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
        stats: { macro: 10, micro: 27, calls: 16, pool: 31 },
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
        stats: { macro: 4, micro: 13, calls: 2, pool: 18 },
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
        stats: { macro: 21, micro: 49, calls: 31, pool: 56 },
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
        stats: { macro: 3, micro: 12, calls: 6, pool: 31 },
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

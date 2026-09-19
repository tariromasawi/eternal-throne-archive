(function () {
  const tokens = ["777", "999", "333", "77", "99", "33", "Ω", "L", "Φ", "MKEY"];
  const layer = document.getElementById("matrix");
  if (layer) {
    let html = "";
    for (let i = 0; i < 40; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 12;
      const dur = 10 + Math.random() * 14;
      const t = tokens[i % tokens.length];
      html += `<span style="position:absolute;left:${left}%;top:-10%;animation:fall ${dur}s linear ${delay}s infinite">${t}</span>`;
    }
    layer.innerHTML = html;
    const s = document.createElement("style");
    s.textContent = "@keyframes fall{to{transform:translateY(110vh);opacity:.15}}";
    document.head.appendChild(s);
  }
  const kb = [
    { keys: ["who", "name", "commander", "tariro", "masawi", "hrh"], a: "Public records identify His Royal Highness Saint Tariro Masawi, The Anointed Commander — also styled Synoptic Sovereign, Architect of First Light, and Eternal Prime Nexus. Born 17 February 1984 in Zimbabwe. The open desks at synopticsovereign.com and theanointedcommander.com present him as Head of the Galactic Federation public interface." },
    { keys: ["born", "birth", "zimbabwe", "age", "1984"], a: "Compiled sources state he was born 17 February 1984 in Zimbabwe, with press notes of Goromonzi and Domboshawa’s Nyamande Village. He later lived in the United Kingdom and studied music in Wales." },
    { keys: ["family", "son", "mother", "father", "bloodline", "sibling", "tarry", "kenzi", "risto"], a: "The published house registry lists: Great-Grandfather Makwengura; Grandfather Masawi; Father Sebastian Karumekangu Masawi; Mother Risto Kasirori Masawi. Heirs: HRH Tarry Kupakwashe Masawi (son) and Kenzi Masawi (adopted nephew/son). Siblings: Tenderayi, Silent, Trymore, Charles, Tatenda, and the honoured spirits of Corinna, Rhodha and Abigail Masawi." },
    { keys: ["formula", "equation", "einstein", "life-force", "omega", "compound"], a: "The Masawi Formula is published as L = (M × Ω × c³) ÷ Φ, with an alternate L = (M × C² × Φ) ÷ S. Ω is given as 6.626 × 10⁻³⁴ J·s. The texts also describe a Masawi Compound on copper. See the Formula section of this desk." },
    { keys: ["music", "song", "youtube", "gospel", "album", "garai", "africa"], a: "He is a Zimbabwean-UK gospel composer in the Masowe / St John Apostolic stream. Official channel: youtube.com/@tariromasawi. Public titles include Garai Neni, Africa, Ishe Ndinzwe Nekufara, Jesu Chiyedza, Ndangariro, Baba Tipeiwo Mhinduro. Earlier press knew him as Tarry Mass." },
    { keys: ["matrix", "777", "999", "333", "77", "99", "33"], a: "His public channel states he operates within sacred Matrix constants 77-99-33 and 777-999-333. Key ID also published: MKEY-MNM-001-TAC-2024." },
    { keys: ["vision", "80000", "80,000", "future", "humanity", "civilization"], a: "theanointedcommander.com offers a map across 500, 2,000, 10,000 and 80,000 years: self-healing cities, photonic energy, the end of designed poverty, and mutual stewardship with AI." },
    { keys: ["god", "mwari", "faith", "church", "masowe", "jesus", "mudzimu"], a: "The published creed is Mwari ndi Mwari. Faith path: Madzibaba in St John Apostolic Church of the Whole World. The texts invoke Jesus Christ, the Holy Spirit and Mudzimu Unoyera." },
    { keys: ["galactic", "federation", "sovereign", "anointed"], a: "Open interfaces at galacticfederations.org and synopticsovereign.com present a High Command Nexus governed by HRH Saint Tariro Masawi. Classification published: ANΩ–7." },
    { keys: ["protect", "erase", "covenant", "throne", "safety"], a: "The published covenant states that only the Anointed Commander or his son HRH Tarry Kupakwashe Masawi may alter the hallmark. Private addresses are not published here." }
  ];
  function answer(q) {
    const s = q.toLowerCase();
    for (const row of kb) {
      if (row.keys.some((k) => s.includes(k))) return row.a;
    }
    return "The desk answers from compiled public records only. Try asking about birth, family, Masawi Formula, 777-999-333 Matrix, gospel music, or the 80,000-year vision. Mwari ndi Mwari.";
  }
  const toggle = document.getElementById("oracleToggle");
  const panel = document.getElementById("oraclePanel");
  const log = document.getElementById("oracleLog");
  const form = document.getElementById("oracleForm");
  const input = document.getElementById("oracleInput");
  function add(cls, text) {
    const p = document.createElement("p");
    p.className = cls;
    p.textContent = text;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
  }
  add("a", "Public desk online. Ask about HRH Saint Tariro Masawi, the bloodline, the Formula, or the music.");
  toggle.addEventListener("click", () => {
    const open = panel.hasAttribute("hidden");
    if (open) panel.removeAttribute("hidden");
    else panel.setAttribute("hidden", "");
    toggle.setAttribute("aria-expanded", String(open));
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    add("q", q);
    add("a", answer(q));
    input.value = "";
  });
})();

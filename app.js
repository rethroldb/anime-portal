const app = document.getElementById("app");
const nav = document.getElementById("nav");
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

function buildNav(){
  nav.innerHTML = Object.keys(tierInfo).map(t=>{
    const count = animeData.filter(a=>a.tier===t).length;
    return `<a class="menu-link" href="#/tier/${t}">${tierInfo[t].label} (${count})</a>`;
    }).join("") + `
    <a class="menu-link" href="#/">Home</a>
    <a class="menu-link" href="#/all">AIO List</a>
    <a class="menu-link" href="#/suggest">Suggest Anime</a>
`;
}

function renderHome(){
  app.innerHTML = `
    <h1>Anime Recs By Ranks</h1>
    
    <p>Select a tier from the left panel.</p>
    <p>Anime's listed in each tier not in a specific order.</p>
  `;
}

function renderAllAnime(list = animeData, searchTerm = "", sortValue = "title-asc"){
  const sorted = [...list].sort((a, b) => {
    if (sortValue === "title-asc") return a.title.localeCompare(b.title);
    if (sortValue === "title-desc") return b.title.localeCompare(a.title);
    if (sortValue === "year-desc") return b.year - a.year;
    if (sortValue === "year-asc") return a.year - b.year;
    return 0;
  });

  const cards = sorted.map(a => `
    <div class="card">
      <div class="cover">
        ${a.cover ? `<img src="${a.cover}" alt="${a.title}" onerror="this.src='images/fallback.jpg'">` : a.title}
      </div>
      <div>
        <h3>${a.title}</h3>
        <div>
          <span class="tag">${tierInfo[a.tier].label}</span>
          <span class="tag">${a.year}</span>
          <span class="tag">${a.decade}</span>
          ${a.genre.map(g => `<span class="tag">${g}</span>`).join("")}
        </div>
        <p>${a.description}</p>
      </div>
    </div>
  `).join("");

  app.innerHTML = `
    <h1>All Anime</h1>
    <p>Browse the full database.</p>

    <div class="search-row controls-row">
      <input type="text" id="searchInput" placeholder="Search by title, genre, decade..." value="${searchTerm}">
      
      <select id="sortSelect">
        <option value="title-asc" ${sortValue === "title-asc" ? "selected" : ""}>Title A-Z</option>
        <option value="title-desc" ${sortValue === "title-desc" ? "selected" : ""}>Title Z-A</option>
        <option value="year-desc" ${sortValue === "year-desc" ? "selected" : ""}>Newest First</option>
        <option value="year-asc" ${sortValue === "year-asc" ? "selected" : ""}>Oldest First</option>
      </select>
    </div>

    <div id="animeList">${cards}</div>
  `;

  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  function updateList(){
    const term = searchInput.value.toLowerCase().trim();
    const sort = sortSelect.value;

    const filtered = animeData.filter(a => {
      const haystack = [
        a.title,
        a.year,
        a.decade,
        ...(a.genre || []),
        a.description || ""
      ].join(" ").toLowerCase();

      return haystack.includes(term);
    });

    renderAllAnime(filtered, term, sort);
    setTimeout(() => {
      const input = document.getElementById("searchInput");
      input.focus();
      input.setSelectionRange(term.length, term.length);
  }, 0);
  }

  searchInput.addEventListener("input", updateList);
  sortSelect.addEventListener("change", updateList);
}


function renderTier(tier){
  const list = animeData.filter(a=>a.tier===tier)
    .map(a=>`
      <div class="card">
        <div class="cover">
          ${a.cover ? `<img src="${a.cover}">` : a.title}
        </div>
        <div>
          <h3>${a.title}</h3>
          <div>
            ${a.genre.map(g=>`<span class="tag">${g}</span>`).join("")}
          </div>
          <p>${a.description}</p>
        </div>
      </div>
    `).join("");

  app.innerHTML = `<h1>${tierInfo[tier].label}</h1>${list}`;
}

function renderSuggest(){
  app.innerHTML = `
    <h1>Suggest Anime</h1>

    <p>Submit anime you want added to the database.</p>

    <iframe 
      src="https://forms.gle/sBXao6i3Aty6213j7"
      width="100%" 
      height="600"
      style="border:none;">
    </iframe>
  `;
}

function router(){
  const hash = location.hash || "#/";
  const parts = hash.replace("#/","").split("/");

  if(parts[0]==="tier") renderTier(parts[1]);
  else if(parts[0] === "all") renderAllAnime();
  else if(parts[0]==="suggest") renderSuggest();
  else renderHome();
}

window.addEventListener("hashchange",router);
buildNav();
router();



document.addEventListener("mouseover", e => {
  if (e.target.classList.contains("menu-link")) {
    hoverSound.currentTime = 0;
    hoverSound.play();
  }
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("menu-link")) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
});

let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);

document.getElementById("counter").textContent =
  "Visitors: " + String(visits).padStart(6, "0");
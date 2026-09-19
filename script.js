const $ = (s) => document.querySelector(s);

function renderSite(){
  $("#brandName").textContent = SITE.name;
  $("#footerName").textContent = SITE.name;
  $("#brandLogo").src = SITE.logo;
  document.querySelector(".footer-brand img").src = SITE.logo;
  $("#heroEyebrow").textContent = SITE.heroEyebrow;
  $("#heroTitle").innerHTML = SITE.heroTitle;
  $("#heroText").textContent = SITE.heroText;
  $("#statGames").textContent = SITE.stats.games;
  $("#statDownloads").textContent = SITE.stats.downloads;
  $("#statPlatform").textContent = SITE.stats.platform;
  $("#gamesIntro").textContent = SITE.gamesIntro;
  $("#aboutTitle").innerHTML = SITE.aboutTitle;
  $("#aboutText").textContent = SITE.aboutText;
  $("#aboutPills").innerHTML = SITE.aboutPills.map(x=>`<span>${x}</span>`).join("");
  $("#servicesTitle").innerHTML = SITE.servicesTitle;
  $("#servicesGrid").innerHTML = SITE.services.map(s=>`
    <article class="service reveal">
      <div class="service-num">${s.num}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </article>`).join("");
  $("#contactTitle").innerHTML = SITE.contactTitle;
  $("#contactText").textContent = SITE.contactText;
  $("#contactEmail").href = `mailto:${SITE.email}`;
  $("#contactEmail").innerHTML = `${SITE.email} <span>↗</span>`;
  $("#socials").innerHTML = SITE.socials.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.name} ↗</a>`).join("");

  const featured = SITE.games.find(g=>g.featured) || SITE.games[0];
  if(featured){
    $("#heroImage").src = featured.image;
    $("#heroImage").alt = featured.title;
    $("#heroGameGenre").textContent = featured.genre;
    $("#heroGameTitle").textContent = featured.title;
    $("#heroGameLink").href = featured.link;
  }

  $("#gamesGrid").innerHTML = SITE.games.map((g,i)=>`
    <article class="game-card reveal">
      <div class="game-media">
        <img src="${g.image}" alt="${g.title}" loading="${i<2?"eager":"lazy"}">
        <span class="game-badge">${g.genre}</span>
      </div>
      <div class="game-info">
        <h3>${g.title}</h3>
        <p>${g.description}</p>
        <div class="game-bottom">
          <div class="game-tags">${g.tags.map(t=>`<span>${t}</span>`).join("")}</div>
          <a class="play-link" href="${g.link}" target="_blank" rel="noopener">Google Play ↗</a>
        </div>
      </div>
    </article>`).join("");

  $("#copyright").textContent = `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`;
}

renderSite();

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("visible"); });
},{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelector(".menu-btn").addEventListener("click",()=>{
  const nav=document.querySelector(".nav");
  const open=nav.style.display==="flex";
  nav.style.display=open?"none":"flex";
  nav.style.position="absolute"; nav.style.right="18px"; nav.style.top="70px";
  nav.style.flexDirection="column"; nav.style.alignItems="stretch";
  nav.style.background="#0e1118"; nav.style.padding="14px"; nav.style.border="1px solid var(--line)";
  nav.style.borderRadius="12px";
});

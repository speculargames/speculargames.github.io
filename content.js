/*
  ===================== EDIT THIS FILE =====================
  This is the main editable content/config file for Specular Games.
  You can change text, email, social links, stats and add/remove games.
  For each game:
    - title
    - genre
    - description
    - image (use a local file like assets/games/mygame.jpg OR a public image URL)
    - link
    - tags
    - featured: true/false
  =========================================================
*/
const SITE = {
  name: "Specular Games",
  logo: "assets/logo.svg", // Replace with your own logo file if you want.
  heroEyebrow: "MOBILE GAME STUDIO",
  heroTitle: `We build games<br><em>made to be played.</em>`,
  heroText: "Specular Games creates engaging mobile experiences across driving, simulation, casual and family-friendly genres.",
  stats: {
    games: "02",
    downloads: "1M+",
    platform: "Android"
  },
  gamesIntro: "A growing collection of mobile games built with creativity, experimentation and a focus on enjoyable gameplay.",
  aboutTitle: `Creating worlds for<br><span>mobile players.</span>`,
  aboutText: "Specular Games is an independent mobile game studio focused on building accessible, entertaining and visually engaging games. We experiment with different genres and gameplay ideas to create experiences players can pick up and enjoy.",
  aboutPills: ["Mobile Games", "Unity Development", "3D Games", "Simulation", "Casual Games"],
  servicesTitle: `From idea to<br><span>playable world.</span>`,
  services: [
    {num:"01", title:"Game Development", text:"Designing and developing complete mobile game experiences from concept to release."},
    {num:"02", title:"3D & Simulation", text:"Building interactive 3D environments, vehicles, characters and simulation gameplay."},
    {num:"03", title:"Mobile Publishing", text:"Preparing, launching and maintaining games for mobile players."},
    {num:"04", title:"Live Updates", text:"Improving games through updates, new content and player-focused iteration."}
  ],
  contactTitle: `Have a game idea?<br><span>Let's talk.</span>`,
  contactText: "For business inquiries, partnerships, publishing opportunities or general questions, reach out to us.",
  email: "sukarhaie@gmail.com",
  socials: [
    // Add future social links here. Example:
    // {name:"YouTube", url:"https://youtube.com/@yourchannel"}
  ],
  games: [
    {
      title: "Van Racing Simulator 3D Games",
      genre: "DRIVING SIMULATOR",
      description: "Drive powerful vans through racing tracks, city roads and highways in an offline 3D driving simulator.",
      image: "https://play-lh.googleusercontent.com/r-_3UMMJ_ntyW2dhimEOYmyTntSf_sy5fMNSH9QyyWRYSh2ZFE1lIhcUQEKYIxmnzXeiKPXkYpnsLxO5vDee%3Dw526-h296",
      link: "https://play.google.com/store/apps/details?id=com.speculargames.vanparking.vansimulation.vanracing",
      tags: ["Racing", "Driving", "3D", "Offline"],
      featured: true
    },
    {
      title: "Cute Kitten Games: SuperMarket",
      genre: "CASUAL SIMULATION",
      description: "Play as cute kittens in a supermarket world with missions, shopping, exploration and playful chaos.",
      image: "https://play-lh.googleusercontent.com/3XSNeeA0HRVVMwL6SEHPF5x9p2vAGzkhaBY4-H8ZaKgVmEPzvco4gOcrBvZCHvSb_hUX%3Dw526-h296",
      link: "https://play.google.com/store/apps/details?id=com.spec.kitten.cat.sooper.markete.ep2",
      tags: ["Cat Game", "Casual", "Simulation", "Offline"],
      featured: false
    }
  ]
};

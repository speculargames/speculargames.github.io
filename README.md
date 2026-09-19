# Specular Games — GitHub Pages Website

## Files
- `index.html` — main one-page studio website
- `privacy.html` — separate Privacy Policy page
- `content.js` — EDIT THIS FILE to change games, text, stats, email and social links
- `privacy-content.js` — EDIT THIS FILE to replace the privacy policy content
- `style.css` — design/colors/layout
- `script.js` — website behavior
- `assets/logo.svg` — replace this file with your own logo later

## Add a new game
Open `content.js`, find `games: [ ... ]` and add another object:
```js
{
  title: "Your Game",
  genre: "ACTION GAME",
  description: "Short description.",
  image: "assets/games/your-image.jpg",
  link: "https://play.google.com/...",
  tags: ["Action", "3D"],
  featured: false
}
```
To remove a game, delete its object from the same array.

## Add social links
In `content.js`:
```js
socials: [
  {name:"YouTube", url:"https://youtube.com/@yourchannel"},
  {name:"Instagram", url:"https://instagram.com/yourpage"}
]
```

## Logo
The current `assets/logo.svg` is a simple editable placeholder. You can replace it with your own SVG/PNG while keeping the filename `logo.svg`, or change `SITE.logo` in `content.js`.

## GitHub Pages
1. Create a GitHub repository.
2. Upload all files/folders from this package.
3. Go to Settings → Pages.
4. Select Deploy from branch → `main` → `/ (root)`.
5. Save and wait for GitHub Pages to publish.

The game screenshots currently use public Google Play image URLs. You can switch each game's `image` value to local files if you prefer to keep images inside the GitHub repository.

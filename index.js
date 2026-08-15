const GAMES = [
  {
    slug: "snake",
    name: "Snake",
    blurb: "Eat the food, grow long, don't hit yourself. The classic, rebuilt from scratch.",
  },
];

const grid = document.getElementById("games");

for (const game of GAMES) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = `games/${game.slug}/`;

  const title = document.createElement("h2");
  title.textContent = game.name;

  const desc = document.createElement("p");
  desc.textContent = game.blurb;

  const play = document.createElement("span");
  play.className = "play";
  play.textContent = "Play →";

  card.append(title, desc, play);
  grid.appendChild(card);
}

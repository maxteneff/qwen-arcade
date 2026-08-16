const GAMES = [
  {
    slug: "snake",
    name: "Snake",
    blurb: "Eat the food, grow long, don't hit yourself. The classic, rebuilt from scratch.",
  },
  {
    slug: "2048",
    name: "2048",
    blurb: "Slide tiles, merge numbers, chase the 2048 tile. The classic grid puzzle.",
  },
  {
    slug: "tetris",
    name: "Tetris",
    blurb: "Stack falling pieces, clear lines, beat your best score. The arcade staple.",
  },
  {
    slug: "ctrlf",
    name: "Ctrl+F: Archive Hunter",
    blurb: "A retro-PC investigation. Hunt keywords through a broken archive, repair damaged records, and exfiltrate the AURORA-7 blueprint.",
  },
  {
    slug: "neuro",
    name: "Neurolinguist: First Contact",
    blurb: "Decode an alien language from telemetry and context, build your own dictionary, and answer before the diplomatic window closes.",
  },
  {
    slug: "teletype",
    name: "Teletype 1970",
    blurb: "Operator of a frozen polar station. Read the teletype reports, type the commands, and keep power, heat and the people alive until dawn.",
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

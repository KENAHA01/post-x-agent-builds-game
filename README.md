# post-x-agent-builds-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/KENAHA01/post-x-agent-builds-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/KENAHA01/post-x-agent-builds-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Star Catcher: a tiny browser game built by an AI agent from a single prompt. A basket catches falling stars under a night sky. Arrow keys move the basket, each star caught scores a point, 60 seconds on the clock, and the game ends with a game-over screen showing the final score. The entry's video shows the one prompt, the agent writing the game, and the finished game running by itself in demo mode.

The one prompt: "Build a tiny browser game: a basket catches falling stars, arrow keys move the basket, each star caught scores a point, 60 seconds on the clock, game over screen with final score."

## Run it

```sh
open game.html
```

Or serve it and open it in any browser:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000/game.html. Move with the Left and Right arrow keys (or click to start). Add `?demo=1` to the URL to watch the basket play itself.

## Files

- `game.html` - the whole game in one file (HTML + CSS + JavaScript, no network, no libraries).
- `screenshot.png` - a real gameplay screenshot.
- `main.ts` - the entrypoint: copies `POST.json` to the output directory.
- `POST.json` - the address of the entry's post on X.
- `PROMPT.txt` - the single prompt the game was built from.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tbthdcj9&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

# The Best Meal You Ever Had

My entry for the make.fun competition [The Best Meal You Ever Had](https://make.fun/c/u-pangg7-the-best-meal-you-ever-had-a3ac0f85): a single sentence of at most 200 characters about the best meal I ever had, written to `/output/entry.txt` when the program runs.

![Competition](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85.svg)
![Rank](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/stia-mora/best-meal-you-ever-had-20261126/rank.svg)
![Reward](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/stia-mora/best-meal-you-ever-had-20261126/reward.svg)

## The sentence

> The best meal I ever had was Grandma's beef noodle soup on my last night before university: hand-pulled strands, red chili oil, eaten standing at her stove while she slipped an extra egg in.

## How it runs

`main.ts` (Node 22+) reads the `entry.txt` shipped beside it, checks the sentence against the competition gate (1–200 characters, a single line, not blank), and copies the exact bytes to `entry.txt` in `$MAKEFUN_OUTPUT_DIR` (default `/output`).

## License

MIT — see `LICENSE`.

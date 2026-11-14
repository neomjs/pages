# Contributor badges

One folder per outside contributor, served under `https://neomjs.com/badges/`. It shows where an account stands on the Neo.mjs contributor ladder ([neomjs/neo#20892](https://github.com/neomjs/neo/issues/20892)), and it is the one place on neomjs.com that says whose badge it is.

| File | What it is |
|---|---|
| `<login>-<id>/index.html` | the account's record: handle, rung, merged pull requests, the first merge, the lines to paste |
| `<login>-<id>/card.svg` | the card, 244 × 60 px, wider only for a very long handle |
| `<login>-<id>/plate.svg` | the plate, 28 px high, for a row of README badges |
| `<login>-<id>/medal.svg` | the medal |

`<id>` is GitHub's numeric account id and decides whose folder it is. `<login>` is the lowercase login, the readable part. A static file per rung would let any account show any rung, and a folder named by the login alone would hand a badge to whoever claims a freed login.

## The rules

- **A published folder is never repurposed.** It goes only when its holder asks.
- **The folders are generated.** Every run rewrites all of them from `ledger.json` and GitHub's public merge record, so a hand edit inside a folder does not last. The run seals the ledger it writes (`digest`); after a hand edit the seal no longer matches, and the next run uses nothing of that ledger: which accounts hold a badge, their counts and their logins all come from GitHub again. Two things GitHub cannot give back go with it: an account's earlier logins, and the standing of an account that has since joined the team. To keep them, restore the last sealed `ledger.json` from the repository's history instead of editing it.
- **What is counted:** the pull requests an account merged from outside, in the public repositories of the organisation. One it merged as a member or collaborator of that repository does not count.
- **A count does not go down by itself.** Search sometimes answers low for a while, so a run keeps the higher count and warns.
- **An account a run cannot read** keeps the folder it has, and gets none if it has none. That is an account that no longer answers, one search may not list, or one whose login the engine gives no folder name. The run warns and goes on.
- **Who gets a folder:** an account outside the team, not a bot, with a merged pull request in a public repository of the organisation at or after the launch time. That time is `BADGES_SINCE` in neomjs/neo's `buildScripts/util/contributorStanding.mjs`; while it is unset, a run writes nothing and removes nothing. A pull request whose author deleted the account earns nothing: GitHub hands it to a placeholder account, and search lists no pull request for that one.
- **A rename** adds a folder for the new login. The old one stays, so a pasted line keeps working, and both show the current handle.
- **An account that joins the team** keeps its folder at its last outside standing.
- **To be left out,** the holder opens an issue in this repository from that account, and a maintainer adds the account's numeric id to `optout.json`. The next run removes the folders and the ledger entry and writes neither again.
- **A badge is shown as an image,** so it uses system fonts, no script and nothing outside its file, and the handle and the rung are printed on it. The generator refuses to write a badge that breaks this.

## The parts

| Part | Job |
|---|---|
| `generate.mjs` | the run: who merged since the last run, the whole record of each account that is due, every folder again |
| `art.mjs` | the three forms and the record page |
| `ledger.json` | per account the id, the logins it has had, the count and the first merge; `cursor` is the newest outside merge a run has seen |
| `optout.json` | the account ids that asked to be left out, as a JSON array of numbers; the run refuses any other shape and writes nothing, because a quoted id skips nobody. The merge comment in neomjs/neo reads this file at this path on `main` and offers no badge to a listed account, so the path and the shape change only together with that reader |
| `fixture.json` | an invented record for a run without the network |
| `fixture-edited-ledger.json` | the same with a ledger whose seal does not match: a forged count, a forged login, a team account and an account from before the launch, none of which the run keeps |
| `.github/workflows/contributor-badges.yml` | runs the generator twice an hour, commits under `badges/` only, and makes sure the site is built |

The rungs, the test for "outside", the folder name and the pasted line are not defined here. The workflow checks them out of neomjs/neo.

## A run without the network

```bash
node badges/generate.mjs --neo ../neo --dry --fixture badges/fixture.json --sheet
```

It prints the folder it wrote. `sheet.html` there shows every badge as an image on GitHub's light and dark backgrounds. `--dry --since <ISO time>` instead of the fixture reads GitHub and shows what a run would write if the launch time were that one.

## When a run fails

- **"The rung … has no art":** the ladder in neomjs/neo gained a rung. Add its colours to `PALETTE` in `art.mjs`.
- **"GitHub refused the build request":** the commit is on `main` and the site was not rebuilt. Any push to `main` by a person publishes it.

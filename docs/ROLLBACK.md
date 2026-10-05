# Rollback guide (nothing is deleted — history stays)

Restore points (git tags), oldest to newest:

| tag | what the site had at that point |
|---|---|
| `restore/1-content-complete` | 6 modules, all tools, QA passed, 100 % coverage — scrolling pages, no Listen |
| `restore/2-slide-mode` | + one-step-per-page slides, basic Listen |
| `restore/3-reading-player` | + floating player: resume, previous/next sentence, speed |
| `restore/4-word-follow` | + spoken-word highlight, landscape/iPad layout (= published artifact v4) |
| `restore/5-read-aloud-skill` | + reusable `read-aloud` skill (site itself unchanged) |

## Look at an old version without changing anything
    git fetch --tags
    git show restore/2-slide-mode:dist/index.html > old.html      # open old.html in a browser

## Go back for good (safe: adds a new commit, keeps history)
    git revert --no-edit restore/3-reading-player..HEAD            # undo everything after that point
    # or restore just the built site file:
    git checkout restore/3-reading-player -- dist/index.html && git commit -m "Roll back site to reading player"

## Put the old version on the published link
Publish the old `dist/index.html` to the same artifact URL (the artifact also keeps its own version history in the Share/Versions menu).

## Undo one single feature
Find it with `git log --oneline`, then `git revert <commit>`.

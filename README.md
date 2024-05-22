# State of Cobalt

[stateofcobalt.org/2021](https://stateofcobalt.org/2021)

This is a working draft of a research project, supporting a local internship program :)

## Local Setup

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Publish to https://stateofcobalt.org

First, build locally:

```bash
npm run build
```

This will generate the `/docs` folder (which is one of the only subdirectories GitHub allows for it's pages. If/when we move to AWS this'll change to next.js's default `/out`).

Then, checkout to a fresh branch, commit your changes, and create a PR.

```bash
git checkout [user]/[branch-name]
git add .
git commit -m "[briefly state the changes]"
git push
```

Example:

```bash
git checkout matt/update-readme
git add .
git commit -m "add examples to readme file"
git push
```

## Special Thanks

Credit for useful things:

1. https://systemuicons.com/
1. https://nextjs.org/
1. https://type-scale.com/

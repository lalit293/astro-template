# Astro-Template

> This template is not complete yet!

I created this template because I wanted to just fork/clone a repo and start making a project or start using the default template which comes with astro **without much configuration**, but the latter is not possible because Astro's default template does not look like what I want (and I don't want to use themes, if I would be more focused on styling). So, this repo is like the first scenario, where you can just clone/fork the repo and start making amazing projects.

## Tools (used in this template)

This template uses [Bun](https://bun.sh/) as the package manager, [Biomejs](https://biomejs.dev/) for linting and formatting, [React](https://react.dev/) and [Qwik](https://qwik.dev/) for creating components*, [Shadcn-UI](https://ui.shadcn.com/) as the Component Library, [Tailwind](https://tailwindcss.com/) for styling (you can also use css or sass), [Astro](https://astro.build/) as the JS Framework and [Typescript](https://www.typescriptlang.org/) for its powers.

*by the way, you can also make components with Astro.

## Installation

1. Clone the repo

```bash
git clone https://github.com/lalit293/astro-template.git
```

1. Install Dependencies

```bash
bun install
```

1. Start the dev server

```bash
bun run dev
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── common
│   │   └── shadcn-ui
│   ├── lib/
│   │   └── core
│   │   └── shadcn-ui
│   ├── styles/
│   │   └── global.css
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

In the `src/components/shadcn-ui` folder there are components provided by [Shadcn-UI Library](https://ui.shadcn.com/).
In the `src/components/common` folder you can put any of your  components.

While `src/lib/` folder serves you some utilities (in the folder `src/lib/shadcn-ui/`provided by [Shadcn-UI](https://ui.shadcn.com/)) and you can make your own ones in the folder `src/lib/core`.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run fmt`             | Format files via [Biome](https://biomejs.dev/)   |
| `bun run lint`            | Linter via [Biome](https://biomejs.dev/)         |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

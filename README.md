# Astro-Template

> This template is not completed yet!

You and me know its not easy to start a project, first you have to run the initialization command, install the dependencies, configure the project and if needed you also have to write code to configure some dependencies.

So to eliminate some of the tasks which I mentioned above I created this template.

## Installation

1. Fork the repo.

1. Clone the forked repo.

```bash
git clone <something>
```

1. Install Dependencies

```bash
bun install
```

1. Start the dev server

```bash
bun run dev
```

## Tools (used in this template)

This template uses [Bun](https://bun.sh/) as the package manager, [Biomejs](https://biomejs.dev/) for linting and formatting, [React](https://react.dev/) and [Qwik](https://qwik.dev/) for creating components*, [Shadcn-UI](https://ui.shadcn.com/) as the Component Library, [Tailwind](https://tailwindcss.com/) for styling (you can also use css or sass), [Astro](https://astro.build/) as the JS Framework and [Typescript](https://www.typescriptlang.org/) for type checking.

*by the way, you can also make components with Astro.

### Fonts

You can choose from two fonts _**Inter**_ or _**Geist**_.

To use **Inter** just follow the steps.

1. Add the code below in the frontmatter of the file `src/layouts/Layout.astro`

```typescript
import '@fontsource-variable/inter';
```

1. Add the code below at the end of the file and inside the style tag.

```css
body {
  font-family: 'Inter Variable';
}
```

And if you want to use **Geist** then its already configured for you.

If in case you want to use some other font then you have to install it as a package or link via CDN and you will be good to go.

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

While `src/lib/` folder serves you some utilities and you can make your own ones in the folder `src/lib/core`.

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

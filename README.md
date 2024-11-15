# Astro-Template

Project initialization is not easy, first you have to run the initialization command, install the dependencies, configure the project and if needed you also have to write code to configure some dependencies.

What if all of that could be done with just a `git clone`?

Well you could do that with this repo it has most of the things you want from
a starter template.

## Installation

1. Fork the repo.

1. Clone the forked repo.

```bash
git clone <your_repo_url>
```

1. Install Dependencies

```bash
bun install
```

1. Start the dev server

```bash
bun run dev
```

## Tools

This template uses [Bun](https://bun.sh/) as the package manager, [Biomejs](https://biomejs.dev/) for linting and formatting, [React](https://react.dev/) for creating components*, [Shadcn-UI](https://ui.shadcn.com/) as the Component Library, [Tailwind](https://tailwindcss.com/) for styling (you can also use css or scss), [Astro](https://astro.build/) as the Framework and [TypeScript](https://www.typescriptlang.org/) for... lets be honest no one uses JavaScript now.

> *by the way, you can also make components with Astro.

### Fonts

You can choose from two preinstalled fonts _**Inter**_ or _**Geist**_.

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

If in case you want to use some other font then you have to install it as a package or link via CDN and you will be good to go. (This is a very brief description, in reality it's not that much easy.)

### Shadcn-UI

This project is configured with shadcn-ui and you can easily add more components. But note that this project has most of the needed components preinstalled. If you think that some most used components are not present then please open a pull request.

## 🚀 Project Structure

> [NOTE]
> I would suggest you to have a deep look at tsconfig.json.
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
In the `src/components/common` folder you can put any of your components.

While `src/lib/` folder serves you some utilities and you can make your own in the folder `src/lib/core`.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run fmt`             | Format files via [Biome](https://biomejs.dev/)   |
| `bun run lint`            | Lints via [Biome](https://biomejs.dev/)         |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

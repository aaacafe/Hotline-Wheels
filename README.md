# Hotline Wheels :wave:

This project is created and based on [Shopify Theme Development – Online Store 2.0 + TailwindCSS course](https://weeklyhow.com/courses/), with an additional transpilation step so React components can be used within the repo.

[Get the course!](https://weeklyhow.com/) | [How to use](#how-to-use)

## How to use

To use this repository for making Shopify themes, use the following command of Shopify CLI.
```sh
shopify theme init [ NAME OF YOUR THEME ] --clone-url https://github.com/polidario/Elizabeth_Clean
```

I use 1 terminal window to run npm scripts I’ve added to package.json.
```sh
npm run dev: This runs our Vite configuration and watches for changes. vite is responsible for transpiling the ts into js (assets folder) && This spins up your dev server for your Shopify theme. Be sure to replace the —store flag with your Shopify store.
```

Note* You need to edit frontend/entrypoints/app.tsx whenever you add a React component, you need to add any props being passed to the react components inside snippets/vite.liquid 

Note** If you run into crlf errors, use the following command git config —global core.autocrlf false

Note*** Github monitors the generated files (assets/* && vite-tag.liquid), they are built for production in the precommit hook

Note**** Please download the extensions listed in .vscode/extensions.json

If you don't have Shopify CLI installed to your computer, navigate to the [installation page of Shopify CLI](https://shopify.dev/themes/tools/cli/installation).

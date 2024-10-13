# Hotline Wheels :wave:

This project is created and based on [Shopify Theme Development – Online Store 2.0 + TailwindCSS course](https://weeklyhow.com/courses/)


[Get the course!](https://weeklyhow.com/) | [Lessons covered](#lessons-covered) |
[How to use](#how-to-use) | [Not a student?](#not-a-student)

## Lessons covered

Status | Lectures
------------ | -------------
:heavy_check_mark: | Installing Development Tools
:heavy_check_mark: | Navigational Bar
:heavy_check_mark: | 404 Page
:heavy_check_mark: | Article Page
:heavy_check_mark: | Blog Page
:heavy_check_mark: | Cart Page
:heavy_check_mark: | Product Collection Page
:heavy_check_mark: | Collections Page
:heavy_check_mark: | Homepage (Index)
:heavy_check_mark: | Pages (About & Contact)
:heavy_check_mark: | Advanced Product Page
:heavy_check_mark: | Search Page
:hourglass: | More lessons coming

## How to use

To use this repository for making Shopify themes, use the following command of Shopify CLI.
```sh
shopify theme init [ NAME OF YOUR THEME ] --clone-url https://github.com/polidario/Elizabeth_Clean
```

I use 2 terminal windows to run npm scripts I’ve added to package.json.
```sh
npm run dev: This runs our Vite configuration and watches for changes. vite is responsible for transpiling the ts into js (assets folder)

npm run shopify: This spins up your dev server for your Shopify theme. Be sure to replace the —store flag with your Shopify store.
```

Note* The SRC folder cannot handle nested files at present, I will need to improve the transpilation process

If you don't have Shopify CLI installed to your computer, navigate to the [installation page of Shopify CLI](https://shopify.dev/themes/tools/cli/installation).

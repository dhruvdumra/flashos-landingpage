# FlashOS Website

official website for FlashOS, a OS downloader and USB flashing tool.

 people come here to see what FlashOS is, look through the os catalog, and download the app from the source itself oof its not a viruss. didnt want people digging through github or discord just to find a download link

## Why I built it

tools like rufus and balena etcher are fine at flashing. none of them help before that part though, like finding the right iso or figuring out which distro fits or making sure your not pulling it from some sketchy site. and even the flashing part can get confusing too, like partitioning, picking the right scheme, all that

so i made this so theres one place to look through os's, see what FlashOS does, and get the app, instead of having 5 tabs open every time u set up a new computer

## Screenshots

### Homepage
<img width="1366" height="644" alt="1" src="https://github.com/user-attachments/assets/7bf3c6f2-6894-4ccd-8edf-89f252df0a4c" />

### OS Catalog
<img width="1355" height="645" alt="3" src="https://github.com/user-attachments/assets/af03345d-59c0-4f39-97d7-6144e917f238" />

## What it does

- shows what FlashOS can do
- lets you look through the os catalog, filter between windows and linux
- explains how the flashing process works
- download links for all the platforms FlashOS supports
- the main page for the project, where i send people who ask what FlashOS is

## How it works

built with React, Vite and Framer Motion for the animations.

os data (names, logos, links, descriptions) lives in separate data files instead of being hardcoded into components, so adding a distro or fixing a link is just editing a file not searching through jsx

works fine on desktop tablet and mobile, and reduced motion is respected for people who dont want the animations

## Running it locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview the build
```

## Tech stack

- React 18
- Vite
- Framer Motion
- CSS3
- SVG icons, made by hand, no icon library

## Quick note on AI

used Claude (through a MCP server) for help with some of the framer motion timing and easing, thats it. everything else, design architecture components content logic, all written by me

## License

MIT

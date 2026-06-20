# FlashOS Website

The official website for FlashOS — a modern operating system downloader and USB flashing tool.

FlashOS Website serves as the public-facing platform for the FlashOS ecosystem. It introduces users to the project, showcases its capabilities, provides a browsable operating system catalog, and offers downloads for the desktop application.

## Why I Built It

Most operating system flashing tools focus only on the flashing process. Users still have to search for ISO files, compare distributions, and find trustworthy download sources themselves.

I built FlashOS Website to act as a central hub where users can discover operating systems, learn about FlashOS, and download the application from a single place.

## Screenshots

### Homepage

![Homepage]

### Operating System Catalog

![OS Catalog]

## What It Does

* Showcases FlashOS features and capabilities
* Provides a browsable operating system catalog
* Allows filtering between Windows and Linux distributions
* Explains the FlashOS flashing workflow
* Provides download links for supported platforms
* Serves as the official landing page for the FlashOS project

## How It Works

The website is built with React, Vite, and Framer Motion.

Operating system information is stored in structured data files and rendered dynamically, making it easy to add or update supported distributions. Interactive animations and responsive layouts create a smooth experience across desktop, tablet, and mobile devices.

## Features

* Animated hero section
* Bento-style feature grid
* Interactive OS catalog
* Responsive design
* Dark themed UI matching FlashOS branding
* Platform download cards
* Accessibility and reduced-motion support

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Tech Stack

* React 18
* Vite
* Framer Motion
* CSS3
* SVG Icons

## License

MIT License

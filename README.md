# install steps:
1. install material ui
`npm install @mui/material @emotion/react @emotion/styled`
2. install material ui icons
`npm install @mui/icons-material`

# Project Structure Explanation

This document outlines the file structure of our Next.js project. The structure follows the convention suggested by Next.js and organizes the static assets, application-specific components, pages, and reusable components neatly.

## File Structure

Below is the tree structure of our project, which includes directories for public assets like images and CSS, source code including app components and pages, and a section for reusable components.

```plaintext
project/
├─ public/             # This is the Next.js convention for static assets
│  ├─ images/          # Directory for images
│  ├─ css/             # Directory for custom CSS files
├─ src/
│  ├─ app/             # Contains App-specific components or App Router logic
│  ├─ pages/           # Contains pages of your application, includes Next.js's routing
│  │  ├─ _app.js       # Custom App component for global styles/providers
│  │  ├─ index.js      # Main landing page
│  ├─ components/      # Directory for reusable components, optional based on your preference
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Issue troubleshooting

#### if we face permission denied while 'npm run dev'
`cd simply-health`

`sudo chown -R $(whoami) .`



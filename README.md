# Hello Next.js Project

"Hello world" application wit full-stack web applications framework Next.js.
Project includes basic Next.js architecture with folder routing in app directory, client and server components, layout and error components, and [...likethis] routing folders for dynamic parameters.

Application is integrated with NextAuth.js library for one of most popular authentication method with Next.js. In this variation, authentication uses credentials (email and password) and GitHub API providers.

Zustand is using for example of storing data with state manager in client-server components tree.

Check production build of application by following the [link](https://hello-next-js-three.vercel.app/).

## Stack:

- `Next.js`
- `NextAuth.js`
- `TypeScript`
- `Zustand`

## CI/CD:

- `GitHub Actions`
- `Vercel`

# Other technologies

- Eslint + Prettier for code style and linting
- husky for git hooks

# Local running

Clone the GitHub repository using https / ssh / Github CLI. \
Install Node.js from [official download page](https://nodejs.org/en). \
Open folder with the cloned GitHub code using your IDE and use next npm commands: `npm ci` and then `npm run dev`.

# Hello Next.js Project

"Hello world" application wit full-stack web applications framework Next.js.
Project includes basic Next.js architecture with folder routing in app directory, client and server components, layout and error components, and [...likethis] routing folders for dynamic parameters.

Application is integrated with NextAuth.js library for one of most popular authentication method with Next.js. In this variation, authentication uses credentials (email and password) and GitHub API providers.

Zustand is using for example of storing data with state manager in client-server components tree.

Application contains examples of implementation of server actions, which have become stable in Next.js 14 version. For that case, json-server was used for implementation of simple database and free API.

Check production build of application by following the [link](https://hello-next-js-three.vercel.app/).

## Stack:

- `Next.js`
- `NextAuth.js`
- `TypeScript`
- `Zustand`
- `json-server`

## CI/CD:

- `GitHub Actions`
- `Vercel`

# Other technologies

- Eslint + Prettier for code style and linting
- husky for git hooks

# Local running

Clone the GitHub repository using https / ssh / Github CLI. \
Open folder with the cloned GitHub code using your IDE and create _.env_ or _.env.local_ file with structure like this:

`GITHUB_CLIENT_ID` = [your github oauth app client id] \
`GITHUB_CLIENT_SECRET` = [your github oauth app client secret] \
`NEXTAUTH_SECRET` = [any string you want] \
`NEXTAUTH_URL` = [http://localhost:3000]

If you don't want to check out authentication with GitHub, you may skip adding GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET variables.
Otherwise, check your [GitHub Oauth Apps](https://github.com/settings/developers) and create new one like this:

`Homepage URL *`: http://localhost:3000/ \
`Authorization callback URL *`: http://localhost:3000//api/auth/callback/github

After that, copy your github client id and client secret and store it in your environment file.

Finally, use next npm commands: `npm ci` and then `npm run dev-with-server` or just `npm run dev` if you wish try it without server implementation.

import type { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import { users } from '@shared/data/users';
import { routes } from '@shared/model/routes';

export const authOptions: AuthOptions = {
	providers: [
		GithubProvider({
			name: 'github',
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		}),
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;

				const currentUser = users.find(
					({ email, password }) => email === credentials.email && password === credentials.password,
				);

				if (currentUser) {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const { password, ...rest } = currentUser;
					return rest as User;
				}

				return null;
			},
		}),
	],

	pages: {
		signIn: routes.login.root,
	},

	secret: process.env.NEXTAUTH_SECRET!,
};

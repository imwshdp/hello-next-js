export const routes = {
	root: '/',

	about: {
		root: '/about',
		links: '/about/links',
		stack: '/about/stack',
	},

	blog: {
		root: '/blog',
		hooks: '/blog/local-hooks',
		store: '/blog/local-store',

		prisma: '/blog/prisma-sqlite',

		actions: '/blog/server-actions',
		actionsNew: '/blog/server-actions/new',
	},

	profile: {
		root: '/profile',
	},

	login: {
		root: '/login',
	},
};

export const navItems = [
	{
		label: 'Home',
		href: routes.root,
	},
	{
		label: 'About',
		href: routes.about.root,
	},
	{
		label: 'Blog',
		href: routes.blog.root,
	},
];

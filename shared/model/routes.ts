export const routes = {
	root: '/',

	about: {
		root: '/about',
		contacts: '/about/contacts',
		team: '/about/team',
	},

	blog: {
		root: '/blog',
		hooks: '/blog/hooks',
		store: '/blog/stored',
		actions: '/blog/actions',
		actionsNew: '/blog/actions/new',
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
		label: 'Blog',
		href: routes.blog.root,
	},
	{
		label: 'About',
		href: routes.about.root,
	},
];

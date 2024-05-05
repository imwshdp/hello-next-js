export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<h1>Prisma blog</h1>

			{children}
		</section>
	);
}

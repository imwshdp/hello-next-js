import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@components/Footer';
import Header from '@components/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'next.js imwshdp app',
	description: 'imwshdp hello world next.js app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				<main className='container'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

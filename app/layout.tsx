import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { PropsWithChildren } from 'react';

import AppProvider from '@components/AppProvider';
import Footer from '@components/Footer';
import Header from '@components/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'next.js imwshdp app',
	description: 'imwshdp hello world next.js app',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AppProvider>
					<Header />
					<main className='container'>{children}</main>
					<Footer />
				</AppProvider>
			</body>
		</html>
	);
}

import React from 'react';

import { GITHUB_LINK } from '@shared/data/data';

function Footer() {
	return (
		<footer className='container'>
			<p>
				created by{' '}
				<strong>
					<a href={GITHUB_LINK} target='_blank' rel='noreferrer'>
						imwshdp
					</a>
				</strong>
			</p>
		</footer>
	);
}

export default Footer;

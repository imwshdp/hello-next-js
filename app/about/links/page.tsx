import React from 'react';

import { GITHUB_LINK } from '@shared/data/constants';

function Links() {
	return (
		<div className='container'>
			<h2>Useful links</h2>
			<ol>
				<li>
					<a href={GITHUB_LINK} target='_blank' rel='noreferrer'>
						My GitHub Profile Link
					</a>
				</li>
			</ol>
		</div>
	);
}

export default Links;

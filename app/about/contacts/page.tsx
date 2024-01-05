import React from 'react';

import { GITHUB_LINK } from '@shared/data/data';

function Contacts() {
	return (
		<div className='container'>
			<h2>Project team contacts</h2>
			<ol>
				<li>
					<a href={GITHUB_LINK} target='_blank' rel='noreferrer'>
						Author github profile
					</a>
				</li>
			</ol>
		</div>
	);
}

export default Contacts;

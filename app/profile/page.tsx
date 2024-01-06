import { getServerSession } from 'next-auth';

import React from 'react';

import { authOptions } from '@lib/auth';
import { Octocat } from '@shared/assets/octocat';

async function ProfilePage() {
	const session = await getServerSession(authOptions);

	return (
		<div className='profile-info'>
			<h1>Profile of {session?.user?.name}</h1>
			{session?.user?.image ? (
				<img
					className='avatar'
					src={session?.user?.image}
					alt={`${session?.user?.name} github picture profile`}
					title={session?.user?.name || ''}
				/>
			) : (
				<div className='avatar'>
					<Octocat />
					<strong>404: avatar not found</strong>
				</div>
			)}
		</div>
	);
}

export default ProfilePage;

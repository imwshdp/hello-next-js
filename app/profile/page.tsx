import Image from 'next/image';
import { getServerSession } from 'next-auth';

import React from 'react';

import { authOptions } from '@lib/auth';
import { Octocat } from '@shared/assets/octocat';

async function ProfilePage() {
	const session = await getServerSession(authOptions);

	return (
		<div className='profile-info'>
			<h1>Profile of {session?.user?.name}</h1>
			<div className='avatar' title={session?.user?.name || ''}>
				{session?.user?.image ? (
					<Image
						width={250}
						height={250}
						src={session.user.image}
						alt={`${session?.user?.name} github picture profile`}
					/>
				) : (
					<div>
						<Octocat />
						<strong>404: avatar not found</strong>
					</div>
				)}
			</div>
		</div>
	);
}

export default ProfilePage;

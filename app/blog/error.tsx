'use client';
import React from 'react';

function ErrorPost({ error }: { error: Error }) {
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					alignItems: 'center',
				}}
			>
				<h1>Oops... Something went wrong.</h1>
				<p>
					Error message:
					<em> {error.message}</em>
				</p>
			</div>
		</>
	);
}

export default ErrorPost;

'use client';

import { SessionProvider } from 'next-auth/react';

import React, { PropsWithChildren } from 'react';

function AppProvider({ children }: PropsWithChildren) {
	return <SessionProvider>{children}</SessionProvider>;
}

export default AppProvider;

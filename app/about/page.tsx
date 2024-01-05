import { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
	title: 'next.js about',
};

function About() {
	return <h2>All info about our team (honestly it is all about nested routing)</h2>;
}

export default About;

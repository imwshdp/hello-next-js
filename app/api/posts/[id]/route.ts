import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';

// import { redirect } from 'next/navigation';
// import { routes } from '@shared/model/routes';

type DeleteParamsType = {
	params: {
		id: string;
	};
};

export async function DELETE(request: Request, { params }: DeleteParamsType) {
	const id = params.id;

	// WORK WITH HEADERS
	const headerList = headers();
	const type = headerList.get('Content-Type');

	// WORK WITH COOKIES
	const cookiesList = cookies();
	const cookie = cookiesList.get('Cookie_1')?.value;

	// HERE IS LOGIC TO DELETE POST FROM LOCAL DATABASE
	/* database request... */

	// WORK WITH REDIRECT
	// redirect(routes.blog.root);

	return NextResponse.json({
		id,
		type,
		cookie,
	});
}

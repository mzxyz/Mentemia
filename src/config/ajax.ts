import { ajax } from 'rxjs/ajax';

export const publicHeaders = {
	'Content-Type': 'application/json',
	'Cache-Control': 'no-cache',
};

const AccessToken = {
	token: '',
	expiresAt: 0,
};

const authenticatedHeaders = () => ({
	...publicHeaders,
	Authorization: `Bearer ${AccessToken.token}`,
});

export const GET = (url: string, headers = authenticatedHeaders()) => ajax.get(url, headers);

export const POST = (url: string, body: object, headers = authenticatedHeaders()) =>
	ajax.post(url, body, headers);

export const PUT = (url: string, body: object, headers = authenticatedHeaders()) =>
	ajax.put(url, body, headers);

export const PATCH = (url: string, body: object, headers = authenticatedHeaders()) =>
	ajax.patch(url, body, headers);

export const DELETE = (url: string, headers = authenticatedHeaders()) => ajax.delete(url, headers);

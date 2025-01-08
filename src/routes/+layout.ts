// usr/local/var/www/mjjun/src/routes/+layout.ts

export const prerender = true;

export const load = ({ url }) => ({
	currentRoute: url.pathname
});

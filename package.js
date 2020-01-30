// eslint-disable-next-line
Package.describe({
	name: 'szul:centigram',
	version: '1.0.0',
	summary: 'A minimalist CSS framework based on Milligram.',
	git: 'https://github.com/szul/centigram.git',
	documentation: 'README.md'
});

// eslint-disable-next-line
Package.onUse(api => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/centigram.css'
	], 'client')
});

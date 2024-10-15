import del from 'node-delete';

del(['assets/*.js', 'assets/*.css', 'assets/.vite', 'snippets/vite-tag.liquid'], function (err, paths) {
	console.log('Deleted files/folders:\n', paths.join('\n'));
});
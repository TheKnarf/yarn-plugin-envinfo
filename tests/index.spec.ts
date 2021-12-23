const plugin = require('../src/index.ts').default;
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)

jest.setTimeout(10000);

test('Exports 1 command', () => {
	expect(plugin.commands.length).toBe(1);
});

test('Snapshot test of `yarn pack --dry-run --json`', async () => {
	const result = await exec('yarn pack --dry-run --json');

	const stderr = result.stderr;
	expect(stderr).toMatchSnapshot();

	// Skip the first line of the output since thats just the build path
	const stdout = result
		.stdout
		.split("\n")
		.slice(1)
		.join("\n");

	expect(stdout).toMatchSnapshot();
});



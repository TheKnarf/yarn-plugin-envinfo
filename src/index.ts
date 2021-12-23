import { Plugin } from '@yarnpkg/core';
import { BaseCommand } from '@yarnpkg/cli';
import { Command, Option, Usage } from "clipanion";
import { cwd } from 'process';
import JSON5 from 'json5';
import fs from 'fs';
import envinfo from 'envinfo';

const defaultConfig = {
	System: ['OS', 'CPU', 'Memory', 'Container', 'Shell'],
	Binaries: ['Node', 'Yarn', 'npm'],
	Browsers: [
		'Brave Browser',
		'Chrome',
		'Chrome Canary',
		'Chromium',
		'Edge',
		'Firefox',
		'Firefox Developer Edition',
		'Firefox Nightly',
		'Internet Explorer',
		'Safari',
		'Safari Technology Preview',
	],
	npmGlobalPackages: true,
};

class EnvInfoCommand extends BaseCommand {
	static paths = [
		[`envinfo`],
	];

	static usage = Command.Usage({
		description: 'Yarn Plugin Envinfo',
		details: `
		Prints out information about you developer enviroment (OS, Node versions, Browsers, etc).
		`,
	});

	async execute() {
		const path = cwd() + '/.envinfo';
		var config = { ...defaultConfig };

		if(fs.existsSync(path)) {
			const content = fs.readFileSync(path).toString();
			config = JSON5.parse(content);
		}

		const env = await envinfo.run(config);

		console.log('Yarn Plugin Envinfo');
		console.log(env);
	}
}

const plugin: Plugin = {
	commands: [
		EnvInfoCommand,
	],
};

export default plugin;

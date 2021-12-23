# Yarn Plugin Envinfo

![license](https://img.shields.io/github/license/theknarf/yarn-plugin-envinfo) ![GitHub branch checks state](https://img.shields.io/github/checks-status/theknarf/yarn-plugin-envinfo/main) ![npm](https://img.shields.io/npm/v/yarn-plugin-envinfo)

This is a yarn plugin so that you can run [envinfo](https://www.npmjs.com/package/envinfo) in your project. It'll read a project local configuration file so that different projects can ask for different info. Useful for helping new developers when onboarding them into your project.

## Installation

```bash
yarn plugin import https://unpkg.com/yarn-plugin-envinfo
```

Then you can create a `.envinfo` file in your project:

```
{
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
}
```

And finally you can test it out by running:

```
yarn envinfo
```

For more information about what you can turn on and off in `.envinfo` check out the following [full example](https://github.com/tabrindle/envinfo/blob/main/src/presets.js).

## Development

```bash
yarn install # first time setup
yarn build # builds the plugin
yarn postbuild
# uncomment the line in `.yarnrc.yml` to test
yarn envinfo
```

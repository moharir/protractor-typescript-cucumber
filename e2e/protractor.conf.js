// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
	allScriptsTimeout: 11000,
	specs: ['./src/features/**/*.feature'],
	capabilities: {
		browserName: 'chrome'
	},
	directConnect: true,
	baseUrl: 'https://about.google/',
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	cucumberOpts: {
		format: ['json:../results.json'],
		require: ['./src/steps/**/*.steps.ts']
	},


	onPrepare() {
		browser.driver.manage().window().maximize();
		require('ts-node').register({
			project: require('path').join(__dirname, './tsconfig.json')
		});
	}
};

import { StorybookConfig } from '@storybook/server-webpack5';

const mainConfig: StorybookConfig = {
	stories: ["../stories/**/*.stories.@(json|yaml|yml)"],
	logLevel: "debug",
	addons: [
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-actions",
		"@storybook/addon-backgrounds",
		"@storybook/addon-links",
		"@storybook/addon-controls",
		"@storybook/addon-highlight",
		"@storybook/angular",
	],
	core: {
		disableTelemetry: true,
	},
	features: {
		// Please see https://github.com/chanzuckerberg/axe-storybook-testing/pull/54/files for details
		//storyStoreV7: process.env.NO_STORY_STORE_V7 !== "true",
		StoryStoreV7: false
	},
	framework: "@storybook/angular",
};

module.exports = mainConfig;

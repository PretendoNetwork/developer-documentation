const { guider } = require('@neato/guider');

const withGuider = guider({
	themeConfig: './theme.config.tsx',
});

module.exports = withGuider();
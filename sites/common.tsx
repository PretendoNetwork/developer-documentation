import {
	group,
	link,
	siteTemplate
} from '@neato/guider/theme';

export default siteTemplate({
	logo: {
		name: 'Pretendo Developer Documentation',
		to: '/',
	},
	dropdown: [
		link('Home', '/home'),
		group('Overview', [
			link('NEX', '/overview/nex'),
			link('PRUDP', '/overview/prudp'),
			link('RMC', '/overview/rmc')
		]),
		group('Libraries', [
			link('nex-go', '/docs/nex-go'),
			link('nex-protocols-go', '/docs/nex-protocols-go'),
			link('nex-protocols-common-go', '/docs/nex-protocols-common-go')
		])
	]
});
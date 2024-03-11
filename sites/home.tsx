import {
	directory,
	group,
	link,
	site
} from '@neato/guider/theme';
import siteTemplate from './common';

export default site('home', {
	extends: [siteTemplate],
	directories: [
		directory('root', {
			sidebar: [
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
		})
	]
});
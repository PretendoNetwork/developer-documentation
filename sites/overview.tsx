import {
	directory,
	group,
	link,
	site
} from '@neato/guider/theme';
import siteTemplate from './common';

export default site('overview', {
	extends: [siteTemplate],
	directories: [
		directory('root', {
			sidebar: [
				group('See also', [
					link('PRUDP', '/overview/prudp'),
					link('RMC', '/overview/rmc'),
					link('nex-go', '/docs/nex-go'),
					link('nex-protocols-go', '/docs/nex-protocols-go'),
					link('nex-protocols-common-go', '/docs/nex-protocols-common-go')
				])
			]
		})
	]
});
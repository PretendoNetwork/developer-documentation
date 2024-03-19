import {
	directory,
	site
} from '@neato/guider/theme';
import siteTemplate from './common';

export default site('docs', {
	extends: [siteTemplate],
	directories: [
		directory('root', {})
	]
});
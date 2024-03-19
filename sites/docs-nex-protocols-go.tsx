import {
	directory,
	group,
	link,
	site
} from '@neato/guider/theme';
import siteTemplate from './common';

export default site('docs-nex-protocols-go', {
	extends: [siteTemplate],
	directories: [
		// TODO - Maybe these directories should be put into their own files, like how sites are?
		directory('root', {
			sidebar: [
				// TODO - Find a good order for all these links? Right now they're mostly just alphabetical
				group('Packages', [
					link('aa-user', '/docs/nex-protocols-go/aa-user'),
					link('account-management', '/docs/nex-protocols-go/account-management'),
					link('datastore', '/docs/nex-protocols-go/datastore'),
					link('debug', '/docs/nex-protocols-go/debug'),
					link('friends', '/docs/nex-protocols-go/friends'),
					link('friends-3ds', '/docs/nex-protocols-go/friends-3ds'),
					link('friends-wiiu', '/docs/nex-protocols-go/friends-wiiu'),
					link('globals', '/docs/nex-protocols-go/globals'),
					link('health', '/docs/nex-protocols-go/health'),
					link('matchmake-extension', '/docs/nex-protocols-go/matchmake-extension'),
					link('matchmake-referee', '/docs/nex-protocols-go/matchmake-referee'),
					link('match-making', '/docs/nex-protocols-go/match-making'),
					link('match-making-ext', '/docs/nex-protocols-go/match-making-ext'),
					link('message-delivery', '/docs/nex-protocols-go/message-delivery'),
					link('messaging', '/docs/nex-protocols-go/messaging'),
					link('monitoring', '/docs/nex-protocols-go/monitoring'),
					link('nat-traversal', '/docs/nex-protocols-go/nat-traversal'),
					link('nintendo-notifications', '/docs/nex-protocols-go/nintendo-notifications'),
					link('notifications', '/docs/nex-protocols-go/notifications'),
					link('persistent-store', '/docs/nex-protocols-go/persistent-store'),
					link('ranking', '/docs/nex-protocols-go/ranking'),
					link('ranking2', '/docs/nex-protocols-go/ranking2'),
					link('remote-log-device', '/docs/nex-protocols-go/remote-log-device'),
					link('screening', '/docs/nex-protocols-go/screening'),
					link('secure-connection', '/docs/nex-protocols-go/secure-connection'),
					link('service-item', '/docs/nex-protocols-go/service-item'),
					link('shop', '/docs/nex-protocols-go/shop'),
					link('storage-manager', '/docs/nex-protocols-go/storage-manager'),
					link('subscriber', '/docs/nex-protocols-go/subscriber'),
					link('subscription', '/docs/nex-protocols-go/subscription'),
					link('ticket-granting', '/docs/nex-protocols-go/ticket-granting'),
					link('utility', '/docs/nex-protocols-go/utility')
				])
			]
		}),
		directory('nex-protocols-go-datastore-root', {
			sidebar: [
				group('Packages', [
					link('types', '/docs/nex-protocols-go/datastore/types'),
					link('constants', '/docs/nex-protocols-go/datastore/constants')
				]),
				group('Structs', [
					link('Protocol', '/docs/nex-protocols-go/datastore/Protocol')
				])
			]
		})
	]
});
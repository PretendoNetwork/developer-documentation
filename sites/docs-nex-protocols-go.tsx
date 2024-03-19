import {
	directory,
	group,
	link,
	site
} from '@neato/guider/theme';
import siteTemplate from './common';

export default site('docs-nex-protocols-go', {
	extends: [siteTemplate],
	github: 'PretendoNetwork/nex-protocols-go',
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
		}),
		directory('nex-protocols-go-datasotre-struct-Protocol', {
			sidebar: [
				link('datastore', '/docs/nex-protocols-go/datastore'),
				link('datastore.Protocol', '/docs/nex-protocols-go/datastore/Protocol'),
				group('Fields', [
					link('Patches', '/docs/nex-protocols-go/datastore/Protocol/fields/Patches'),
					link('PatchedMethods', '/docs/nex-protocols-go/datastore/Protocol/fields/PatchedMethods'),
					link('PrepareGetObjectV1', '/docs/nex-protocols-go/datastore/Protocol/fields/PrepareGetObjectV1'),
					link('PreparePostObjectV1', '/docs/nex-protocols-go/datastore/Protocol/fields/PreparePostObjectV1'),
					link('CompletePostObjectV1', '/docs/nex-protocols-go/datastore/Protocol/fields/CompletePostObjectV1'),
					link('DeleteObject', '/docs/nex-protocols-go/datastore/Protocol/fields/DeleteObject'),
					link('DeleteObjects', '/docs/nex-protocols-go/datastore/Protocol/fields/DeleteObjects'),
					link('ChangeMetaV1', '/docs/nex-protocols-go/datastore/Protocol/fields/ChangeMetaV1'),
					link('ChangeMetasV1', '/docs/nex-protocols-go/datastore/Protocol/fields/ChangeMetasV1'),
					link('GetMeta', '/docs/nex-protocols-go/datastore/Protocol/fields/GetMeta'),
					link('GetMetas', '/docs/nex-protocols-go/datastore/Protocol/fields/GetMetas'),
					link('PrepareUpdateObject', '/docs/nex-protocols-go/datastore/Protocol/fields/PrepareUpdateObject'),
					link('CompleteUpdateObject', '/docs/nex-protocols-go/datastore/Protocol/fields/CompleteUpdateObject'),
					link('SearchObject', '/docs/nex-protocols-go/datastore/Protocol/fields/SearchObject'),
					link('GetNotificationURL', '/docs/nex-protocols-go/datastore/Protocol/fields/GetNotificationURL'),
					link('GetNewArrivedNotificationsV1', '/docs/nex-protocols-go/datastore/Protocol/fields/GetNewArrivedNotificationsV1'),
					link('RateObject', '/docs/nex-protocols-go/datastore/Protocol/fields/RateObject'),
					link('GetRating', '/docs/nex-protocols-go/datastore/Protocol/fields/GetRating'),
					link('GetRatings', '/docs/nex-protocols-go/datastore/Protocol/fields/GetRatings'),
					link('ResetRating', '/docs/nex-protocols-go/datastore/Protocol/fields/ResetRating'),
					link('ResetRatings', '/docs/nex-protocols-go/datastore/Protocol/fields/ResetRatings'),
					link('GetSpecificMetaV1', '/docs/nex-protocols-go/datastore/Protocol/fields/GetSpecificMetaV1'),
					link('PostMetaBinary', '/docs/nex-protocols-go/datastore/Protocol/fields/PostMetaBinary'),
					link('TouchObject', '/docs/nex-protocols-go/datastore/Protocol/fields/TouchObject'),
					link('GetRatingWithLog', '/docs/nex-protocols-go/datastore/Protocol/fields/GetRatingWithLog'),
					link('PreparePostObject', '/docs/nex-protocols-go/datastore/Protocol/fields/PreparePostObject'),
					link('PrepareGetObject', '/docs/nex-protocols-go/datastore/Protocol/fields/PrepareGetObject'),
					link('CompletePostObject', '/docs/nex-protocols-go/datastore/Protocol/fields/CompletePostObject'),
					link('GetNewArrivedNotifications', '/docs/nex-protocols-go/datastore/Protocol/fields/GetNewArrivedNotifications'),
					link('GetSpecificMeta', '/docs/nex-protocols-go/datastore/Protocol/fields/GetSpecificMeta'),
					link('GetPersistenceInfo', '/docs/nex-protocols-go/datastore/Protocol/fields/GetPersistenceInfo'),
					link('GetPersistenceInfos', '/docs/nex-protocols-go/datastore/Protocol/fields/GetPersistenceInfos'),
					link('PerpetuateObject', '/docs/nex-protocols-go/datastore/Protocol/fields/PerpetuateObject'),
					link('UnperpetuateObject', '/docs/nex-protocols-go/datastore/Protocol/fields/UnperpetuateObject'),
					link('PrepareGetObjectOrMetaBinary', '/docs/nex-protocols-go/datastore/Protocol/fields/PrepareGetObjectOrMetaBinary'),
					link('GetPasswordInfo', '/docs/nex-protocols-go/datastore/Protocol/fields/GetPasswordInfo'),
					link('GetPasswordInfos', '/docs/nex-protocols-go/datastore/Protocol/fields/GetPasswordInfos'),
					link('GetMetasMultipleParam', '/docs/nex-protocols-go/datastore/Protocol/fields/GetMetasMultipleParam'),
					link('CompletePostObjects', '/docs/nex-protocols-go/datastore/Protocol/fields/CompletePostObjects'),
					link('ChangeMeta', '/docs/nex-protocols-go/datastore/Protocol/fields/ChangeMeta'),
					link('ChangeMetas', '/docs/nex-protocols-go/datastore/Protocol/fields/ChangeMetas'),
					link('RateObjects', '/docs/nex-protocols-go/datastore/Protocol/fields/RateObjects'),
					link('PostMetaBinaryWithDataID', '/docs/nex-protocols-go/datastore/Protocol/fields/PostMetaBinaryWithDataID'),
					link('PostMetaBinariesWithDataID', '/docs/nex-protocols-go/datastore/Protocol/fields/PostMetaBinariesWithDataID'),
					link('RateObjectWithPosting', '/docs/nex-protocols-go/datastore/Protocol/fields/RateObjectWithPosting'),
					link('RateObjectsWithPosting', '/docs/nex-protocols-go/datastore/Protocol/fields/RateObjectsWithPosting'),
					link('GetObjectInfos', '/docs/nex-protocols-go/datastore/Protocol/fields/GetObjectInfos'),
					link('SearchObjectLight', '/docs/nex-protocols-go/datastore/Protocol/fields/SearchObjectLight')
				]),
				group('Methods', [
					link('Endpoint', '/docs/nex-protocols-go/datastore/Protocol/methods/Endpoint'),
					link('SetEndpoint', '/docs/nex-protocols-go/datastore/Protocol/methods/SetEndpoint'),
					link('SetHandlerPrepareGetObjectV1', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPrepareGetObjectV1'),
					link('SetHandlerPreparePostObjectV1', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPreparePostObjectV1'),
					link('SetHandlerCompletePostObjectV1', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerCompletePostObjectV1'),
					link('SetHandlerDeleteObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerDeleteObject'),
					link('SetHandlerDeleteObjects', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerDeleteObjects'),
					link('SetHandlerChangeMetaV1', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerChangeMetaV1'),
					link('SetHandlerChangeMetasV1', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerChangeMetasV1'),
					link('SetHandlerGetMeta', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetMeta'),
					link('SetHandlerGetMetas', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetMetas'),
					link('SetHandlerPrepareUpdateObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPrepareUpdateObject'),
					link('SetHandlerCompleteUpdateObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerCompleteUpdateObject'),
					link('SetHandlerSearchObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerSearchObject'),
					link('SetHandlerGetNotificationURL', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetNotificationURL'),
					link('SetHandlerGetNewArrivedNotificationsV1', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetNewArrivedNotificationsV1'),
					link('SetHandlerRateObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerRateObject'),
					link('SetHandlerGetRating', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetRating'),
					link('SetHandlerGetRatings', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetRatings'),
					link('SetHandlerResetRating', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerResetRating'),
					link('SetHandlerResetRatings', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerResetRatings'),
					link('SetHandlerGetSpecificMetaV1', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetSpecificMetaV1'),
					link('SetHandlerPostMetaBinary', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPostMetaBinary'),
					link('SetHandlerTouchObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerTouchObject'),
					link('SetHandlerGetRatingWithLog', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetRatingWithLog'),
					link('SetHandlerPreparePostObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPreparePostObject'),
					link('SetHandlerPrepareGetObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPrepareGetObject'),
					link('SetHandlerCompletePostObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerCompletePostObject'),
					link('SetHandlerGetNewArrivedNotifications', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetNewArrivedNotifications'),
					link('SetHandlerGetSpecificMeta', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetSpecificMeta'),
					link('SetHandlerGetPersistenceInfo', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetPersistenceInfo'),
					link('SetHandlerGetPersistenceInfos', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetPersistenceInfos'),
					link('SetHandlerPerpetuateObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPerpetuateObject'),
					link('SetHandlerUnperpetuateObject', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerUnperpetuateObject'),
					link('SetHandlerPrepareGetObjectOrMetaBinary', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPrepareGetObjectOrMetaBinary'),
					link('SetHandlerGetPasswordInfo', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetPasswordInfo'),
					link('SetHandlerGetPasswordInfos', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetPasswordInfos'),
					link('SetHandlerGetMetasMultipleParam', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetMetasMultipleParam'),
					link('SetHandlerCompletePostObjects', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerCompletePostObjects'),
					link('SetHandlerChangeMeta', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerChangeMeta'),
					link('SetHandlerChangeMetas', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerChangeMetas'),
					link('SetHandlerRateObjects', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerRateObjects'),
					link('SetHandlerPostMetaBinaryWithDataID', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPostMetaBinaryWithDataID'),
					link('SetHandlerPostMetaBinariesWithDataID', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerPostMetaBinariesWithDataID'),
					link('SetHandlerRateObjectWithPosting', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerRateObjectWithPosting'),
					link('SetHandlerRateObjectsWithPosting', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerRateObjectsWithPosting'),
					link('SetHandlerGetObjectInfos', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerGetObjectInfos'),
					link('SetHandlerSearchObjectLight', '/docs/nex-protocols-go/datastore/Protocol/methods/SetHandlerSearchObjectLight')
				])
			]
		})
	]
});
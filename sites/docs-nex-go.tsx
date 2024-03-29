import {
	directory,
	group,
	link,
	site
} from '@neato/guider/theme';
import siteTemplate from './common';

export default site('docs-nex-go', {
	extends: [siteTemplate],
	github: 'PretendoNetwork/nex-go',
	directories: [
		// TODO - Maybe these directories should be put into their own files, like how sites are?
		directory('root', {
			sidebar: [
				// TODO - Find a good order for all these links? Right now they're mostly just alphabetical
				group('Packages', [
					link('types', '/docs/nex-go/types'),
					link('constants', '/docs/nex-go/constants'),
					link('encryption', '/docs/nex-go/encryption'),
					link('compression', '/docs/nex-go/compression')
				]),
				group('Structs', [
					link('Account', '/docs/nex-go/Account'),
					link('ByteStreamIn', '/docs/nex-go/ByteStreamIn'),
					link('ByteStreamOut', '/docs/nex-go/ByteStreamOut'),
					link('ByteStreamSettings', '/docs/nex-go/ByteStreamSettings'),
					link('Counter', '/docs/nex-go/Counter'),
					link('Error', '/docs/nex-go/Error'),
					link('HPPClient', '/docs/nex-go/HPPClient'),
					link('HPPPacket', '/docs/nex-go/HPPPacket'),
					link('HPPServer', '/docs/nex-go/HPPServer'),
					link('KerberosEncryption', '/docs/nex-go/KerberosEncryption'),
					link('KerberosTicket', '/docs/nex-go/KerberosTicket'),
					link('KerberosTicketInternalData', '/docs/nex-go/KerberosTicketInternalData'),
					link('LibraryVersion', '/docs/nex-go/LibraryVersion'),
					link('LibraryVersions', '/docs/nex-go/LibraryVersions'),
					link('MutexMap', '/docs/nex-go/MutexMap'),
					link('PRUDPConnection', '/docs/nex-go/PRUDPConnection'),
					link('PRUDPEndPoint', '/docs/nex-go/PRUDPEndPoint'),
					link('PRUDPPacket', '/docs/nex-go/PRUDPPacket'),
					link('PRUDPPacketLite', '/docs/nex-go/PRUDPPacketLite'),
					link('PRUDPPacketV0', '/docs/nex-go/PRUDPPacketV0'),
					link('PRUDPPacketV1', '/docs/nex-go/PRUDPPacketV1'),
					link('PRUDPServer', '/docs/nex-go/PRUDPServer'),
					link('PRUDPV0Settings', '/docs/nex-go/PRUDPV0Settings'),
					link('PRUDPV1Settings', '/docs/nex-go/PRUDPV1Settings'),
					link('PendingPacket', '/docs/nex-go/PendingPacket'),
					link('RMCMessage', '/docs/nex-go/RMCMessage'),
					link('ReliablePacketSubstreamManager', '/docs/nex-go/ReliablePacketSubstreamManager'),
					link('ResendScheduler', '/docs/nex-go/ResendScheduler'),
					link('SlidingWindow', '/docs/nex-go/SlidingWindow'),
					link('SocketConnection', '/docs/nex-go/SocketConnection'),
					link('StreamSettings', '/docs/nex-go/StreamSettings'),
					link('WebSocketServer', '/docs/nex-go/WebSocketServer')
				]),
				group('Interfaces', [
					link('ConnectionInterface', '/docs/nex-go/ConnectionInterface'),
					link('EndpointInterface', '/docs/nex-go/EndpointInterface'),
					link('PRUDPPacketInterface', '/docs/nex-go/PRUDPPacketInterface'),
					link('PacketInterface', '/docs/nex-go/PacketInterface'),
					link('ServiceProtocol', '/docs/nex-go/ServiceProtocol'),
				]),
				group('Functions', [
					link('DeriveKerberosKey', '/docs/nex-go/DeriveKerberosKey'),
					link('ResultCodeToName', '/docs/nex-go/ResultCodeToName'),
					link('NewAccount', '/docs/nex-go/NewAccount'),
					link('NewByteStreamIn', '/docs/nex-go/NewByteStreamIn'),
					link('NewByteStreamOut', '/docs/nex-go/NewByteStreamOut'),
					link('NewByteStreamSettings', '/docs/nex-go/NewByteStreamSettings'),
					link('NewCounter', '/docs/nex-go/NewCounter'),
					link('NewError', '/docs/nex-go/NewError'),
					link('NewHPPClient', '/docs/nex-go/NewHPPClient'),
					link('NewHPPPacket', '/docs/nex-go/NewHPPPacket'),
					link('NewHPPServer', '/docs/nex-go/NewHPPServer'),
					link('NewKerberosEncryption', '/docs/nex-go/NewKerberosEncryption'),
					link('NewKerberosTicket', '/docs/nex-go/NewKerberosTicket'),
					link('NewKerberosTicketInternalData', '/docs/nex-go/NewKerberosTicketInternalData'),
					link('NewLibraryVersion', '/docs/nex-go/NewLibraryVersion'),
					link('NewPatchedLibraryVersion', '/docs/nex-go/NewPatchedLibraryVersion'),
					link('NewLibraryVersions', '/docs/nex-go/NewLibraryVersions'),
					link('NewMutexMap', '/docs/nex-go/NewMutexMap'),
					link('NewPRUDPConnection', '/docs/nex-go/NewPRUDPConnection'),
					link('NewPRUDPEndPoint', '/docs/nex-go/NewPRUDPEndPoint'),
					link('NewPRUDPPacketsLite', '/docs/nex-go/NewPRUDPPacketsLite'),
					link('NewPRUDPPacketsV0', '/docs/nex-go/NewPRUDPPacketsV0'),
					link('NewPRUDPPacketsV1', '/docs/nex-go/NewPRUDPPacketsV1'),
					link('NewPRUDPPacketLite', '/docs/nex-go/NewPRUDPPacketLite'),
					link('NewPRUDPPacketV0', '/docs/nex-go/NewPRUDPPacketV0'),
					link('NewPRUDPPacketV1', '/docs/nex-go/NewPRUDPPacketV1'),
					link('NewPRUDPServer', '/docs/nex-go/NewPRUDPServer'),
					link('NewPRUDPV0Settings', '/docs/nex-go/NewPRUDPV0Settings'),
					link('NewPRUDPV1Settings', '/docs/nex-go/NewPRUDPV1Settings'),
					link('NewRMCError', '/docs/nex-go/NewRMCError'),
					link('NewRMCMessage', '/docs/nex-go/NewRMCMessage'),
					link('NewRMCRequest', '/docs/nex-go/NewRMCRequest'),
					link('NewRMCSuccess', '/docs/nex-go/NewRMCSuccess'),
					link('NewReliablePacketSubstreamManager', '/docs/nex-go/NewReliablePacketSubstreamManager'),
					link('NewResendScheduler', '/docs/nex-go/NewResendScheduler'),
					link('NewSlidingWindow', '/docs/nex-go/NewSlidingWindow'),
					link('NewSocketConnection', '/docs/nex-go/NewSocketConnection'),
					link('NewStreamSettings', '/docs/nex-go/NewStreamSettings')
				]),
				group('Idk. Other?', [
					link('ResultNames', '/docs/nex-go/ResultNames'),
					link('ResultCodes', '/docs/nex-go/ResultCodes'),
					link('ConnectionState', '/docs/nex-go/ConnectionState'),
					link('StateNotConnected', '/docs/nex-go/StateNotConnected'),
					link('VirtualPort', '/docs/nex-go/VirtualPort'),
				]),
			]
		})
	]
});
import { useEffect, useRef } from 'react';

export function CodeLink({ children, href }): JSX.Element {
	return <a className="code-link" href={href} target="_blank">{children}</a>;
}

// * This is super jank and busted. It relies on bad assumptions about the resulting HTML
// * which can, and does, change drastically based on how the codeblock is structured both
// * from language-to-language and in the same language with minor changes.
// *
// * For example, these 2 Go snippets produce wildly different codeblock HTML outputs:
// *
// * ```go
// * func(
// * 	err error,
// * 	packet nex.PacketInterface,
// * 	callID uint32,
// * 	targets *types.List[*datastore_types.DataStoreRatingTarget],
// * 	rateParams *types.List[*datastore_types.DataStoreRateObjectParam],
// * 	postParams *types.List[*datastore_types.DataStorePreparePostParam],
// * 	transactional *types.PrimitiveBool,
// * 	fetchRatings *types.PrimitiveBool
// * ) (*nex.RMCMessage, *nex.Error)
// * ```
// *
// * ```go
// * RateObjectsWithPosting(
// * 	err error,
// * 	packet nex.PacketInterface,
// * 	callID uint32,
// * 	targets *types.List[*datastore_types.DataStoreRatingTarget],
// * 	rateParams *types.List[*datastore_types.DataStoreRateObjectParam],
// * 	postParams *types.List[*datastore_types.DataStorePreparePostParam],
// * 	transactional *types.PrimitiveBool,
// * 	fetchRatings *types.PrimitiveBool
// * ) (*nex.RMCMessage, *nex.Error)
// * ```
// *
// * The snippet using "RateObjectsWithPosting" works with this component, but the
// * snippet using "func" does not.
// *
// TODO - Is there actually a way to do this cleanly, for all languages, regardless of syntax highlighting? Maybe we should ditch this idea and just link to the types somewhere else.
export function CodeLinks({ children, links }): JSX.Element {
	const codeBlockRef = useRef(null);

	useEffect(() => {
		const codeBlocks = codeBlockRef.current.querySelectorAll('code');

		codeBlocks.forEach(() => {
			let modifiedHTML = codeBlockRef.current.innerHTML;

			Object.keys(links).forEach(key => {
				const regex = new RegExp(key.replace(/\./g, '\\.'), 'g');
				// TODO - Reuse the CodeLink component?
				modifiedHTML = modifiedHTML.replace(regex, `<a class="code-link" href="${links[key]}" target="_blank">${key}</a>`);
			});

			codeBlockRef.current.innerHTML = modifiedHTML;
		});
	}, []);

	return <div ref={codeBlockRef}>{children}</div>;
}
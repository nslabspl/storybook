// Returns 1 if page is loaded, 0 if there is an error
export function isHTMLDocLoadedMock(html){
	return Boolean(document.querySelector(html));
}

// Check if document structure is correct and correctly rendered.
// This is DRAFT, so not usable!
// Once completed, just add EXPORT directive and remove middle line comment
function isDocumentStructuredProperlyAndVisibleMock(){
	let bodytag = document.getElementById('<body>');

	if (bodytag) {
		//
	}
}
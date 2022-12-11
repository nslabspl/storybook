// Returns 1 if page is loaded, 0 if there is an error
function isHTMLDocLoadedMock(html){
	return Boolean(document.querySelector(html));
}

// Check if document structure is correct and correctly rendered.
function isDocumentStructuredProperlyAndVisibleMock(){
	let bodytag = document.getElementById('<html>');
	return (bodytag.offsetParent === null)
}
// Returns 1 if page is loaded, 0 if there is an error
export function isHTMLDocLoaded(html){
	return Boolean(document.querySelector(html));
}
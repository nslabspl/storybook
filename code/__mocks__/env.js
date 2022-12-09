// MIT

export function isDevEnvMock(){
	if (window.location.pathname.includes === 'dev') {
		return true
	}
}

export function isGeoLocEnabledMock(){
	if (typeof navigator.geolocation.getCurrentPosition() === "object") {
		document.getElementById('geoloc_rb').setAttribute('checked');
	} else {
		return console.error(GeolocationPositionError);
	}
}

export function isBrowserDNTEnabledMock(){
	if (navigator.doNotTrack) {
		return true | console.log("DNT enabled");
	}
}

export function isHTMLElementPresentMock(htmlTag){
	htmlTag = "<html>"
	if (document.querySelector(htmlTag)) {
		return true
	} else {
		let err = Error.toString();
		return console.log(err);
	}
}

export function isLsEnabledMock(){
	if (localStorage.length !== 0) {
		return true
	}
}
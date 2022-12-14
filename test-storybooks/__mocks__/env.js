// MIT

import { devEnvName, devSrvAddress, isContainerized } from '../config/dev-config';


export function isDevEnvMock(){
	if (window.location.pathname.includes === devEnvName) {
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

export function isDevEnvAccessibleFromPublicMock(){
	var exec = require('child_process').exec;
	let resp = exec('ping -c'+devSrvAddress);

	if (resp) {
		document.getElementById('infopanel').style.backgroundColor = 'green';
		document.getElementById('infopanel').innerHTML += "Env not available from public. Thats good :)";
	} else {
		document.getElementById('infopanel').style.backgroundColor = 'red';
		document.getElementById('infopanel').innerHTML += "Env available from public!. Thats NOT good :(";
	}
	return resp;
}

// 0 = false, 1 = true;
export function isDevContainer(){
	return isContainerized();
}
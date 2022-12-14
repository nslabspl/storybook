import puppeteer from "puppeteer";

export async function isUserAgentAString() {
	const browser = await puppeteer.launch();
	const website = await browser.newPage();

	if (typeof website.setUserAgent === "string") {
		document.createElement('useragentpane').innerHTML = navigator.userAgent.toString();
	}
}

/*async function isMockStructCreated(){
	if (document.documentElement.nodeName.match == 'panes') {
		
	}
}*/

export async function runOnSafari(){
	let useragent = navigator.userAgent;
	if (!useragent.includes("^(?!.*(?:Chrome|Edge)).*Safari")) {
		document.createElement('div').innerHTML = "Your user agent indicates you are using unsupported browser. Click anywhere to close window";
		window.onclick(window.close());
	} else {
		window.open('main.php');
	}
}
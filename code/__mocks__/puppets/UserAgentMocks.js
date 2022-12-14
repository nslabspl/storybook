import puppeteer from "puppeteer";

export async function isUserAgentAString() {
	const browser = await puppeteer.launch();
	const website = await browser.newPage();

	if (typeof website.setUserAgent === "string") {
		document.createElement('useragentpane').innerHTML = website.setUserAgent.toString();
	}
}

/*async function isMockStructCreated(){
	if (document.documentElement.nodeName.match == 'panes') {
		
	}
}*/
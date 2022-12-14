import { error } from "console";
import puppeteer from "puppeteer";

export async function cookiesMock() {
	const browser = await puppeteer.launch();
	const website = await browser.newPage();
	const cookies = [{
		'name': 'siteaddress',
		'value': 'localhost'
	}];

	// Whether site sets cookies
	if (!website.cookies) {
		website.setCookie(...cookies);
	} else {
		console.error(error.toString());
	}
}
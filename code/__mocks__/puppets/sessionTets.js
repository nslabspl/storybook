import { Console } from "console";
import puppeteer from "puppeteer";

(async() => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const pageBodyClass = '.bodyClass';

	await page.goto('localhost');
	await page.waitForSelector(pageBodyClass);
	await page.setViewport({
		height: 1920,
		width: 1080,
		deviceScaleFactor: 1.
	});
	await page.cookies(page.url);

	const allLinks = await page.evaluate(pageBodyClass => {
		return [...document.querySelectorAll(pageBodyClass)].map(anchor => {
			return `${anchor.getAttribute('href')}`;
		});
	}, pageBodyClass);
	console.log(page.browser.name);
	return allLinks;
})();
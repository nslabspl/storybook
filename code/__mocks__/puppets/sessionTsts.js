import puppeteer from "puppeteer";

(async() => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto('localhost');
	
	const pageBodyClass = '.bodyClass';
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
})();
import { prepareStorybookScript } from "../../scripts/prepare";
import stbConfig from "../ui/.storybook/main";

// prodSrv config
const prodSrvAddress = "127.0.0.1:80";
const prodMainLandingPage = "/main.php";
const prodEnvName = "StoryBook";
const prodEnvCharset = "utf-8";
const isContainerized = true;
const documentType = 'text/html';

// Tags looked for by verifier
const prodDesiredTags = ["<html>", "<head>", "<title>", "<body>"];

// App init
function appInit(){
	// Init app UI
	prepareStorybookScript(null, null);
	stbConfig.appInit();
}


export { prodEnvName, prodSrvAddress, prodEnvCharset, isContainerized, prodMainLandingPage, prodDesiredTags, documentType, appInit };
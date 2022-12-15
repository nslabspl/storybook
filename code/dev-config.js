
// devSrv config
const devSrvAddress = "127.0.0.1:80";
const devMainLandingPage = "/main.php";
const devEnvName = "StoryBook dev env";
const devEnvCharset = "utf-8";
const isContainerized = true;
const documentType = 'text/html';

// Tags etc
const devDesiredTags = ["<html>", "<head>", "<title>", "<body>"];

// Messages
const messages = [
	'welcomeMsg' = 'Hello here & there'
];

export { devEnvName, devSrvAddress, devEnvCharset, isContainerized, devMainLandingPage, devDesiredTags, documentType, messages };
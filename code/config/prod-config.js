// prodSrv config
const prodSrvAddress = "127.0.0.1:80";
const prodMainLandingPage = "/main.php";
const prodEnvName = "StoryBook prod env";
const prodEnvCharset = "utf-8";
const isContainerized = true;
const documentType = 'text/html';

// Tags etc
const prodDesiredTags = ["<html>", "<head>", "<title>", "<body>"];

// App init
function appInit(prodSrv){
	// Add app initializer
}


export { prodEnvName, prodSrvAddress, prodEnvCharset, isContainerized, prodMainLandingPage, prodDesiredTags, documentType, appInit };
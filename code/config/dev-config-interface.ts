interface devConfig {
	devSrvAddress: string;
	devMainLandingPage: string;
	devEnvName: string;
	devEnvCharset: ['utf-8', 'utf-16', 'latin'];
	isContainer: boolean;
}

function setDevConfig({ devConf }: { devConf: devConfig; }): void{
	devConf.devSrvAddress = "127.0.0.1:8080";
	devConf.devMainLandingPage = "/main.php";
	devConf.devEnvName = "StoryBook dev env";
	devConf.devEnvCharset = 'utf-8';
	devConf.isContainer = true;
}

function getSrvAddress(devConf: devConfig){
}
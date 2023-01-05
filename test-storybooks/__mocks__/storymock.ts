interface StoryParams {
	id: number;
	name: string;
	prefix: string;
}

function getStoryParams(storyParams: StoryParams){
	return [
		storyParams.id;
		storyParams.name;
		storyParams.prefix;
	]
}

ServiceWorker.call(getStoryParams);
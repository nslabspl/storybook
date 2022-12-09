import {rest} from "msw";

const getIndexPageMock = [
	rest.post("/", (res, ctx) => {
		return res(
			// Respond with a 200 status code
			ctx.status(200),
			rest.get('../../test-storybooks/standalone-preview/storybook.html')
		);
	})
];
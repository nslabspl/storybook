/**
 * @author: @wojtekxtx
 * @version: first-alpha
 */
const fs = require('fs');
const { NODE_MOD_DIR } = require('../../const/appwide');

function coreLoaderChecker_forEach(){
	let mods = [];
	let modfiles = fs.readdirSync(NODE_MOD_DIR);
	modfiles.forEach(file => {
		try {
			mods.push(file);
		} catch (err) {
			logger.error(err);
		}
	})
 return // I tu to co ma zwracać
}
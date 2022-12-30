/**
 * @author: @wojtekxtx
 * @version: first-alpha
 */
const fs = require('fs');
const { NODE_MOD_DIR, NO_MOD_FOUND, MOD_NOT_LOADABLE } = require('../../const/appwide');

function coreLoaderChecker_forEach(){
	let mods = [];
	let modfiles = fs.readdirSync(NODE_MOD_DIR);
	modfiles.forEach(file => {
		try {
			mods.push(file);
		} catch (err) {
			err = `${err} ${NO_MOD_FOUND} or ${MOD_NOT_LOADABLE}`;
			logger.error(err);
		}
	})
 return // I tu to co ma zwracać
}
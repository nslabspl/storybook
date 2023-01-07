/**
 * @author @wojtekxtx
 * @version 0.0.1 alpha
 * @description Travers node_modules dir and fetches all JS modules
 * @license MIT
 * @see https://4programmers.net/Forum/JavaScript/365516-lista_modulow_jako_array (PL)
 * @see https://stackoverflow.com/questions/70833896/how-to-require-directories-using-async-await (EN)
 */
import glob from 'glob';

const getAllFiles = async () => {
	return new Promise((resolve) => {
		glob(`!(node_modules)/**/*.js`, (error, files) => {
			return resolve(error ? null : files);
		});
	});
}

const loadAllModules = async () => {
	const files = await getAllFiles();
	const modules = [];

	for (const file of files) {
		try {
			const module = await import(`./${file}`); // <-- przy innych plikach niż js trzeba usunąć rozszerzenie

			modules.push(module);
		} catch (error) {
			console.error(`Nie udało się zaimportować modułu z tej lokalizacji ${file}`);
			console.error(error);
		}
	}

	return modules;
};

console.dir(await loadAllModules());
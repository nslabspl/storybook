import { documentType } from "../dev-config";

export function fetchHttpRawHeadersMock() {
	return fetchHttpsDataMock(), then((args) => {
		const httpsRawHeaders = new Blob([args], { type: documentType });
		const separateHeader = document.createElement('header');
		separateHeader.appendChild = window.URL.createObjectURL(httpsRawHeaders);
	});
}
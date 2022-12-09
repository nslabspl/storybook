
export function fetchHttpRawHeadersMock() {
	return fetchHttpsDataMock(), then((args) => {
		const httpsRawHeaders = new Blob([args], { type: 'text/html' });
		const separateHeader = document.createElement('header');
		separateHeader.appendChild = window.URL.createObjectURL(httpsRawHeaders);
	});
}
export default (base64) => {
	const byteCharacters = atob(base64);
	let byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteNumbers.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);
	const blob = new Blob([byteArray], { type: "image/png" });
	return URL.createObjectURL(blob);
}
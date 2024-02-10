async function sendRequest(isPlaying) {
	if (isPlaying) {
		try {
			const response = await fetch("http://localhost:8000/api/analyze/");
			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error:", error);
		}
	}
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.videoPlaying) {
		response = sendRequest(message.videoPlaying);
		// Do something with the message here
		sendResponse({ status: response["status"] });
	} else {
		sendResponse({ status: "background else block reached" });
	}
});

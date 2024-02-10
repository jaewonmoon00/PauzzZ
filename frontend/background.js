let intervalId;

async function sendRequest(isPlaying) {
	if (isPlaying) {
		intervalId = setInterval(async () => {
			try {
				const response = await fetch("http://localhost:8000/");
				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.error("Error:", error);
			}
		}, 5000);
	} else if (intervalId) {
		clearInterval(intervalId);
	}
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log(message);
	if (message.videoPlaying) {
		sendRequest(message.videoPlaying);
	}
});

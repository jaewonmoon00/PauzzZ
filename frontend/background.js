fetch("http://localhost:8000/api/update/").catch((error) => {
	console.error("Error:", error);
});

async function sendRequest(isPlaying) {
	if (isPlaying) {
		try {
			const response = await fetch("http://localhost:8000/api/analyze/");
			console.log("response is ", response);
			const data = await response.json();
			console.log("data is ", data);
			return data;
		} catch (error) {
			console.error("Error in background.js:", error);
		}
	}
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	let responseJson = {
		status: "idle",
	};
	if (message.videoPlaying) {
		responseJson.status = "video is playing";
		sendRequest(message.videoPlaying).then((data) => {
			responseJson.status = "sendRequest called";
			if (data) {
				// Add more key-value pairs to the JSON object
				responseJson.status = data.status;
			}
			sendResponse(responseJson); // Move sendResponse inside then block
		});
		return true; // Indicates we will respond asynchronously
	}
});
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	console.log(message);
// 	// Do something with the message here
// 	sendResponse({ response: "Message received" });
// });

// Function to capture webcam footage and send frames to the backend
async function captureAndAnalyzeWebcam() {
	const stream = await navigator.mediaDevices.getUserMedia({ video: true });
	const video = document.createElement("video");
	video.srcObject = stream;
	video.play();

	// Periodically capture frames and send them to the backend
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");

	setInterval(async () => {
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
		const frame = canvas.toDataURL("image/jpeg");

		// Send the frame to the backend for analysis
		const response = await fetch("http://localhost:8000/api/analyze/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ image: frame }),
		}).then((res) => res.json());

		// Handle the response from the backend
		if (response.command) {
			// Send command to content script
			chrome.tabs.query(
				{ active: true, currentWindow: true },
				function (tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {
						command: response.command,
					});
				}
			);
		}
	}, 5000); // Example: Send frame every 5 seconds
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.videoPlaying) {
		console.log("Video is playing on the page");
	} else {
		console.log("Video is not playing");
	}
});

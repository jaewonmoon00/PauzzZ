let message = { videoPlaying: true };

chrome.runtime
	.sendMessage(message)
	.then((response) => {
		console.log("response is ", response); // TODO: response is NULL. Check backbound.js send response

		if (response["status"] == "asleep") {
			console.log("The user is asleep");
		} else if (response["status"] == "awake") {
			console.log("The user is awake");
		} else {
			console.log("The user is not available");
		}
	})
	.catch((error) => {
		console.error(error);
	});

// Check if there are any video elements on the page
console.log("PauzzZ content script running");
//TODO: this depends on website. We need to figure out what to do for different websites. We can either
//TODO: have if blocks for different websites or we can have a generic solution that works for all websites

// TODO: set a global variable that stores the status of video playing and sendMessage to background.js

// TODO: set a global variable that keeps track of the time when was the last time the video playing
// TODO: -status value changed. => existing conditons && current_time - last_time > TIME_LIMIT

// TODO: global variable such as TIME_LIMIT = 3
if (video.length > 0 && !video.paused) {
	// Notify the background script that a video is present
	console.log("Video is playing on the page");
	chrome.runtime.sendMessage({ videoPlaying: true });
} else {
	chrome.runtime.sendMessage({ videoPlaying: false });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log("PauzzZ content script got message from background script");
	if (request.command === "pause") {
		document.querySelector("video").pause();
	} else if (request.command === "play") {
		document.querySelector("video").play();
	}
});
// // Example of detecting video play event (simplified)
// document.querySelectorAll("video").forEach((video) => {
// 	video.addEventListener("play", notifyVideoPlaying);
// });

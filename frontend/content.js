// Check if there are any video elements on the page
const videos = document.querySelectorAll("video");
// TODO: check if video is playing
if (videos.length > 0) {
	// Notify the background script that a video is present
	chrome.runtime.sendMessage({ videoPresent: true });

	// Call the notifyVideoPlaying function
	notifyVideoPlaying();
} else {
	chrome.runtime.sendMessage({ videoPresent: false });
}

// Function to notify the background script that a video is playing
function notifyVideoPlaying() {
	chrome.runtime.sendMessage({ videoPlaying: true });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
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

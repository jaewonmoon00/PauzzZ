let message = { videoPlaying: true };

chrome.runtime
	.sendMessage(message)
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.error(error);
	});

// Check if there are any video elements on the page
console.log("PauzzZ content script running");
//TODO: this depends on website. We need to figure out what to do for different websites. We can either
//TODO: have if blocks for different websites or we can have a generic solution that works for all websites
// Select the iframe
const iframe = document.querySelector("iframe");
// Check if the iframe is from the same origin
if (iframe && iframe.contentWindow) {
	// Access the content of the iframe
	const iframeDocument = iframe.contentWindow.document;
	console.log(iframeDocument);
	// Select the video element
	const video = iframeDocument.querySelector("video");
	if (video) {
		console.log("Video element found in iframe");
		// Do something with the video element here
	}
}

console.log("hello", video);
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

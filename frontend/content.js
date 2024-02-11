// ##################Below is to get the src link from my courses lecture recordings##################
// let checkIframeInterval = setInterval(() => {
// 	// let iframes = document.querySelectorAll("d2l-iframe d2l-iframe-fullscreen");
// 	let iframes = document.querySelectorAll(
// 		'[class*="d2l-iframe d2l-iframe-fullscreen"]'
// 	);
// 	// Now iframe is the iframe with the ID 'your-iframe-id'. You can interact with it as needed.
// 	if (iframes.length > 0) {
// 		console.log("Iframe found");
// 		Array.from(iframes).forEach((iframe) => {
// 			let iframeDocument = iframe.contentDocument;
// 			let sub_iframes = iframeDocument.querySelectorAll(
// 				'[class*="d2l-iframe d2l-iframe-fullscreen"]'
// 			);
// 			Array.from(sub_iframes).forEach((sub_iframe) => {
// 				// let sub_iframeDocument = sub_iframe.contentDocument;
// 				console.log("source is...", sub_iframe.src);
// 				// let video = sub_iframeDocument.querySelector("video");
// 				// console.log("video is...", video);
// 				// if (video) {
// 				// 	let message = { videoPlaying: true };
// 				// 	chrome.runtime
// 				// 		.sendMessage(message)
// 				// 		.then((response) => {
// 				// 			console.log("response is ", response);
// 				// 			if (response["status"] == "asleep") {
// 				// 				console.log("The user is asleep");
// 				// 			} else if (response["status"] == "awake") {
// 				// 				console.log("The user is awake");
// 				// 			} else {
// 				// 				console.log("The user is not available");
// 				// 			}
// 				// 		})
// 				// 		.catch((error) => {
// 				// 			console.error(error);
// 				// 		});
// 				// }
// 			});
// 		});
// 		// If you want to stop checking after the iframe is found, you can clear the interval:
// 		clearInterval(checkIframeInterval);
// 	} else {
// 		console.log("Iframe not found");
// 	}
// }, 1000); // Check every 1000 milliseconds (1 second)

// ##########################################################################################
let sleepStartAt = null;
let timeLimit = 5000;
// TODO:
setInterval(() => {
	let video = document.querySelector("video");
	console.log("video is ", video);
	if (video && !video.paused) {
		console.log("Video is playing");
		let message = { videoPlaying: true };
		chrome.runtime
			.sendMessage(message)
			.then((response) => {
				console.log("response is ", response);
				if (response["status"] == "asleep") {
					console.log("The user is asleep");
					if (!sleepStartAt) {
						sleepStartAt = Date.now();
					} else if (Date.now() - sleepStartAt > timeLimit) {
						console.log("User is asleep for more than 30 seconds");
						video.pause();
						// Math.max function is used to ensure that the current time doesn't go below 0.
						video.currentTime = Math.max(
							video.currentTime - timeLimit / 1000,
							0
						);
						sleepStartAt = null;
					}
				} else if (response["status"] == "awake") {
					console.log("The user is awake");
					sleepStartAt = null;
				} else {
					console.log(response);
					console.log("The user is not available");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}
}, 500);
// TODO: listen from popup.js to get the time limit
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	// Check for the message and use the value
	if (message.timeLimit) {
		console.log("Time limit is ", message.timeLimit);
		timeLimit = message.timeLimit * 1000;
	}
});

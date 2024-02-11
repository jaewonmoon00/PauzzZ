// Content Security Policy (CSP) of Chrome Extensions. Inline JavaScript,
// such as the onclick handlers in your HTML, is not allowed by the default CSP.
document.addEventListener("DOMContentLoaded", function () {
	let counterValue = 5;

	function updateCounter() {
		document.getElementById("counter").innerText = counterValue;
		// Send a message to content.js with the new counterValue
		chrome.tabs.query(
			{ active: true, currentWindow: true },
			function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {
					timeLimit: counterValue,
				});
			}
		);
	}

	function increment() {
		counterValue++;
		updateCounter();
	}

	function decrement() {
		if (counterValue > 0) {
			counterValue--;
			updateCounter();
		}
	}
	// Add event listeners for the buttons
	document.querySelector(".increment").addEventListener("click", increment);
	document.querySelector(".decrement").addEventListener("click", decrement);
});

let counterValue = 0;

function updateCounter() {
	document.getElementById("counter").innerText = counterValue;
	// Send a message to content.js with the new counterValue
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			timeLimit: counterValue,
		});
	});
}

function increment() {
	console.log("increment called");
	counterValue++;
	updateCounter();
}

function decrement() {
	if (counterValue > 0) {
		counterValue--;
		updateCounter();
	}
}

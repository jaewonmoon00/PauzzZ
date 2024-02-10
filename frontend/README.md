# Eye-Controlled Video Playback Chrome Extension

## Overview

This Chrome extension is part of the Eye-Controlled Video Playback system, designed to enhance the video watching experience by allowing users to control video playback through eye movements. By detecting when a user looks away or closes their eyes, the extension communicates with a backend server to pause or rewind the video, ensuring users never miss a moment.

## Features

-   **Real-Time Eye Tracking**: Uses the device's webcam to monitor the user's eye state in real time.
-   **Automatic Playback Control**: Pauses, plays, or rewinds videos based on the user's attention.
-   **Customizable Settings**: Allows users to adjust sensitivity and control preferences.

## Getting Started

### Prerequisites

-   Google Chrome browser.

### Installation

1. **Clone or Download the Extension Repository**

    ```bash
    git clone https://yourprojectrepository.com/path/to/chrome-extension.git
    cd chrome-extension
    ```

2. **Load the Extension in Chrome**
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable "Developer mode" at the top-right.
    - Click "Load unpacked" and select the directory of your cloned extension.

### Configuration

-   Access the extension's options by right-clicking the extension icon and selecting "Options".
-   Configure settings like webcam permissions, server URL, and playback sensitivity according to your preferences.

## Usage

Once installed and configured, the extension automatically starts eye tracking when a video is played in the browser. The extension icon provides quick access to pause or restart eye tracking, and settings can be adjusted at any time from the options menu.

## Development

Describe how to set up the development environment, if different from the installation instructions. Include details on testing changes or adding new features.

## Contributing

We encourage contributions to improve the extension. Please refer to our [Contribution Guidelines](CONTRIBUTING.md) for how to submit changes, report issues, or request features.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## Acknowledgments

-   Mention any libraries, APIs, or other resources that the extension uses.
-   Credit any contributors or sources of inspiration.

---

Ensure that all links (like `https://yourprojectrepository.com/path/to/chrome-extension.git`) and file names (`CONTRIBUTING.md`, `LICENSE`) are updated to match the actual resources of your project. Tailor the template to fit the specifics of your Chrome extension, including any unique installation steps or features it may have.

# Eye-Controlled Video Playback System

## Overview

The Eye-Controlled Video Playback System offers a revolutionary way to interact with video content using eye movement. By integrating real-time eye-tracking technology with video playback control, this system pauses or rewinds videos when it detects the viewer has looked away or closed their eyes, ensuring an uninterrupted viewing experience. This repository contains both the Django backend for processing eye-tracking data and the Chrome extension for real-time video control.

## Features

-   **Real-Time Eye Tracking**: Monitors the viewer's eye state through a webcam using advanced image processing techniques.
-   **Intelligent Playback Control**: Automatically pauses, plays, or rewinds videos based on the viewer's attention.
-   **Seamless Integration**: Works with any HTML5 video player in the Chrome browser.
-   **Customizable Settings**: Allows users to adjust sensitivity and control preferences to their liking.

## Components

The project is divided into two main components:

1. **Django Backend**: Processes webcam images to detect the viewer's eye state and decides on playback actions.
2. **Chrome Extension**: Captures webcam data, communicates with the backend, and controls video playback on web pages.

## Getting Started

### Prerequisites

-   Python 3.8 or newer for the Django backend.
-   Google Chrome for the extension.

### Setting Up the Backend

Refer to the `README.md` in the `/backend` directory for instructions on setting up the Django server, including environment setup, dependencies, and running the server.

### Setting Up the Chrome Extension

Check the `README.md` in the `/frontend` directory for details on installing, configuring, and using the extension in the Chrome browser.

## Usage

After setting up both the backend and the Chrome extension, navigate to any web page with HTML5 video content in Chrome. The extension icon will activate, indicating eye-tracking is ready. Play the video as normal, and the system will automatically control playback based on your eye movements.

## Development

This section can include instructions for setting up a development environment for both components, guidelines for contributing, and how to run tests.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on submitting pull requests, reporting bugs, or requesting features.

## License

This project is licensed under the [MIT License](LICENSE.md) - see the LICENSE file for details.

## Acknowledgments

-   List libraries, frameworks, or any other resources used.
-   Credit to all contributors and maintainers.

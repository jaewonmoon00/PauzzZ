# Eye-Controlled Video Playback Backend

## Overview

This project provides the backend functionality for the Eye-Controlled Video Playback system, designed to enhance video watching experience by automatically pausing and rewinding videos when the viewer falls asleep or looks away. Using advanced eye-tracking algorithms, this Django-based server processes incoming webcam data to detect the viewer's attention and sends commands back to the client to control video playback accordingly.

## Features

-   **Eye State Analysis**: Utilizes image processing techniques to analyze the viewer's eye state in real-time.
-   **Playback Control**: Sends commands to the client for pausing, playing, or rewinding the video based on the viewer's attention.
-   **API Endpoints**: Offers a RESTful API for receiving webcam data and sending playback commands.

## Getting Started

### Prerequisites

-   Python 3.8 or newer
-   Django 3.2 or newer
-   Additional Python packages: `dlib`, `opencv-python`, `numpy`

### Installation

1. **Clone the repository**

    ```bash
    git clone https://yourprojectrepository.com/path/to/repo.git
    cd repo
    ```

2. **Set up a virtual environment**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install dependencies**

    ```bash
    pip install -r requirements.txt
    ```

### Configuration

-   Configure the `settings.py` file in the Django project to suit your deployment environment, particularly the `DATABASES` and `ALLOWED_HOSTS` settings.

### Running the Server

1. **Migrate the database**

    ```bash
    python manage.py migrate
    ```

2. **Run the server**

    ```bash
    python manage.py runserver
    ```

    The server will start on `http://localhost:8000/`. The API endpoint for analyzing eye state can be accessed at `http://localhost:8000/api/analyze/`.

## API Documentation

Describe the endpoints available in your API, including request methods, parameters, and expected responses. For example:

-   **POST** `/api/analyze/`: Accepts image data for processing. Returns a JSON object with a command (`pause`, `play`, `rewind`).

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, how to suggest features, and how to report bugs.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## Acknowledgments

-   List any dependencies, libraries, or other resources that the project uses.

---

Remember to replace placeholders (like `https://yourprojectrepository.com/path/to/repo.git`) with actual data relevant to your project. This template provides a solid foundation, but feel free to expand it with any project-specific details or instructions that would help others understand and contribute to your project.

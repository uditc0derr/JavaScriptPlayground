# JavaScript Playground 🎮

A full-stack application that provides an online, isolated environment to write, run, and see the output of JavaScript code in real-time. This project is perfect for quick experiments, learning, and testing JavaScript snippets without the need for a local development setup. 🚀

## ✨ Features

-   **📝 Live Code Editor:** A feature-rich editor powered by Monaco Editor (the engine behind VS Code) with syntax highlighting and autocompletion.
-   **⚡ Real-time Execution:** Code is executed securely in an isolated environment on the server.
-   **🖥️ Instant Output:** View the output of your code, including logs and errors, immediately.
-   **↔️ Split-Screen Layout:** A user-friendly interface with the code editor on one side and the output on the other for a seamless workflow.
-   **🚀 Zero-Setup:** No need to install any software locally; everything runs in your browser.

## 🛠️ Tech Stack

### Frontend

-   **⚛️ React:** A JavaScript library for building the user interface.
-   **⚡ Vite:** A blazing-fast build tool and development server.
-   ** Monaco Editor:** The code editor that powers VS Code, providing a rich editing experience.
-   ** Tailwind CSS:** For utility-first styling.
-   ** axios:** For making API requests to the backend.

### Backend

-   **🟩 Node.js:** A JavaScript runtime environment.
-   **🛤️ Express:** A minimal and flexible web application framework for building the API.
-   ** isolated-vm:** A library for running untrusted code in an isolated, secure environment.
-   ** CORS:** To enable cross-origin requests from the frontend.
-   ** Dotenv:** To manage environment variables.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/get-npm)

### ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/uditc0derr/JavaScriptPlayground.git](https://github.com/uditc0derr/JavaScriptPlayground.git)
    cd JavaScriptPlayground
    ```

2.  **Set up the Backend:**
    ```sh
    cd backend
    npm install
    ```

3.  **Set up the Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```

### ▶️ Running the Application

1.  **Start the Backend Server:**
    In the `backend` directory, run:
    ```sh
    npm start
    ```
    The server will start on `http://localhost:5000`.

2.  **Start the Frontend Development Server:**
    In a separate terminal, navigate to the `frontend` directory and run:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

---

## 💡 How It Works

1.  Write your JavaScript code in the editor on the left.
2.  Click the "Run" button.
3.  The frontend sends the code to the backend API.
4.  The backend executes the code in a secure, isolated virtual machine using `isolated-vm`.
5.  Any output from `console.log` or errors are captured and sent back to the frontend.
6.  The output is displayed in the panel on the right.


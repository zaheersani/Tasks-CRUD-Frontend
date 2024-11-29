# Frontend for React CRUD Application

This is the frontend for a CRUD application with authentication, built using React and Material UI. The application includes user authentication (login and signup), a dashboard for managing tasks, and a navigation header.

---

## Features

- User authentication with JWT
- Navigation header with a user profile menu and logout functionality
- Responsive design with Material UI
- CRUD operations for tasks (Create, Read, Update, Delete)
- Protected routes for authenticated users

---

## Requirements

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-frontend-repo.git
cd your-frontend-repo
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```
---

## Configuration
Update the backend API base URL in ```src/api.js```:

```
const API = axios.create({ baseURL: 'http://localhost:5000/api' });
```
---
## Backend Server
Following repository contains the backend server for this frontend:

```
https://github.com/zaheersani/Tasks-CRUD-Backend
```

## Project Structure
```
frontend/
├── public/                     # Static assets
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── Login.js            # Login page
│   │   ├── Signup.js           # Signup page
│   │   ├── Dashboard.js        # Dashboard with CRUD operations
│   │   ├── Navigation.js       # Navigation header
│   ├── api.js                  # API service for backend requests
│   ├── App.js                  # Main App component
│   └── index.js                # Entry point for the React app
├── .env                        # Environment variables (optional)
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

---

## Pages and Components

#### 1. Login Page (`Login.js`):
   - Description: Allows users to log in using their email and password.
   - Features:
     - Validates credentials with the backend API.
     - Stores the JWT token in `localStorage` upon successful login.
   - Location: `src/components/Login.js`

#### 2. Signup Page (`Signup.js`):
   - Description: Allows users to create a new account.
   - Features:
     - Sends user details (name, email, password) to the backend API for registration.
   - Location: `src/components/Signup.js`

#### 3. Dashboard (`Dashboard.js`):
   - Description: Displays the user's tasks and provides CRUD operations.
   - Features:
     - Fetch tasks from the backend for the authenticated user.
     - Create, edit, and delete tasks.
   - Location: `src/components/Dashboard.js`

#### 4. Navigation Header (`Navigation.js`):
   - Description: Provides a navigation bar with the app title, user menu, and logout functionality.
   - Features:
     - User icon dropdown for Profile and Logout options.
     - Logout clears the token and redirects to the login page.
   - Location: `src/components/Navigation.js`

#### 5. API Service (`api.js`):
   - Description: Manages all interactions with the backend API.
   - Features:
     - Functions for login, signup, fetching tasks, creating tasks, updating tasks, and deleting tasks.
   - Location: `src/api.js`

---

## Usage

#### 1. Login with an Existing Account:
   - Navigate to the login page (`/login`).
   - Enter your email and password to authenticate.
   - Upon successful login, you will be redirected to the dashboard.

#### 2. Signup for a New Account:
   - Navigate to the signup page (`/signup`).
   - Fill in your name, email, and password to create a new account.
   - Once registered, log in with your credentials.

#### 3. Dashboard Features:
   - *View Tasks:*
     - Your tasks are listed on the dashboard.
     - Each task displays its title and description.
   - *Create Task:*
     - Use the form on the dashboard to add a new task.
     - Provide the title and description and submit the form.
   - *Edit Task:*
     - Click the "Edit" button (pencil icon) next to a task.
     - Modify the title or description and save your changes.
   - *Delete Task:*
     - Click the "Delete" button (trash icon) next to a task to remove it.

#### 4. Logout:
   - Click the user icon in the navigation bar.
   - Select "Logout" from the dropdown menu.
   - This will clear your session token and redirect you to the login page.

---

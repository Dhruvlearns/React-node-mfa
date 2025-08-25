# React-node-mfa: A Full-Stack Multi-Factor Authentication Application

This project is a comprehensive full-stack web application that demonstrates secure user authentication with **Multi-Factor Authentication (MFA)**. The system provides a robust and secure way for users to register, log in, and protect their accounts with a second layer of verification using a time-based one-time password (**TOTP**).

This README serves as a guide for developers to understand the project structure, set up the environment, and get the application running locally.

### ✨ Key Features

-   **User Authentication**: Secure user registration and login with session management.
    
-   **Password Security**: Password hashing with **bcrypt** to ensure credentials are never stored in plain text.
    
-   **Multi-Factor Authentication**: Implements a **TOTP**\-based 2FA system using **Speakeasy** and **QRCode**.
    
-   **Session Management**: State-based authentication managed by **Passport.js** and **Express-session**.
    
-   **JWT Tokens**: Use of **JSON Web Tokens (JWT)** for secure, stateless authentication after 2FA verification.
    
-   **Protected Routes**: Secure API endpoints that are only accessible to authenticated users.
    
-   **RESTful API**: A clean, modular backend API that separates routes, controllers, and models.
    

### 🛠️ Tech Stack

This project is built using a modern **MERN** stack architecture.

-   **Frontend**: React.js
    
-   **Backend**: Node.js, Express.js
    
-   **Database**: MongoDB
    
-   **Authentication**: Passport.js, Passport-Local, Passport-JWT
    
-   **Security**: bcrypt, speakeasy, jsonwebtoken
    
-   **Utilities**: qrcode, dotenv
    

### 🚀 Getting Started

Follow these steps to set up and run the application locally.

#### 1\. Clone the Repository

```
git clone https://github.com/your-username/React-node-mfa.git
cd React-node-mfa

```

#### 2\. Install Dependencies

You need to install dependencies for both the `backend` and `client` folders.

```
# Install backend dependencies
cd backend
npm install

# Install client dependencies
cd ../client
npm install

```

#### 3\. Configure Environment Variables

Create a `.env` file in the **backend** directory and add the following variables. Replace the placeholder values with your own.

```
PORT=7001
SESSION_SECRET=your_super_secret_session_key
JWT_SECRET=your_super_secret_jwt_key
CONNECTION_STRING="your_mongodb_connection_string"

```

The `CONNECTION_STRING` should be a valid MongoDB URI.

#### 4\. Run the Application

Start both the backend server and the frontend development server in separate terminal windows.

**Start the Backend:**

```
cd backend
npm run dev

```

**Start the Frontend:**

```
cd client
npm run dev

```

The frontend will run on `http://localhost:3000` and the backend API will be available at `http://localhost:7001`.

### 📸 Screenshots

Here is a visual overview of the application's key screens.


_The login form for user authentication._
![loginpage](https://github.com/user-attachments/assets/00550c4f-2019-49ba-880b-a47e7b39c0bb)


_The 2FA setup page, showing the QR code for authenticator apps._
![setup-2fa](https://github.com/user-attachments/assets/dbb81cf2-0968-41c6-a072-2d904900116e)


_The page for verifying a time-based one-time password._
![verify-2fa](https://github.com/user-attachments/assets/d2b9aa4d-be9b-48ee-a308-191c3b6e41c5)

_The HomePage after successfully login._
![homepage](https://github.com/user-attachments/assets/137385a2-63b1-4943-95f4-c5522efe1dde)



### 📁 Folder Structure

The project follows a standard full-stack folder structure to maintain separation of concerns.

```
React-node-mfa/
├── backend/                  # Node.js/Express server
│   ├── config/               # Passport, database configuration
│   ├── controllers/          # API logic
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API endpoints
│   ├── .env                  # Environment variables
│   ├── package.json
│   └── src/
├── client/                   # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── context/          # React Context for state management
│   │   ├── pages/            # Page-level components
│   │   └── service/          # API calls (axios)
│   ├── .gitignore
│   ├── package.json
│   └── vite.config.js
└── .gitignore                # Root .gitignore for both projects

```

### 🗺️ API Endpoints

The following API endpoints are available on the backend (`http://localhost:7001/api/auth`).

Method     Endpoint            Description

`POST`    `/register`     Registers a new user with a username and password.

`POST`    `/login`       Authenticates a user and establishes a session.

`GET`     `/status`      Checks the authentication status of the current user.

`POST`    `/logout`      Logs out the current user and clears the session.

`POST`    `/2fa/setup`   Generates a QR code and secret for MFA setup.

`POST`    `/2fa/verify`  Verifies a 2FA token submitted by the user.

`POST`    `/2fa/reset`  Resets 2FA for an authenticated user.

### 📄 License

This project is licensed under the **MIT License**.

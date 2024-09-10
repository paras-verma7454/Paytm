# Paytm Clone

This repository contains both the frontend and backend for a Paytm clone application. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed with React.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React
- **Authentication**: JWT (JSON Web Tokens)

## Features

- **Signup**: Create new user accounts.
- **Signin**: Authenticate users and issue tokens.
- **Fetch Balance**: Retrieve user balance.
- **Transfer Money**: Send money between users.

# Project Setup

## Cloning the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/paras-verma7454/Paytm.git
cd Paytm
```
## Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```
2. Create a .env file in the backend directory with the following content:
```bash
JWT=<YOUR_JWT_SECRET>
DB_URL=<YOUR_DATABASE_URL>
```
Replace <YOUR_JWT_SECRET> with your actual JWT secret and <YOUR_DATABASE_URL> with your database URL.

3. Install the necessary dependencies:
```bash
npm install
```
4. Start the backend server:
```bash
node index.js
```
## Frontend Setup
1. Navigate back to the root directory:
```bash
cd ..
```
2. Navigate to the frontend directory:
```bash
cd frontend
```
3. Install the necessary dependencies:
```bash
npm install
```
4. Start the frontend development server:
```bash
npm run dev
```

## Contributions

Contributions to the PayTM Clone project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

Thank you for using PayTM Clone! Happy Coding! 🚀



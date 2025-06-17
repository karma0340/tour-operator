# Tour Operator App - Server

This is the server-side of the Tour Operator application built using Node.js and Express. The server handles authentication, user management, and communication with the MongoDB database.

## Features

- **Authentication**: OTP-based registration and login for users.
- **User Management**: Manage user data and sessions.
- **SMS Service**: Send OTPs to users via SMS for verification.

## Directory Structure

```
server
├── src
│   ├── controllers       # Contains authentication logic
│   ├── models            # Defines database models
│   ├── routes            # Sets up API routes
│   ├── services          # Contains services like SMS
│   ├── config            # Configuration settings
│   └── app.js            # Main entry point for the server
├── package.json          # NPM configuration for the server
└── README.md             # Documentation for the server
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd tour-operator-app/server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   npm start
   ```

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `MONGODB_URI`: MongoDB connection string
- `SMS_API_KEY`: API key for the SMS service

## License

This project is licensed under the MIT License.
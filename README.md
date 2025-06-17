# Tour Operator Mobile App - Client

This is the client-side of the Tour Operator Mobile App built using React. The application allows users to register and log in using OTP-based authentication.

## Features

- **Authentication**
  - OTP-Based Registration
  - OTP-Based Login

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory:
   ```
   cd tour-operator-app/client
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

The app will be available at `http://localhost:3000`.

## Components

- **Auth**
  - `Login.js`: Handles user login functionality.
  - `Register.js`: Manages user registration.
  
- **Common**
  - `CountrySelect.js`: Allows users to select their country code.
  - `LanguageSelect.js`: Allows users to select their preferred language.
  - `OtpInput.js`: Handles OTP input from the user.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.
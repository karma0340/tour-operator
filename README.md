<<<<<<< HEAD
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
=======
# Tour Operator Management System

A comprehensive tour management system designed specifically for managing group tours to holy places (Makkah and Madinah). This application streamlines the process of managing group bookings, meal services, and accommodation arrangements.

## Features

### 1. Authentication & User Management
- OTP-based phone authentication
- Secure user sessions
- Profile management
- Multi-language support

### 2. Group Management
- Create and manage tour groups
- Support for different group types:
  - FIT (Less than 10 passengers)
  - GIT (35 or more passengers)
  - Transit groups
- Track group details and members

### 3. Booking System
- Multi-step booking process
- Hotel scheduling and management
- Distance tracking from holy places
- Flexible date management
- Multiple city support (Makkah and Madinah)

### 4. Meal Management
- Multiple meal plan options:
  - Budget (SAR 25)
  - Semi-Deluxe (SAR 35)
  - Deluxe (SAR 45)
  - Super Deluxe (SAR 55)
  - Premium (SAR 75)
- Cuisine preference selection
- Daily meal delivery tracking
- Service period management

### 5. Support System
- Ticket creation and management
- Real-time support
- Issue tracking and resolution
- FAQ section

### 6. Feedback System
- Daily feedback collection
- 5-star rating system
- Quality monitoring
- Service improvement tracking

## Technology Stack

### Frontend
- React.js
- Material-UI
- React Router
- Formik & Yup for form management
- Axios for API integration

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- OTP verification system

## Project Structure

```
tour-operator-app/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # React components
│       ├── services/      # API services
│       └── utils/         # Utility functions
│
└── server/                # Backend Node.js application
    └── src/
        ├── config/        # Configuration files
        ├── controllers/   # Route controllers
        ├── middleware/    # Custom middleware
        ├── models/        # Database models
        ├── routes/        # API routes
        └── services/      # External services
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create .env file:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create .env file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the application:
   ```bash
   npm start
   ```

## API Documentation

### Authentication Endpoints
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/verify-otp` - Verify OTP

### Booking Endpoints
- POST `/api/bookings` - Create new booking
- GET `/api/bookings` - Get all bookings
- GET `/api/bookings/:id` - Get specific booking
- PUT `/api/bookings/:id` - Update booking

### Group Endpoints
- POST `/api/groups` - Create new group
- GET `/api/groups` - Get all groups
- GET `/api/groups/:id` - Get specific group

### Meal Tracking Endpoints
- POST `/api/meals/track` - Track meal delivery
- GET `/api/meals/:bookingId` - Get meal tracking info

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@touroperator.com or create an issue in the repository.
>>>>>>> 6bc91601480cd1984d2992b2347ba355bd816d0a

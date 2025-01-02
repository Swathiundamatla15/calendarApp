# Calendar Application

This is a full-fledged calendar application built with React.js for the frontend and Express.js with MongoDB for the backend. The application is designed to track communications with companies, providing both admin and user functionalities, along with optional reporting and analytics features.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Known Limitations](#known-limitations)

## Technologies

- **Frontend**: React.js (version 18.x.x), React Router, Tailwind CSS
- **Calendar Functionality**: FullCalendar library
- **Backend**: Express.js, Node.js, MongoDB
- **Reporting and Analytics**: Chart.js or D3.js
- **Deployment**: Netlify, Vercel, or GitHub Pages

## Features

### Admin Module

- Manage companies (add, edit, delete) with details such as name, location, LinkedIn profile, email, phone numbers, comments, and communication periodicity.
- Define and manage communication methods with attributes like name, description, sequence, and mandatory flag.

### User Module

- Dashboard displaying companies in a grid view with communication statuses.
- Log communications through a modal interface, resetting overdue or due highlights.
- Calendar view using FullCalendar to visualize past and upcoming communications.

### Reporting and Analytics (Optional)

- Communication frequency reports with visual representations.
- Engagement effectiveness dashboard to track communication methods.
- Overdue communication trends displayed in a heatmap or trendline.
- Downloadable reports in PDF or CSV format.
- Real-time activity log of communication actions.

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB database and update the connection string in `backend/utils/db.js`.
4. Start the server:
   ```
   node server.js
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Deployment

To deploy the application, follow the instructions for your chosen platform (Netlify, Vercel, or GitHub Pages). Ensure that both the frontend and backend are properly configured for production.

## Known Limitations

- The application may require additional testing for edge cases and performance optimization.
- User authentication is basic and may need enhancements for security.
- Reporting features are optional and may not cover all use cases.

Feel free to contribute to the project by submitting issues or pull requests!

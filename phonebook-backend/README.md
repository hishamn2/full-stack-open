# Phonebook Backend

This repository contains the backend application for the Fullstackopen Phonebook exercise.

## Live Application

You can access the deployed version of this application here:
[Phonebook Application (Deployed)]
https://phonebook-backend-hicham.onrender.com

## Features

- View all phonebook entries.
- View a specific phonebook entry by ID.
- Add new phonebook entries.
- Delete phonebook entries.
- Basic information page (`/info`)

## Technologies Used

- Node.js
- Express.js
- Morgan (for logging)

## How to Run Locally

1.  Clone this repository.
2.  Navigate to the project directory: `cd phonebook-backend`
3.  Install dependencies: `npm install`
4.  Start the server in development mode: `npm run dev` (uses `node --watch index.js`)
5.  The server will be running on `http://localhost:3001` (or your configured PORT).

## Frontend Integration

This backend is designed to work with the frontend application developed in `part2/phonebook` of the Fullstackopen course. The production build of the frontend is served directly by this backend.
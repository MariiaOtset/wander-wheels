# Travel Trucks

Visit the live site: [Travel Trucks](https://wander-wheels-two.vercel.app/)

## Contents

1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Backend API](#backend-api)
4. [Technologies](#technologies)
5. [Author](#author)
6. [Contacts](#contacts)

## Project Description

Travel Trucks is a web-based platform designed to assist users in exploring and organizing travel destinations, trucking routes, and logistical planning. Whether you're a travel enthusiast or responsible for managing transportation routes, Travel Trucks offers a user-friendly interface for browsing, categorizing, and efficiently managing travel information.

## Installation

Clone the repository:

```bash
git clone https://github.com/MariiaOtset/wander-wheels
```

Install the dependencies:

```bash
npm install
```

```bash
npm run dev
```

The app will be available at http://localhost:5173.

## Backend API

Travel Trucks utilizes a mock API hosted at https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
to manage data related to travel routes. Below are the available endpoints for interacting with the backend:

Endpoints:

### GET /campers

Fetches a complete list of all campers. This endpoint returns all tracks available based on the filters applied.

Example Request:

```bash
GET https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
```

### GET /campers/:id

Fetches information about a certain camper by its ID.

Example Request:

```bash
GET https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/3
```

## Technologies

- Frontend: js, React, Redux
- Backend API: MockAPI (https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)
- Hosting: Vercel
- Styling: Module CSS
- Database: MockAPI (for demo purposes)

## Author

Mariia Otset - Developer - [GitHub](https://github.com/MariiaOtset)

## Contacts

If you have any questions or suggestions, feel free to reach out:

Email: mariiaotset@gmail.com

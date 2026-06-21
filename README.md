# Movie Finder

A modern Movie Discovery App built with Next.js and the TMDB API. Users can browse popular movies, search by title, view detailed information, and save their favorite movies with persistent local storage.

---

## Features

- Browse popular movies from TMDB
- Search movies by title
- Movie details page with overview, rating, and release date
- Add and remove favorite movies
- Favorites persist using localStorage
- Responsive design for desktop, tablet, and mobile
- Loading states while fetching data
- Error handling for failed API requests
- Empty state when no movies are found
- Manual pagination with Previous and Next buttons
- Exactly 12 movies displayed per page
- Footer marker as required by the assignment

---

## Tech Stack

- Next.js
- Tailwind CSS
- TMDB API
- Local Storage

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/movie-finder-aditya.git
```

### 2. Navigate to the Project Directory

```bash
cd movie-finder-aditya
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a file named `.env.local` in the root directory and add:

```env
NEXT_PUBLIC_TMDB_API_KEY=YOUR_TMDB_API_KEY
```

Replace `YOUR_TMDB_API_KEY` with your TMDB API key.

### 5. Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```txt
http://localhost:3000
```

---

## Project Structure

```txt
movie-finder-aditya
│
├── app
│   ├── favorites
│   │   └── page.js
│   │
│   ├── movie
│   │   └── [id]
│   │       ├── page.js
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components
│   ├── BackButton.jsx
│   ├── FavoriteButton.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
│
├── lib
│   ├── tmdb.js
│   └── favorites.js
│
├── public
│
├── AI_LOG.md
├── README.md
├── package.json
└── .env.local
```

---

## API Used

This project uses The Movie Database (TMDB) API.

TMDB Website:
https://www.themoviedb.org/

API Documentation:
https://developer.themoviedb.org/docs

---

## Assignment Requirements Completed

### Browse Movies

Displays popular movies in a responsive grid layout.

### Search Movies

Users can search movies by title and results update dynamically.

### Movie Details

Clicking a movie opens a detailed page containing:

- Poster
- Title
- Rating
- Release Date
- Overview

### Favorites

Users can:

- Add movies to favorites
- Remove movies from favorites
- Persist favorites after page reload using localStorage

### Pagination

- Manual Previous / Next buttons
- Exactly 12 movies per page
- No infinite scrolling

### States

- Loading state while fetching data
- Error state for failed requests
- Empty state when no movies are found

### Responsive Design

Optimized for:

- Mobile
- Tablet
- Desktop

---

## Footer Marker

As required by the assignment, the homepage footer contains:

Built for Jeevan — Adiya Negi

---

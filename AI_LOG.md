# AI_LOG

## Tools Used

- Next.js Documentation – Referenced for App Router and routing patterns.
- Tailwind CSS Documentation – Used for styling and responsive layouts.
- TMDB API – Used as the movie data source for browsing, searching, and viewing movie details.
- ChatGPT (OpenAI) – Used for project planning, component structure, debugging, and UI improvements.

---

## Best Prompts

### Prompt 1

"Build a Movie Discovery App using Next.js App Router and TMDB API. The app should include movie search, movie details page, favorites stored in localStorage, responsive UI, loading/error states, and manual pagination."

Why it worked:
Generated the initial architecture and component breakdown that matched most assignment requirements.

### Prompt 2

"Help me implement manual pagination with exactly 12 movies per page and Previous/Next navigation."

Why it worked:
Focused on a specific assignment requirement and helped ensure compliance with the specification.

### Prompt 3

"Debug a Next.js movie details page that sometimes throws fetch failed / ECONNRESET errors while requesting data from the TMDB API."

Why it worked:
Helped investigate API fetching issues, add retry handling, and explore alternative client-side fetching approaches.

### Prompt 4

"Fix a search input that loses focus after every keystroke and improve the user experience while searching movies."

Why it worked:
Helped identify unnecessary component re-renders and improved the search experience.

---

## What I Fixed Manually

- Fixed import path issues caused by incorrect folder placement.
- Added a dedicated Favorites page and navigation link.
- Improved the movie details page by adding a Back button for better navigation.
- Resolved an issue where the search input lost focus after each keystroke.

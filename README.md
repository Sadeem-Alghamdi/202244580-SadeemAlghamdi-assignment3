# Personal Portfolio Website – Assignment 3

## Student Information
Name: Sadeem Ahmed Alghamdi  
Course: SWE 363  
Assignment: Assignment 3 – External APIs and Advanced JavaScript

---

## Project Description

This project is a further improved version of my portfolio website from Assignment 2.

In Assignment 2, the focus was on adding interactive front-end features such as dynamic filtering, localStorage, tabs, modal popups, theme switching, scroll effects, and form validation.

In Assignment 3, I extended the same portfolio by integrating real external APIs and applying more advanced JavaScript concepts to make the website more dynamic, data-driven, and realistic.

The goal of this assignment was not only to keep the portfolio interactive, but also to connect it to live services and handle asynchronous data in a clean and user-friendly way.

This version makes the website feel more like a modern real-world web application instead of a static portfolio.

---

## Main Features

### Core Interactive Features from Assignment 2
- Dynamic greeting based on time of day
- Project filtering by category
- Live project search while typing
- Skills section with interactive tabs
- Project details modal popup
- Favorite project selection saved using localStorage
- Personalized welcome message saved using localStorage
- Dark / light theme toggle
- Contact form validation
- Error messages for missing or invalid inputs
- Success message after form submission
- Empty-state message when search/filter returns no project
- Animated counters in hero section
- Section reveal animations on scroll
- Scroll progress bar at the top
- Hover effects on cards and buttons
- Responsive design for mobile and desktop

---

## New Features Added in Assignment 3

### 1) GitHub API Integration
A new GitHub section was added to fetch real-time public data from GitHub.

This section displays:
- GitHub profile avatar
- GitHub name
- GitHub username
- GitHub bio
- Total number of public repositories
- Number of followers
- Number of following
- Link to the GitHub profile
- Recent repositories fetched dynamically

For each repository, the website displays:
- Repository name
- Repository description
- Main programming language
- Number of stars
- Number of forks
- Last updated date

A refresh button was also added to reload GitHub data without refreshing the page.

---

### 2) Quote API Integration
A live quote section was added using an external Quotes API.

This section displays:
- A random quote
- The quote author

It also includes:
- A button to load a new quote instantly
- Loading feedback while the quote is being fetched
- Error handling if the API request fails

This makes the page more dynamic and shows real-time external content.

---

### 3) Weather API Integration
A live weather section was added using a weather API.

This section displays the current weather for:
- Dammam, Saudi Arabia

The weather card shows:
- Current temperature in °C
- Wind speed
- Humidity
- Weather condition description
- Weather icon based on the weather code
- Last updated time

A refresh button was also added so the weather can be updated instantly.

---

## Advanced JavaScript Concepts Applied

Assignment 3 required applying more advanced JavaScript concepts, and this project includes:

- `fetch()` for calling external APIs
- `async / await` for asynchronous operations
- `try / catch` for API error handling
- `Promise.all()` for loading GitHub profile data and repositories together
- Dynamic DOM rendering using JavaScript
- Conditional rendering based on loading, success, and error states
- Reusable helper functions
- Event-driven interactivity
- Input sanitization
- Array iteration with `forEach()`
- Data formatting and UI updates from live API responses
- LocalStorage integration for user preferences and personalization

---

## Additional UI / UX Improvements in Assignment 3

Compared to Assignment 2, the interface was also improved with several extra user experience enhancements:

- Added a **GitHub section** to the navigation bar
- Added a **Live APIs section** to the navigation bar
- Added a **scroll-to-top button**
- Added **active navigation highlighting** while scrolling
- Added a **clear button** for removing the saved visitor name
- Added **project results count** to show how many projects match the current search/filter
- Improved modal accessibility and focus handling
- Improved loading and error messages for live API sections
- Improved page structure to support more content while keeping the design consistent

---

## Data Handling

### localStorage is used to save:
- theme preference
- visitor name
- favorite project

### API Data is fetched live from:
- GitHub API
- Quote API
- Weather API

This means some parts of the portfolio now use stored client-side data, while other parts display live external data from real services.

---

## User Feedback

The website now provides clear feedback in many situations.

### Form feedback
- Shows an error if the name is empty
- Shows an error if the name is too short
- Shows an error if the email is empty
- Shows an error if the email format is invalid
- Shows an error if the message is empty
- Shows an error if the message is too short
- Shows a success message after valid submission

### Project feedback
- Shows the number of visible projects after filtering/search
- Shows a message when no project matches the search/filter
- Shows which project is currently saved as favorite

### API feedback
For GitHub, Quote, and Weather sections:
- Loading messages are shown while data is being fetched
- Error messages are shown if the request fails
- Data is displayed dynamically after successful loading

---

## Setup Instructions

To run the project locally:

1. Download or clone the repository
2. Open the project folder
3. Make sure the structure is like this:

```text
assignment-3/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
# Technical Documentation – Assignment 3

## Student Information
Name: Sadeem Ahmed Alghamdi  
Course: SWE 363  
Assignment: Assignment 3 – External APIs and Advanced JavaScript

---

## 1. Introduction

This document provides the technical details for Assignment 3 of the personal portfolio website project.

The website was originally developed as a personal portfolio and then expanded across multiple assignments.  
In Assignment 2, the main focus was on adding interactive front-end behavior such as filtering, localStorage, tabs, modal popups, theme switching, and form validation.

In Assignment 3, the project was extended further by integrating real external APIs and applying advanced JavaScript concepts. This version is more dynamic and closer to a real modern web application because it combines local interactivity with live external data.

This document explains:
- the overall project structure
- the technologies used
- the JavaScript logic and interaction design
- the external APIs integrated
- the user experience flow
- how users navigate the website step by step
- the technical improvements made over Assignment 2

---

## 2. Project Purpose

The purpose of this project is to present a personal portfolio website that is:
- visually modern
- interactive
- responsive
- user-friendly
- technically structured
- connected to real external services

The website allows visitors to:
- learn about the student
- explore projects
- browse skills
- interact with UI features
- personalize the experience
- view live data from APIs
- submit a message through the contact form

---

## 3. Project Structure

The project is organized into separate files for structure, styling, and behavior.

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
```

## Responsibilities

### index.html
- Defines structure of all sections  
- Contains semantic layout  
- Includes API sections (GitHub, Quote, Weather)  

### styles.css
- Handles layout, theme, responsiveness  
- Defines reusable design system using CSS variables  
- Includes animations and UI effects  

### script.js
Contains all application logic, including:
- user interaction  
- API calls  
- DOM updates  
- validation  
- localStorage  

---

## 4. Technology Stack

### Core Technologies

#### HTML
Used for:
- semantic structure  
- accessibility support (ARIA attributes)  
- section organization  

#### CSS
Used for:
- responsive layout (Grid + Flexbox)  
- theming (dark/light mode)  
- animations (hover, reveal, transitions)  
- reusable variables (`:root`)  

#### JavaScript
Used for:
- interactivity  
- dynamic DOM updates  
- event handling  
- API communication  
- validation  
- state management  

---

## 5. External APIs and Services

### 5.1 GitHub API
Used to fetch:
- user profile  
- repositories  

**Endpoints:**
- https://api.github.com/users/{username}  
- https://api.github.com/users/{username}/repos  

**Features Used:**
- async data loading  
- `Promise.all()`  
- dynamic rendering  

---

### 5.2 Quote API
Used to fetch:
- random quotes  

**Endpoint:**
- https://dummyjson.com/quotes/random  

---

### 5.3 Weather API (Open-Meteo)
Used to fetch:
- temperature  
- humidity  
- wind speed  
- weather condition  

**Endpoint:**
- https://api.open-meteo.com/v1/forecast  

---

## 6. Advanced JavaScript Concepts

This assignment applies several advanced concepts:

### Asynchronous Programming
```javascript
async function loadData() {
  const data = await fetch(url);
}
```

### Fetch API
- Used to communicate with external APIs

### Promise.all()
- Enables parallel API calls

### Error Handling

```javascript
try {
  ...
} catch (error) {
  ...
}
```

### DOM Manipulation

- Creating elements dynamically
- Updating content after API response

### Event Handling

- Click events
- Input events
- Scroll events

### State Management

- localStorage
- UI state (loading / success / error)

---

## 7. Data Handling

### Local Storage

Stores:
- theme preference
- visitor name
- favorite project

### API Data

- fetched dynamically
- not stored permanently
- reloaded on demand

---

## 8. User Experience (UX) Design

This section explains how the user interacts with the system step-by-step.

---

## 9. User Navigation Guide (Step-by-Step)

### Step 1: Opening the Website

- User opens `index.html`
- The homepage (Hero section) appears
- Greeting is automatically generated based on time

### Step 2: Personalization

- User enters their name
- Clicks **Save**
- Name is stored in localStorage
- Greeting updates instantly

**Optional:**
- User clicks **Clear**
- Stored name is removed

### Step 3: Navigating the Website

User can navigate using:
- Navigation bar (top menu)
- Scroll

**Sections:**
- Home
- About
- Projects
- GitHub
- Live APIs
- Skills
- Contact

- Active section is highlighted automatically

### Step 4: Projects Interaction

User can:
- Search projects using search bar
- Filter projects by category
- Click **View Details** → modal opens
- Save a project as favorite

**System feedback:**
- Shows number of matching projects
- Shows message if no results found
- Saves favorite project

### Step 5: GitHub Section

- User scrolls to GitHub section

**System:**
- Loads GitHub data automatically
- Shows loading message
- Displays:
    - profile info
    - repositories

**User can:**
- Click repository → opens GitHub
- Click **Refresh** → reload data

### Step 6: Quote Section

User sees:
- A random quote

User can:
- Click **New Quote**
- System fetches a new quote instantly

### Step 7: Weather Section

User sees:
- Current weather in Dammam

**Displayed:**
- temperature
- humidity
- wind speed
- condition

User can:
- Click **Refresh** to update data

### Step 8: Skills Section

- User clicks tabs (Programming / Tools / Soft Skills)
- Content updates dynamically

### Step 9: Contact Form

User:
- Fills name
- Fills email
- Writes message
- Clicks submit

**System:**
- Validates all fields
- Shows specific errors
- Shows success message if valid

### Step 10: Additional UX Features

- Scroll progress bar shows reading progress
- Scroll-to-top button appears after scrolling
- Sections animate when entering viewport
- Theme toggle switches between dark/light
- Layout adapts to mobile screens

---

## 10. Performance Considerations

- API calls are optimized using `Promise.all`
- Only necessary data is rendered
- DOM updates are minimized
- CSS uses efficient layout techniques

---

## 11. Accessibility Considerations

- ARIA attributes used
- Buttons include labels
- Navigation is keyboard-friendly
- Clear visual feedback for errors

---

## 12. Improvements from Assignment 2

### Functional Improvements

- Added 3 API integrations
- Added dynamic external data
- Added refresh capabilities

### Technical Improvements

- Introduced async programming
- Added error handling
- Improved code modularity

### UX Improvements

- Added navigation guidance
- Added live data feedback
- Improved interactivity

---

## 13. Conclusion

This project demonstrates:
- strong front-end development
- real-world API integration
- advanced JavaScript usage
- user-centered design

It represents a complete transition from:
- static UI → interactive system → dynamic API-driven application
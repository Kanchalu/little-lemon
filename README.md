# 🍋 Little Lemon Restaurant - Table Reservation App

This is the final Capstone project for the **Meta Front-End Developer Professional Certificate**. This React application provides a seamless table booking experience for the Little Lemon restaurant, featuring real-time availability, unit testing, and full accessibility compliance.

---

## 🏗️ Project Overview & Implementation Details

Through the development of this application, we have implemented the following core requirements and technical solutions:

### 1. Component Architecture & Routing
* Developed a modular React structure with components for the `Header`, `Nav`, `Main`, and `Footer`.
* Utilized `react-router-dom` to manage navigation between the **Homepage**, **Booking Page**, and **Confirmation Page**.

### 2. Dynamic State Management (useReducer)
* Implemented the `useReducer` hook to manage available booking times.
* Integrated a mock API (`fetchAPI`) that dynamically updates available time slots based on the date selected by the user to ensure data accuracy.

### 3. Advanced Form Validation
* **Controlled Components:** All form inputs (Date, Time, Guests, Occasion) are managed by React state.
* **Client-Side Validation:** * Implemented HTML5 validation attributes (`required`, `min="1"`, `max="10"`).
    * Added custom JavaScript logic to disable the "Make Your Reservation" button until the form meets all validity requirements.
    * Resolved initial state bugs where the default "Guests" value prevented immediate form validation.

### 4. Accessibility (a11y) & WCAG Compliance
* Followed the **POUR** principles (Perceivable, Operable, Understandable, Robust).
* Added `aria-label` attributes to submission buttons to enhance screen reader support.
* Ensured every input field is correctly associated with a `<label>` using `htmlFor` and `id`.
* Used semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) to ensure a logical document outline.

### 5. Unit Testing with Jest & React Testing Library
* Wrote unit tests to verify that HTML5 validation attributes are correctly applied to the DOM.
* Implemented a test suite to confirm the "Submit" button toggles its `disabled` state correctly based on user input.
* **Technical Fix:** Successfully mocked `react-router-dom` using the `{ virtual: true }` flag to ensure tests pass in the local development environment.

### 6. UX Heuristic Evaluation Summary
* Conducted a self-audit using **Jakob Nielsen’s 10 Usability Heuristics**.
* **Visibility of System Status:** Identified the need for loading states during submission.
* **Error Prevention:** Implemented date restrictions to prevent past-date bookings.

---

## 📂 Technologies & Tools Used
* **React:** Hooks (`useState`, `useEffect`, `useReducer`), Context, and Components.
* **React Router:** Version 6+ for Single Page Application navigation.
* **Jest & React Testing Library:** For robust unit testing.
* **JavaScript (ES6+):** Modern syntax and asynchronous API handling.
* **CSS3:** Responsive Grid and Flexbox layouts.
* **Git/GitHub:** Version control and project hosting.

---

## 🛠️ Installation and Setup (Cloning Instructions)

To clone this web app and run it on your local machine, follow these exact steps in your terminal:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Kanchalu/little-lemon.git](https://github.com/Kanchalu/little-lemon.git)

   Navigate into the project folder:

Bash
cd little-lemon
Install all necessary dependencies:

Bash
npm install
Launch the development server:

Bash
npm start
Run the test suite:

Bash
npm test
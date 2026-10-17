# Technical Documentation

**SWE 363 – Assignment 2: Interactive Features**

**Student:** Sarah Almanjahi  
**Project:** Personal Portfolio Website

## 1. Introduction

This document explains the technical implementation of the interactive features added to my personal portfolio website for Assignment 2.

The website was developed using HTML, CSS, and vanilla JavaScript. Assignment 2 extends the original portfolio by adding project filtering, contact form validation, animations, and user feedback.

## 2. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Defines the website structure and content |
| CSS3 | Provides styling, animations, and responsive layouts |
| JavaScript | Handles user interactions and dynamic content |
| Git and GitHub | Tracks changes and manages project versions |

No external JavaScript frameworks or backend services are required.

## 3. Website Structure

The website contains three main sections:

- **About Me:** Personal introduction and dynamic greeting.
- **Projects:** Academic project cards and category filtering.
- **Contact:** Contact form with client-side validation.

The HTML structure is defined in `index.html`, styling is managed in `css/styles.css`, and interactive functionality is implemented in `js/script.js`.

## 4. JavaScript Implementation

### 4.1 Dynamic Greeting

The greeting feature uses the JavaScript `Date` object to retrieve the visitor's current hour.

The displayed message changes according to the time:

- Before 12:00 PM: Good morning
- From 12:00 PM to 5:59 PM: Good afternoon
- From 6:00 PM onward: Good evening

The result is displayed using the `textContent` property.

### 4.2 Interactive Project Filtering

The project filtering feature allows visitors to display projects based on their categories.

Three filter buttons are provided: All, Development, and Design.

**Implementation:**

1. JavaScript selects the filter buttons and project cards using `querySelectorAll()`.
2. An event listener detects when a filter button is clicked.
3. The selected category is retrieved using `dataset.filter`.
4. Each project's `data-category` attribute is compared with the selected category.
5. Matching projects are displayed, while nonmatching projects are hidden using the `hidden` property.
6. The selected button's `aria-pressed` attribute is updated to provide visual and accessibility feedback.

An empty-state message is also included for situations where no projects match the selected category.

### 4.3 Contact Form Validation

The contact form collects three inputs: name, email address, and message.

JavaScript uses a submit event listener to process user input.

**Validation process:**

1. `event.preventDefault()` prevents the default form submission.
2. Input values are retrieved from the form fields.
3. The `trim()` method removes unnecessary whitespace.
4. The program checks whether any field is empty.
5. A regular expression checks the basic format of the email address.
6. An error message is displayed if validation fails.
7. If validation succeeds, a confirmation message appears and the form is reset.

The `textContent` property updates the feedback message, and CSS classes control the feedback styling.

**Limitation:** The form performs client-side validation only. It does not transmit messages to a server or email address.

## 5. CSS Implementation

### 5.1 Project Layout

CSS Grid arranges the project cards in two columns on larger screens.

A media query changes the layout to a single column on screens narrower than 700 pixels.

### 5.2 Hover Animations

Project cards use CSS `transition` and `transform` properties to create smooth hover effects.

When a visitor hovers over a card, it moves slightly upward and displays a stronger shadow.

### 5.3 User Feedback

The website uses distinct visual styles for validation messages:

- Green feedback indicates successful validation.
- Red feedback indicates invalid input.

The active filter button is also highlighted to help visitors identify the selected category.

## 6. Error Handling and User Feedback

The website provides feedback for several user interactions.

| Situation | System Response |
|---|---|
| Empty contact form | Displays a message requesting all required fields |
| Invalid email format | Displays an email validation error |
| Valid form values | Displays a validation confirmation |
| No matching projects | Displays an empty-state message |
| Selected project category | Highlights the active filter |

These mechanisms help visitors understand the results of their actions.

## 7. Testing

The following functionality was manually tested during development:

| Test Case | Result |
|---|---|
| Display all projects | Passed |
| Filter Development projects | Passed |
| Filter Design projects | Passed |
| Submit an empty contact form | Passed |
| Submit an invalid email | Passed |
| Submit valid form values | Passed |

Additional checks before final submission include responsive layout behavior, hover effects, image loading, and compatibility across browsers.

## 8. Design Decisions

The implementation follows several design principles:

- **Simplicity:** Vanilla JavaScript is used without additional frameworks.
- **Maintainability:** HTML, CSS, and JavaScript are organized into separate files.
- **Consistency:** Code follows a consistent indentation and naming style.
- **Usability:** Interactive features provide clear visual feedback.
- **Responsiveness:** Layouts adjust to different screen sizes.
- **Accessibility:** Semantic HTML and accessibility attributes support easier navigation and interaction.

## 9. Limitations and Future Improvements

The current website does not include backend functionality or persistent data storage.

Possible future enhancements include a functional contact service, additional project categories, live search, and a dark/light theme preference.

## 10. Conclusion

Assignment 2 improves the original personal portfolio by introducing interactive JavaScript features and enhancing user experience.

The implementation demonstrates DOM manipulation, event handling, basic input validation, CSS transitions, responsive layouts, and user feedback.
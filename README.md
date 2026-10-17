# Sarah Almanjahi | Personal Portfolio

**SWE 363 – Web Engineering | Assignment 2: Interactive Features**

## 1. Project Overview

This project is a personal portfolio website developed as part of SWE 363 – Web Engineering at King Fahd University of Petroleum and Minerals (KFUPM).

The website introduces me as a Software Engineering student, showcases selected academic projects, and provides a contact form for visitors.

Assignment 2 builds upon the original portfolio from Assignment 1 by introducing interactive features using JavaScript, improving user feedback, and enhancing the overall user experience.

## 2. Features

### About Me
- Introduces my academic background and interests in software engineering.
- Displays a dynamic greeting based on the visitor's current time (Good Morning, Good Afternoon, or Good Evening).

### Interactive Project Filtering
- Displays academic projects with descriptions and images.
- Allows visitors to filter projects using three buttons:
  - **All:** Displays all projects.
  - **Development:** Displays the JavaFX Game project.
  - **Design:** Displays the Smart Queue Management System project.
- Updates project visibility dynamically without reloading the page.
- Includes a message for situations where no projects match the selected category.

### Contact Form Validation
- Allows visitors to enter their name, email address, and message.
- Uses JavaScript to validate the entered information.
- Displays clear error messages for empty fields or invalid email addresses.
- Displays a confirmation message when validation succeeds.
- Automatically clears the form after successful validation.

**Note:** The contact form is a front-end demonstration. It validates user input but does not send messages to an email address or server.

### Animations and Responsive Design
- Adds smooth hover animations to project cards.
- Highlights the selected project filter.
- Uses a responsive layout that adjusts to smaller screens.
- Maintains consistent styling and navigation throughout the website.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts, animations, and responsive design |
| JavaScript | Dynamic greeting, project filtering, form validation, and user feedback |
| Git | Version control and tracking development changes |
| GitHub | Repository hosting and project submission |
| VS Code | Code development and editing |

The project uses vanilla JavaScript and does not require external frameworks or libraries.

## 4. Project Structure

- **`index.html`** – Main HTML structure of the portfolio.
- **`css/styles.css`** – Website styling, layouts, animations, and responsive design.
- **`js/script.js`** – JavaScript functionality and event handling.
- **`assets/images/`** – Images used in the portfolio projects.
- **`docs/ai-usage-report.md`** – Documentation of AI-assisted development.
- **`docs/technical-documentation.md`** – Explanation of the implementation and technical decisions.
- **`README.md`** – Project overview, setup instructions, and usage guide.
- **`.gitignore`** – Specifies files Git should ignore.

## 5. Setup Instructions

### Requirements
- A modern web browser, such as Google Chrome, Microsoft Edge, or Firefox.
- A code editor such as Visual Studio Code (optional).
- Git, if cloning the repository from GitHub.

### Running the Website Locally

1. Open the Assignment 2 repository on GitHub.
2. Click **Code** and select **Download ZIP**, or copy the HTTPS URL to clone the repository using Git.
3. If downloaded as a ZIP file, extract the contents.
4. Open the project folder.
5. Open `index.html` in a web browser.

Alternatively, open the project folder in VS Code and use the Live Server extension to preview the website.

**No additional installation, package manager, or server setup is required.**

## 6. How to Use the Website

### Navigation
Use the navigation links at the top of the page to move between the About Me, Projects, and Contact sections.

### Project Filtering
1. Navigate to the Projects section.
2. Click **Development** to view the JavaFX Game.
3. Click **Design** to view the Smart Queue Management System.
4. Click **All** to display both projects again.

### Contact Form
1. Navigate to the Contact section.
2. Enter your name, email address, and message.
3. Click **Send Message**.
4. Review the displayed feedback message.
5. Correct any invalid input and submit the form again.

The form provides validation feedback only; messages are not transmitted.

## 7. Technical Implementation

The website uses JavaScript DOM manipulation and event listeners to provide interactivity.

**Dynamic Greeting:** The `Date` object determines the current hour and updates the greeting text.

**Project Filtering:** Click event listeners read each button's `data-filter` attribute and compare it with the `data-category` attribute on project cards. Nonmatching projects are hidden.

**Form Validation:** A submit event listener checks the entered values, validates the email format, prevents the default form submission, and displays appropriate feedback messages.

**Animations:** CSS transitions provide smooth visual feedback when visitors hover over project cards and buttons.

**Responsive Layout:** CSS Grid and media queries adjust the arrangement of project cards and navigation for smaller screens.

Detailed implementation information is documented in `docs/technical-documentation.md`.

## 8. Testing

The following manual tests can be used to verify the main functionality:

| Test | Expected Result |
|---|---|
| Open the portfolio | Website sections and project images display correctly |
| Click All | Both projects are displayed |
| Click Development | Only the JavaFX Game is displayed |
| Click Design | Only the Smart Queue Management System is displayed |
| Submit an empty contact form | An error message appears |
| Enter an invalid email | Email validation error appears |
| Submit valid form values | Validation confirmation appears and fields are cleared |
| Hover over a project card | Smooth hover animation appears |
| View on a narrow screen | Project cards change to a single-column layout |

The project should also be checked in different browsers and screen sizes before final submission.

## 9. AI Usage

ChatGPT was used as an AI-assisted development tool during Assignment 2.

Its assistance included:
- Reviewing the existing Assignment 1 code.
- Suggesting interactive features based on the assignment requirements.
- Providing JavaScript implementation suggestions.
- Helping improve code formatting and organization.
- Supporting debugging and explanations.
- Suggesting improvements to documentation and user experience.

AI-generated suggestions were reviewed, adapted to the portfolio structure, and tested during development.

The detailed AI usage report is available in `docs/ai-usage-report.md`.

## 10. Future Improvements

Potential improvements include:
- Adding more academic and personal projects.
- Implementing a dark/light theme toggle.
- Connecting the contact form to a backend service.
- Adding a searchable project gallery.

These features are not part of the current implementation.

## 11. Author

**Sarah Almanjahi**

Software Engineering Student  
King Fahd University of Petroleum and Minerals (KFUPM)

Developed for **SWE 363 – Web Engineering, Assignment 2**.
# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website developed for SWE 363 Assignment 1.

The website includes an About Me section, a Projects section, and a Contact section.

## Project Structure

The project is organized into separate files and folders:

- `index.html` → contains the main structure and content of the website.
- `css/styles.css` → contains the visual design and responsive styling.
- `js/script.js` → contains the JavaScript functionality.
- `assets/images/` → stores images used in the website.
- `docs/` → contains project documentation.

## HTML Structure

The website uses semantic HTML elements such as:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`

These elements help organize the content clearly and improve readability.

## CSS Design

CSS is used to control:

- Colors
- Spacing
- Typography
- Layout
- Responsive design

Flexbox is used for the navigation bar and contact form.

CSS Grid is used to display project cards.

A media query is used to adjust the layout for smaller screens.

## JavaScript Functionality

JavaScript is used to display a greeting message based on the current time of day.

The script gets the current hour using:

`new Date().getHours()`

It then displays one of the following messages:

- Good morning
- Good afternoon
- Good evening

## Responsive Design

The website is designed to work on:

- Desktop
- Tablet
- Mobile

The layout changes when the screen width becomes smaller to make the content easier to read.

## Testing

The website was tested by:

- Opening it in a web browser.
- Resizing the browser window.
- Checking the navigation links.
- Checking the contact form layout.
- Verifying that the JavaScript greeting appears correctly.
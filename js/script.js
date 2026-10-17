const greeting = document.getElementById("greeting");

const currentHour = new Date().getHours();

if (currentHour < 12) {
    greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (currentHour < 18) {
    greeting.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
    greeting.textContent = "Good evening! Welcome to my portfolio.";
}
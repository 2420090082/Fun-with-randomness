// Quote Generator
const quotes = [
  "Push harder than yesterday!",
  "Make it happen.",
  "You're stronger than you think.",
  "Do something today your future self will thank you for.",
  "Hustle beats talent when talent doesn't hustle."
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}

// Background Color Changer
function changeBackground() {
  const colors = ["#ffd6a5", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = color;
}

// Password Generator
function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("passwordOutput").value = password;
}

function copyPassword() {
  const field = document.getElementById("passwordOutput");
  field.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}

// Emoji Generator
const emojis = ["😄", "🔥", "💯", "🌈", "✨", "🥳", "🚀", "💡", "🌟", "😎"];

function generateEmoji() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("emojiBox").innerText = emoji;
}

// Joke Generator
const jokes = [
  "Why don't programmers like nature? Too many bugs.",
  "I told my computer I needed a break… it said no problem and crashed.",
  "Why did the developer go broke? Because he used up all his cache.",
  "There are only 10 kinds of people in the world: those who understand binary and those who don’t.",
];

function tellJoke() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById("jokeBox").innerText = joke;
}

// Gradient Background
const gradients = [
  "linear-gradient(to right, #ff9a9e, #fad0c4)",
  "linear-gradient(to right, #a18cd1, #fbc2eb)",
  "linear-gradient(to right, #84fab0, #8fd3f4)",
  "linear-gradient(to right, #fccb90, #d57eeb)",
];

function changeGradient() {
  const gradient = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = gradient;
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully!");
});

const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
});

btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
});

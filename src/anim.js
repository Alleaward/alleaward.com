//Landing page animations.
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector("#home");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});

const expandAll = document.querySelector("#expandAll");
expandAll.addEventListener("click", () => {
    // container.classList.remove("hover-right");
    console.log("Working");
    alert("working");
});

const backToTop = document.createElement("button");
backToTop.innerText = "⬆ Back to Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const hobbies = [
  { id: 1, name: "Gym", src: "../image/Gym.jpg" },
  { id: 2, name: "Cycling", src: "../image/Cycling.jpg" },
  { id: 3, name: "Gaming", src: "../image/Gaming.jpg" }
];


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".hobby-grid img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");
let currentIndex = 0;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index;
        modal.style.display = "block";
        modalImg.src = images[currentIndex].src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
prevBtn.addEventListener("click", () => {
    currentIndex--;
    
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    modalImg.src = images[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    modalImg.src = images[currentIndex].src;
});
function filterImages(category) {
    const images = document.querySelectorAll(".gallery img");

    images.forEach((image) => {
        if (category === "all") {
            image.style.display = "block";
        } else if (image.classList.contains(category)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
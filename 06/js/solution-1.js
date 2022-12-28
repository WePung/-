const img = document.querySelector("#container > img");

img.addEventListener("mouseout", () => {
    img.src = "/images/pic-1.jpg";
}
);

img.addEventListener("mouseover", () => {
        img.src = "/images/pic-6.jpg";
    }
);
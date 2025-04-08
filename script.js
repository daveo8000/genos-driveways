document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("auto-scroll-gallery");

  // Dynamically add images (e.g., img1.jpg to img20.jpg)
  for (let i = 1; i <= 20; i++) {
    const img = document.createElement("img");
    img.src = `gallery/img${i}.webp`;
    img.alt = `Work ${i}`;
    container.appendChild(img);
  }

  // Auto-scroll logic
  let scrollStep = 5;
  let scrollInterval = 8 ;
  let isPaused = false;

  container.addEventListener("mouseenter", () => isPaused = true);
  container.addEventListener("mouseleave", () => isPaused = false);

  setInterval(() => {
    if (!isPaused) {
      container.scrollLeft += scrollStep;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      }
    }
  }, scrollInterval);


 
});

function scrollGallery(button, amount) {
  const container = button.parentElement.querySelector('.scroll-container');
  container.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

window.scrollGallery = function(button, amount) {
  const container = button.parentElement.querySelector('.scroll-container');
  container.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
};



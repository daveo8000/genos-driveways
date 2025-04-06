// Gallery Image Loader
//const gallery = document.getElementById('gallery');
//const totalImages = 10; // Change this to match the number of images you have

//for (let i = 1; i <= totalImages; i++) {
  //const img = document.createElement('img');
 // img.src = `gallery/img${i}.jpg`;
 // img.alt = `Gallery Image ${i}`;
 // img.classList.add('gallery-image');
//  gallery.appendChild(img);
//}

// Auto-scrolling gallery
const autoGallery = document.getElementById('auto-gallery');
const totalAutoImages = 10; // Adjust based on your actual image count

for (let i = 1; i <= totalAutoImages; i++) {
  const img = document.createElement('img');
  img.src = `gallery/img${i}.jpg`;
  img.alt = `Gallery Image ${i}`;
  autoGallery.appendChild(img);
}

// Clone for infinite effect
const clone = autoGallery.cloneNode(true);
autoGallery.appendChild(clone);

// Scroll animation
let scrollAmount = 0;
function autoScroll() {
  scrollAmount += 1;
  autoGallery.scrollLeft = scrollAmount;
  if (scrollAmount >= autoGallery.scrollWidth / 2) {
    scrollAmount = 0;
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();


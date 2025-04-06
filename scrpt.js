 // Gallery Image Loader
 const gallery = document.getElementById('gallery');
 const totalImages = 10; // Change this to how many images you’ve added
 for (let i = 1; i <= totalImages; i++) {
   const img = document.createElement('img');
   img.src = `gallery/img${i}.jpg`;
   img.alt = `Gallery Image ${i}`;
   img.classList.add('gallery-image');
   gallery.appendChild(img);
 }
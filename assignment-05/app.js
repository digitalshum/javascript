// var images = [
//   "https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2.jpg",
//   "./pictures/Mountain.jpg",
//   "https://4kwallpapers.com/images/wallpapers/alps-mountains-mountain-range-summer-sunny-day-forest-clear-4032x3024-5384.jpg"
// ];

// const images = [
//   "https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2.jpg",
//   "https://static.vecteezy.com/system/resources/thumbnails/001/971/264/small_2x/beautiful-cherry-blossom-with-bokeh-lights-background-concept-free-vector.jpg",
//   "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
// ];


// let currentIndex = 0;
// const slider = document.getElementById("slider");
// const thumbnails = document.querySelectorAll(".leftside img");

// function showImage(index) {
//   currentIndex = index;
//   slider.src = images[currentIndex];
//   updateActiveThumbnail();
// }

// function prevImage() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   showImage(currentIndex);
// }

// function nextImage() {
//   currentIndex = (currentIndex + 1) % images.length;
//   showImage(currentIndex);
// }

// function updateActiveThumbnail() {
//   thumbnails.forEach((thumb, i) => {
//     thumb.classList.toggle("active", i === currentIndex);
//   });
// }

// // Default active thumbnail
// updateActiveThumbnail();


/////////////////////////////////////////////////


// var currentImage = document.getElementById("slider");
// var currentIndex = 0;


// /////////////////////////


// function next() {


//   if (currentIndex === images.length - 1) {
//     currentIndex = 0;
//     currentImage.src = images[currentIndex]
//   } else {

//     currentIndex++;
//     currentImage.src = images[currentIndex]

//   }

// }

// function prev() {
//   if (currentIndex === 0) {
//     currentIndex = images.length - 1;
//     currentImage.src = images[currentIndex]
//   } else {

//     currentIndex--;
//     currentImage.src = images[currentIndex]

//   }

// }

const images = [
  "https://www.kingsford.com/wp-content/uploads/2023/05/KFD_GrilledCheeseSliders_3qtr_s03_72-Desktop.jpg",
  "https://www.tasteofhome.com/wp-content/uploads/2021/03/Sloppy-Joe-Slider-Bake_EXPS_FT24_258849_EC_012524_3.jpg",
  "https://mambeno.co.uk/wp-content/uploads/2016/08/Sliders.jpg"
];

let currentIndex = 0;
const mainImg = document.getElementById("slider");
const thumbnails = document.querySelectorAll(".leftside img");

function showImage(index) {
  currentIndex = index;
  mainImg.src = images[currentIndex];
  updateActiveThumbnail();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function updateActiveThumbnail() {
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === currentIndex);
  });
}

// Default active thumbnail
updateActiveThumbnail();

// 🔥 Auto slide every 3 seconds
setInterval(nextImage, 2500);
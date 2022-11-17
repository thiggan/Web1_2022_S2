// click handlers 
//this has been set up to handle to arrows on either side of the image, they do change by themselves but they can be moved manually too.

let coolClimateScrollLeft = document.querySelector(`#coolClimateScroll_left`);
//console.log(coolClimateScrollLeft);
coolClimateScrollLeft.addEventListener("click", (e) => {
  //console.log("coolClimateScrollLeft");
  plusSlides(-1, 0);
});

let coolClimateScrollRight = document.querySelector(`#coolClimateScroll_right`);
//console.log(coolClimateScrollRight);
coolClimateScrollRight.addEventListener("click", (e) => {
  //console.log("coolClimateScrollRight");
  plusSlides(1, 0);
});

let ourLatestReleaseScrollLeft = document.querySelector(
  "#ourLatestReleaseScroll_Left"
);
//console.log("ourLatestReleaseScrollLeft");
ourLatestReleaseScrollLeft.addEventListener("click", (e) => {
  console.log("ourLatestReleaseScrollLeft");
  plusSlides(-1, 1);
});

let ourLatestReleaseScrollRight = document.querySelector(
  "#ourLatestReleaseScroll_right"
);
//console.log(ourLatestReleaseScrollRight);
ourLatestReleaseScrollRight.addEventListener("click", (e) => {
  console.log("ourLatestReleaseScrollRight");
  plusSlides(1, 1);
});

const BASE_URL = `https://api.unsplash.com`;
const URL = `${BASE_URL}/search/photos?query=wine&per_page=6&orientation=squarish&client_id=HSnjWCtFB_SV_n99iu2Mr32d5mk1b5W6n5yXpGLZx28`;
//console.log(URL);

let carousel_1 = [];
let carousel_2 = [];

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    data["results"].forEach((result, index) => {
      let img_url = result["urls"]["regular"];

      index % 2 == 0 ? carousel_1.push(img_url) : carousel_2.push(img_url);
    });


  //This is the code I have used to set up my slideshow carousel I have used two of these one for each carousel. It create and element from the 
  //div and passes it the class and myslides information. It then passes in the image and uses src along with result to show each image within
  //the carousel.

    carousel_1.forEach((result, index) => {
      let slideContainer = document.querySelector("#slideshow1");

      let mySlide = document.createElement("div");
      mySlide.setAttribute("class", "mySlides1 fade");

      let img = document.createElement("img");
      img.setAttribute("src", result);

      mySlide.appendChild(img);
      slideContainer.appendChild(mySlide);
    });

    carousel_2.forEach((result, index) => {
      let slideContainer = document.querySelector("#slideshow2");

      let mySlide = document.createElement("div");
      mySlide.setAttribute("class", "mySlides2 fade");

      let img = document.createElement("img");
      img.setAttribute("src", result);

      mySlide.appendChild(img);
      slideContainer.appendChild(mySlide);
    });
  });

// adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];

let plusSlides = (n, no) => {
  showSlides((slideIndex[no] += n), no);
};

let showSlides = (n, no) => {
  let i;
  let x = document.querySelectorAll(`.${slideId[no]}`);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
};

setInterval(() => plusSlides(1, 0), 1500);
setInterval(() => plusSlides(1, 1), 1500);

showSlides(1, 0);
showSlides(1, 1);

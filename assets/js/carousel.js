const BASE_URL = `https://api.unsplash.com`;
const URL = `${BASE_URL}/search/photos?query=wine&per_page=6&orientation=squarish&client_id=HSnjWCtFB_SV_n99iu2Mr32d5mk1b5W6n5yXpGLZx28`;
//console.log(URL);

let carousel_1 = [];
let carousel_2 = [];

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    data["results"].forEach((result, index) => {
      let img_url = result["urls"]["small"];
      console.log(img_url);

      // if (index % 2 == 0) {
      //   //console.log("even");
      //   carousel_1.push(img_url);
      // } else {
      //   //console.log("odd");
      //   carousel_2.push(img_url);
      // }

      index % 2 == 0 ? carousel_1.push(img_url) : carousel_2.push(img_url);
    });

    carousel_1.forEach((result, index) => {
      console.log(`carousel_1 ${result}`);
    });

    carousel_2.forEach((result, index) => {
      console.log(`carousel_2 ${result}`);

      // needs to look like
      // <div class="mySlides1">
      //  <img src="assets\images\Cool_climate1.jpg" />
      // </div>

      let slideContainer = document.getElementById("slideshow2");

      let mySlide = document.createElement("div");
      mySlide.setAttribute("class", "mySlides2 fade");

      let img = document.createElement("img");
      img.setAttribute("src", result);

      mySlide.appendChild(img);
      slideContainer.appendChild(mySlide);
    });
  });

/////
// adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];

let plusSlides = (n, no) => {
  showSlides((slideIndex[no] += n), no);
};

let showSlides = (n, no) => {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
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

setInterval(() => plusSlides(1, 0), 2000);
setInterval(() => plusSlides(1, 1), 2000);

showSlides(1, 0);
showSlides(1, 1);

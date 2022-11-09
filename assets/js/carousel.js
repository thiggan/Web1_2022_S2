const BASE_URL = `https://api.unsplash.com`;
const URL = `${BASE_URL}/search/photos?query=wine&per_page=6&orientation=squarish&client_id=HSnjWCtFB_SV_n99iu2Mr32d5mk1b5W6n5yXpGLZx28`;
console.log(URL);

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    data["results"].forEach((result, index) => {
      let img_url = result["urls"]["small"];
      console.log(img_url);
    });
  });


/////


let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];

setInterval(() => plusSlides(1, 0), 2000);
setInterval(() => plusSlides(1, 1), 2000);

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
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
}
const BASE_URL = `https://api.unsplash.com`

const pictures = [0,1,2,3,4,5];

fetch(`${BASE_URL}/search/photos?query=wine&per_page=6&orientation=squarish&client_id=HSnjWCtFB_SV_n99iu2Mr32d5mk1b5W6n5yXpGLZx28`)
.then(response => response.json())
.then(data =>{
  
data["results"].forEach((result, index) =>{
  let img_url = result["urls"]["small"]

   let mySlidesClass = document.createElement("div");
   mySlidesClass.class = "mySlides1";

  let img = document.createElement("img")
   img.src = img_url
   img.class = "cool_climate";
  
   img.style = "width: 125%";

   img.src = img_url
   img.class = "cool_climate";
  
   img.style = "width: 125%";


  
   document.querySelector("#slideshow1").append(img) = `urls(${img_url}(${img_url1}(${img_url2}).append ))`;
  // document.querySelector("#slideshow2").append(img) = `urls(${img_url}(${img_url}(${img_url}).append))`;
  

  
    })
    

     let img = document.createElement("img")
    img.src = img_url
     img.class = "our_latest_release";
  
     img.style = "width: 100%"

     document.querySelectorAll("#slideshow2").append(img) = `urls(${img_url.img.src})`;
    // document.querySelector("#slideshow2").append(img) = `urls(${img_url.img.src})`;
    // document.querySelector("#slideshow2").append(img) = `urls(${img_url.img.src})`;
})


  

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]

setInterval(() => plusSlides(1, 0), 2000);
setInterval(() => plusSlides(1, 1), 2000);

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

showSlides(n, no => {
  let i;
  let x = document.querySelectorAll("." + slideId[0,2,4]);
  if (n > x.length) {slideIndex[0,2,4] = 1}    
  if (n < 1) {slideIndex[1,3,5] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
  
  
})


  




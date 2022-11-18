# Web1_2022_S2
# Title
## Ara Wines website - Website Project 

# Project Description
This is a project to look at a website, look at how it is constructed and replicate this myself. I will need to inspect the original website to see how things are done but I will be using my own code to build it with the help of more research online looking at some of the more complicated parts.
I will search for images to use and credit these where applicable, they will not all be the same as the original website though. I will use fonts the same or as close as I can get to the original to make it look the similar. The website will have most of the same features as the original. 
I will be using HTML, Javascript ES6 and CSS to create this website. I have used a variety of styles, and a carousel with images, fetched using an Unaplash for the API data. These each contain three images and they change every 1.5 seconds. 

### Some features used:
 1. Modal with links and a close button on
 2. Fixed socaial bar on the left-side
 3. Two different carousels
 4. A page that will resize and is responsive
 5. Flex and Grid structures
 6. Font Awesome was used for the icons
 7. Ellipsis that is visible and hidden


# Contents
 ## 1. Home page
 #### 1.1 The Marlborough Region
 #### 1.2 Wines they make
 #### 1.3 The quality of the wine
 #### 1.4 The Climate of the region
 #### 1.5 Latest Wines

## 2. Social Media Links (Main ones used)
### 2.1 Facebook
### 2.2 Instagram

 
 # Installation and running the project
 Open up Visual Stusio code and navingate to the project - Web1_2022_S2 - this links to the Go Live http://127.0.0.1:5500/ara_wines.html. 
 
 
 # How to use this website
This site is designed to give the user more information about the wines produced by Ara wines. Once this has loaded the website should run and you will be able to browse it. There are links to navigate to each section within the site most of these will have a pointer cursor on them. Navigation should be easy around the site. 

# Code I am proud of
I am proud of the carousel/slideshow and Api fetch - I managed to get thesse to work together. I did use some code which I have referenced below to assist with the implementation of the slideshow.

```js
      carousel_1.forEach((result, index) => {
      let slideContainer = document.querySelector("#slideshow1");

      let mySlide = document.createElement("div");
      mySlide.setAttribute("class", "mySlides1 fade");

      let img = document.createElement("img");
      img.setAttribute("src", result);

      mySlide.appendChild(img);
      slideContainer.appendChild(mySlide);
    });
 ```
 
 This code displays the hearts on the pictures grid just above the footer - I am proud of this because it took some working out to get everything in the right place and working on a click to change the colour from the white outline to filled in red. 
 
 ```js
let hearts = document.querySelectorAll(".heart");

for (let i = 0; i < hearts.length; i++) {
  let heart = hearts[i];

  // attach a click-event to all of our hearts
  heart.addEventListener("click", (e) => {
    //console.log('click-event');
    
    // aparently this is important as it is
    // in most of the examples.
    e.preventDefault();

    // querySelectorAll gives you an array so we index
    // directly into it
    let faChildren = heart.querySelectorAll("i");
    let faChild = faChildren[0];
    //console.log(`${faChild.className}`);

    // flip the heart over from a border to a solid
    if (faChild.className == "fa-regular fa-heart") {
      //console.log("o set; setting plan");
      faChild.className = "fa-solid fa-heart";
    } else {
      //console.log("plan set; setting o");
      faChild.className = "fa-regular fa-heart";
    }
  });
}
```
 
 # Known bugs
 
 ##### I know there are some parts of this site that I couldn't quite replicate (not thorugh lack of reasearch, just through not being able to find the exact thing I needed) 
 
  1. One being the colour on the footer which goes from grey to black as the page moves down.
  2. The block of images at the end of the page do scroll but the disappear into the side of the page.
  3. I tried to get the two main images and words to fade in as the page moved down, it is working to a degree but not quite how I wanted it to.
  4. Arrow links were meant to be at the end of each passage of text - I have added one and left the others off. 
  5. The ellipsis links to not display above it but I left them on to show the click event works. It is not visible unless the page is in responsive mode.

# Credits

I have used code an images taken form these sites to help with the building of my website

https://www.arawines.co.nz

https://codepen.io/williamliaw/pen/gPMdrm

https://codepen.io/pen/

https://fontawesome.com/

https://unsplash.com/developers

https://ryfarlane.com/article/toggle-class-vanilla-javascript

https://www.w3schools.com/howto/howto_js_slideshow.asp

https://stackoverflow.com/questions/41152161/opacity-animation-for-background-image




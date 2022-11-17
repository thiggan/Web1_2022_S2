# Web1_2022_S2
# Title
## Ara Wines website - Website Project 

# Project Description
This is a project to look at a website, look at how it is constructed and replicate this myself. I will need to inspect the original website to see how things are done but I will be using my own code to build it with the help of more research online looking at some of the more complicated parts.
I will search for images to use and credit these where applicable these will not be the same as the original website though. Use fonts the same or as close as I can get to make it look the same. The website will have the same features as the original. 
I will be using HTML, Javascript and CSS to create this website. I have used a variety of styles, and a carousel with images fetched using API data. These each contain three images and they change every 1.5 seconds. 
Some features used:
#### 1. Modal with links and a close button on
#### 2. Fixed socaial bar on the left-side
#### 3. Two different carousels
#### 4. A page that will resize and is responsive
#### 5. Flex and Grid structures
#### 6. Font Awesome was used for the icons


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

 
 ## Installation and running the project
 Open up Visual Stusio code and navingate to the project - Web1_2022_S2 - this links to the Go Live http://127.0.0.1:5500/ara_wines.html. 
 
 
 ## How to use this website
This site is designed to give the user more information about the wines produced by Ara wines. Once this has loaded the website should run and you will be able to browse it. There are links to navigate to each section within the site most of these will have a pointer cursor on them. Navigation should be easy around the site. 

## Code I am proud of
#### I am proud of the carousel/slideshow and Api fetch - I managed to get thesse to work together. I did use some code which I have referenced below to assist with the implementation of the slideshow.

```
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
    


## Credits

I have used code an images taken form these sites to help with the building of my website

https://www.arawines.co.nz

https://codepen.io/williamliaw/pen/gPMdrm

https://codepen.io/pen/

https://fontawesome.com/

https://unsplash.com/developers

https://ryfarlane.com/article/toggle-class-vanilla-javascript

https://www.w3schools.com/howto/howto_js_slideshow.asp

https://stackoverflow.com/questions/41152161/opacity-animation-for-background-image




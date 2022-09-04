// todo : remove circle-container reference

//Right Arrow & Left Arrow
let rightArrow2 = document.querySelector("#carousel-2 .right-arrow");
let leftArrow2 = document.querySelector("#carousel-2 .left-arrow");
//List of all of the screens in carousel
let screenStore2 = document.querySelectorAll("#carousel-2 .carousel-screen");
let numOfScreens2 = screenStore2.length;
//List of all the circle stores
let circleStore2 = document.querySelectorAll(
  "#carousel-2 .circle-container .circle"
);
//number to target main screen
let currentScreen2 = 0;
//currently in animation or not
let inAnim2 = false;
//Animation Time
let animTime2 = 500;

//Sort out starting position
sortPositioning2(
  screenStore2[currentScreen2],
  screenStore2[currentScreen2 - 1],
  screenStore2[currentScreen2 + 1]
);
//Sort out circle styling
highlightCircle2(circleStore2[0]);

//User clicks on rightArrow2
rightArrow2.addEventListener("click", () => {
  startAnim2("right");
});

//User clicks on the leftArrow2
leftArrow2.addEventListener("click", () => {
  startAnim2("left");
});

//Start animation. Either towards left or right
function startAnim2(direction) {
  if (!inAnim2) {
    inAnim2 = true;
    if (direction === "right") {
      moveRight2();
      highlightCircle2(circleStore2[currentScreen2 + 1], "right");
    } else if (direction === "left") {
      moveLeft2();
      highlightCircle2(circleStore2[currentScreen2 - 1], "left");
    } else {
      isAnim = false;
      return;
    }
  }
}

//Move to the right
function moveRight2() {
  //Move towards Next screen as usual
  if (currentScreen2 < numOfScreens2 - 1) {
    toLeft2(screenStore2[currentScreen2]);
    comeRight2(screenStore2[currentScreen2 + 1]);
    setTimeout(() => {
      inAnim2 = false;
      currentScreen2++;
      sortPositioning2(
        screenStore2[currentScreen2],
        screenStore2[currentScreen2 - 1],
        screenStore2[currentScreen2 + 1]
      );
    }, animTime2);
  } else {
    //Or the screen coming in is the first screen again
    toLeft2(screenStore2[currentScreen2]);
    comeRight2(screenStore2[0]);
    setTimeout(() => {
      inAnim2 = false;
      currentScreen2 = 0;
      sortPositioning2(
        screenStore2[currentScreen2],
        screenStore2[currentScreen2 - 1],
        screenStore2[currentScreen2 + 1]
      );
    }, animTime2);
  }
}

//Move to the left
function moveLeft2() {
  //Move back to screen previously on, as usual
  if (currentScreen2 > 0) {
    toRight2(screenStore2[currentScreen2]);
    comeLeft2(screenStore2[currentScreen2 - 1]);
    setTimeout(() => {
      inAnim2 = false;
      currentScreen2--;
      sortPositioning2(
        screenStore2[currentScreen2],
        screenStore2[currentScreen2 - 1],
        screenStore2[currentScreen2 + 1]
      );
    }, animTime2);
  } else {
    //Move back to the last screen container
    toRight2(screenStore2[currentScreen2]);
    comeLeft2(screenStore2[numOfScreens2 - 1]);
    setTimeout(() => {
      inAnim2 = false;
      currentScreen2 = numOfScreens2 - 1;
      sortPositioning2(
        screenStore2[currentScreen2],
        screenStore2[currentScreen2 - 1],
        screenStore2[currentScreen2 + 1]
      );
    }, animTime2);
  }
}

//User clicks on one of the circles
circleStore2.forEach((circle) => {
  circle.addEventListener("click", (event) => {
    if (!inAnim2) {
      //Convert NodeList to Array, to use 'indexOf' method.
      let circleStore2Array = Array.prototype.slice.call(circleStore2);
      let circleIndex = circleStore2Array.indexOf(event.target);
      //Configure circle styling
      highlightCircle2(event.target);
      //Work out whether we need to move right or left, or nowhere.
      if (circleIndex > currentScreen2) {
        changeScreenCircleClick2(circleIndex, "right");
      } else if (circleIndex < currentScreen2) {
        changeScreenCircleClick2(circleIndex, "left");
      }
    }
  });
});

function changeScreenCircleClick2(circleIndex, direction) {
  inAnim2 = true;
  if (direction === "right") {
    sortPositioning2(
      screenStore2[currentScreen2],
      screenStore2[currentScreen2 - 1],
      screenStore2[circleIndex]
    );
    toLeft2(screenStore2[currentScreen2]);
    comeRight2(screenStore2[circleIndex]);
  } else if (direction === "left") {
    sortPositioning2(
      screenStore2[currentScreen2],
      screenStore2[circleIndex],
      screenStore2[currentScreen2 + 1]
    );
    toRight2(screenStore2[currentScreen2]);
    comeLeft2(screenStore2[circleIndex]);
  } else {
    inAnim2 = false;
    return;
  }
  setTimeout(() => {
    inAnim2 = false;
    currentScreen2 = circleIndex;
    sortPositioning2(
      screenStore2[currentScreen2],
      screenStore2[currentScreen2 - 1],
      screenStore2[currentScreen2 + 1]
    );
  }, animTime2);
}

function highlightCircle2(circleSelect, direction) {
  if (circleSelect === undefined && direction === "right") {
    circleSelect = circleStore2[0];
  } else if (circleSelect === undefined && direction === "left") {
    circleSelect = circleStore2[numOfScreens2 - 1];
  }
  circleStore2.forEach((circle) => {
    if (circle === circleSelect) {
      circle.classList.add("circle-fill");
    } else {
      circle.classList.remove("circle-fill");
    }
  });
}

//Animation methods
function toLeft2(screen) {
  screen.style.animation = "toLeft 0.5s ease-in-out forwards";
  setTimeout(() => {
    screen.style.animation = "";
  }, animTime2);
}

function toRight2(screen) {
  screen.style.animation = "toRight 0.5s ease-in-out forwards";
  setTimeout(() => {
    screen.style.animation = "";
  }, animTime2);
}

function comeRight2(screen) {
  screen.style.animation = "comeRight 0.5s ease-in-out forwards";
  setTimeout(() => {
    screen.style.animation = "";
  }, animTime2);
}

function comeLeft2(screen) {
  screen.style.animation = "comeLeft 0.5s ease-in-out forwards";
  setTimeout(() => {
    screen.style.animation = "";
  }, animTime2);
}

//Sort positioning. Don't want images to overlap
function sortPositioning2(mainScreen, leftScreen, rightScreen) {
  //If right screen is undefined. We need to repeat first screen again
  if (rightScreen === undefined) {
    rightScreen = screenStore2[0];
  }
  //If left screen is undefined. We use the last screen
  if (leftScreen === undefined) {
    leftScreen = screenStore2[numOfScreens2 - 1];
  }
  screenStore2.forEach((screen) => {
    if (screen === mainScreen) {
      screen.style.display = "block";
      screen.style.left = "0px";
    } else if (screen === leftScreen) {
      screen.style.display = "block";
      screen.style.left = "-100%";
    } else if (screen === rightScreen) {
      screen.style.display = "block";
      screen.style.left = "100%";
    } else {
      screen.style.display = "none";
    }
  });
}

//Auto Scroll feature
let carousel2 = document.getElementById("carousel-2");
let scrollTime2 = Number(carousel2.getAttribute("auto-scroll"));
//Only implement the feature if the user has included the attribute 'auto-scroll'.
if (scrollTime2) {
  //Auto Scroll will be set up the very first time
  let autoWipe = setInterval(() => {
    startAnim2("right");
  }, scrollTime2);
  //Clear the timer when they hover on carousel
  carousel2.addEventListener("mouseenter", () => {
    clearInterval(autoWipe);
  });
  //Re-initialise the timer when they hover out of the carousel
  carousel2.addEventListener("mouseleave", () => {
    autoWipe = setInterval(() => {
      startAnim2("right");
    }, scrollTime2);
  });
}

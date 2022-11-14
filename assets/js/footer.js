 setImageVisible = (id, visible) => {
    let img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
};



// https://ryfarlane.com/article/toggle-class-vanilla-javascript
// toggling classes

// attaches a click event handler to toggle all of our hearts

let hearts = document.getElementsByClassName("heart");

// for some reason a forEach did not work no idea why
for (let i = 0; i < hearts.length; i++) {
  let heart = hearts[i];

  // attach a click-event to all of our hearts
  heart.addEventListener("click", (e) => {
    //console.log('click-event');
    
    // aparently this is important as it is
    // in most of the examples.
    e.preventDefault();

    // getElementsByTagName gives you an array so we index
    // directly into it
    let faChildren = heart.getElementsByTagName("i");
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
//code for the hamburger bar which include links to navigate round the site.


// hamburger-bar
// $("#about-modal-trigger").on("click", function (e) {
//   $("#about-modal-1").toggleClass("about-modal-show"); //you can list several class names
//   e.preventDefault();
// });

let aboutModalTrigger = document.querySelector(`#about-modal-trigger`);
aboutModalTrigger.addEventListener("click", (e) => {

  let aboutModal = document.querySelector('#about-modal-1');
  if (aboutModal.className == "about-modal about-modal-effect-1") {
    aboutModal.className = "about-modal about-modal-effect-1 about-modal-show";
  } else {
    aboutModal.className = "about-modal about-modal-effect-1";
  }
});

// bug x on modal
// $("#about-modal-close").on("click", function (e) {
//   $("#about-modal-1").toggleClass("about-modal-show"); //you can list several class names
//   e.preventDefault();
// });
let aboutModalClose = document.querySelector(`#about-modal-close`);
aboutModalClose.addEventListener("click", (e) => {

  let aboutModal = document.querySelector('#about-modal-1');
  if (aboutModal.className == "about-modal about-modal-effect-1") {
    aboutModal.className = "about-modal about-modal-effect-1 about-modal-show";
  } else {
    aboutModal.className = "about-modal about-modal-effect-1";
  }
});

// ellipsis button
// $("#ellipsis").on("click", function (e) {
//   $("#ellipsis_menu").toggleClass("ellipsis_menu_show");
//   e.preventDefault();
// });
let ellipsisButton = document.querySelector(`#ellipsis`);
ellipsisButton.addEventListener("click", (e) => {

  let ellipsisMenu = document.querySelector('#ellipsis_menu');
  if (ellipsisMenu.className == "ellipsis_menu") {
    ellipsisMenu.className = "ellipsis_menu ellipsis_menu_show";
  } else {
    ellipsisMenu.className = "ellipsis_menu";
  }
});
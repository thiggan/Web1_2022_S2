$('#about-modal-trigger').on('click', function(e) {
  $('#about-modal-1').toggleClass("about-modal-show"); //you can list several class names 
  e.preventDefault();
});

$('#about-modal-close').on('click', function(e) {
  $('#about-modal-1').toggleClass("about-modal-show"); //you can list several class names 
  e.preventDefault();
});


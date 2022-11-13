$('#about-modal-trigger').on('click', function(e) {
  $('#about-modal-1').toggleClass("about-modal-show"); //you can list several class names 
  e.preventDefault();
});

$('#about-modal-close').on('click', function(e) {
  $('#about-modal-1').toggleClass("about-modal-show"); //you can list several class names 
  e.preventDefault();

});

$('#ellipsis').on('click', function(e){
  $('#ellipsis_menu').toggleClass("ellipsis_menu_show");
  e.preventDefault();
});



$('.parent div').on('click',function(ev) {
  $(ev.currentTarget).fadeTo(500,0);
});

$('#showAll').on('click', function(ev) {
  $('.parent div').fadeTo(0,1);
});
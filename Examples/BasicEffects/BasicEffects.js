$('.parent div').on('click',function(ev) {
  $(ev.currentTarget).hide();
});

$('#showAll').on('click', function(ev) {
  $('.parent div').show();
});
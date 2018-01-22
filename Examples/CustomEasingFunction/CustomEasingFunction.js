$.easing.easeInOutQuad = function (x, t, b, c, d,) {
	if ((t/=d/2) < 1) return c/2*t*t + b;
	return -c/2 * ((--t)*(t-2) - 1) + b;
};

$('.parent div').on('click',function(ev) {
  $(ev.currentTarget).animate({width:200},'fast','easeInOutQuad');
});

$('#stretchAll').on('click', function(ev) {
  $('.parent div').css('width','auto');
});
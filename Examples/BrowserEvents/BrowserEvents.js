$('#cheeseburger').on('scroll', function(ev) {
  console.log('scrolling the cheeseburger div');
});

$(window)
  .on('scroll', function(ev) {
    console.log('scrolling the page');
  })
  .on('resize', function(ev) {
    console.log('resizing the browser to ' + window.outerWidth + 'x' + window.outerHeight);
  })
  .error(function(ev) {
    console.log('an error occurred');
  });

$('#throw').on('click', function(ev) {
  throw "oops";  
});
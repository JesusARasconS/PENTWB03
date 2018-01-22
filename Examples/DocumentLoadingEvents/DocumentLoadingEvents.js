$(window)
  .load(function() {
    var d = new Date();
      console.log('load ' + d.getSeconds() + "." + d.getMilliseconds());
  });

$(function() {
  var d = new Date();
  console.log('ready ' + d.getSeconds() + "." + d.getMilliseconds());
});
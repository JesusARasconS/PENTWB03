$('#myinput')
  .on('keyup',function(ev){
    console.log(ev.which);
  })
  .on('focus', function(ev){
    console.log('focus is important');
  });
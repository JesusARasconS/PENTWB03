$('.parent div').on('click',function(ev) {
  $(ev.currentTarget).animate({width:200},{duration:500});
//});

 //also try width, height, paddingLeft
  //    
  $(ev.currentTarget)
    .css('position','relative')
    .animate(
      {left:20},
      {
        step:function(now,fx){
          console.log('step: ' + now);
        },
        complete:function(){
          console.log('done animating');
        }
      }
    );

});



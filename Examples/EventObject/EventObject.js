$('div').on('click',{something:'here'},function(ev) {
  console.clear();
  console.group(ev.currentTarget.dataset.name);
  console.log('.type: ' + ev.type);
  console.log('.which: ' + ev.which);
  console.log('.timestamp: ' + ev.timeStamp);
  console.log('.target: ' + ev.target);
  console.log('.data: ' + JSON.stringify(ev.data));
  console.groupEnd();
  ev.stopPropagation();
});
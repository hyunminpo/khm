var Links={
  setlinks:function(color){
    var alist=document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
      alist[i].style.color=color;
      i=i+1;
    }
  }
}

var Body={
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;},
  setcolor:function(color){
    document.querySelector('body').style.color=color;
  }
}

function nda(self){
var target=document.querySelector('body')
if(self.value==='night') {
Body.setBackgroundColor('black');
Body.setcolor('white');
self.value='day';
Links.setlinks('powderblue')
}
else {
Body.setBackgroundColor('white');
Body.setcolor('black');
self.value='night';
Links.setlinks('blue')
}
}

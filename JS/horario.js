function showTime(){
    
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    if(hour<10) hour = "0" +hour;
    if(minute<10) minute = "0" +minute;
    if(second<10) second = "0" +second;

 
if(hour + 4 == 24  ){
hour = 0+"0"
var tempo = (hour)+":"+minute+":"+second; 
 document.getElementById("timer").innerHTML = tempo ;
}
else if(hour+ 4 == 25){

hour = "0"+1
var tempo = (hour)+":"+minute+":"+second; 
 document.getElementById("timer").innerHTML = tempo ;
}
else if(hour+ 4 == 26){

    hour = "0"+2
    var tempo = (hour)+":"+minute+":"+second; 
     document.getElementById("timer").innerHTML = tempo ;
    }
else if(hour+ 4 == 27){

 hour = "0"+3
    var tempo = (hour)+":"+minute+":"+second; 
    document.getElementById("timer").innerHTML = tempo ;
    }
// else if(hour + 4 == 13){

// }
else{ 
    var hour = time.getHours();
    var tempo = (hour+4)+":"+minute+":"+second;
    document.getElementById("timer").innerHTML = tempo ;
}

    
   
    
   
    }
    function initTime(){
        setInterval(showTime,1000);
    }
    document.addEventListener('DOMContentLoaded', function() {
        var stream = document.querySelector('.gallery__stream');
        var items = document.querySelectorAll('.gallery__item');
        
        var prev = document.querySelector('.gallery__prev');
        prev.addEventListener('click', function() {
          stream.insertBefore(items[items.length - 1], items[0]);
          items = document.querySelectorAll('.gallery__item');
        });
        
        var next = document.querySelector('.gallery__next');
        next.addEventListener('click', function() {
          stream.appendChild(items[0]);
          items = document.querySelectorAll('.gallery__item');
        });
      });
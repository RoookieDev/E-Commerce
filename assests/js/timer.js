var days = document.getElementById("days");
var hrs = document.getElementById("hrs");
var min = document.getElementById("mins");
var sec = document.getElementById("secs");
var interVal = 0;



function timer(){
    sec.innerText--;
    if(sec.innerText==0){
        sec.innerText=60;
        min.innerText--;
        if(min.innerText==0){
            min.innerText=60;
            hrs.innerText--;
            if(hrs.innerText==0){
                hrs.innerText=24;
                days.innerText--;
            }
        }
    }
    
}

interVal = setInterval("timer()", 1000);






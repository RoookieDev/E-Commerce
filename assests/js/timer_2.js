const timeData = () =>{
    localStorage.setItem("days","30");
    localStorage.setItem("hr","24");
    localStorage.setItem("min","60");
    localStorage.setItem("sec","60");
}
// localStorage.setItem("days","30");
//     localStorage.setItem("hr","24");
//     localStorage.setItem("min","60");
//     localStorage.setItem("sec","60");





var days = localStorage.getItem("days");
var hrs = localStorage.getItem("hr");
var min = localStorage.getItem("min");
var sec = localStorage.getItem("sec");
if(days==null&&hrs==null&&min==null&&sec==null){
    timeData();
}


var days_bx = document.getElementById("days");
var hrs_bx = document.getElementById("hrs");
var min_bx = document.getElementById("mins");
var sec_bx = document.getElementById("secs");


var interVal = 0;


days_bx.innerText = days;
hrs_bx.innerText =hrs;
min_bx.innerText = min;
sec_bx.innerText=sec;

function timer(){
    
    sec--;
    sec_bx.innerText=sec;
    if(sec==0){
        localStorage.setItem("sec",60);
        
        alert("sec")
        min--;
        
        // if(min==0){
        //     localStorage.setItem("min", 60);
        //     hrs--;
        //     if(hrs==0){
        //         localStorage.setItem("hr",24);
        //         days--;
        //     }
        // }    
    }
    localStorage.setItem("sec",sec);
   
    min_bx.innerText=min;
    hrs_bx.innerText=hrs;
    days_bx.innerText=days;
    
   
}
interVal = setInterval("timer()", 100);








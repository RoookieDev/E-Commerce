var swap_img = document.querySelectorAll(".swap__img");
var target_img = document.querySelector("#prev_img");
var target_bx = document.querySelector("#prev_bx");
swap_img.forEach(
    (img, index)=>{
        img.addEventListener("click", function(){
            target_img.src=this.src;
            var bg=this.getAttribute("data-bg");
            target_bx.style.background = bg;
            
        });
});


var swap_img_2 = document.querySelectorAll(".swap_img");
var target_img_2 = document.querySelector("#prev_img_2");
var target_bx_2 = document.querySelector("#prev_bx_2");
swap_img_2.forEach(
    (img, index)=>{
        img.addEventListener("click", function(){
            target_img_2.src=this.src;
            var bg=this.getAttribute("data-bg");
            target_bx_2.style.background = bg;
            
        });
});


var sofa_prev = document.querySelector("#sofa_prev");
var sofa_img = document.querySelectorAll(".sofa_slide");

sofa_img.forEach(
    (slide)=>{
        slide.addEventListener("click", function(){
            sofa_prev.src=this.src;
        });
})
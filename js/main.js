"use strict " ;
let allColor = document.querySelectorAll(".mainColor span") ; 
let iconBtn  = document.querySelector("#icon") ;
$(".mainColor span").eq(0).css("backgroundColor" , "#39B5E0");
$(".mainColor span").eq(1).css("backgroundColor" , "#0081C9");
$(".mainColor span").eq(2).css("backgroundColor" , "#86E5FF");
$(".mainColor span").eq(3).css("backgroundColor" , "#144272");
$(".mainColor span").eq(4).css("backgroundColor" , "#2C74B3");

allColor.forEach(element => {
    element.addEventListener("click" , function() {
     let changeBG =    this.style.backgroundColor ;
     document.body.style.backgroundColor = `${changeBG}` ;
     localStorage.setItem("changeBG" , changeBG);
    })
});
if(localStorage.getItem("changeBG") != null) 
{
    document.body.style.backgroundColor = localStorage.getItem("changeBG");
}
iconBtn.addEventListener("click" , function() {
    let mainColor = document.querySelector(".mainColor");
    console.log(mainColor.scrollWidth+15) ;
    if(mainColor.style.maxWidth  ) {
        mainColor.style.maxWidth =  null;
        mainColor.style.padding  = "0" 
    } else {
        mainColor.style.maxWidth = mainColor.scrollWidth+50 + "px";
        mainColor.style.padding  = " 11px 21px " 
    }
   
})

let accordion = document.querySelectorAll(".accordion") ;
console.log(accordion) ;
accordion.forEach(element => {
    element.addEventListener("click", function() {
       this.classList.toggle("active");
       let Sibling = this.nextElementSibling ;
       console.log(Sibling) ;
       let maxHeight = Sibling.scrollHeight ;
       console.log(maxHeight);
       if(Sibling.style.maxHeight) {
        Sibling.style.maxHeight = null 
       } else {
        Sibling.style.maxHeight = maxHeight + "px" ;
       }
      
    }) ;
});
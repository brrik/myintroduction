let positionTop     = 0;

window.addEventListener("scroll",(e) =>{
    positionTop  = window.scrollY;
    console.log(positionTop);
    if(positionTop>1100){
        document.getElementById("MainDiv").style.display = "none";
        document.getElementById("ErrDiv").style.display = "block";
    }
});

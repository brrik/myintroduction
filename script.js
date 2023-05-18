const scrollHeight = document.getElementById("MainDiv").offsetHeight+30;
const pageMostBottom = scrollHeight - window.innerHeight;
let PhotoBln = false;

console.log(scrollHeight)
console.log(pageMostBottom)


window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop)
    if (scrollTop >= 100 && PhotoBln==false){
        PhotoBln=true;
        addPhoto();
    }else if (scrollTop >= pageMostBottom) {
        document.getElementById("MainDiv").style.display = "none";
        document.getElementById("ErrDiv").style.display = "block";
    }
});

function addPhoto(){
    let i = 0;
    let x = 0.0;
    let intID = 0;
    intID = setInterval(() => {
        if(i>100){
            clearInterval(intID);
            setTimeout(altShow, 1000);
        };
        i += 1;
        x = i * 0.01;
        document.getElementById("myPhoto2").style.opacity = x;
        document.getElementById("myPhoto").style.opacity = 1 - x;
        document.getElementById("myPhoto").style.width = 1 - x;
        console.log(i);
    }, 50);
}

function altShow(){
    let i = 0;
    let x = 0.0;
    let intID = 0;
    intID = setInterval(() => {
        if(i>100){
            clearInterval(intID);
        };
        i += 1;
        x = i * 0.01;
        document.getElementById("photoAlt").style.opacity = x;
        console.log(i);
    }, 50);
}

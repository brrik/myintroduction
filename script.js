const scrollHeight = document.getElementById("MainDiv").offsetHeight;
const pageMostBottom = scrollHeight - window.innerHeight;
console.log(scrollHeight)
console.log(pageMostBottom)

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop)
    if (scrollTop >= pageMostBottom) {
        document.getElementById("MainDiv").style.display = "none";
        document.getElementById("ErrDiv").style.display = "block";
    }
});

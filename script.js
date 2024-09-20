const scrollHeight = document.getElementById("MainDiv").offsetHeight+30;
const pageMostBottom = scrollHeight - window.innerHeight-20;

console.log(scrollHeight)
console.log(pageMostBottom)


// スクロール時にイベントを監視
window.addEventListener('scroll', function() {
    // ページ全体の高さ
    const documentHeight = document.documentElement.scrollHeight - 30;
    
    // 現在のスクロール位置 + ウィンドウの高さ
    const currentScroll = window.scrollY + window.innerHeight;
    
    // ページの最後までスクロールしたかどうかを確認
    if (currentScroll >= documentHeight) {
        // 関数を発火させる
        document.getElementById("MainDiv").style.display = "none";
        document.getElementById("ErrDiv").style.display = "block";
    }
});


async function addPhoto(){
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

async function altShow(){
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

setTimeout(() => {
    addPhoto();
}, (5000));
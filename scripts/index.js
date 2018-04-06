portfolio1.onclick=function(){
    portfolioBar.className="bar state-1";
}
portfolio2.onclick=function(){
    portfolioBar.className="bar state-2";
}
portfolio3.onclick=function(){
    portfolioBar.className="bar state-3";
}

welcome.classList.remove('active');

// header
setTimeout(function(){
    yyy()
}, 3000);
 
window.onscroll=function(){
    if(scrollY>0){
        header.classList.add('sticky');
    }else{
       header.classList.remove('sticky');
    }
    yyy()
    
}//屏幕划动header出现背景
function yyy(){
    let sectionTags=document.querySelectorAll('[data-x]')
    for(let i=0;i<sectionTags.length;i++){
        sectionTags[i].classList.add('offset');
    }
    let minIndex=0
    for(let i=1;i<sectionTags.length;i++){
        if(Math.abs(sectionTags[i].offsetTop-window.scrollY)<Math.abs(sectionTags[minIndex].offsetTop-window.scrollY)){
            minIndex=i
        }
    }
    sectionTags[minIndex].classList.remove('offset')
    let id=sectionTags[minIndex].id
    let a=document.querySelector('a[href="#'+id+'"]')
    let li=a.parentNode
    let brothersAndMe=li.parentNode.children
    for(let i=0;i<brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}

let headerNav=document.getElementById('headerNav')
let liTags=headerNav.getElementsByTagName('li');

for(let i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function(x){
        let li=x.currentTarget.classList.add('active');
    }

    liTags[i].onmouseleave=function(x){
        let li=x.currentTarget.classList.remove('active');
    }
}//header中nav的二级菜单


let aTags=document.querySelectorAll("ul.nav>li>a")
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
for(let i=0;i<aTags.length;i++){
    aTags[i].onclick=function(x){
        x.preventDefault()
        let a=x.currentTarget;
        let href=a.getAttribute('href');
        let element=document.querySelector(href);
        let top=element.offsetTop

        let currentTop=window.scrollY
        let targetTop=top-80
        let s=targetTop-currentTop
        var t=Math.abs((s/100)*300)
        if (t>500){t=500}
        var coords = {y: currentTop};
        var tween = new TWEEN.Tween(coords) 
            .to({y:targetTop}, t) 
            .easing(TWEEN.Easing.Quadratic.InOut) 
            .onUpdate(function() {
                window.scrollTo(0,coords.y)
            })
            .start();          
    }
}//header中点击相应nav，跳转到页面中相应部分的位置
// var coords = { x: 0, y: 0 };
// var tween = new TWEEN.Tween(coords) 
//         .to({ x: 300, y: 200 }, 1000) 
//         .easing(TWEEN.Easing.Quadratic.Out) 
//         .onUpdate(function() {
//             box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
//         })
//         .start(); 
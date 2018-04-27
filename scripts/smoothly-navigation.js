
!function(){
    var view=document.querySelector('ul.nav')
    var controller={
        view:null,
        init:function(){
            this.view=view;
            this.initAnimation()
            this.bindEvents()
        },
        initAnimation:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement:function(element){
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
        },
        bindEvents:function(){
            let aTags=this.view.querySelectorAll("li>a")
            for(let i=0;i<aTags.length;i++){
                aTags[i].onclick=(x)=>{
                    x.preventDefault()
                    let a=x.currentTarget;
                    let href=a.getAttribute('href');
                    let element=document.querySelector(href);
                    this.scrollToElement(element);       
                }
            }
        }
    }
    controller.init(view);
}.call()




//header中点击相应nav，跳转到页面中相应部分的位置
// var coords = { x: 0, y: 0 };
// var tween = new TWEEN.Tween(coords) 
//         .to({ x: 300, y: 200 }, 1000) 
//         .easing(TWEEN.Easing.Quadratic.Out) 
//         .onUpdate(function() {
//             box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
//         })
//         .start(); 
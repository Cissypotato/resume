
!function(){
    findClosestAndRemoveOffset()
    window.addEventListener('scroll',function(){
        findClosestAndRemoveOffset()
    })



    function findClosestAndRemoveOffset(){
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


}.call()




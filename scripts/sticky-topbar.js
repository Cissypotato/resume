
!function(){
    var view=document.querySelector('#headerNav')
    var controller={
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
        },
        bindEvents:function(){
            this.view=view
            window.addEventListener('scroll',(x)=>{
                if(scrollY>0){
                    this.active()
                }else{
                   this.deactive()
                }
            })
        },
        active:function(){
            header.classList.add('sticky');
        },
        deactive:function(){
            header.classList.remove('sticky');
        }
    }
    controller.init(view) 

}.call()

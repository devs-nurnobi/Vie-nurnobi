
var nav=document.getElementById('nav');
window.onscroll=function(){
    if(window.pageYOffset > 80){
        
        nav.style.borderBottom= "2px solid #2b2c2f";
        nav.style.background= "rgba(1,1,1,.9)";
    }
    else{
        nav.style.background="transparent";
        nav.style.borderBottom="none";
    }
}

      
$('.feedback-item').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
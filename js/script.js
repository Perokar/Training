
// // Определение устройства 

const isMobile = {
    Android: function(){
    return navigator.userAgent.match(/Android/i);
},
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    Any: function(){
       return(
           isMobile.Android()||
           isMobile.BlackBerry()||
           isMobile.iOS()||
           isMobile.Windows()||
           isMobile.Opera());
       

    }    
};
if (isMobile.Any()){
        document.body.classList.add('_touch')
        let menuArrow = document.querySelectorAll('.menu__arrow');
        if (menuArrow.length>0){
            for(let i=0; i<menuArrow.length; i++){
                menuArrow[i].addEventListener("click",function(e){
                    menuArrow[i].parentElement.classList.toggle("_active");
                });
            }
        }
}
else {
    document.body.classList.add("_pc");
}

//Плавная прокрутка 

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if (menuLinks.length>0){
    menuLinks.forEach(menuLink=>{
        menuLink.addEventListener("click", onMenuClick);
        console.log(menuLink);
    });
}

function onMenuClick(e){
    const menuLink = e.target;
    console.log(document.querySelector(menuLink.dataset.goto));
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;
        console.log(gotoBlockValue);
        window.scrollTo({
            top:gotoBlockValue,
            behavior:"smooth"
        });
    }

    e.preventDefault();
 
}
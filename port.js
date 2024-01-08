var typed = new Typed('.typed',{
    strings:['web designer','youtuber', 'programar','web devoloper'],
    typeSpeed:80,
    backSpeed:80,
    
})
var typed = new Typed('.typed-2',{
    strings:['web designer','youtuber', 'programar','web devoloper'],
    typeSpeed:80,
    backSpeed:80,
    
})

// active faq
let faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open')
        //iqo
        const icon = faq.querySelector('.faq-iqon i')
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus";
        }else{
            icon.className = "fa-solid fa-plus"
        }
    })
})

     // NAVBAR SACTION//

const navmenu = document.querySelector('.nav-menu');
const openmenu = document.querySelector('#open-menu-button');
const closemenu = document.querySelector('#close-menu-button');

openmenu.addEventListener('click',()=>{
    navmenu.style.display = 'flex'
    closemenu.style.display = 'inline-block'
    openmenu.style.display = 'none'
})
const closenav = ()=>{
    navmenu.style.display = 'none'
    closemenu.style.display = 'none'
    openmenu.style.display = 'inline-block'   
}
closemenu.addEventListener('click', closenav)


window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.
    toggle('window-scroll',window.scrollY>100)
})


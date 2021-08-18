/*================= Menu show Y hidden ================= */ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*======== Menu show =========*/
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======== Menu hidden =========*/
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //khi click vao moi link,thi menu duoc an di
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for ( i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
        
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills_open'
    }
}      

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')       
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    //khi scroll lon hon 200 chieu cao khung, them class scroll-header vao header
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the sroll is higher than 500 viewport heght, add the show-scroll class to the tag with the scroll
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic (if use selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun' 

//We validate if the user perviously chose a topic
if(selectedTheme){
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Active / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*-- ====== Filter Project========= --*/
// function changeItem(type, element) {
//     let tabs = document.getElementsByClassName('category');
//     let loop = tabs.length;
//     for (let i = 0; i < loop; i++){
//         tabs[i].style.background = 'transparent';
//         tabs[i].style.color = '#6d6a7c';
//         tabs[i].style.fontWeight = '500';
        
//     }
    
//     element.style.background = '#f0eefc'; 
//     element.style.color = '#6e57e0';
//     element.style.fontWeight = '700';
// }  

const filter_button = document.querySelectorAll('.category')
const item_ol = document.querySelectorAll('.item-ol')
Array.from(filter_button).forEach(function(button) {
    element.addEventListener('click', function(event) {
        for(let i = 0; i < filter_button.length; i++) {
            filter_button[i].classList.remove('active');
        }
        this.classList.add('active');

        let buttonAttr = event.target.dataset.filter;

        Array.from(item_ol).forEach(function(ele){
            let elementAttr = ele.dataset.item;
            if(buttonAttr === elementAttr || buttonAttr === 'all') {
                ele.style.display = 'block';
            }else{
                ele.style.display = 'none';
            }
        })
    })
})

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
    navClose.addEventListener('click' () =>{
        navMenu.classList.remove('show-menu')
    })
}
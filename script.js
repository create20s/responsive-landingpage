const navlinks=document.querySelector('#navlink');
const toggleButton=document.querySelector('#menu-toggle');

toggleButton.addEventListener('click', () =>{
     
    navlinks.classList.toggle('active');
})
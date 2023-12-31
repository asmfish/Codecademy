const toggle = document.getElementById('toggle-menu');

const toggleMenu = () =>{
    const navMenu = document.getElementById('navMenu');

    if(navMenu.style.display === 'block'){
        navMenu.style.display = 'none';
    }
    else{
        navMenu.style.display = 'block';
    }

    toggle.classList.toggle('active');
    const menu = document.getElementById('menu-drawer');
    menu.classList.toggle('open')
}

toggle.addEventListener('click', toggleMenu);


const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');

const navArr = [];
for (let i = 1; i <= 5; i++) {
    let nav = document.getElementById(`nav-${i}`);
    navArr.push(nav);
}

function animatedNav(itemOne, itemTwo) {
    navArr.forEach((nav, i) => {
        nav.classList.replace(`slide-${itemOne}-${i+1}`, `slide-${itemTwo}-${i+1}`);
    });
}

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        animatedNav('out', 'in');
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        animatedNav('in', 'out');
    }
}

menuBars.addEventListener('click', toggleNav);
navArr.forEach((nav)=>{
    nav.addEventListener('click', toggleNav)
});
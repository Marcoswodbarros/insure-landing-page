var openMenu = document.querySelector('.header__nav--firstbtn');
var closeMenu = document.querySelector('.header__nav--secondbtn');

openMenu.addEventListener('click', function () {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', function (){
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
})
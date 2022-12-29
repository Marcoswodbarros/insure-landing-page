var openMenu = document.querySelector('.header__nav--firstbtn');
var closeMenu = document.querySelector('.header__nav--secondbtn');
var introSection = document.querySelector('.main__section--intro');
var subMenu = document.querySelector('.submenu');
var sectionContainer = document.querySelector('.section__container');
var sectionFindOut = document.querySelector('.findout');
var footer = document.querySelector('footer');

openMenu.addEventListener('click', function () {
    openMenu.style.display = 'none';
    introSection.style.display = 'none';
    sectionContainer.style.display = 'none';
    sectionFindOut.style.display = 'none';
    footer.style.display = 'none';
    closeMenu.style.display = 'block';
    subMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', function (){
    closeMenu.style.display = 'none';
    subMenu.style.display = 'none';
    openMenu.style.display = 'block';
    introSection.style.display = 'block';
    sectionContainer.style.display = 'block';
    sectionFindOut.style.display = 'flex';
    footer.style.display = 'block';
})
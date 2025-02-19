const subBtns = document.querySelectorAll(".sub-btn");

for (let i = 0; i < subBtns.length; i++) {
    subBtns[i].addEventListener("click", (e) => {
    e.preventDefault();
    const arrowIcon = e.currentTarget.querySelector(".arrow");
    const subMenu = e.currentTarget.nextElementSibling;
    arrowIcon.classList.toggle("rotate");
    subMenu.classList.toggle("show");
    });
}

const subBtns2 = document.querySelectorAll(".sub-btn2");

for (let i = 0; i < subBtns2.length; i++) {
    subBtns2[i].addEventListener("click", (e) => {
    e.preventDefault();
    const arrowIcon2 = e.currentTarget.querySelector(".arrow2");
    const subMenu2 = e.currentTarget.nextElementSibling;
    arrowIcon2.classList.toggle("rotate");
    subMenu2.classList.toggle("show2");
    });
}


const menuBtn = document.querySelector('.menu-btn');
 
const sideBar = document.querySelector('.side-bar');
 
menuBtn.addEventListener('click', function() {
    sideBar.classList.add('active');
});
 
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function() {
    sideBar.classList.remove('active');
});


document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close-btn-not');

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.parentElement.style.display = 'none';
        });
    });
});
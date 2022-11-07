const rwdMenu = document.getElementById("rwdMenu"),
    menuClose = document.getElementById("menuClose"),
    menuOpen = document.getElementById("menuOpen"),
    rwdNav = document.querySelector(".menu__rwd__open"),
    course = document.getElementById("course"),
    subMenu = document.getElementById("subMenu"),
    login = document.querySelector(".header__nav__login"),
    dialogLogin = document.getElementById("dialogLogin"),
    fresh = document.getElementById("fresh"),
    loginBtn = document.getElementById("login"),
    usernameTypo = document.getElementById("usernameTypo"),
    cfmPw = document.getElementById("cfmPw"),
    btnLogin = document.querySelector(".btn__login"),
    btnRegister = document.querySelector(".btn__register"),
    smallHr = document.getElementById("smallHr"),
    socialLogin = document.getElementById("socialLogin"),
    closeDialog = document.getElementById("closeDialog"),
    body = document.getElementById("body"),
    sloganClose = document.getElementById("sloganClose"),
    videoSlogan = document.getElementById("videoSlogan")
    ;

// rwd menu

rwdMenu.addEventListener("click", () => {
    menuClose.classList.toggle("display__none");
    menuOpen.classList.toggle("display__none");
    rwdNav.classList.toggle("menu__rwd__show");
});
course.addEventListener("click", () => {
    subMenu.classList.toggle("rwd__menu__position");
});

// dialog 

login.addEventListener("click", () => {
    dialogLogin.showModal();
    body.classList.add("scrollLock");
});
dialogLogin.addEventListener('click', (e) => {
    const dialogWindow = dialogLogin.getBoundingClientRect();
    let onDialog = (dialogWindow.top <= e.clientY &&
        e.clientY <= dialogWindow.top + dialogWindow.height &&
        dialogWindow.left <= e.clientX &&
        e.clientX <= dialogWindow.left + dialogWindow.width);
    if (!onDialog) {
        dialogLogin.close(); body.classList.remove("scrollLock");
    }
});
closeDialog.addEventListener("click", () => {
    dialogLogin.close();
    body.classList.remove("scrollLock");
});

function freshActive() {
    loginBtn.classList.remove("toggle");
    fresh.classList.add("toggle");
    usernameTypo.classList.remove("inactive");
    cfmPw.classList.remove("inactive");
    btnLogin.classList.add("inactive");
    btnRegister.classList.remove("inactive");
    smallHr.classList.add("inactive");
    socialLogin.classList.add("inactive");
};

function freshInactive() {
    loginBtn.classList.add("toggle");
    fresh.classList.remove("toggle");
    usernameTypo.classList.add("inactive");
    cfmPw.classList.add("inactive");
    btnLogin.classList.remove("inactive");
    btnRegister.classList.add("inactive");
    smallHr.classList.remove("inactive");
    socialLogin.classList.remove("inactive");
};

// homePage video slogan 
const videoSloganTop = videoSlogan.offsetTop;
this.addEventListener("scroll", () => {
    let scrollDetector = this.scrollY;
    if (scrollDetector < videoSloganTop) {
        videoSlogan.classList.remove("display__none");
    } else {
        videoSlogan.classList.add("display__none");
    }
});
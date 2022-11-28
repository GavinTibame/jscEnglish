
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
    readBar = $("#readBar"),
    body = document.getElementById("body"),
    sloganClose = document.getElementById("sloganClose"),
    videoSlogan = document.getElementById("videoSlogan"),
    btnBackTop = document.getElementById("btnBackTop"),
    footer = document.getElementById("footer")
    ;

// rwd menu

rwdMenu.addEventListener("click", () => {
    menuClose.classList.toggle("display__none");
    menuOpen.classList.toggle("display__none");
    rwdNav.classList.toggle("menu__rwd__show");
    body.classList.toggle("scrollLock");
});
course.addEventListener("click", () => {
    subMenu.classList.toggle("rwd__menu__position");
    course.classList.toggle("rotate__after");
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

$(".btn__dialog").on("click", () => {
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

// resizeDetector

const scrollArray = [],
    navigationTable = {};
if (sloganClose) {
    scrollArray.push(sloganClose);
}
scrollArray.push(footer);
scrollArray.forEach(object => {
    const sid = object.id,
        section = object,
        top = object.offsetTop;
    navigationTable[sid] = {
        section,
        top
    };
});

window.addEventListener("resize", () => {
    for (const sid in navigationTable) {
        const section = navigationTable[sid].section,
            top = section.offsetTop;
        navigationTable[sid].top = top;
    };
});

// scrollDetector

window.addEventListener("scroll", () => {
    if (navigationTable.sloganClose) {
        const scrollDetector = this.scrollY + readBar[0].offsetTop + readBar[0].offsetHeight;
        if (scrollDetector < navigationTable.sloganClose.top) {
            videoSlogan.classList.remove("display__none");
        } else { videoSlogan.classList.add("display__none"); };
    };
});

window.addEventListener("scroll", () => {
    const scrollDetector = this.scrollY + readBar[0].offsetTop,
        percentage = scrollDetector / navigationTable.footer.top * 100 + '%';
    navigationTable.footer.top = footer.offsetTop;
    // console.log(scrollDetector, percentage);
    $("#readBar").find("div").css('width', percentage);
    if (scrollDetector < 100) {
        $("#readBar").removeClass("display__block");
    } else { $("#readBar").addClass("display__block"); }
});

window.addEventListener("scroll", () => {
    const scrollDetector = this.scrollY + readBar[0].offsetTop + readBar[0].offsetHeight;
    if (scrollDetector < 380) {
        btnBackTop.classList.add("backTop__footer");
    } else if (scrollDetector > 380 &&
        scrollDetector < (navigationTable.footer.top * .8)) {
        btnBackTop.classList.remove("backTop__footer");
    } else { btnBackTop.classList.add("backTop__footer"); };
});

// back to top btn

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
};
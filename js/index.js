const login = document.querySelector(".header__nav__login"),
    dialogLogin = document.getElementById("dialogLogin"),
    fresh = document.getElementById("fresh"),
    loginBtn = document.getElementById("login"),
    usernameTypo = document.getElementById("usernameTypo"),
    cfmPw = document.getElementById("cfmPw"),
    btnLogin = document.querySelector(".btn__login"),
    btnRegister = document.querySelector(".btn__register"),
    smallHr = document.getElementById("smallHr"),
    socialLogin = document.getElementById("socialLogin"),
    closeDialog = document.getElementById("closeDialog");

// dialog 

login.addEventListener("click", () => {
    dialogLogin.showModal();
});
dialogLogin.addEventListener('click', (e) => {
    const dialogWindow = dialogLogin.getBoundingClientRect();
    console.log(`top${dialogWindow.top}`);
    let onDialog = (dialogWindow.top <= e.clientY && e.clientY <= dialogWindow.top + dialogWindow.height
        && dialogWindow.left <= e.clientX && e.clientX <= dialogWindow.left + dialogWindow.width);
    if (!onDialog) {
        dialogLogin.close();
    }
});
closeDialog.addEventListener("click", () => { dialogLogin.close() })

// .stop-scrolling {
//     height: 100%;
//     overflow: hidden;
//   }

// login / fresh

function ctnToggle() {
    loginBtn.classList.toggle("toggle");
    fresh.classList.toggle("toggle");
    usernameTypo.classList.toggle("inactive");
    cfmPw.classList.toggle("inactive");
    btnLogin.classList.toggle("inactive");
    btnRegister.classList.toggle("inactive");
    smallHr.classList.toggle("inactive");
    socialLogin.classList.toggle("inactive");
};

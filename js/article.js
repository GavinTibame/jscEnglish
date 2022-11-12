const dialogSubscribe = document.getElementById("dialogSubscribe")
    ;

dialogSubscribe.addEventListener('click', (e) => {
    const dialogWindow = dialogSubscribe.getBoundingClientRect();
    let onDialog = (dialogWindow.top <= e.clientY &&
        e.clientY <= dialogWindow.top + dialogWindow.height &&
        dialogWindow.left <= e.clientX &&
        e.clientX <= dialogWindow.left + dialogWindow.width);
    if (!onDialog) {
        dialogSubscribe.close(); body.classList.remove("scrollLock");
    }
});

$("#btnBell").on("click", () => {
    dialogSubscribe.showModal();
    body.classList.add("scrollLock");
})
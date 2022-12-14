$(document).ready(function () {
    const subscribe = document.getElementById("subscribe"),
    subscribeForm = document.getElementById("sheetdb-form")
    ;

    $(".downSize").on("click", () => {
        $("#btnBell").addClass("display__block");
        $("#sectionArticle").addClass("btn__active");
        subscribe.classList.add("subscribe__smallSize");
    });

    $("#btnBell").on("click", () => {
        $("#btnBell").removeClass("display__block");
        $("#sectionArticle").removeClass("btn__active");
        subscribe.classList.remove("subscribe__smallSize");
    });

    window.addEventListener("scroll", () => {
        const scrollDetector = this.scrollY + readBar[0].offsetTop + readBar[0].offsetHeight;
        if (subscribe) {
            if (scrollDetector < 380) {
                btnBackTop.classList.add("backTop__footer");
            } else if (scrollDetector > 380 &&
                scrollDetector < (navigationTable.footer.top * .8)) {
                btnBackTop.classList.remove("backTop__footer");
            } else {
                btnBackTop.classList.add("backTop__footer");
            };
        };
    });

    window.addEventListener("resize", () => {
        if (subscribe) {
            if (window.innerWidth < 1085) {
                $("#btnBell").addClass("display__block");
                $("#sectionArticle").addClass("btn__active");
                subscribe.classList.add("subscribe__smallSize");
            } else {
                $("#btnBell").removeClass("display__block");
                $("#sectionArticle").removeClass("btn__active");
                subscribe.classList.remove("subscribe__smallSize");
            };
        };
    });

    subscribeForm.addEventListener("submit", e => {
        e.preventDefault();
        fetch(subscribeForm.action, {
            method: "POST",
            body: new FormData(subscribeForm)
        }).then(
            response => response.json()
        ).then(
            subscribeForm.reset()
        ).then(
            $("#btnBell").addClass("display__block")
        ).then(
            $("#sectionArticle").addClass("btn__active")
        ).then(
            subscribe.classList.add("subscribe__smallSize")
        )
    });
});
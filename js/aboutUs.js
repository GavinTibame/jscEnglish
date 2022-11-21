const contactForm = document.getElementById("sheetdb-form");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    fetch(contactForm.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then(
        contactForm.reset()
    );
});
$(".textArea").on("keyup", function () {
    let textAreaContent = $(this).val(),
        contentArray = textAreaContent.split("\n"),
        count = contentArray.length,
        paddingAddBorder = $(this).outerHeight() - $(this).height();
    $(this).css("height", (150 + 8 * count + paddingAddBorder) + "px");
});
$("div.content dl a").on("click", function () {
    const scrollToItem = document.getElementById(this.dataset.target);
    window.scrollTo({ top: scrollToItem.offsetTop - 85, behavior: "smooth" });
})
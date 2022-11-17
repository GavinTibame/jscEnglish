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
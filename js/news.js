const subscribeForm = document.getElementById("sheetdb-form");
subscribeForm.addEventListener("submit", e => {
    e.preventDefault();
    fetch(subscribeForm.action, {
        method: "POST",
        body: new FormData(subscribeForm)
    }).then(
        response => response.json()
    ).then(
        subscribeForm.reset()
    )
});
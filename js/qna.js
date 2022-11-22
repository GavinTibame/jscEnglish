$(document).ready(function () {
    const qnaList = document.querySelectorAll(".qna__col input.check__ques")
        ;

    const qnaTable = {};
    qnaList.forEach(checkbox => {
        const answerId = checkbox.dataset.target,
            answer = document.getElementById(answerId)
            ;
        qnaTable[answerId] = { checkbox, answer };
        checkbox.addEventListener("click", () => {
            answer.classList.toggle("display__block");
            checkbox.nextElementSibling.childNodes[1].classList.toggle("rotate")
        })
    });

    $("div.content dl a").on("click", function () {
        const scrollToItem = document.getElementById(this.dataset.target);
        window.scrollTo({ top: scrollToItem.offsetTop - 80, behavior: "smooth" });
    })
});
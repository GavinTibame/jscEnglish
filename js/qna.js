const qnaList = document.querySelectorAll(".qna__col input.check__ques")
    ;

const qnaTable = {};
qnaList.forEach(checkbox => {
    const answerId = checkbox.dataset.target,
        answer = document.getElementById(answerId)
        ;
    console.log(checkbox.nextElementSibling.childNodes[1]);
    qnaTable[answerId] = { checkbox, answer };
    checkbox.addEventListener("click", () => {
        answer.classList.toggle("display__block");
        checkbox.nextElementSibling.childNodes[1].classList.toggle("rotate")
    })
});


const lecturerList = [
    {
        id: "1",
        name: "沈維哲",
        subject: ["英文學科"],
        img: "img/teacher/psed/amy-hirschi-b3AYk8HKCl0-unsplash.png"
    },

], lecturerItem = document.querySelectorAll(".list div.inner"),
    text = [];
lecturerItem.forEach(div => {
    console.log(div.children[0].src.replace("http://127.0.0.1:5501/", ""));
    console.log(div.children[1].children[0].innerText);
    console.log(div.children[1].children[1].innerText);
    text.push(div.children[0].src.replace("http://127.0.0.1:5501/", ""));
    text.push(div.children[1].children[0].innerText);
    text.push(div.children[1].children[1].innerText);
    var data = new Blob([text], { type: 'text/plain' });
    textFile = window.URL.createObjectURL(data);
    return textFile;
})
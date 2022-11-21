$(document).ready(function () {
    const lecturerList = [
        {
            id: 1,
            img: "img/teacher/psed/amy-hirschi-b3AYk8HKCl0-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "沈維哲", price: 350
        },
        {
            id: 2,
            img: "img/teacher/psed/annika-palmari-RIt88XBR3G0-unsplash.png",
            subject: [
                "理化學科"
            ],
            name: "宋可其", price: 350
        },
        {
            id: 3,
            img: "img/teacher/psed/austin-distel-7uoMmzPd2JA-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "蔡穎香", price: 350
        },
        {
            id: 4,
            img: "img/teacher/psed/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "姜卉云", price: 350
        },
        {
            id: 5,
            img: "img/teacher/psed/christina-wocintechchat-com-50TkCaP8M3A-unsplash.png",
            subject: [
                "理化學科"
            ],
            name: "陳建霖", price: 350
        },
        {
            id: 6,
            img: "img/teacher/psed/christina-wocintechchat-com-kXfBDl0fR1E-unsplash.png",
            subject: [
                "物理學科"
            ],
            name: "鞏曉雯", price: 350
        },
        {
            id: 7,
            img: "img/teacher/psed/christina-wocintechchat-com-PlikkWB79qs-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "甘盈君", price: 350
        },
        {
            id: 8,
            img: "img/teacher/psed/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "林聖仁", price: 350 + 8
        },
        {
            id: 9,
            img: "img/teacher/psed/good-faces-knoww5xIlWc-unsplash.png",
            subject: [
                "理化學科"
            ],
            name: "楊雅俐", price: 350 + 8
        },
        {
            id: 10,
            img: "img/teacher/psed/itay-verchik-YmQ8TrsieE4-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "葉亦迪", price: 350 + 8
        },
        {
            id: 11,
            img: "img/teacher/psed/juan-encalada-WC7KIHo13Fc-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "吳左茹", price: 350 + 8
        },
        {
            id: 12,
            img: "img/teacher/psed/jurica-koletic-7YVZYZeITc8-unsplash.png",
            subject: [
                "理化學科"
            ],
            name: "王耀合", price: 350 + 8
        },
        {
            id: 13,
            img: "img/teacher/psed/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.png",
            subject: [
                "物理學科"
            ],
            name: "傅正雅", price: 350 + 8
        },
        {
            id: 14,
            img: "img/teacher/psed/linkedin-sales-solutions-QgYvORVDdd8-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "韓軒豪", price: 350 + 8
        },
        {
            id: 15,
            img: "img/teacher/psed/michael-dam-mEZ3PoFGs_k-unsplash.png",
            subject: [
                "英文學科"
            ],
            name: "樂俊彥", price: 350 + 8
        },
        {
            id: 16,
            img: "img/teacher/psed/omar-yehia-toCKeKuQpL0-unsplash.png",
            subject: [
                "理化學科"
            ],
            name: "張隆坤", price: 350 + 8
        },
        {
            id: 17,
            img: "img/teacher/psed/pexels-andrea-piacquadio-3756679.png",
            subject: [
                "英文學科"
            ],
            name: "傅旭堅", price: 350 + 8
        },
        {
            id: 18,
            img: "img/teacher/psed/pexels-andrea-piacquadio-3771089.png",
            subject: [
                "英文學科"
            ],
            name: "張苑利", price: 350 + 8
        },
        {
            id: 19,
            img: "img/teacher/psed/pexels-andrea-piacquadio-3785104.png",
            subject: [
                "理化學科"
            ],
            name: "楊政峰", price: 350 + 8
        },
        {
            id: 20,
            img: "img/teacher/psed/pexels-andrea-piacquadio-3824771.png",
            subject: [
                "物理學科"
            ],
            name: "陳順宜", price: 350 + 8
        },
        {
            id: 21,
            img: "img/teacher/psed/pexels-christina-morillo-1181695.png",
            subject: [
                "英文學科"
            ],
            name: "周忠翰", price: 350 + 8
        },
        {
            id: 22,
            img: "img/teacher/psed/pexels-cottonbro-4098274.png",
            subject: [
                "英文學科"
            ],
            name: "許雅名", price: 350 + 8
        },
        {
            id: 23,
            img: "img/teacher/psed/pexels-dellon-thomas-3394347.png",
            subject: [
                "理化學科"
            ],
            name: "蔡秉岑", price: 350 + 8
        },
        {
            id: 24,
            img: "img/teacher/psed/pexels-dinielle-de-veyra-4195342.png",
            subject: [
                "英文學科"
            ],
            name: "許智年", price: 350 + 8
        },
        {
            id: 25,
            img: "img/teacher/psed/pexels-dziana-hasanbekava-5480687.png",
            subject: [
                "英文學科"
            ],
            name: "郭夢燦", price: 350 + 8
        },
        {
            id: 26,
            img: "img/teacher/psed/pexels-emmy-e-2381069.png",
            subject: [
                "理化學科"
            ],
            name: "陳珮喜", price: 350 + 8
        },
        {
            id: 27,
            img: "img/teacher/psed/pexels-karolina-grabowska-4467687.png",
            subject: [
                "物理學科"
            ],
            name: "柳東霞", price: 350 + 8
        },
        {
            id: 28,
            img: "img/teacher/psed/pexels-mentatdgt-936564.png",
            subject: [
                "英文學科"
            ],
            name: "朱財水", price: 350 + 8
        },
        {
            id: 29,
            img: "img/teacher/psed/tamarcus-brown-29pFbI_D1Sc-unsplash.png",
            subject: [
                "物理學科"
            ],
            name: "曹駿琇", price: 350 + 8
        },
        {
            id: 30,
            img: "img/teacher/psed/tyler-nix-ZGa9d1a_4tA-unsplash.png",
            subject: [
                "理化學科"
            ],
            name: "張偉智", price: 350 + 8
        },
        {
            id: 31,
            img: "img/teacher/psed/willian-souza-p5BoBF0XJUA-unsplash.png",
            subject: [
                "物理學科"
            ],
            name: "何冠廷", price: 350 + 8
        },
        {
            id: 32,
            img: "img/teacher/psed/yogendra-singh-HrpYHchKb5Y-unsplash.png",
            subject: [
                "物理學科"
            ],
            name: "全峻豪", price: 350 + 8
        },
        {
            id: 33,
            img: "img/teacher/psed/zahir-namane-hwc7eIQiTCE-unsplash.png",
            subject: [
                "理化學科"
            ],
            name: "謝舒然", price: 350 + 8
        }
    ]
        , lecturerItem = document.querySelectorAll(".list div.inner"),
        buttonList = document.querySelectorAll(".lecturer .content nav li a"),
        text = [],
        btnLoveList = document.getElementById("btnLoveList"),
        dialogList = document.getElementById("dialogList")
        ;
    let tid = 1;
    lecturerItem.forEach(div => {
        const data = {};
        data.id = tid;
        data.img = div.children[0].src.replace("http://127.0.0.1:5501/", "");
        data.subject = [div.children[1].children[0].innerText];
        data.name = div.children[1].children[1].innerText;
        text.push(data);
        tid++;
    });

    function createLecturerCardElement(object) {
        const htmlElement = `
        <a id="${object.id}"href="#">
            <div class="inner">
                <img src="${object.img}" alt="">
                <div class="text">
                    <p>${object.subject}</p>
                    <span>${object.name}</span>
                </div>
                <button class="love__btn">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
        </a>`;
        return htmlElement;
    };

    function renderLecturerList(lecturerList) {
        lecturerList.forEach(lecturer => {
            const card = createLecturerCardElement(lecturer);
            $("#lecturerList").append(card);
        });
    };

    renderLecturerList(lecturerList);

    function LoveList() {
        this.key = "lecture-love";
        this.data = [];
        this.initLove = function () {

        }
        this.addLecture = function (tid, amount) {
            const lecturer = lecturerList.find(lecturer => {
                return lecturer.id == tid;
            });
            const loveLecturer = {
                ...lecturer,
                amount: amount,
                createdAt: new Date().getTime()
            };
            this.data.push(loveLecturer);
            this.render();
        }
        this.notLove = function () {
            console.log(this.data);
        }
        this.emptyLove = function () {
            this.data = [];
            this.render();
        }
        this.updateDataToStorage = function () {

        }
        this.render = function () {
            const $tbody = $("#loveListBody"),
                $tfoot = $("#loveListFoot");
            $tbody.empty();
            let grossPrice = 0;
            this.data.forEach(lecture => {
                const lectureGrossPrice = lecture.price * lecture.amount;
                grossPrice += lectureGrossPrice;
                const tr = `
            <tr>
                <td>
                    ${lecture.name}
                </td>
                <td>$ ${lecture.price}</td>
                <td>${lecture.amount}</td>
                <td>
                    $ ${lectureGrossPrice}
                    <button data-targetId="${lecture.id}" class="not__love">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
                
            </tr>`;
                $tbody.append(tr);
            });
            $tfoot.html(`<tr>
                        <td>合計</td>
                        <td></td>
                        <td></td>
                        <td>TWD$ ${grossPrice}</td>
                    </tr>`);
            $("#loveQty").text(this.data.length);
        }
    }
    const loveList = new LoveList();
    $(document).on("click", "#lecturerList div.inner button.love__btn",
        function (e) {
            e.preventDefault();
            const tid = $(this).closest("a").attr("id");
            let amount = 1;
            loveList.addLecture(tid, amount);
        })
    $(document).on("click", "#emptyLoveBtn", function () {
        loveList.emptyLove();
    })
    $(document).on("click", ".not__love", function () {
        const tid = $(this).attr("data-targetId");
        loveList.notLove(tid);
    })
    $(".lecturer .content nav li a").on("click", function () {
        $(".lecturer .content nav li a").removeClass("active");
        $(this).addClass("active");
        $("#lecturerList").empty();
        const subjectFilter = lecturerList.filter((lecturer, idx, array) => {
            if (this.innerText == '全部') {
                return lecturer;
            } else {
                return lecturer.subject == this.innerText;
            }
        });
        renderLecturerList(subjectFilter);
    });

    btnLoveList.addEventListener("click", () => {
        dialogList.showModal();
        body.classList.add("scrollLock");
    })

    dialogList.addEventListener('click', (e) => {
        const dialogWindow = dialogList.getBoundingClientRect();
        let onDialog = (dialogWindow.top <= e.clientY &&
            e.clientY <= dialogWindow.top + dialogWindow.height &&
            dialogWindow.left <= e.clientX &&
            e.clientX <= dialogWindow.left + dialogWindow.width);
        if (!onDialog) {
            dialogList.close(); body.classList.remove("scrollLock");
        }
    });

    $(".btn__dialog").on("click", () => {
        dialogList.close();
        body.classList.remove("scrollLock");
    });
})
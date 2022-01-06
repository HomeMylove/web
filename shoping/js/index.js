window.addEventListener("load", function() {
    let focus = document.querySelector(".focus");
    let arrows = document.querySelectorAll("a[class^=arrow");

    // 鼠标进入显示按钮
    focus.addEventListener("mouseenter", function() {
        arrows[0].style.display = "block";
        arrows[1].style.display = "block";
        clearInterval(timer);
    })
    focus.addEventListener("mouseleave", function() {
        arrows[0].style.display = "none";
        arrows[1].style.display = "none";
        timer = setInterval(() => {
            arrows[1].click();
        }, 3000);
    })

    // 自动生成下面的点点
    let ul = focus.querySelector("ul");
    let imgLis = ul.children;
    let ol = document.querySelector(".circle");
    let focusWidth = focus.offsetWidth;
    let num = 0;
    let circle = 0;

    for (let i = 0; i < imgLis.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("index", i);
        li.innerHTML = "<a href='javascript:;'></a>";
        ol.appendChild(li);

        // 点小圆圈改变自己
        li.addEventListener("click", function() {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            this.className = "selected";
            // 动画
            num = this.getAttribute("index");
            circle = num;
            animate(ul, -num * focusWidth);

        })
    }
    ol.children[0].className = "selected";
    // 克隆
    let first = imgLis[0].cloneNode(true);
    ul.appendChild(first);
    ul.style.width = imgLis.length * 100 + "%";

    // 右侧按钮

    let flag = true;
    arrows[1].addEventListener("click", function() {
        if (flag) {
            flag = false;
            if (num == imgLis.length - 1) {
                ul.style.left = 0;
                num = 0;
            }

            num++;
            circle++;

            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            if (circle == ol.children.length) {
                circle = 0;
            }

            // console.log(circle);
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            ol.children[circle].className = "selected";
        }
    })
    arrows[0].addEventListener("click", function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = imgLis.length - 1;
                ul.style.left = -num * focusWidth + "px";
            }
            num--;
            circle--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });

            if (circle == -1) {
                circle = ol.children.length - 1;
            }
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            ol.children[circle].className = "selected";
        }
    })

    let timer = setInterval(() => {
        arrows[1].click();
    }, 3000);
})
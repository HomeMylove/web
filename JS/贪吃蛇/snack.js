window.onload = function() {
    let gameBox = document.querySelector(".game-box");
    let score = document.querySelector(".score");

    const cubeWidth = 20;


    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }

    let bodyList = []
    let tail = [
        // [1000, 1000]
    ]

    function makeCube(x, y, type = "body") {
        let div = document.createElement("div");
        div.className = "cube " + type;
        div.style.width = cubeWidth + "px";
        div.style.height = cubeWidth + "px";
        div.style.left = x + "px";
        div.style.top = y + "px";
        gameBox.appendChild(div)
        return div
    }

    function makeFood() {
        let x = getRandom(0, 600 / cubeWidth - 1) * cubeWidth;
        let y = getRandom(0, 400 / cubeWidth - 1) * cubeWidth;
        return makeCube(x, y, "food");
    }



    // makeCube(600 / 2 - cubeWidth, 400 / 2 - cubeWidth, "head");
    makeCube(0, 0, "head")
    let way = null;
    let sc = 0;


    setInterval(function() {
        let food = document.querySelector(".food");
        // console.log(food);
        if (!food) {
            food = makeFood();
        }
        // console.log(food);
        function cheat() {
            let food = document.querySelector(".food")
            let x = parseInt(food.style.left);
            let y = parseInt(food.style.top);
            let head = document.querySelector(".head");
            let hx = parseInt(head.style.left);
            let hy = parseInt(head.style.top);
            console.log("food", x, y);
            console.log("head", hx, hy);
            if (hx < x) {
                way = "ArrowRight";
                console.log('→');
            } else if (hx > x) {
                way = "ArrowLeft";
                console.log('←');
            } else {
                if (hy < y) {
                    way = "ArrowDown";
                    console.log('↑');
                } else if (hy > y) {
                    way = "ArrowUp";
                    console.log("↓");
                }
            }
        }
        cheat()





        let head = document.querySelector(".head");
        if (way == "ArrowUp") {
            head.style.top = parseInt(head.style.top) - cubeWidth + "px"
        } else if (way == "ArrowDown") {
            head.style.top = parseInt(head.style.top) + cubeWidth + "px"
        } else if (way == "ArrowLeft") {
            head.style.left = parseInt(head.style.left) - cubeWidth + "px"
        } else {
            head.style.left = parseInt(head.style.left) + cubeWidth + "px"
        }

        if (head.style.left == food.style.left && head.style.top == food.style.top) {
            head.className = "cube body";
            food.className = "cube head";
            tail.push([parseInt(head.style.left), parseInt(head.style.top)])
            sc++;


        }
        score.innerHTML = "得分" + sc;


        bodyList.unshift([parseInt(head.style.left), parseInt(head.style.top)])
            // console.log(bodyList);
            // 删除所有body
        let bodys = document.querySelectorAll(".body");
        for (let i = 0; i < bodys.length; i++) {
            gameBox.removeChild(bodys[i]);
        }

        for (let i = 0; i < bodyList.length; i++) {
            let x = bodyList[i][0];
            let y = bodyList[i][1];
            makeCube(x, y)
        }

        // console.log("tail", tail[0]);
        // console.log("body", bodyList[bodyList.length - 1]);
        function isTheSame(arr1, arr2) {
            if (arr1[0] == arr2[0] && arr1[1] == arr2[1]) {
                return true;
            } else {
                return false;
            }
        }

        let bodyLast = bodyList[bodyList.length - 1];
        // console.log(bodyLast);
        // console.log(tail[0]);
        if (tail.length > 0 && isTheSame(bodyLast, tail[0])) {
            console.log('ok');
            tail.shift();
        } else {
            bodyList.pop()
        }

        // let sc = document.querySelectorAll(".body");
        // score.innerHTML = "得分" + (sc.length - 1);


    }, 1)


    document.addEventListener("keyup", function(e) {
        way = e.key;

    })

}
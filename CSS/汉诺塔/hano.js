window.onload = function() {
    let a = 0;
    let b = 1;
    let c = 2;

    let li = new Array()

    function hano(n, a, b, c, q) {
        if (n == 1) {
            console.log(a, '-->', c);
            // move(a, c)
            q.unshift([a, c])
            return
        }

        hano(n - 1, a, c, b, q);

        console.log(a, '-->', c);
        // move(a, c);
        q.unshift([a, c])
        hano(n - 1, b, a, c, q)
    }


    num = 10;
    hano(num, a, b, c, li)


    listA = new Array();
    listB = new Array();
    listC = new Array();


    list = [listA, listB, listC]

    // 创建对象
    const colorList = [
        "pink",
        "crimson",
        "purple",
        "MediumSlateBlue",
        "CornflowerBlue",
        "PowDerBlue",
        "MediumAquamarine",
        "GreenYellow",
        "LightGoldenrodYellow",
        "Orange"
    ]

    function makeHano(list, num, color) {
        let box = document.querySelector('.box');

        for (let i = 0; i < num; i++) {
            let div = document.createElement('div')
            let cont = document.createTextNode(i)
            div.classList.add('block' + i)
            div.appendChild(cont)
            div.style.backgroundColor = color[i];
            div.style.width = (i + 1) * 40 + 'px';

            div.style.bottom = (num - 1 - i) * 30 + 'px'
            div.style.left = 300 + 'px'
                // console.log(parseInt(div.style.bottom));

            box.appendChild(div)

            list.unshift(div)
        }
    }

    makeHano(listA, num, colorList)

    console.log(listA);


    function move(a, b) {

        let f = list[a][list[a].length - 1];
        let $f = $(f);


        let t = list[b].length;
        let tb = t * 30;



        $f.animate({
            bottom: '400px'
        })

        let space = b - a;

        $f.animate({
            left: '+=' + space * 300 + 'px'
                // left: '+=200px'
        }, 'slow')

        $f.animate({
            bottom: tb + 'px'
        }, 'slow')

        list[a].pop()

        list[b].push(f)

        console.log('A', listA);
        console.log('B', listB);
        console.log('C', listC);

    }
    // for (let i = li.length - 1; i >= 0; i--) {
    //     let a = li[i][0];
    //     let b = li[i][1];
    //     move(a, b)
    // }

    function moveOne(li) {
        let a = li[li.length - 1][0];
        let b = li[li.length - 1][1];
        move(a, b);
        li.pop();
        return li;
    }

    let timer = setInterval(function() {
        moveOne(li);
    }, 1000)

    // hano(num, a, b, c)
    // let btn = document.querySelector(".btn")
    // let $btn = $('.btn');
    // $btn.click(sayHi())


    // function sayHi() {
    //     // console.log('Hello');
    //     alert('say')
    // }
    // btn.onlick = sayHi()
    // let a = li[0][0];
    // let b = li[0][1];
    // li.shift()
    // move(a, b)








}
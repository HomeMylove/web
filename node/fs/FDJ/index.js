
            let preview_img = document.querySelector(".preview-img");
            let mask = document.querySelector(".mask");
            let big = document.querySelector(".big");
            let bigImg = document.querySelector(".bigimg");

            preview_img.addEventListener("mouseover", function() {
                mask.style.display = "block";
                big.style.display = "block";
            })
            preview_img.addEventListener("mouseleave", function() {
                mask.style.display = "none";
                big.style.display = "none";
            })
            preview_img.addEventListener("mousemove", function(e) {
                let x = e.pageX - this.offsetLeft;
                let y = e.pageY - this.offsetTop;

                let maskLeft = x - mask.offsetWidth / 2;
                let maskTop = y - mask.offsetWidth / 2;
                let maxMask = preview_img.offsetWidth - mask.offsetWidth;

                if (maskLeft <= 0) {
                    maskLeft = 0;
                } else if (maskLeft >= maxMask) {
                    maskLeft = maxMask;
                }
                if (maskTop <= 0) {
                    maskTop = 0;
                } else if (maskTop >= maxMask) {
                    maskTop = maxMask;
                }
                mask.style.left = maskLeft + "px";
                mask.style.top = maskTop + "px";

                let maxBig = bigImg.offsetWidth - big.offsetWidth;
                let bigX = maskLeft * maxBig / maxMask;
                let bigY = maskTop * maxBig / maxMask;
                console.log(bigX);

                bigImg.style.left = -bigX + "px";
                bigImg.style.top = -bigY + "px";


            })
        
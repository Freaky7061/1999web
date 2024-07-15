var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 8,
    thumbs: {
        swiper: swiper,
    },
    mousewheel: true,
});

// 获取所有的 .swiper-slide 元素
var slides = document.querySelectorAll(".swiper-slide");

slides.forEach(function (slide) {
    slide.addEventListener("mouseover", function () {
        var text = slide.querySelector(".slide-text");
        if (text) {
            text.style.display = "block";
            text.style.background =
                "rgba(0, 0, 0, 0.5)"; /* 鼠标悬停时，背景颜色变为半透明的黑色 */
            text.style.height = "100%"; /* 鼠标悬停时，文本框的高度变为100% */
        }
    });

    slide.addEventListener("mouseout", function () {
        var text = slide.querySelector(".slide-text");
        if (text) {
            text.style.display = "none";
            text.style.background =
                "rgba(0, 0, 0, 0)"; /* 鼠标移开时，背景颜色变为透明 */
            text.style.height = "0"; /* 鼠标移开时，文本框的高度变为0 */
        }
    });
});
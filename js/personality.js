document.addEventListener('DOMContentLoaded', function () {
    // 获取你想要显示的图片
    var imgToShow = document.getElementById('303901');

    // 将图片设置为可见
    imgToShow.style.display = 'block';
});

// 获取所有的按钮和图像
var buttons = document.querySelectorAll('.tabber-filter button');
var images = document.querySelectorAll('.img-box img');

// 为每个按钮添加点击事件监听器
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // 获取按钮的data-img-id属性
        var imgId = this.getAttribute('data-img-id');

        // 隐藏所有的图像
        images.forEach(function (img) {
            img.style.display = 'none';
        });

        // 显示对应的图像
        var imgToShow = document.getElementById(imgId);
        imgToShow.style.display = 'block';
    });
});

// 获取所有的按钮
var buttons = document.querySelectorAll('.tabber-filter button');

// 让第一个按钮在页面加载时就亮起
buttons[0].classList.add('active');
// 为每个按钮添加点击事件监听器
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // 移除所有按钮的'active'类
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }

        // 为被点击的按钮添加'active'类
        this.classList.add('active');
    });
}
//鼠标悬停时显现
var tooltipElements = document.querySelectorAll('.tooltips-content');

tooltipElements.forEach(function (tooltip) {
    var parentElement = tooltip.parentElement;

    parentElement.addEventListener('mouseover', function () {
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
    });

    parentElement.addEventListener('mouseout', function () {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    });
});
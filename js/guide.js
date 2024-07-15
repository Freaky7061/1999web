// script.js
function switchPage(pageName) {
  // 隐藏所有页面
  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }

  // 显示当前页面
  var currentPage = document.getElementById(pageName);
  currentPage.classList.add("active");
}

/// 获取所有的按钮
var buttons = document.querySelectorAll(".btn");

// 为每个按钮添加点击事件监听器
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // 获取按钮的id
    var id = this.id;

    // 获取所有的.character元素
    var characters = document.querySelectorAll(".character");

    // 遍历.character元素
    characters.forEach(function (character) {
      // 如果按钮的id是'all'，则显示所有的.character元素
      // 否则，如果.character元素的data-type属性与按钮的id匹配，则显示该元素，否则隐藏该元素
      if (id === "all") {
        character.style.display = "block";
      } else if (character.getAttribute("data-type") === id) {
        character.style.display = "block";
      } else {
        character.style.display = "none";
      }
    });
  });
});
//实现功能，再次点击按钮时取消筛选

// 获取所有的按钮
var buttons = document.querySelectorAll(".btn");

// 为每个按钮添加点击事件监听器
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // 移除所有按钮的.active类
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // 添加.active类到被点击的按钮
    this.classList.add("active");

    // 其他代码...
  });
});

// 获取输入框和所有的.character元素
var search = document.getElementById("search");
var characters = document.querySelectorAll(".character");

// 为输入框添加input事件监听器
search.addEventListener("input", function () {
  // 获取输入框的值
  var value = this.value.trim().toLowerCase();

  // 遍历.character元素
  characters.forEach(function (character) {
    // 获取.character元素的.character-name元素的文本
    var name = character
      .querySelector(".character-name")
      .textContent.toLowerCase();

    // 如果.character-name元素的文本包含输入框的值，则显示该.character元素，否则隐藏该.character元素
    if (name.includes(value)) {
      character.style.display = "block";
    } else {
      character.style.display = "none";
    }
  });
});

// 获取所有的character元素
var characters = document.querySelectorAll(".character");

// 为每个character添加点击事件监听器
characters.forEach(function (character) {
  character.addEventListener("click", function () {
    // 跳转到personality.html页面
    window.location.href = "personality.html";
  });
});

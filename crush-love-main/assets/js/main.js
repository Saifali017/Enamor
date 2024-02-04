/**
 * @author Đông Ngô <dongngo.2000@gmail.com>
 * 
 */

// Không được thay đổi ở đây - Not to change
$(document).ready(function () {
  setTimeout(function () {
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  }, 600);
});

function start() {
  var btnYes = document.querySelector(".btn--yes");
  var btnNo = document.querySelector(".btn--no");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal__overlay");
  var btnClose = document.querySelector(".btn-close");
  var headerModar = document.querySelector(".heading-name");
  var desccriptionModar = document.querySelector(".message");

  window.onload = () => {
    document.querySelector(".music").play();
    document.querySelector(".music").volume = 4;
  };
  window.onkeypress = (e) => {
    if (e.charCode === 32) {
      document.querySelector(".music").play();
    }
  };

  document.querySelector(".header").innerHTML = `
        <h1 class="header-name">
        Will you be my Valentine? 👉👈
            
        </h1>
        `;
  btnYes.innerHTML = `<i class="ti-thumb-up"></i>  Yassssssss💋`;
  btnNo.innerHTML = `<i class="ti-thumb-down"></i> No `;
  headerModar.innerHTML = `You said yessss!!! <i class="ti-heart"></i>`;
  desccriptionModar.innerHTML = `I really like your eyes, your smile, your hair, your lips, and your arms. Holding your hand feels like home. I love the way you look at me and every moment we've spent together. It's special that you're willing to travel more than 500 kilometers just to see me. I love you and I love us <3
  And I can't wait to be together with you this valentine's!!`;

  btnYes.onclick = () => {
    popup.classList.add("show");
  };
  btnClose.onclick = () => {
    popup.classList.remove("show");
  };

  overlay.onclick = () => {
    popup.classList.remove("show");
  };

  btnNo.onclick = () => {
    btnNo.style.top = 100 + "px";
    btnYes.style.top = 280 + "px";
  };

  btnNo.onmouseover = (e) => {
    var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
    var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
    btnNo.style.top = x + "px";
    btnNo.style.right = y + "px";
  };
}

start();

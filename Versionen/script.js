document.addEventListener("DOMContentLoaded", function () {
  //Custom Cursor
  const customCursor = document.getElementById("custom-cursor");
  document.body.style.cursor = "none";
  document.addEventListener("mousemove", function (e) {
    customCursor.style.left = e.pageX + "px";
    customCursor.style.top = e.pageY + "px";
  });

  // Verlinkungen
  const item2 = document.querySelector(".item-2");
  item2.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/sprint-1/plakat-v1/plakat-v1";
  });
  const item3 = document.querySelector(".item-3");
  item3.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/sprint-1/plakat-v2-flex/plakat";
  });
  const item4 = document.querySelector(".item-4");
  item4.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/sprint-1/plakat-v3-flex/plakat";
  });
  const item5 = document.querySelector(".item-5");
  item5.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/sprint-1/plakat_v4/plakat";
  });
  const item6 = document.querySelector(".item-6");
  item6.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/sprint-1/plakat-v5-fluid/plakat";
  });
  const item7 = document.querySelector(".item-7");
  item7.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/sprint-2/plakat-v6-animation/plakat";
  });
  const item8 = document.querySelector(".item-8");
  item8.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/sprint-2/plakat-v7-animation/plakat";
  });
  const item9 = document.querySelector(".item-9");
  item9.addEventListener("click", function () {
    window.location.href =
      "https://dariofot.github.io/kickweb/sprint-2/plakat-v8-bild/plakat";
  });
  const item10 = document.querySelector(".item-10");
  item10.addEventListener("click", function () {
    window.location.href = "https://dariofot.github.io/kickweb";
  });
});

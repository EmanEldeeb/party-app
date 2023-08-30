/// <reference types="../@types/jquery" />

$(".side_control").on("click", function () {
  $(".side-menu").css({ left: "0" });
});

$(".move .close").on("click", function () {
  $(".side-menu").css({ left: "-300px" });
});

// singers
$(".singers h3").on("click", function (e) {
  $(".singers h3").not(this).next().slideUp();
  $(this).next().slideToggle();
});

// count
$("#message").on("input", function () {
  let textLen = $(this).val().length;
  $(".charcount").text(100 - textLen <= 0 ? "out of char" : 100 - textLen);
});

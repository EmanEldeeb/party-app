/// <reference types="../@types/jquery" />

// sideNav
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

// date count down
const countDownDate = new Date("Nov 19,2023 22:22:22").getTime();
let counter = setInterval(() => {
  let timeNow = new Date().getTime();
  let dataDiff = countDownDate - timeNow;
  $(".day span").text(`${Math.floor(dataDiff / 1000 / 60 / 60 / 24)} D`);
  $(".hour span").text(
    `${Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)} H`
  );
  $(".min span").text(
    `${Math.floor((dataDiff % (1000 * 60 * 60)) / 1000 / 60)} M`
  );
  $(".sec span").text(`${Math.floor((dataDiff % (1000 * 60)) / 1000)} s`);
}, 1000);

// count
$("#message").on("input", function () {
  let textLen = $(this).val().length;
  $(".charcount").text(100 - textLen <= 0 ? "out of char" : 100 - textLen);
});

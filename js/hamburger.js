// // toggleを使わなかった場合
// $(document).ready(function () {
//   // .menu-btnをクリックした時
//   $("#sp_menu_btn").on("click", function () {
//     if (!$(this).hasClass("is-active")) {
//       $(this).addClass("is-active");
//       $(document.documentElement).addClass("is-fixed");
//       $("#sp_menu").addClass("is-active");
//     } else {
//       $(this).removeClass("is-active");
//       $(document.documentElement).removeClass("is-fixed");
//       $("#sp_menu").removeClass("is-active");
//     }
//   });
//   // .menu-btnをクリックした時
//   $(".p-sp-menu__link").on("click", function () {
//     $("#sp_menu_btn").removeClass("is-active");
//     $(document.documentElement).removeClass("is-fixed");
//     $("#sp_menu").removeClass("is-active");
//   });

//   // スムーススクロール
//   $('a[href^="#"]').on("click", function () {
//     let speed = 500;
//     let href = $(this).attr("href");
//     let target = $(href == "#" || href == "" ? "html" : href);
//     let headerHeight = $("#header").height();
//     let position = target.offset().top - headerHeight;
//   });
// });

$(function () {
  // ハンバーガーメニューボタンにクリックイベントを指定
  $(".menu_btn").click(function () {
    // ハンバーガーメニューボタンとナビゲーションメニューに
    // 同時にopenクラスを付けたり外したりする
    $(this).toggleClass("open");
    $(".header_nav").toggleClass("open");
  });
});

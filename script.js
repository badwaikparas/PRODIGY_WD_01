// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.querySelector(".navbar");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY >= 770.9090576171875) {
//       navbar.style.backgroundColor = "#414141";
//       navbar.style.borderbottom = "solid 1px #bdbdbd";
//       navbar.style.boxshadow = "#fff";
//       //   navbar.style;
//       //   navbar.style;
//       //   navbar.style;
//     } else {
//       navbar.style.backgroundColor = "#fff";
//       navbar.style.borderbottom = "solid 1px #424242";
//       navbar.style.boxshadow = "#424242";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 770.9090576171875) {
      navbar.style.backgroundColor = "#414141";
      navbar.style.borderBottom = "solid 1px #ffffff";
      navbar.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.1)"; // Improved box-shadow
      navbar.style.color = "#ffffff"; // Improved box-shadow
    } else {
      navbar.style.backgroundColor = "#fff";
      navbar.style.borderBottom = "solid 1px #424242";
      navbar.style.boxShadow = "none";
      navbar.style.color = "#000000";
    }
  });
});

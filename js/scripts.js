/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});

// myself edit

// //填完第一頁的同意書，要產生受測者ID以及後續要分配組別的 Group（1-8）
// function consentName() {
//   var consentName = document.getElementById("name");
//   var rowData = {
//     ConsentName: consentName.value,
//   };
//   //上傳資料
//   google.script.run.addData(rowData);
//   //清除資料
//   document.getElementById("consentForm").reset();
//   //DebugMessage
//   alert("DebugMessage: Function Works!");

//   // 導航到第二頁
//   window.location.href = "../form/form_part1_StrongTie.html";
// }

document
  .getElementById("consentForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("問卷提交成功！");
      } else {
        alert(`${JSON.stringify(data)} 提交失敗，請稍後再試。`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error 提交失敗，請稍後再試。");
    }
  });

function saveName() {
  // 獲取使用者輸入的姓名
  var friendName1 = document.getElementById("friendname-1").value;
  var friendName2 = document.getElementById("friendname-2").value;
  var friendName3 = document.getElementById("friendname-3").value;
  var friendName4 = document.getElementById("friendname-4").value;
  var friendName5 = document.getElementById("friendname-5").value;
  // 將姓名存儲在本地存儲（或者可以使用Cookie等其他方法）
  localStorage.setItem("friendName1", friendName1);
  localStorage.setItem("friendName2", friendName2);
  localStorage.setItem("friendName3", friendName3);
  localStorage.setItem("friendName4", friendName4);
  localStorage.setItem("friendName5", friendName5);

  // 導航到第二頁
  window.location.href = "../form/form_part2_AutTran.html";
}

// 在第二頁加載時顯示使用者的姓名
document.addEventListener("DOMContentLoaded", function () {
  var name1 = localStorage.getItem("friendName1");
  var name2 = localStorage.getItem("friendName2");
  var name3 = localStorage.getItem("friendName3");
  var name4 = localStorage.getItem("friendName4");
  var name5 = localStorage.getItem("friendName5");
  if (name1) {
    document.getElementById("displayedName1").textContent = name1;
  }
  if (name2) {
    document.getElementById("displayedName2").textContent = name2;
  }
  if (name3) {
    document.getElementById("displayedName3").textContent = name3;
  }
  if (name4) {
    document.getElementById("displayedName4").textContent = name4;
  }
  if (name5) {
    document.getElementById("displayedName5").textContent = name5;
  }
});

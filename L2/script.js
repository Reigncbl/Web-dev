document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".card");
    const menus = document.querySelectorAll(".menu-content");

    menus.forEach((menu) => {
      menu.style.display = "none";
    });

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        menus.forEach((menu) => {
          if (menu.parentElement.id === targetId) {
            menu.style.display = "block";
          } else {
            menu.style.display = "none";
          }
        });
      });
    });
  });
  
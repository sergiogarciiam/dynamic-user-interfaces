export const mobileMenu = (() => {
  const createMobileMenuButton = () => {
    const button = document.createElement("button");
    button.classList.add("mobile-button");
    button.textContent = "Mobile Menu";
    button.addEventListener("click", createMobileMenu);

    return button;
  };

  function createMobileMenu() {
    const mobileMenuContainer = document.createElement("mobile-menu-container");
    const closeButton = document.createElement("button");
    const homeButton = document.createElement("button");
    const settingsButton = document.createElement("button");
    const exitButton = document.createElement("button");

    const closeIcon = document.createElement("i");
    closeIcon.className = "fa-solid fa-xmark";
    closeButton.appendChild(closeIcon);
    closeButton.addEventListener("click", closeMenu);

    mobileMenuContainer.classList.add("mobile-menu-container");

    homeButton.textContent = "Home";
    settingsButton.textContent = "Settings";
    exitButton.textContent = "Exit";

    mobileMenuContainer.appendChild(closeButton);
    mobileMenuContainer.appendChild(homeButton);
    mobileMenuContainer.appendChild(settingsButton);
    mobileMenuContainer.appendChild(exitButton);

    document.body.classList.add("hide-overflow");
    document.body.appendChild(mobileMenuContainer);
  }

  function closeMenu() {
    const mobileMenuContainer = document.querySelector(
      ".mobile-menu-container"
    );

    document.body.classList.remove("hide-overflow");
    mobileMenuContainer.remove();
  }

  return { createMobileMenuButton };
})();

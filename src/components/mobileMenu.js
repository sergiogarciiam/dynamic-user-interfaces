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
    const homeButton = document.createElement("button");
    const settingsButton = document.createElement("button");
    const exitButton = document.createElement("button");

    mobileMenuContainer.classList.add("mobile-menu-container");

    homeButton.textContent = "Home";
    settingsButton.textContent = "Settings";
    exitButton.textContent = "Exit";

    mobileMenuContainer.appendChild(homeButton);
    mobileMenuContainer.appendChild(settingsButton);
    mobileMenuContainer.appendChild(exitButton);

    document.body.appendChild(mobileMenuContainer);
  }

  return { createMobileMenuButton };
})();

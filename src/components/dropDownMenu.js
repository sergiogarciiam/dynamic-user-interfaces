export function createDropDownMenu() {
  const dropDownMenu = document.createElement("div");
  const mainButton = document.createElement("button");
  const menu = document.createElement("div");
  const homeButton = document.createElement("button");
  const settingsButton = document.createElement("button");
  const exitButton = document.createElement("button");

  dropDownMenu.classList.add("drop-down-menu-container");
  mainButton.classList.add("main-button");
  menu.classList.add("menu-container");

  mainButton.textContent = "Menu";
  homeButton.textContent = "Home";
  settingsButton.textContent = "Settings";
  exitButton.textContent = "Exit";

  mainButton.addEventListener("click", activeMenu);

  menu.appendChild(homeButton);
  menu.appendChild(settingsButton);
  menu.appendChild(exitButton);

  dropDownMenu.appendChild(mainButton);
  dropDownMenu.appendChild(menu);

  return dropDownMenu;
}

function activeMenu() {
  const menu = document.querySelector(".menu-container");
  menu.classList.toggle("active-menu");
}

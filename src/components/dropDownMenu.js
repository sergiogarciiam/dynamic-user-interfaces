import { CE, $ } from "../util/shortcuts";

export function createDropDownMenu() {
  const dropDownMenu = CE("div");
  const mainButton = CE("button");
  const menu = CE("div");
  const homeButton = CE("button");
  const settingsButton = CE("button");
  const exitButton = CE("button");

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
  const menu = $(".menu-container");
  menu.classList.toggle("active-menu");
}

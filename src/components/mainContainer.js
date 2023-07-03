import { createDropDownMenu } from "./dropDownMenu";

const { CE } = require("../util/shortcuts");

export function createMainContainer() {
  const mainContainer = CE("div");
  const title = CE("h1");
  const titleDropDown = CE("h2");
  const dropDownMenu = createDropDownMenu();
  const titleMobile = CE("h2");
  const titleImages = CE("h2");

  mainContainer.classList.add("main-container");

  title.textContent = "Dynamic User Interfaces";
  titleDropDown.textContent = "Drop Down Menu";
  titleMobile.textContent = "Mobile Menu";
  titleImages.textContent = "Image Slider";

  mainContainer.appendChild(title);
  mainContainer.appendChild(titleDropDown);
  mainContainer.appendChild(dropDownMenu);
  mainContainer.appendChild(titleMobile);
  mainContainer.appendChild(titleImages);

  document.body.appendChild(mainContainer);
}

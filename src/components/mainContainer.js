import { createDropDownMenu } from "./dropDownMenu";
import { mobileMenu } from "./mobileMenu";

export function createMainContainer() {
  const mainContainer = document.createElement("div");
  const title = document.createElement("h1");
  const titleDropDown = document.createElement("h2");
  const titleMobile = document.createElement("h2");
  const titleImages = document.createElement("h2");

  mainContainer.classList.add("main-container");

  title.textContent = "Dynamic User Interfaces";
  titleDropDown.textContent = "Drop Down Menu";
  titleMobile.textContent = "Mobile Menu";
  titleImages.textContent = "Image Slider";

  mainContainer.appendChild(title);

  mainContainer.appendChild(titleDropDown);
  mainContainer.appendChild(createDropDownMenu());

  mainContainer.appendChild(titleMobile);
  mainContainer.appendChild(mobileMenu.createMobileMenuButton());

  mainContainer.appendChild(titleImages);

  document.body.appendChild(mainContainer);
}

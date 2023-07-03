import { dropDownMenu } from "./dropDownMenu";
import { imageSlider } from "./imageSlider";
import { mobileMenu } from "./mobileMenu";

export const mainContainer = (() => {
  const createMainContainer = () => {
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
    mainContainer.appendChild(createAuthor());

    mainContainer.appendChild(titleDropDown);
    mainContainer.appendChild(dropDownMenu.createDropDownMenu());

    mainContainer.appendChild(titleMobile);
    mainContainer.appendChild(mobileMenu.createMobileMenuButton());

    mainContainer.appendChild(titleImages);
    mainContainer.appendChild(imageSlider.createImageSlider());

    setTimeout(imageSlider.changeImages, 5000);

    document.body.appendChild(mainContainer);
  };

  function createAuthor() {
    const author = document.createElement("p");
    const link = document.createElement("a");

    author.textContent = "By ";
    author.classList.add("author");

    link.textContent = "Sergio García";
    link.href = "https://github.com/sergiogarciiam";
    link.target = "__blank";

    author.appendChild(link);

    return author;
  }

  return { createMainContainer };
})();

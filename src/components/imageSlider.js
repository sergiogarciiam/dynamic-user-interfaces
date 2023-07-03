import Image1 from "../assets/images/tic-tac-toe.png";
import Image2 from "../assets/images/library.png";
import Image3 from "../assets/images/todo-list.png";

export const imageSlider = (() => {
  const storedImages = [Image1, Image2, Image3];

  const createImageSlider = () => {
    const imageSliderContainer = document.createElement("div");
    const imagesContainer = document.createElement("div");
    const activeImage = document.createElement("img");
    const nextImageButton = document.createElement("button");
    const nextIcon = document.createElement("i");
    const previousButton = document.createElement("button");
    const previousIcon = document.createElement("i");

    imageSliderContainer.classList.add("image-slider-container");
    imagesContainer.classList.add("images-container");
    activeImage.classList.add("active-image");

    nextIcon.className = "fa-solid fa-arrow-right";
    previousIcon.className = "fa-solid fa-arrow-left";

    activeImage.src = storedImages[0];
    activeImage.dataset.number = 0;

    nextImageButton.addEventListener("click", showNextImage);
    previousButton.addEventListener("click", showPreviousImage);

    nextImageButton.appendChild(nextIcon);
    previousButton.appendChild(previousIcon);

    imagesContainer.appendChild(previousButton);
    imagesContainer.appendChild(activeImage);
    imagesContainer.appendChild(nextImageButton);

    imageSliderContainer.appendChild(imagesContainer);
    imageSliderContainer.appendChild(createPointsContainer());

    return imageSliderContainer;
  };

  const changeImages = () => {
    showNextImage();
    setTimeout(changeImages, 5000);
  };

  function createPointsContainer() {
    const pointsContainer = document.createElement("div");

    pointsContainer.classList.add("points-container");
    let cont = 0;

    storedImages.forEach((image) => {
      const button = document.createElement("button");
      button.dataset.number = cont;

      if (cont === 0) button.classList.add("active-point");

      pointsContainer.appendChild(button);
      button.addEventListener("click", showPointImage);
      cont += 1;
    });

    return pointsContainer;
  }

  function showNextImage() {
    const activeImage = document.querySelector(".active-image");
    let nextImage = +activeImage.dataset.number + 1;

    if (nextImage === storedImages.length) nextImage = 0;

    activeImage.src = storedImages[nextImage];
    activeImage.dataset.number = nextImage;

    paintPoint();
  }

  function showPreviousImage() {
    const activeImage = document.querySelector(".active-image");
    let previousImage = +activeImage.dataset.number - 1;

    if (previousImage === -1) previousImage = storedImages.length - 1;

    activeImage.src = storedImages[previousImage];
    activeImage.dataset.number = previousImage;

    paintPoint();
  }

  function showPointImage(event) {
    const activeImage = document.querySelector(".active-image");
    const numberImageToShow = event.target.dataset.number;

    activeImage.src = storedImages[numberImageToShow];
    activeImage.dataset.number = numberImageToShow;

    paintPoint();
  }

  function paintPoint() {
    const activePoint = document.querySelector(".active-point");
    const activeImage = document.querySelector(".active-image");
    const pointToPaint = document.querySelector(
      `.points-container [data-number='${activeImage.dataset.number}']`
    );

    activePoint.classList.remove("active-point");
    pointToPaint.classList.add("active-point");
  }

  return { createImageSlider, changeImages };
})();

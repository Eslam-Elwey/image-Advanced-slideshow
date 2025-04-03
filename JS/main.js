// const showImagesElem = document.querySelector(".collection");
// const mainSlider = document.querySelector(".show");

// let srcVal = localStorage.getItem("selectedImage");
// if (srcVal != null) {
//   mainSlider.setAttribute("src", srcVal);
// }

// showImagesElem.addEventListener("click", function (e) {
//   // console.log(e.target);
//   let newSrc = e.target.getAttribute("src");

//   console.log(newSrc);
//   localStorage.setItem("selectedImage", newSrc);

//   mainSlider.setAttribute("src", newSrc);
// });

// const testDivElem = document.querySelector(".test");

// console.log(testDivElem.firstElementChild);

// const imageContent = document.createElement("img");

// imageContent.alt = "car8";

// imageContent.src = "./images/car8.avif";

// imageContent.style.width = "100%";

// console.log(imageContent);

// testDivElem.after(imageContent);

// select list of collection of cars and use event delegation

const elementCollection = document.querySelector(".collection-car");

const carItemElements = Array.from(document.querySelectorAll(".car-item"));

const affectedSlideShow = document.querySelector(".inner-image");

const hiddenShow = document.querySelector(".slide-elem");

const wrapElement = document.querySelector(".wrapper");

let imgIndex;

let currentSelectedIndex;

const totalImages = 6;

function getNextElement() {
  currentSelectedIndex++;
  if (currentSelectedIndex === carItemElements.length) {
    currentSelectedIndex = 0;
  }

  let imgSrc = carItemElements[currentSelectedIndex].getAttribute("src");

  console.log(imgSrc);

  affectedSlideShow.style.setProperty("background-image", `url(${imgSrc})`);
}

function getPerviousElement() {
  currentSelectedIndex--;
  if (currentSelectedIndex < 0) {
    currentSelectedIndex = carItemElements.length - 1;
  }

  let imgSrc = carItemElements[currentSelectedIndex].getAttribute("src");

  console.log(imgSrc);

  affectedSlideShow.style.setProperty("background-image", `url(${imgSrc})`);
}

for (var i = 0; i < carItemElements.length; i++) {
  carItemElements[i].addEventListener("click", function (e) {
    let imgSrc = e.target.getAttribute("src");

    currentSelectedItem = e.target;

    affectedSlideShow.style.setProperty("background-image", `url(${imgSrc})`);

    hiddenShow.classList.remove("d-none");
    hiddenShow.classList.add("d-block");

    currentSelectedIndex = carItemElements.indexOf(e.target);
    console.log(currentSelectedIndex);
  });
}

// elementCollection.addEventListener("click", function (e) {
//   let imgSrc = e.target.getAttribute("src");

//   currentSelectedItem = e.target;

//   console.log(currentSelectedItem.src);

//   affectedSlideShow.style.setProperty("background-image", `url(${imgSrc})`);

//   hiddenShow.classList.remove("d-none");
//   hiddenShow.classList.add("d-block");
// });

//left arrow
affectedSlideShow.firstElementChild.addEventListener(
  "click",
  getPerviousElement
);

//right Arroe
affectedSlideShow.firstElementChild.nextElementSibling.addEventListener(
  "click",
  getNextElement
);

function closeItem() {
  hiddenShow.classList.add("d-none");
  hiddenShow.classList.remove("d-block");
  console.log("closed");
}

affectedSlideShow.lastElementChild.addEventListener("click", closeItem);

document.addEventListener("keyup", function (e) {
  if (hiddenShow.classList.contains("d-none")) {
    return;
  }
  console.log(e.code);
  if (e.code === "Escape") {
    closeItem();
  } else if (e.code === "ArrowRight") {
    getNextElement();
  } else if (e.code === "ArrowLeft") {
    getPerviousElement();
  }
});

hiddenShow.addEventListener("click", function (e) {
  if (e.target === wrapElement) {
    closeItem();
  }
});

// affectedSlideShow.addEventListener('mouse')

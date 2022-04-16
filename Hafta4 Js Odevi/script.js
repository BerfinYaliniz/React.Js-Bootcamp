const numItemsToGenerate = 40;
const numImagesAvailable = 24562;
const $galleryContainer = document.querySelector(".gallery-container");

function renderGalleryItem(randomNumber) {
  fetch(`https://source.unsplash.com/random/200x200/`).then((response) => {
    let galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    galleryItem.innerHTML = `
        <img class="gallery-image" src="${response.url}" alt="gallery image"/>
      `;
    $galleryContainer.appendChild(galleryItem);
  });
}
for (let i = 0; i < numItemsToGenerate; i++) {
  let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  renderGalleryItem(randomImageIndex);
}

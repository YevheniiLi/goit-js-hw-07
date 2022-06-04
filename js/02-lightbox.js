import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryItemsMarkup = document.querySelector(".gallery");

createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  const newGalleryMarkup = galleryItems.map(({preview, original, description}) =>
        `<li><a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" alt="${description}"/>
        </a>
        </li>`
    )
    .join("");
  galleryItemsMarkup.insertAdjacentHTML("beforeend", newGalleryMarkup);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
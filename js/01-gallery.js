import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);


//   /*Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.*/

const galleryItemsMarkup = document.querySelector('.gallery');
createGalleryMarkup(galleryItems);

  function createGalleryMarkup(galleryItems) {
    const newGalleryMarkup = galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>       
      `   
      })
      .join('');
      galleryItemsMarkup.insertAdjacentHTML('beforeend', newGalleryMarkup);
  }
  
//   /*Подключение скрипта и стилей библиотеки модального окна BasiclightBox.
//     Открытие модального окна  */
  
  galleryItemsMarkup.addEventListener('click', onGalleryItemClick);

  function onGalleryItemClick(event) {
     event.preventDefault();

     const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
        `);
        instance.show();
        document.addEventListener('keydown', onEscPress)
  
//   // /* Закрытие модального окна по нажатию клавиши ESC. */

function onEscPress(event) {
      if (event.code === 'Escape') {
     instance.close();
     document.removeEventListener('keydown', onEscPress)
    }  
  }
}



  

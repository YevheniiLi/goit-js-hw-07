import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
    wrapper: document.querySelector('.lightbox'),
    backdrop: document.querySelector('.lightbox__overlay'),
    wrapperContent: document.querySelector('.lightbox__content'),
    wrapperImg: document.querySelector('.lightbox__image'),
    closeWrapperButton: document.querySelector('.lightbox__button'),
  };
  
  /*Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.*/
  
  const galleryItemsMarkup = createGalleryMarkup(galleryItems);
  refs.gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
  
  function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
      <li class = "gallery__item">
        <a
          class = "gallery__link"
          href = ${original}
        >
          <img
            loading="lazy"
            class = "gallery__image"
            src = "${preview}"
            data-source = "${original}"
            alt = "${description}"
          />
        </a>
      </li>
      `;
      })
      .join('');
  }
  
  /*Подключение скрипта и стилей библиотеки модального окна BasiclightBox.
    Открытие модального окна  */
  
  refs.gallery.addEventListener('click', onGalleryItemClick);

  function onGalleryItemClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    if (event.target.nodeName === "IMG") {
        const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
        `);
        instance.show();
    }
    window.addEventListener('keyup', onCloseModal);
  }


  // /* Закрытие модального окна по клику на кнопку */
  
  refs.closeWrapperButton.addEventListener('click', onCloseWrapper);
  
  function onCloseWrapper() {
    refs.wrapperImg.src = '';
    refs.wrapper.classList.remove('is-open');
    window.removeEventListener('keydown', onEscPress); 
  }
  
  /* Закрытие модального окна по клику  */
  
  refs.backdrop.addEventListener('click', onBackdropClick);
  
  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onCloseWrapper();
    }
     }
  
  // /* Закрытие модального окна по нажатию клавиши ESC. */
  
  function onEscPress(event) {
    const ESC_KEY_CODE = 'Escape';
  
    if (event.code === ESC_KEY_CODE) {
      onCloseWrapper();
    }  
  }
  
  /* Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо". */
  let arr = [];
  for (let child of refs.gallery.children) {
    //console.log(child.previousElementSibling);
    arr.push(child);
  
    //console.log(child.querySelector('.gallery__image').dataset.source);
  }
  console.log(arr[0]);
  
  // console.log(refs.gallery.firstElementChild);
  // console.log(refs.gallery.lastElementChild);

  



  

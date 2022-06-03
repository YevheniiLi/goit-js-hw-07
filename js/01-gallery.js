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
  
  /*Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.*/
  
  const galleryItemsMarkup = createElGalleryMarkup(galleryItems);
  refs.gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
  
  function createElGalleryMarkup(galleryItems) {
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
  
  /* Реализация делегирования на галерее ul.js-gallery и получение url большого изображения */
  
  refs.gallery.addEventListener('click', onGalleryItemClick);
  
  function onGalleryItemClick(evt) {
    /*  Отмена действия по умолчанию при клике на ссылку */
    evt.preventDefault();
    /* ****** */
  
    const isGalleryEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryEl) {
      return;
    }
  
    /* Открытие модального окна по клику на элементе галереи. */
    window.addEventListener('keydown', onEscPress);
    refs.wrapper.classList.add('is-open');
  
    /* Подмена значения атрибута src, alt элемента img.lightbox__image. */
    refs.wrapperImg.src = evt.target.dataset.source;
    refs.wrapperImg.alt = evt.target.alt;

  }
  
  /* Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]. */
  
  refs.closeWrapperButton.addEventListener('click', onCloseWrapper);
  
  function onCloseWrapper() {
    refs.wrapper.classList.remove('is-open');
    window.removeEventListener('keydown', onEscPress);
  
    /* Очистка значения атрибута src элемента img.lightbox__image. */
    refs.wrapperImg.src = '';
  }
  
  /* Закрытие модального окна по клику на div.lightbox__overlay. */
  
  refs.backdrop.addEventListener('click', onBackdropClick);
  
  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseWrapper();
    }
     }
  
  /* Закрытие модального окна по нажатию клавиши ESC. */
  
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

  
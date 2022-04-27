import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = onCreateGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryMarkup);

function onCreateGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class= "gallery__item">
        <a class="gallery__link" href= "${original}">
        <img class="gallery__image"
        src="${preview}"
         data-source="${original}" 
         alt="${description}"/>
          </a>
        </div>`;
    }).join('');
}
function onGalleryMarkup(event){
    event.preventDefault;

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    instance.element().querySelector('.gallery__modal__img').src = event.target.dataset.src;
    instance.show();
}
const instance = basicLightbox.create(`
    <img class="gallery__modal__img" src=''>
`,
    {
        onShow: instance => {
            window.addEventListener('keydown', onEscapeClick);
        },
    },
        {
        onClose: instance => {
            window.removeEventListener('keydown', onEscapeClick);
        },
    },
);

function onEscapeClick(event){
    if (event.key === 'Escape') {
        instance.close();
        return;
}
}

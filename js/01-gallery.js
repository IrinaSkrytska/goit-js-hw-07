import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = onCreateGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryMarkup);

function onCreateGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href= "${original}">
        <img loading="lazy" class="gallery__image lazyload"
        src="${preview}"
         data-source="${original}" 
         alt="${description}"/>
          </a>
        </div>`;
    }).join('');
}

const instance = basicLightbox.create(`
    <img class="gallery__modal__img" src=''>
`,
    {
        onShow: instance => {
            window.addEventListener('keydown', onEscapeClick);
        },
        onClose: instance => {
            window.removeEventListener('keydown', onEscapeClick);
        },
    },
);

function onGalleryMarkup(event){
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    instance.element().querySelector('.gallery__modal__img').src = event.target.src;
    instance.show();
}

function onEscapeClick(event){
    if (event.key === 'Escape') {
        instance.close();
}
}

if ('loading' in HTMLImageElement.prototype) { 
    addLazyImages();
   
}
else {
   createLazyImages();
}

function addLazyImages() {
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
lazyImages.forEach(image => {
    image.src = image.dataset.src;
});
}

function createLazyImages() {
  const lazyScript = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(lazyScript);
}


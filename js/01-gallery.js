import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector(".gallery");

const imgDiv = galleryItems.map(({ preview, original, description}) => {
    return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" src = "${preview}" data-source = "${original}" alt = "${description}" />
    </a>
    </div>`;
})
.join(" ");

galleryDiv.insertAdjacentHTML("beforeend", imgDiv);

galleryDiv.addEventListener("click", galleryItemsOn);
let instance = null;

function galleryItemsOn(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")){
        return;
    }

        const originalUrl = event.target.dataset.source;
        console.log("URL origial", originalUrl);

        instance = basicLightbox.create(


            `<img class="gallery__image" src= "${originalUrl}"/>`
            ,
            {
                onShow: (instance) => {
                window.addEventListener("keydown", escClose);
            },
            onClose: (instance) => {
                window.removeEventListener("keydown", escClose);
            },
        }
        );

        instance.show();
}

    function modalClose() {
        instance.close();
    }

    function escClose(event) {
        console.log("Code", event.code);

        if (event.code === "Escape") {
            modalClose();
        }
    }


console.log(galleryItems);


import { galleryItems } from "./gallery-items.js";

const listGallery = document.querySelector(".gallery");

const linksGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
         <a class="gallery__item" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             alt="${description}"
           />
         </a>
         `;
  })
  .join(" ");

listGallery.insertAdjacentHTML("beforeend", linksGallery);

let galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
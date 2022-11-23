import { useState } from "react";

import "./modal.css";

export let openModal;
export default function Modal({ images }) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const maxImage = images.length - 1;

  if(open) {
    document.body.classList.add("stopScrolling");
  } else {
    document.body.classList.remove("stopScrolling");
  }

  openModal = (imageIndex) => {
    setOpen(true);
    setImage(imageIndex);
  }

  const setImage = (imageIndex) => {
    if(imageIndex > maxImage) {
      return setCurrentImage(maxImage);
    }

    if(imageIndex < 0) {
      return setCurrentImage(0);
    }

    setCurrentImage(imageIndex);
  }


  const nextImage = () => {
    if(currentImage === maxImage) {
      return setCurrentImage(0);
    }
    
    setCurrentImage(currentImage + 1);
  }

  const prevImage = () => {
    if(currentImage === 0) {
      return setCurrentImage(maxImage);
    }

    setCurrentImage(currentImage - 1);
  }

  const imagesElements = images.map((image, i) => {
    return (
      <li key={i} className={currentImage === i ? "active" : ""}>
        <img src={image} alt="" />
      </li>
    )
  });

  return (
    <div className={`modal ${open ? "open" : ""}`}>
      <div className="modal-overlay" onClick={() => setOpen(false)}></div>

      <ul className="modal-slide">
        {imagesElements}

        <button className="btn-modal next" onClick={() => nextImage(currentImage, setCurrentImage)}>
          <i className="fa-solid fa-angle-right"></i>
        </button>

        <button className="btn-modal prev" onClick={() => prevImage(currentImage, setCurrentImage)}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </ul>
    </div>
  );
}

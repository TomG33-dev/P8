// useState

import { useState } from "react";
import logements from "../../data/logement.json";

function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = logements[0].pictures;

    const nextImage = () => {
        const newIndex = currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    const prevImage = () => {
        const newIndex = currentImageIndex <= 0 ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div>
            <button onClick={prevImage}>Précédent</button>
            <img src={images[currentImageIndex]} alt="" />
            <button onClick={nextImage}>Suivant</button>
        </div>
    );
}

export default Carousel;
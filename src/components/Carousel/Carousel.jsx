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
        <div className="carousel">
            <button className="carousel-button carousel-button-left" onClick={prevImage}>&#10094;</button>
            <img className="carousel-image" src={images[currentImageIndex]} alt="" />
            <button className="carousel-button carousel-button-right" onClick={nextImage}>&#10095;</button>
        </div>
    );
}

export default Carousel;
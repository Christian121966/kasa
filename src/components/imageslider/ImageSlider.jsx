
import React, { useState } from 'react';
import '../../components/imageslider/ImageSlider.scss';
import ArrowRight from '../../assets/arrow_back_ios-24px 1.png';
import ArrowLeft from '../../assets/arrow_forward_ios-24px 1.png';

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(images[currentIndex]);
    


    const nextSlide = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setCurrentImage(images[newIndex])
    };

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setCurrentImage(images[newIndex])

    };

    return (
        <section className='imageSlider'>
                    <img className="imageSlide" src={currentImage} />
                    <img 
                        className='imageSlider_arrow left' 
                        src={ArrowRight} 
                        alt="Afficher suivante" 
                        onClick={()=>{ nextSlide() }}
                    />
                    <img 
                        className='imageSlider_arrow right' 
                        src={ArrowLeft} 
                        alt="Afficher précédente" 
                        onClick={()=>{prevSlide()}}
                    />
        </section>
    );
}

export default ImageSlider;
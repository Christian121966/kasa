
import React, { useState } from 'react';
import '../../components/imageslider/ImageSlider.scss';
import ArrowRight from '../../assets/arrow_back_ios-24px 1.png';
import ArrowLeft from '../../assets/arrow_forward_ios-24px 1.png';

function ImageSlider({ imageSlider }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const newIndex = currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className='imageSlider'>
            {imageSlider.length > 1 && (
                <>
                    <img 
                        className='imageSlider_arrow imageSlider_arrow_right' 
                        src={ArrowRight} 
                        alt="Afficher suivante" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='imageSlider_arrow imageSlider_arrow_left' 
                        src={ArrowLeft} 
                        alt="Afficher précédente" 
                        onClick={prevSlide}
                    />
                </>
            )}
            <div className='imageSlider_content'>
                {imageSlider.map((image, index) => (
                    <div 
                        className={index === currentIndex ? 'slide active' : 'slide'} 
                        key={index}
                    >
                        {index === currentIndex && (
                            <img src={image} alt={`Slide ${index}`} />
                        )}
                    </div>
                ))}
            </div>
            {document.body.clientWidth > 768 && (
                <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
            )}
        </section>
    );
}

export default ImageSlider;
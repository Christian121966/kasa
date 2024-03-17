import './ListingDetails.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ImageSlider from '../../pages/imageslider/ImageSlider';
import arrow_black_left from '../../assets/arrow_back_left.png';
import arrow_forward_right from '../../assets/arrow_forward_right.png';
//import data from '../../data/Data';
import { useState } from 'react';
import datas from '../../data/Data';
import NotFound from '../../pages/notFound/NotFound';

function ListingDetails() {

    
    const { id } = useParams();
    
    const data = datas.find(item => item.id.toString() === id);
    const images = data ? data.pictures : [];
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!data) {
        return <NotFound/>
    }

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        
        <section className='ListingDetails'>
            <Navbar />
            {images && images.length > 0 && (
                <>
                    <div className='listingDetails-imageContainer' style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                        {images.length > 1 && (
                            <>
                                <button className='listingDetails-navButton listingDetails-navButton-left' onClick={prevSlide} aria-label='image précédente'>
                                    <img src={arrow_black_left} alt='flèche gauche' />
                                </button>
                                <button className='listingDetails-navButton listingDetails-navButton-right' onClick={nextSlide} aria-label='image suivante'>
                                    <img src={arrow_forward_right} alt='flèche droite' />
                                </button>
                            </>
                        )}
                    </div>
                    <div className='listingDetails-slideCount'>
                        {images.length > 1 && `${currentIndex + 1}/${images.length}`}
                    </div>
                </>
            )}
            <ImageSlider />
            <Footer />
        </section>
    );
   
}

export default ListingDetails;
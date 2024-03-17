import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import datas from '../../data/Data';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './ImageSlider.scss';
//import ArrowRight from '../../assets/arrow_forward_ios-24px 1.png';
//import ArrowLeft from '../../assets/arrow_back_ios-24px 1.png';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import NotFound from '../notFound/NotFound';
import ListingDetails from '../../components/listingDetails/ListingDetails';

function ImageSlider() {
    const [images, setImages] = useState([]);
    
    const { id } = useParams();
    const dataCurrentImageSlider = datas.find(data => data.id === id);

    useEffect(() => {
        if (dataCurrentImageSlider) {
            setImages(dataCurrentImageSlider.pictures);
        }
    }, [id, dataCurrentImageSlider]);

    if (!dataCurrentImageSlider) {
        return <NotFound />;
    }


const name = dataCurrentImageSlider.hote?.name.split(' ') ?? [];
const rating = dataCurrentImageSlider.rating;
// eslint-disable-next-line no-unused-vars
const description = dataCurrentImageSlider.description;
const equipements = dataCurrentImageSlider.equipements;

return (
    <div imageSlider-wrapper>
        <Header />
        <ListingDetails images={images} />
        <main className='accomodation'>
            <div className='accomodation-content'>
                <div className='accomodation-content-infos'>
                    <h1>{dataCurrentImageSlider.title}</h1>
                    <p>{dataCurrentImageSlider.location}</p>
                    <div>
                        {dataCurrentImageSlider.tags.map((tag, index) => 
                            <Tag key={index} tag={tag}/>
                    )}
                    </div>
                </div>
                <div className='accomodation-content-hote'>
                    <div>
                        <div className='accomodation-content-hote-name'>
                            <span>{name.length > 0 ? name[0] : ''}</span>
                            <span>{name.length > 1 ? name[1] : ''}</span>
                        </div>
                        <img src={dataCurrentImageSlider.hote.picture} alt='hôte de ce bien' />
                    </div>
                    <div className='accomodation-content-hote-star'>
                        <Rating rating={rating} />
                    </div>
                </div>
            </div>
            <div className='accomodation-collapse-item'>
                <collapse title={'Equipements'} content={equipements}/>
            </div>

        </main>
        <Footer />
    </div>
)

}
export default ImageSlider;
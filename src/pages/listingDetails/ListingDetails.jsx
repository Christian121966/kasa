import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../data/Data';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ImageSlider from '../../components/imageslider/ImageSlider'; // Assurez-vous que le chemin est correct
import Collapse from '../../components/collapse/Collapse';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import NotFound from '../notFound/NotFound';

function ListingDetails() {
    const [imageSlider, setImageSlider] = useState([]);
    const { id } = useParams();
    const apartment = datas.find(appt => appt.id === id);

    useEffect(() => {
        if (apartment && apartment.pictures) {
            setImageSlider(apartment.pictures);
        }
    }, [id, apartment]);

    if (!apartment) {
        return <NotFound />;
    }

    const nameParts = apartment.host.name.split(' ');

    return (
        <div className='ListingDetails_wrapper'>
            <Header />
            <ImageSlider imageSlider={imageSlider} />
            <main className="ListingDetails">
                <div className="ListingDetails-content">
                    <div className="ListingDetails-content-infos">
                        <h1>{apartment.title}</h1>
                        <p>{apartment.location}</p>
                        <div>
                            {apartment.tags.map((tag, index) => 
                                <Tag key={index} tag={tag}/>
                            )}
                        </div>
                    </div>
                    <div className="ListingDetails-content-hote">
                        <div>
                            <div className='ListingDetails-content-hote-name'>
                                <span>{nameParts[0]}</span>
                                <span>{nameParts.length > 1 ? nameParts[1] : ''}</span>
                            </div>
                            <img src={apartment.host.picture} alt="hôte de cet appartement" />
                        </div>

                        <div className="ListingDetails-content-host-stars">
                            <Rating rating={apartment.rating} />
                        </div>
                    </div>
                </div>
                <div className="ListingDetails-collapse">
                    <Collapse title={'Description'} content={apartment.description}/>
                    <Collapse title={'Équipements'} content={apartment.equipments.join(', ')}/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ListingDetails;
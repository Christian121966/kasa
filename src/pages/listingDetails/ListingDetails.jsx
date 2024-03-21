//import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListingDetails.scss';
import datas from '../../data/Data';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ImageSlider from '../../components/imageslider/ImageSlider';
import Collapse from '../../components/collapse/Collapse';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import NotFound from '../notFound/NotFound';

function ListingDetails() {
    const { id } = useParams();
    const apartment = datas.find(appt => appt.id === id);

    if (!apartment) {
        return <NotFound />;
    }

    const nameParts = apartment.host.name.split(' ');

    return (
        <div className='ListingDetails_wrapper'>
            <Header />
            <ImageSlider images={apartment.pictures} />
            <main className="ListingDetails">
                <div className="ListingDetails-content">
                    <div className="ListingDetails-content-infos">
                        <h1>{apartment.title}</h1>
                        <p>{apartment.location}</p>
                        <div className="ville">
                            {apartment.tags.map((tag, index) => 
                                <Tag key={index} tag={tag}/>
                            )}
                        </div>
                    </div>
                    <div className="ListingDetails-content-hote">
                        
                            <div className='ListingDetails-content-hote-name'>
                            <img src={apartment.host.picture} alt="hôte de cet appartement" className="imgHote" />
                                <span className='firstName'>{nameParts[0]}</span>
                                <span className='lastName'>{nameParts.length > 1 ? nameParts[1] : ''}</span>
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
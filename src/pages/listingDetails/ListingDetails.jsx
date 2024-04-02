import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../data/Data';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ImageSlider from '../../components/imageslider/ImageSlider';
import Collapse from '../../components/collapse/Collapse';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import NotFound from '../notFound/NotFound';
//import textCollapse from '../../components/atoms/textCollapse';
import './ListingDetails.scss';

function ListingDetails() {
    const { id } = useParams();
    const apartment = datas.find(appt => appt.id === id);

    if (!apartment) {
        return <NotFound />;
    }

    const nameParts = apartment.host.name.split(' ');

    return (
        <div className="ListingDetailsWrapper">
            <Header />
            <ImageSlider images={apartment.pictures} />
            <main className="ListingDetails">
                <div className="ListingDetailsContent">
                    <div className="ListingDetailsContentInfos">
                        <h1>{apartment.title}</h1>
                        <p>{apartment.location}</p>
                        <div className="ListingDetailsContentVille">
                            {apartment.tags.map((tag, index) => 
                                <Tag key={index} tag={tag}/>
                            )}
                        </div>
                    </div>
                    <div className="ListingDetailsContentHote">
                        <div className="ListingDetailsContentHoteName">
                            <img src={apartment.host.picture} alt="hôte de cet appartement" className="ImgHote" />
                            <div className="hoteName">
                                <span className="firstName">{nameParts[0]}</span>
                                <span className="lastName">{nameParts.length > 1 ? nameParts[1] : ''}</span>
                            </div>
                        </div>
                        <div className="ListingDetailsContentHoteStars">
                            <Rating rating={apartment.rating} />
                        </div>
                    </div>
                </div>
                <div className="ListingDetailsCollapse">
                    <Collapse title={'Description'} content={apartment.description}/>
                    <Collapse title={'Équipements'} content={
                        <ul>
                        {apartment.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                        </ul>
                    }/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ListingDetails;
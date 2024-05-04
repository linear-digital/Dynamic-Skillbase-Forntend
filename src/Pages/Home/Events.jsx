import React from 'react';
import EventCard from '../../Components/Card/EventCard';

const Events = () => {
    return (
        <div className='lg:py-14 py-10 container mx-auto px-4 md:px-0'>
            <h1 className='lg:text-5xl text-2xl uppercase text-center text-white font-semibold'>
                Upcoming Events
            </h1>
            <p className='text-center mx-auto mt-6 lg:text-base max-w-[60%] text-white text-sm capitalize'>
                life change bd platform gives you a corporate environment and helpfull digital marketing community
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-5 items-center mt-10">
                <EventCard text={"WE HELD FREE TRAINING FOR DIGITAL MARKETING, GRAPHIC DESIGN, FACEBOOK MARKETING ETC"} />
                <EventCard text={"WE HELD FREE TRAINING FOR BASIC SHARE MARKET KNOWLEDGE"} />
            </div>
        </div>
    );
};

export default Events;
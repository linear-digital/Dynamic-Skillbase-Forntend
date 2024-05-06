import React from 'react';
import EventCard from '../../Components/Card/EventCard';

const Events = () => {
    return (
        <div className='lg:py-14 py-10 container mx-auto px-4 md:px-0 text-black'>
            <h1 className='lg:text-2xl text-xl uppercase text-center  font-semibold text-primary'>
                Upcoming Events
            </h1>
            <h1 className='lg:text-4xl text-xl mt-3 font-semibold text-center'>Join With Our Events</h1>
            <div className="flex flex-col md:flex-row justify-center gap-5 items-center mt-10">
                <EventCard
                    title={"2024 addmission going on this week"}
                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti velit provident iste porro amet error ipsa vero quidem commodi."}
                />
                <EventCard
                    title={"Electric Engineering Event"}
                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti velit provident iste porro amet error ipsa vero quidem commodi."}
                />
                <EventCard
                    title={"World wise Famous Talented Teacher"}
                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti velit provident iste porro amet error ipsa vero quidem commodi."}
                />
            </div>
        </div>
    );
};

export default Events;
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 container mx-auto lg:p-0 p-5'>
            <section
                style={{
                    backgroundImage: 'url(/images/about.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className='h-[400px] w-full rounded'
            >
            </section>
            <section className='lg:px-10 mt-10 lg:mt-0'>
                <h1 className='text-4xl text-gray-800'>
                    Learn New Skills To Go Ahead For Your Future.
                </h1>
                <p className='mt-5 text-sm text-gray-900'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum impedit, earum delectus repellendus qui praesentium eveniet laboriosam nobis aliquid illum molestiae? Quo, minima nemo ea molestiae voluptatem quam nulla ipsum.
                </p>
                <div className="flex gap-3 items-center mt-5">
                    <div className="flex flex-col border h-[110px] max-w-[200px] justify-center items-start p-5 text-gray-700 rounded-lg">
                        <h1 className='text-xl font-semibold'>Our Vision</h1>
                        <p className='text-xs text-start mt-2'>Lorem ipsum dolor sr adipisicing elit. Rem, fugiat!</p>
                    </div>
                    <div className="flex flex-col border h-[110px] max-w-[200px] justify-center items-start p-5 text-gray-700 rounded-lg">
                        <h1 className='text-xl font-semibold'>Our Mission</h1>
                        <p className='text-xs text-start mt-2'>Lorem ipsum dolor sr adipisicing elit. Rem, fugiat!</p>
                    </div>
                </div>
                <Link to={'/courses'} className='btn btn-primary mt-5'>
                    Explore Courses
                </Link>
            </section>
        </div>
    );
};

export default AboutUs;
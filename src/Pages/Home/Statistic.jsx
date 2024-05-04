
import React from 'react';
import StatisticCard from '../../Components/Card/StatisticCard';

const Statistic = ({ page }) => {
    return (
        <div className={`${page ? "mt-10" : "bg-white "} py-5 min-h-[200px] px-4 md:px-0`}>
            <div className="container mx-auto relative">
                <div className={`flex lg:flex-row flex-col ${page ? "" : "lg:absolute"} top-[-105px] left-0 right-0 items-center justify-center lg:gap-10 gap-5`}>
                    <StatisticCard
                        text={"10+"}
                        text2={"Courses"}
                        icon={'/images/icons/books.png'}
                        link={'/courses'}
                    />
                    <StatisticCard
                        text={"Expert"}
                        text2={"Mentors"}
                        icon={'/images/icons/avatar.png'}
                    />
                    <StatisticCard
                        text={"Lifetime"}
                        text2={"Access"}
                        icon={'/images/icons/time.png'}
                    />
                </div>
                {
                    !page && <div className="lg:pt-[90px] mt-5 max-w-[80%] mx-auto">
                        <h1 className='text-center lg:text-2xl text-xl text-black'>
                            The Main objective of this setup is how to develop Skill’s on digital marketing And how to generate revenue on it
                        </h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default Statistic;




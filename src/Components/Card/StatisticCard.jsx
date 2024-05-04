import { useNavigate } from 'react-router-dom';
import React from 'react';

const StatisticCard = ({ text, icon, text2, link }) => {
    const navigate = useNavigate();
    const goTO = () => {
        if (link) {
            navigate(link);
        }
    }
    return (
        <div onClick={goTO} className='bg-black min-h-[130px] lg:w-[300px] w-full flex items-center justify-between px-7 rounded-md shadow shadow-gray-500 cursor-pointer'>
            <div className="stat-figure text-primary">
                <img
                    className='h-[70px]'
                    src={icon} alt="" />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className="text-white text-2xl">{text}</h1>
                <h3 className="text-white text-2xl mt-1">{text2}</h3>
            </div>
        </div>
    );
};

export default StatisticCard;
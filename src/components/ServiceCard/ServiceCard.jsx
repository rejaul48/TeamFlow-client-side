import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ textColor, bgColor, serviceName, serviceDescription, Icon }) => {

console.log(Icon)
    // Function to truncate text
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    return (
        <>
            <div className={`p-6 rounded-lg`}
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                }}

            >
                <div className='grid grid-cols-12 items-center gap-6 overflow-hidden w-full'>
                {Icon && <Icon className='col-span-2 text-3xl bg-[#3674B5] w-11 h-11 rounded-full p-2 text-white animate-spin ' />}
                     
                    <h2 className='text-lg font-semibold col-span-10'>{serviceName}</h2>
                </div>
                <p className='text-[16px] my-2'>{truncateText(`${serviceDescription}`, 15)}</p>
                <Link className='hover:underline hover:text-[#D1F8EF]'>Learn more...</Link>
            </div>
        </>
    );
};

export default ServiceCard;

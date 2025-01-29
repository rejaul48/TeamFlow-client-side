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
                {Icon && <Icon className='col-span-2 text-3xl bg-black w-11 h-11 rounded-full p-2 text-white animate-spin ' />}
                    {/* <MdDesignServices className='text-3xl bg-black w-10 h-10 rounded-full p-2 text-white' /> */}
                    <h2 className='text-lg font-semibold col-span-10'>{serviceName}</h2>
                </div>
                <p className='text-[16px] my-2'>{truncateText(`${serviceDescription}`, 15)}</p>
                <Link className='hover:underline hover:text-blue-500'>Learn more...</Link>
            </div>
        </>
    );
};

export default ServiceCard;

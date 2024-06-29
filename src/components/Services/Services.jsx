// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaCarSide, FaCheckCircle, FaWallet } from 'react-icons/fa';

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-3xl md:text-6xl text-primary' />,
        title: "Free Shipping",
        description: "Free Shipping On All Orders",
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-3xl md:text-6xl text-primary' />,
        title: "Safe Money",
        description: "30 Days Money Back",
    },
    {
        id: 3,
        icon: <FaWallet className='text-3xl md:text-6xl text-primary' />,
        title: "Secure Payment",
        description: "All Payment Secure",
    },
    {
        id: 4,
        icon: <FaCarSide className='text-3xl md:text-6xl text-primary' />,
        title: "Online Support 24/7",
        description: "Technical Support 24/7",
    },
];

const Services = () => {
    return (
        <div className='container mx-auto my-12 md:my-20 px-4'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {ServiceData.map((data) => (
                    <div key={data.id} className='flex flex-col items-center text-center'>
                        <div className='mb-3'>
                            {data.icon}
                        </div>
                        <h2 className='text-lg lg:text-xl font-bold mb-1'>{data.title}</h2>
                        <p className='text-gray-500 text-sm'>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets';

const ExclusiveOffers = () => {
    const navigate = useNavigate()
    const goTo = (path) => { navigate(path); scrollTo(0, 0) }
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <Title
                    align='left'
                    title='Exclusive Offers'
                    subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
                />

                <button onClick={() => goTo('/experiences')} className='group flex items-center gap-2 cursor-pointer'>
                    View All Offers
                    <img
                        src={assets.arrowIcon}
                        alt="arrow-icon"
                        className='group-hover:translate-x-1 transition-all'
                    />
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {exclusiveOffers.map((item) => (
                    <div
                        key={item._id}
                        role="link"
                        tabIndex={0}
                        onClick={() => goTo(`/rooms?experience=${item.experience}`)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                goTo(`/rooms?experience=${item.experience}`)
                            }
                        }}
                        className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center cursor-pointer overflow-hidden transition-transform duration-300 focus-visible:outline-2 focus-visible:outline-offset-2'
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />
                        <p className='px-3 py-1 absolute z-10 top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>
                            {item.priceOff}% OFF
                        </p>

                        <div className="relative z-10">
                            <p className='text-2xl font-medium font-playfair'>{item.title}</p>
                            <p>{item.description}</p>
                            <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
                        </div>

                        {/* <button onClick={() => goTo(`/rooms?experience=${item.experience}`)} className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5'>
                            View Offers
                            <img
                                className='invert group-hover:translate-x-1 transition-all'
                                src={assets.arrowIcon}
                                alt="arrow-icon"
                            />
                        </button> */}

                        <div className="relative z-10 flex items-center gap-2 font-medium mt-4 mb-5">
                            View Offers
                            <img
                                className='invert group-hover:translate-x-1 transition-all'
                                src={assets.arrowIcon}
                                alt="arrow-icon"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers

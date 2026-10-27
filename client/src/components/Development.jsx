import React from 'react'
import { useNavigate } from 'react-router-dom'

const Development = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 font-playfair">
                Under Development
            </h1>

            <p className="mt-4 max-w-xl text-gray-500">
                We're working hard to bring this page to life.
                Please check back soon!
            </p>

            <button
                onClick={() => navigate('/')}
                className="mt-8 rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
            >
                Back to Home
            </button>
        </div>
    )
}

export default Development
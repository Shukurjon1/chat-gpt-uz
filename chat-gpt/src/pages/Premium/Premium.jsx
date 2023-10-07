import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faX, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Premium() {
    return (
        <div className='w-full min-h-screen overflow-hidden flex justify-center flex-col gap-6 items-center text-white text-3xl'>
            <FontAwesomeIcon icon={faHand} className="border-red-100 text-red-100 border rounded-full p-4 w-16 h-16" />
            <p className='text-center'>Faqat Premium Obunachilar Uchun</p>
            <Link to="/">
                <button className='px-5 py-2 text-lg rounded-lg text-gray-700 hover:shadow-lg transition bg-white'>Ortga</button>
            </Link>
        </div>
    )
}

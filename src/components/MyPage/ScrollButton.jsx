import React, { useEffect, useState } from 'react'
import upButton from '../../assets/scrollToTop.png'

const ScrollButton = () => {

    const [showUpButton, setShowUpButton] = useState(false)

    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 75) {
                setShowUpButton(true);
            } else {
                setShowUpButton(false);
            }

        });
    })

    return showUpButton &&
        <div onClick={scrollHandler} style={{ zIndex: '200', right: '1rem', bottom: '30rem', position: 'fixed',  }} className='fixed cursor-pointer'>
            <div style={{opacity:0.6}} className=''>
                <img className='object-contain hover' style={{ width: '9.75rem' }} src={upButton} alt='up-button' />
            </div>
        </div>

}

export default ScrollButton

// import Navbar from 'components/mainPage/Navbar'
// import NoticeBanner from 'components/mainPage/NoticeBanner'
import React from 'react'
import Header from '../Header'
import PlaceholderImage from '../../assets/liveCasino/placeholder.png'
import NavBottom from '../NavBottom'

const LiveCasinoPage = ({
    isAuthenticated,
    setAuthenticated
}) => {
    return (
        <div className="relative flex flex-col justify-center overflow-hidden h-screen">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <Header />
                <NavBottom isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="w-full h-full bg-black flex justify-center limit1600:mt-92px mt-122px"
            style={{
                height: '100vh',
                background: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

            }}
            >
                <img className="h-full object-contain" style={{ width: '77.625rem', height: ''}} src={PlaceholderImage} alt="" />
            </div>

        </div>
    )
}

export default LiveCasinoPage

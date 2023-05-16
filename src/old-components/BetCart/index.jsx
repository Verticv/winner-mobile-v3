import React, { useState, useEffect } from 'react';
// import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import BetCombinationRightPanel from '../BetCombinationRightPanel';
import ArrowUp from '../../assets/BetCart/cart-arrow-up.png';
import CartIcon from '../../assets/BetCart/cart.png';
import Expand from 'react-expand-animated';
import Home from '../../assets/BetCart/home.png';
import MyInfo from '../../assets/BetCart/2.png';
import { Link } from 'react-router-dom';
import './_betCart.scss';

const BetCart = ({ selectedOption, addedCard, setAddedCard, isPanelFixed, setPanelFixed, setOpenedCart, openedCart }) => {
    // const [openedCart, setOpenedCart] = useState(false)
    const [selectedGame, setSelectedGame] = useState(window.location.pathname)
    const [openedCartDelay, setOpenedCartDelay] = useState(false)
    console.log(`selectedGame`, selectedGame)

    useEffect(() => {
        setSelectedGame(window.location.pathname)
    }, [])
    //   const [selectedOption, setSelectedOption] = useState([
    //     {
    //         type: "",
    //         name: "",
    //         selection: "",
    //         buttonType: "",
    //         subtitle: null
    //     }
    // ])

    // <div style={{width: '3.1875rem', height: '3.1875rem', fontSize: '2.4375rem'}} className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4 font-roboto">
    //   1
    // </div>

    useEffect(() => {
        openedCart && (
            setOpenedCartDelay(true)
        )
        setTimeout(() => {
            !openedCart && (
                setOpenedCartDelay(false)
            )
        }, 250)

    }, [openedCart])

    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div style={{ width: '77.625rem', height: openedCartDelay ? "100vh" : "auto" }} className="container_1 shadow-to-box">
            <div style={{ width: '77.625rem', borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem' }} className="container_2 shadow-to-box">
                <div className="container_3">
                    {/* {!openedCart ? ( */}
                    <div style={{ height: "9.0625rem", padding: '0 3.6875rem', borderTopLeftRadius: '2.9rem', borderTopRightRadius: '2.9rem' }} className={`${openedCartDelay ? "container_4 transition" : "container_5 transition"} container_6 shadow-to-box`} onClick={() => setOpenedCart(true)}>
                        <div style={{ width: '40.625rem', display: 'flex', alignItems: 'center' }} className='flex items-center'>
                            <img style={{ width: '4.0625rem', marginLeft: '', paddingBottom: '', objectFit: 'contain' }} className="object-contain" src={CartIcon} alt="" />
                            <div style={{ minWidth: '3.5625rem', padding: '0rem 0.7rem', height: '3.5625rem', marginRight: '1.125rem', background: "linear-gradient(to bottom right, #e9441d, #8a2a13)", boxShadow: "1px 1px 1px #00000060" }} className="container_7">
                                2
                            </div>
                            <p className='container_8'>베팅카트 열기</p>
                        </div>
                        <button className="container_9">
                            <img style={{ width: '4.5rem', marginLeft: '', paddingBottom: '', objectFit: 'contain' }} className="w-16 object-contain" src={ArrowUp} alt="" />
                        </button>
                        <div style={{ width: '40.625rem' }} className='container_10'>
                            <p className='container_11' style={{ marginRight: '2.8rem' }}>배당률 <span className='container_12'>99.99</span></p>
                            <Link to={'/main'}>
                                <img
                                    className='link-content1'
                                    onPointerUp={e => {
                                        e.preventDefault();
                                    }}
                                    src={Home}
                                    style={{ width: '5.375rem' }}
                                    alt=""
                                />
                            </Link>
                            <Link to={'/mypage'}>
                                <img
                                    className='link-content2'
                                    onPointerUp={e => {
                                        e.preventDefault();
                                    }}
                                    src={MyInfo}
                                    style={{ width: '4rem' }}
                                    alt=""
                                />
                            </Link>

                        </div>
                    </div>
                    {/* ): */}
                    <Expand className='expand-content-1' duration={200} open={openedCart}>
                        <div className='expand-content-2 shadow-to-box' style={{ height: 'auto',width: '77.625rem', maxHeight: openedCart ? 'calc(var(--vh) * 100)' : 'unset', padding: '0.1875rem', borderTopLeftRadius: '2.7rem', borderTopRightRadius: '2.7rem' }}>
                            <div
                                style={{
                                    background: '#262626',
                                    // background: 'rgb(255 163 163 / 33%)',
                                    width: '100%',
                                    height: '100%',
                                    paddingTop: '1.6rem',
                                    borderTopLeftRadius: '2.6rem',
                                    borderTopRightRadius: '2.6rem'
                                    , paddingBottom: '2rem'
                                }}
                            >
                                <BetCombinationRightPanel
                                    addedCard={addedCard}
                                    setAddedCard={setAddedCard}
                                    isPanelFixed={isPanelFixed}
                                    setPanelFixed={setPanelFixed}
                                    setOpenedCart={setOpenedCart}
                                />
                            </div>
                        </div>
                    </Expand>
                    {/* } */}

                </div>
            </div>
        </div>
    )
}

export default BetCart


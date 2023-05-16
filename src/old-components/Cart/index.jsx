import React, { useState, useEffect } from 'react'
import MinigamesRightPanel from '../MinigamesRightPanel'
import ArrowUp from '../../assets/BetCart/cart-arrow-up.png'
import CartIcon from '../../assets/BetCart/cart.png'
import Expand from 'react-expand-animated'
import { Link } from 'react-router-dom';
import Home from '../../assets/BetCart/home.png'
import MyInfo from '../../assets/BetCart/2.png'
import './_cart.scss';

const Cart = ({ selectedOption }) => {
    const [openedCart, setOpenedCart] = useState(false)
    const [openedCartDelay, setOpenedCartDelay] = useState(false)
    const [selectedGame, setSelectedGame] = useState(window.location.pathname)

    useEffect(() => {
        setSelectedGame(window.location.pathname)
    }, [])

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

    return (
        <div style={{ maxWidth: '1242px', height: openedCartDelay ? "100vh" : "auto" }} className="container_1 shadow-to-box">
            <div style={{ maxWidth: '1242px', borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem' }} className="container_2 shadow-to-box">
                <div className="container_3">
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
                </div>
                <Expand className='cart-content15' open={openedCart} duration={200} >
                    <div className='expand-content-2 shadow-to-box' style={{
                        // background: 'bottom',
                        height: 'auto',width: '100%', margin: 'auto', maxHeight: openedCart ? 'calc(var(--vh) * 100)' : 'unset', padding: '0.1875rem', borderTopLeftRadius: '2.7rem', borderTopRightRadius: '2.7rem'
                    }}>
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
                            <MinigamesRightPanel selectedGame={selectedGame} setOpenedCart={setOpenedCart} selectedOption={selectedOption} />
                        </div>
                    </div>
                </Expand>

            </div>
        </div>
    )
}

export default Cart


import React, { useState, useEffect } from 'react';
import Expand from 'react-expand-animated';

import MinigamesRightPanel from '../MinigamesRightPanel';
import CartIcon from '../../assets/minigames/cart.png';

import './_cart.scss';
import '../BetCart/_betCart.scss';
import '../BetCombinationRightPanel/_betCombinationRightPanel.scss';
import '../BetCombinationRightPanelCart/_betCombinationRightPanelCart.scss';

const Cart = ({ selectedOption }) => {
  const [openedCart, setOpenedCart] = useState(false);
  const [openedCartDelay, setOpenedCartDelay] = useState(false);
  const [selectedGame, setSelectedGame] = useState(window.location.pathname);

  useEffect(() => {
    setSelectedGame(window.location.pathname);
  }, []);

  useEffect(() => {
    openedCart && setOpenedCartDelay(true);
    setTimeout(() => {
      !openedCart && setOpenedCartDelay(false);
    }, 250);
  }, [openedCart]);

  return (
    <div
      style={{ maxWidth: '1242px', height: openedCartDelay ? '100vh' : 'auto' }}
      className="container_1 shadow-to-box"
    >
      <div
        style={{
          maxWidth: '1242px',
          borderTopLeftRadius: '2.5rem',
          borderTopRightRadius: '2.5rem',
        }}
        className="container_2 shadow-to-box"
      >
        <div
          className="container_3"
          style={{ position: 'relative', zIndex: '999' }}
        >
          <div
            style={{
              height: '10rem',
              width: '10rem',
              background: '#ffffff',
              opacity: '0.9',
              border: '0.5rem solid #f04281',
              borderRadius: '50%',
              position: 'absolute',
              bottom: '28rem',
              left: '43%',
              display: openedCart ? 'none' : 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '1px 1px 1px #00000060',
            }}
            className={`${
              openedCartDelay
                ? 'container_4 transition'
                : 'container_5 transition'
            } container_6 shadow-to-box`}
            onClick={() => setOpenedCart(true)}
          >
            <div
              style={{
                width: '40.625rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                style={{
                  width: '5rem',
                  marginLeft: '-1rem',
                  marginTop: '1rem',
                  paddingBottom: '',
                }}
                className="object-contain"
                src={CartIcon}
                alt=""
              />
            </div>
            <div
            style={{
              position: 'absolute',
              minWidth: '3.5625rem',
              height: '3.5625rem',
              background: '#f04281',
              borderRadius: '50%',
              left:'6rem',
              bottom: '6rem',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '700',
              fontSize: '2.4rem'
            }}
            className="container_7"
          >
            2
          </div>
          </div>
        </div>
        <Expand className="cart-content15" open={openedCart} duration={200}>
          <div
            className="expand-content-2 shadow-to-box"
            style={{
              // background: 'bottom',
              height: 'auto',
              width: '100%',
              margin: 'auto',
              maxHeight: openedCart ? 'calc(var(--vh) * 100)' : 'unset',
              padding: '0.1875rem',
              borderTopLeftRadius: '2.7rem',
              borderTopRightRadius: '2.7rem',
            }}
          >
            <div
              style={{
                background: '#eeeeee',
                // background: 'rgb(255 163 163 / 33%)',
                width: '100%',
                height: '100%',
                paddingTop: '1.6rem',
                borderTopLeftRadius: '2.6rem',
                borderTopRightRadius: '2.6rem',
                paddingBottom: '2rem',
              }}
            >
              <MinigamesRightPanel
                selectedGame={selectedGame}
                setOpenedCart={setOpenedCart}
                selectedOption={selectedOption}
              />
            </div>
          </div>
        </Expand>
      </div>
    </div>
  );
};

export default Cart;

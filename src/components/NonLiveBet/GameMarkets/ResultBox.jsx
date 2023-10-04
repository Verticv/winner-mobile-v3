import React, { useState } from 'react';
import MenuStarIconOn from '../../../assets/images/nonLiveBet/gameMarkets/menu-star-on.png'
import MenuStarIcon from '../../../assets/images/nonLiveBet/gameMarkets/menu-star-off.png'
import ArrowUp from '../../../assets/images/nonLiveBet/arrow-up.png'
import Collapsible from "../Collapsible/index";
import Up from '../../../assets/images/nonLiveBet/UpArrow.png'
import Down from '../../../assets/images/nonLiveBet/DnArrow.png'
import lock from '../../../assets/images/nonLiveBet/lock.png'
const ResultBox = () => {

  const CardBox = () => {
    const [isActive, setActive] = useState(false);
    return (
      <div className='game-markets__box'>
        <Collapsible
          open
          headerChild={
            <div className='game-markets__box-header d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                {!isActive && (<img src={MenuStarIcon} alt='' className='star-btn star-off' style={{ width: '3.125rem' }} onClick={() => setActive(true)} />)}
                {isActive && (<img src={MenuStarIconOn} alt='' className='star-btn' style={{ width:'3.375rem'}} onClick={() => setActive(false)} />)}
              </div>
              <div className='d-flex justify-content-center align-items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
          }>
          <div className='game-markets__box-body d-flex justify-content-between align-items-center'>
            <div className='game-markets__cell'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>1</div>
                <div className='score'>1.98</div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div>X</div>
                <div className='score'>4.20</div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div>2</div>
                <div className='score'>3.31</div>
              </div>
            </div>
          </div>
        </Collapsible>
      </div>
    )
  }
  return (
    <>
      <CardBox/>
      <div className='game-markets__box'>
        <Collapsible
          open
          headerChild={
            <div className='game-markets__box-header d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='d-flex justify-content-center align-items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
          }>
        <div className='game-markets__box-body d-flex justify-content-between align-items-center'>
        <div className='game-markets__cell'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>1</div>
            <div className='score'>1.98</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>X</div>
            <div className='score'>4.20</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>2</div>
            <div className='score'>3.31</div>
          </div>
        </div>
          </div>
        </Collapsible>
    </div>
      <div className='game-markets__box'>
        <Collapsible
          open
          headerChild={
            <div className='game-markets__box-header d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='d-flex justify-content-center align-items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
          }>
          <div className='game-markets__box-body d-flex justify-content-between align-items-center'>
            <div className='game-markets__cell'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>1X</div>
                <div className='score'>1.32</div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div>12</div>
                <div className='score'>1.32</div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div>X2</div>
                <div className='score'>1.77</div>
              </div>
            </div>
          </div>
        </Collapsible>
    </div>


      <div className='game-markets__box'>
        <Collapsible
          open
          headerChild={
            <div className='game-markets__box-header d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='d-flex justify-content-center align-items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
          }>
        <div className='game-markets__box-body d-flex justify-content-between align-items-center'>
          <div className='game-markets__cell'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>아스널</div>
              <div className='score'>1.52</div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div>리버플</div>
              <div className='score'>2.53</div>
            </div>
          </div>
          </div>
        </Collapsible>
    </div>


      <div className='game-markets__box'>
        <Collapsible
          open
          headerChild={
            <div className='game-markets__box-header d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='d-flex justify-content-center align-items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
          }>
      <div className='game-markets__box-body'>
        <div className='game-markets__cell'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>1X</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>12</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>X2</div>
            <div className='score'>1.77</div>
          </div>
        </div>
        <div className='game-markets__cell'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>1X</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>12</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>X2</div>
            <div className='score'>1.77</div>
          </div>
        </div>
        <div className='game-markets__cell'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>1X</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>12</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>X2</div>
            <div className='score'>1.77</div>
          </div>
        </div>
          </div>
        </Collapsible>
    </div>



      <div className='game-markets__box'>
        <Collapsible
          open
          headerChild={
            <div className='game-markets__box-header d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='d-flex justify-content-center align-items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
          }>
          <div className='game-markets__box-body'>
          <div className='game-markets__cell game-markets__header-cell'>
            <div >아스널</div>
            <div>리버플</div>
          </div>
          <div className='game-markets__cell'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>아스널</div>
                <div className='score d-flex align-items-center justify-content-between' style={{ width:'6.75rem'}}>
                  <img src={Up} alt="right" className='blink-style' style={{ width: '1.313rem' }} />
                  1.52
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div>리버플</div>
                <div className='score d-flex align-items-center justify-content-between' style={{ width: '6.75rem' }}>
                  <img src={Down} alt="right" className='blink-style' style={{ width: '1.313rem' }} />
                  2.53</div>
            </div>
            </div>
            <div className='game-markets__cell'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>아스널</div>
                <div className='score d-flex align-items-center justify-content-between' style={{ width: '6.75rem' }}>
                  <img src={Up} alt="right" className='blink-style' style={{ width: '1.313rem' }} />
                  1.52
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div>리버플</div>
                <div className='score d-flex align-items-center justify-content-between' style={{ width: '6.75rem' }}>
                  <img src={Down} alt="right" className='blink-style' style={{ width: '1.313rem' }} />
                  2.53</div>
              </div>
            </div>
            <div className='game-markets__cell'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>아스널</div>
                <img src={lock} alt="right" className='lock' style={{ marginRight: '0.875rem' }} />
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div>리버플</div>
                <img src={lock} alt="right" className='lock' style={{ marginRight:'0.875rem'}} />
              </div>
            </div>
          </div>
        </Collapsible>
    </div>


      <div className='game-markets__box'>
        <Collapsible
          open
          headerChild={
            <div className='game-markets__box-header d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='d-flex justify-content-center align-items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
          }>
      <div className='game-markets__box-body'>
        <div className='game-markets__cell game-markets__header-cell'>
          <div >아스널</div>
          <div>무 : 리버플</div>
          <div >리버플</div>
        </div>
        <div className='game-markets__cell'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>1</div>
            <div className='score'>1.98</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>x</div>
            <div className='score'>4.20</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>2</div>
            <div className='score'>3.31</div>
          </div>
        </div>
        <div className='game-markets__cell'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>1X</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>12</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>X2</div>
            <div className='score'>1.77</div>
          </div>
        </div>
        <div className='game-markets__cell'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>1X</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>12</div>
            <div className='score'>1.32</div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>X2</div>
            <div className='score'>1.77</div>
          </div>
        </div>
          </div>
        </Collapsible>
      </div>
    </>
  )
}

export default ResultBox;
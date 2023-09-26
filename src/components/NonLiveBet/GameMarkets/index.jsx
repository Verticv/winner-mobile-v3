import './_style.scss'
import BackIcon from '../../../assets/images/nonLiveBet/gameMarkets/back-arrow.png'
import col1 from '../../../assets/images/nonLiveBet/col-1.png'
import StarIcon from '../../../assets/images/nonLiveBet/satr.png'
import FlagIcon from '../../../assets/images/nonLiveBet/flag.png'
import ArrowUp from '../../../assets/images/nonLiveBet/arrow-up.png'
import Banner from '../../../assets/images/nonLiveBet/gameMarkets/banner.png'
const GameMarkets = ({ close }) => {
  return (
    <div className='game-markets-container'>
      <div className='game-markets-header flex content-between items-center'>
        <div className='flex items-center'>
          <img src={BackIcon} alt='' className='back-btn' />
          <img src={col1} alt='' className='sport-icon' />
          <p>축구 / 잉글랜드 - 프리미어리그</p>
        </div>
        <div className='flex items-center'>
          <img src={FlagIcon} alt='' className='flag-btn' />
          <img src={StarIcon} alt='' className='star-btn' />
        </div>
      </div>
      <div className='game-markets__info flex content-between items-center'>
        <div className='flex items-center'>
          <p className='game-markets__time'>03-22 13:00</p>
          <p>아스널</p>
          <p className='game-markets__vs'>VS</p>
          <p>리버풀</p>
        </div>
        <div >
          <img src={StarIcon} alt='' className='star-btn' />
        </div>
      </div>
      <div className='game-markets__banner'>
        <img src={Banner} alt='' className='' />
      </div>
      <div className='game-markets__result'>
        <div className='game-markets__card'>
          <div className='game-markets__slider flex'>
            <button>
              <img src={StarIcon} alt='' className='star-btn' />
            </button>
            <button className='active'>
              <p>전체</p>
            </button>
            <button>
              <p>매치</p>
            </button>
            <button >
              <p>오버/언더</p>
            </button>
            <button>
              <p>핸디캡</p>
            </button>
            <button >
              <p>조합</p>
            </button>
          </div>
          <div className='game-markets__box'>
            <div className='game-markets__box-header flex content-between items-center'>
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.875rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={StarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center' style={{ width: '7.313rem', borderLeft: '0.188rem solid #764cbb', height: '100%' }}>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
            <div className='game-markets__box-body flex content-between items-center'>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1X</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>12</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X2</div>
                  <div className='score'>1.77</div>
                </div>
              </div>
            </div>
          </div>

          <div className='game-markets__box'>
            <div className='game-markets__box-header flex content-between items-center'>
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.875rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={StarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center' style={{ width: '7.313rem', borderLeft: '0.188rem solid #764cbb', height: '100%' }}>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
            <div className='game-markets__box-body flex content-between items-center'>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1X</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>12</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X2</div>
                  <div className='score'>1.77</div>
                </div>
              </div>
            </div>
          </div>


          <div className='game-markets__box'>
            <div className='game-markets__box-header flex content-between items-center'>
              <div className='flex content-between items-center w-full' style={{paddingRight:'1.875rem'}}
               >
                <p>승무패 [정규시간]</p>
                <img src={StarIcon} alt='' className='star-btn'/>
              </div>
              <div className='flex content-center items-center' style={{ width: '7.313rem', borderLeft: '0.188rem solid #764cbb' ,height:'100%'}}>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
            <div className='game-markets__box-body flex content-between items-center'>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>아스널</div>
                  <div className='score'>1.52</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>리버플</div>
                  <div className='score'>2.53</div>
                </div>
              </div>
            </div>
          </div>
          

          <div className='game-markets__box'>
            <div className='game-markets__box-header flex content-between items-center'>
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.875rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={StarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center' style={{ width: '7.313rem', borderLeft: '0.188rem solid #764cbb', height: '100%' }}>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
            <div className='game-markets__box-body'>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1X</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>12</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X2</div>
                  <div className='score'>1.77</div>
                </div>
              </div>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1X</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>12</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X2</div>
                  <div className='score'>1.77</div>
                </div>
              </div>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1X</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>12</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X2</div>
                  <div className='score'>1.77</div>
                </div>
              </div>
            </div>
          </div>



          <div className='game-markets__box'>
            <div className='game-markets__box-header flex content-between items-center'>
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.875rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={StarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center' style={{ width: '7.313rem', borderLeft: '0.188rem solid #764cbb', height: '100%' }}>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
            <div className='game-markets__box-body'>
              <div className='game-markets__cell game-markets__header-cell'>
                <div >아스널</div>
                <div>리버플</div>
              </div>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>아스널</div>
                  <div className='score'>1.52</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>리버플</div>
                  <div className='score'>2.53</div>
                </div>
              </div>
            </div>
          </div>

        
          <div className='game-markets__box'>
            <div className='game-markets__box-header flex content-between items-center'>
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.875rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={StarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center' style={{ width: '7.313rem', borderLeft: '0.188rem solid #764cbb', height: '100%' }}>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
            <div className='game-markets__box-body'>
              <div className='game-markets__cell game-markets__header-cell'>
                <div >아스널</div>
                <div>무 : 리버플</div>
                <div >리버플</div>
              </div>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1X</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>12</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X2</div>
                  <div className='score'>1.77</div>
                </div>
              </div>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1X</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>12</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X2</div>
                  <div className='score'>1.77</div>
                </div>
              </div>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1X</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>12</div>
                  <div className='score'>1.32</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X2</div>
                  <div className='score'>1.77</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GameMarkets;
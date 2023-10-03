import './_style.scss'
import BackIcon from '../../../assets/images/nonLiveBet/gameMarkets/back-arrow.png'
import col1 from '../../../assets/images/nonLiveBet/col-1.png'
import MenuStarIcon from '../../../assets/images/nonLiveBet/gameMarkets/menu-star.png'
import StarIcon from '../../../assets/images/nonLiveBet/gameMarkets/star.png'
import FlagIcon from '../../../assets/images/nonLiveBet/flag.png'
import ArrowUp from '../../../assets/images/nonLiveBet/arrow-up.png'
import Banner from '../../../assets/images/nonLiveBet/gameMarkets/banner.png'
import ScoreBanner from '../../../assets/images/nonLiveBet/gameMarkets/score-banner.png'
import TeamLogo1 from '../../../assets/images/nonLiveBet/gameMarkets/team-logo1.png'
import TeamLogo2 from '../../../assets/images/nonLiveBet/gameMarkets/team-logo2.png'
import vsIcon from '../../../assets/images/nonLiveBet/gameMarkets/vs-icon.png'
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
      <div className='score-banner'>
        <img src={ScoreBanner} alt='' />
        <div className='score-banner__content'>
          <div> 
            <img src={TeamLogo1} alt='' className='' />
            <p className='score-banner__team-name'>아스널</p>
          </div>
          <div className='vs-box'>
            <img src={vsIcon} alt='' className='' />
            <p>03-22 13:00</p>
          </div>
          <div>
            <img src={TeamLogo2} alt='' className='' />
            <p className='score-banner__team-name'>리버풀</p>
          </div>
        </div>
      </div>
      <div className='game-markets__info flex content-between items-center'>
        <div className='flex items-center' style={{ marginTop: '-0.125rem'}}>
          <p className='game-markets__time'>03-22 13:00</p>
          <p>아스널</p>
          <p className='game-markets__vs'>VS</p>
          <p>리버풀</p>
        </div>
        <div>
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
              <img src={MenuStarIcon} alt='' className='star-btn' />
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
            <button>
              <p>핸디캡</p>
            </button>
            <button >
              <p>조합</p>
            </button>
          </div>
          <div className='game-markets__box'>
            <div className='game-markets__box-header flex content-between items-center'>
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
            <div className='game-markets__box-body flex content-between items-center'>
              <div className='game-markets__cell'>
                <div className='flex content-between items-center'>
                  <div>1</div>
                  <div className='score'>1.98</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>X</div>
                  <div className='score'>4.20</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>2</div>
                  <div className='score'>3.31</div>
                </div>
              </div>
            </div>
          </div>

          <div className='game-markets__box'>
            <div className='game-markets__box-header flex content-between items-center'>
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center game-markets__arrow'>
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
              <div className='flex content-between items-center w-full' style={{paddingRight:'1.75rem'}}
               >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn'/>
              </div>
              <div className='flex content-center items-center game-markets__arrow'>
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
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center game-markets__arrow'>
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
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center game-markets__arrow'>
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
              <div className='flex content-between items-center w-full' style={{ paddingRight: '1.75rem' }}
              >
                <p>승무패 [정규시간]</p>
                <img src={MenuStarIcon} alt='' className='star-btn' />
              </div>
              <div className='flex content-center items-center game-markets__arrow'>
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
                  <div>1</div>
                  <div className='score'>1.98</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>x</div>
                  <div className='score'>4.20</div>
                </div>
                <div className='flex content-between items-center'>
                  <div>2</div>
                  <div className='score'>3.31</div>
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
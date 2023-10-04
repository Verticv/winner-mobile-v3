import BannerBG from '../../../assets/images/nonLiveBet/gameMarkets/banner.png'
import StarIconOff from '../../../assets/images/nonLiveBet/gameMarkets/star-icon-off.png'
const Banner = () => {
  return (
    <>
      <div className='game-markets__info d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center' style={{ marginTop: '-0.125rem' }}>
          <p className='game-markets__time'>03-22 13:00</p>
          <p>아스널</p>
          <p className='game-markets__vs'>VS</p>
          <p>리버풀</p>
        </div>
        <div>
          <img src={StarIconOff} alt='' className='star-btn' style={{ width:'4.063rem'}}/>
        </div>
      </div>
      <div className='game-markets__banner'>
        <img src={BannerBG} alt='' className='' />
      </div>
    </>
  )
}
export default Banner;
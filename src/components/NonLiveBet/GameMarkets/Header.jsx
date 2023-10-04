import BackIcon from '../../../assets/images/nonLiveBet/gameMarkets/back-arrow.png'
import col1 from '../../../assets/images/nonLiveBet/col-1.png'
import StarIcon from '../../../assets/images/nonLiveBet/gameMarkets/star.png'
import FlagIcon from '../../../assets/images/nonLiveBet/flag.png'
const Header = ({close}) => {
  return (
    <div className='game-markets-header d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center'>
        <img src={BackIcon} alt='' className='back-btn' onClick={close} />
        <img src={col1} alt='' className='sport-icon' />
        <p>축구 / 잉글랜드 - 프리미어리그</p>
      </div>
      <div className='d-flex align-items-center'>
        <img src={FlagIcon} alt='' className='flag-btn' />
        <img src={StarIcon} alt='' className='star-btn' />
      </div>
    </div>
  )
}

export default Header;
import './_style.scss'
import SearchBack from '../../../assets/images/nonLiveBet/search-back.png'
import CloseIcon from '../../../assets/images/nonLiveBet/close-icon.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon2.png'
const SearchSection = ({close}) => {
  return (
    <div className='search-section'>
      <div className='search-card'>
        <div className='search-header'>
          <div className='search-field'>
            <img src={SearchBack} alt="searchBack" className='back-icon'
              onClick={close}/>
            <input
              type="text"
              placeholder="프리미어"
            />
            <img src={CloseIcon} alt="searchBack" className='close-icon' />
          </div>
        </div>
        <div className='search-body'>
          <div className='search-result'>
            <div className='result-header'>
              <img src={Icon2} alt="Icon2" />
              <p>축구</p>
            </div>
            <div className='result-list'>
              <div>호주 - 노던 테리토리 프리미어 리그</div>
              <div> 이집트 - 프리미어 리그</div>
              <div> 아일랜드 - 프리미어 디비전</div>
              <div>카자흐스탄 - 프리미어 리그</div>
              <div>잉글랜드 - 프리미어 리그</div>
            </div>
            <div className='result-header'>
              <img src={Icon2} alt="Icon2" />
              <p>축구</p>
            </div>
            <div className='result-list'>
              <div>호주 - 노던 테리토리 프리미어 리그</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSection;
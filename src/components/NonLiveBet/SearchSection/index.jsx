import React, { useState } from 'react'
import './_style.scss'
import SearchBack from '../../../assets/images/nonLiveBet/search-back.png'
import CloseIcon from '../../../assets/images/nonLiveBet/close-icon.png'
import SearchIcon from '../../../assets/images/nonLiveBet/search-icon.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon2.png'
const SearchSection = ({ close }) => {
  const [inputValue, setInputValue] = useState(null)
  return (
    <div className='search-modal'>
      <div className='search-section'>
        <div className='search-card'>
          <div className='search-header'>
            <div className='search-field'>
              <img src={SearchBack} alt="searchBack" className='back-icon'
                onClick={close}/>
              <input
                type="text"
                placeholder="프리미어"
                value={inputValue}
                onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
              />
              {inputValue && (
                <img src={CloseIcon} alt="searchBack" className='close-icon right-icon'
                  onClick={() => setInputValue('')} />
              )}
              {!inputValue && (<img src={SearchIcon} alt="searchBack" className='close-icon right-icon' />)}
            </div>
          </div>
          {inputValue &&
            (<div className='search-body'>
              <div className='search-result'>
                <div className='result-header'>
                  <img src={Icon2} alt="Icon2" />
                  <p>축구</p>
                </div>
                <div className='result-list'>
                  <div>
                    <span>호주 - 노던 테리토리 프리미어 리그</span>
                  </div>
                  <div>
                    <span>
                      이집트 - 프리미어 리그
                    </span>
                  </div>
                  <div>
                    <span>
                      아일랜드 - 프리미어 디비전
                    </span>
                  </div>
                  <div>
                    <span>
                      잉글랜드 - 프리미어 리그
                    </span>
                  </div>
                  <div>
                    <span>
                      이집트 - 프리미어 리그
                    </span>
                  </div>
                </div>
                <div className='result-header'>
                  <img src={Icon2} alt="Icon2" />
                  <p>축구</p>
                </div>
                <div className='result-list'>
                  <div>호주 - 노던 테리토리 프리미어 리그</div>
                </div>
              </div>
            </div>)
          }
          {!inputValue && (<div className='empty-result'>
            <p>매치검색</p>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default SearchSection;
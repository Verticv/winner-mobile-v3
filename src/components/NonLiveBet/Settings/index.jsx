import './_style.scss'
import TabIcon1 from '../../../assets/images/nonLiveBet/tab1-icon.png'
import TabIcon2 from '../../../assets/images/nonLiveBet/tab2-icon.png'
import SettingIcon from '../../../assets/images/nonLiveBet/settings-btn.png'
import CloseIcon from '../../../assets/images/nonLiveBet/close-btn.png'
const Settings = () => {
 
 
  return (
    <div className="settings-popup">
      <div className="settings-container">
        <div className="settings-header">
          <div className="settings-header__title">
            2021-08-02(월) 15:25:42
          </div>
          <div className="settings-header__actions d-flex">
            <img src={SettingIcon} alt="close" />
            <img src={CloseIcon} alt="close" />
          </div>
        </div>

        <div className="settings__tabs">
          <div className="settings__tab active">
            <div>
              <img src={TabIcon1} alt="" style={{ width:'4.313rem'}}/>
              <p>베팅슬립</p>
              <span className='count'>2</span>
            </div>
          </div>
          <div className="settings__tab">
            <div>
              <img src={TabIcon2} alt="" style={{ width: '3.313rem' }}/>
              <p>베팅내역</p>
              <span className='count'>2</span>
            </div>
          </div>  
        </div>



        <div className='betting-details'>
          <div className='betting-details__card'>
            <div className='betting-details__header'>
              <div className='betting-details__id'>
                <span>ID : </span>
                <span style={{ color: '#fefe11', marginLeft:'0.75rem'}}>4004791</span>
                <button>
                  <p>대기중</p>
                </button>
              </div>
              <div className='betting-details__time'>
                <p style={{marginTop:'-0.25rem'}}>2021-06-29 16:00:30</p>
              </div>
            </div>
            <div className='betting-details__body'>
              <div className='betting-details__cell'>
                <p>아스널 VS 리버풀</p>
                <p>승무패[정규시간]</p>
                <div className='d-flex justify-content-between'>
                  <p className='text-bold' style={{ color:'#5e399a'}}>리버풀</p>
                  <span>3.47</span>
                </div>
              </div>
              <div className='betting-details__cell'>
                <p>FC바르셀로나 VS 아틀레티코</p>
                <p>승무패[정규시간]</p>
                <div className='d-flex justify-content-between'>
                  <p className='text-bold' style={{ color: '#5e399a' }}>FC바르셀로나</p>
                  <span style={{ color: '#f04281' }}>2.26</span>
                </div>
              </div>
              <div className='betting-details__list'>
                <div>
                  <p>총 배당</p>
                  <p style={{ color: '#e9441d', marginTop:'-0.375rem'}}>10.00</p>
                </div>
                <div>
                  <p>총 베팅금액</p>
                  <p style={{ marginTop: '-0.375rem' }}>5,000</p>
                </div>
                <div>
                  <p>당첨 예상금액</p>
                  <p style={{  marginTop: '-0.375rem' }}>50,000</p>
                </div>
                <div>
                  <p>티켓번호</p>
                  <p style={{ color: '#0072bc', marginTop: '-0.375rem' }}>4004791</p>
                </div>
              </div>
            </div>
          </div>
          <div className='betting-details__card'>
            <div className='betting-details__header'>
              <div className='betting-details__id'>
                <span>ID : </span>
                <span style={{ color: '#fefe11', marginLeft: '0.75rem' }}>ID : 4004998</span>
                <button style={{ borderColor: '#2b1160', background:'#461e96'}}>
                  <p>수락</p>
                </button>
              </div>
              <div className='betting-details__time'>
                <p style={{ marginTop: '-0.25rem' }}>2021-06-29 16:00:30</p>
              </div>
            </div>
            <div className='betting-details__body'>
             
              <div className='betting-details__cell'>
                <p>FC바르셀로나 VS 아틀레티코</p>
                <p>승무패[정규시간]</p>
                <div className='d-flex justify-content-between'>
                  <p className='text-bold' style={{ color: '#5e399a' }}>FC바르셀로나</p>
                  <span style={{ color: '#f04281' }}>2.26</span>
                </div>
              </div>
              <div className='betting-details__list'>
                <div>
                  <p>총 배당</p>
                  <p style={{ color: '#e9441d', marginTop: '-0.375rem' }}>2.26</p>
                </div>
                <div>
                  <p>총 베팅금액</p>
                  <p style={{ marginTop: '-0.375rem' }}>5,000</p>
                </div>
                <div>
                  <p>당첨 예상금액</p>
                  <p style={{ marginTop: '-0.375rem' }}>11,300</p>
                </div>
                <div>
                  <p>티켓번호</p>
                  <p style={{ color: '#0072bc', marginTop: '-0.375rem' }}>4004791</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
    
  )
}
export default Settings;
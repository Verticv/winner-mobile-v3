
import './_style.scss'
import InfoHeader from '../../../assets/images/nonLiveBet/gameMarkets/info-header.png'
import CloseIcon from '../../../assets/images/nonLiveBet/close.png'
import CheckIcon from '../../../assets/images/nonLiveBet/gameMarkets/check-icon.png'
import WarningIcon from '../../../assets/images/nonLiveBet/gameMarkets/warning-icon.png'
const RegulationsInformation = () => {
  return (
    <div className="info-container">
      <div className="info-header">
        <img src={InfoHeader} alt="" className='header-bg' />
        <div>
          <p>스포츠 베팅규정 안내</p>
        </div>
        
        <img src={CloseIcon} alt="close" className='close'/>
      </div>

      <div className="info-content">
        <div>
          <div className='d-flex align-items-center' style={{ marginBottom:'1.625rem'}}>
            <img src={CheckIcon} alt="" style={{ width: '3.563rem' }} />
            <p style={{marginTop:'-0.036rem'}}>단폴/두폴/다폴 베팅규정 안내</p>
          </div>
            <p>단폴 베팅 시에는 배당률 1.31 이상만 시스템에서 허용되며 다른
              규제는 없습니다.</p>
            <p>두폴이상의 경우 배당률 1.31 이상의 한 폴더가 반드시 포함되어
              야하며, 포함되지 않을 경우 해당 베팅은 시스템에서 허용되지 않
              습니다.</p>
            <p>다폴 구성 시 1.31 이하 배당경기는 롤링 계산 시 폴더 수에 포함
            되지 않습니다.</p>
          <div className='warning-content'>
            <div className='d-flex align-items-center' style={{ marginBottom: '1.063rem' }}>
              <img src={WarningIcon} alt="" style={{ width: '3.938rem' }} />
              <p >강력 제재사항</p>
            </div>
            <ul>
              <li>
                  <span className='dot-sign'>•</span>
                  <p>오즈포탈 등을 활용하여 배당률 하락경기에만 베팅하는 경우</p>
              </li>
              <li>
                <span className='dot-sign'>•</span>
                <p>스포츠 경기에서 보너스 엣지를 악용하여 양방 혹은 시간차
                양방 베팅하는 경우</p>
              </li>
              <li>
                <span className='dot-sign'>•</span>
                <p>실시간 스포츠 농구/배구 경기에서 언/오버 핸디캡을 악용한
                걸치기, 양방 베팅을 하는 경우 </p>
              </li>
              <li>
                <span className='dot-sign'>•</span>
                <p>운영진의 실수 및 프로그램 오류로 인해 발생된 비정상적인
                  경기에 베팅하는경우
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='line'></div>

        <div className='info-box'>
          <p >야구, 배구 등 각종 경기의 경우 베팅한 시점으로 최대 1분
            이내에 득점 발생시 적특처리 되실 수 있습니다.</p>
          <p style={{ color: '#fecf08' }}>1분 이내에 발생한 득점이 모든 경기가 적특처리 되는 것은
            아니며, 실제 경기 상황과 베팅하신 피드의 시스템상 오차가
            있는 경우에만 처리됩니다.</p>
          <p>데이터 송수신에 대한 시간차를 노려 라이브 베팅을 하는
            경우 강력 제재 처리 됩니다.</p>
        </div>
      </div>
    </div>
  )
}

export default RegulationsInformation
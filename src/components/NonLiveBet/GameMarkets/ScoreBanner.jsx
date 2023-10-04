import score_banner from '../../../assets/images/nonLiveBet/gameMarkets/score-banner.png'
import TeamLogo1 from '../../../assets/images/nonLiveBet/gameMarkets/team-logo1.png'
import TeamLogo2 from '../../../assets/images/nonLiveBet/gameMarkets/team-logo2.png'
import vsIcon from '../../../assets/images/nonLiveBet/gameMarkets/vs-icon.png'
const ScoreBanner = () => {
  return (
    <div className='score-banner'>
      <img src={score_banner} alt='' className='h-full'/>
      <div className='score-banner__content'>
        <div className='relative'>
          <img src={TeamLogo1} alt='' className='' style={{width:'5rem'}} />
          <p className='score-banner__team-name'>아스널</p>
          <div className='score-tag'>
            <p>H</p>
          </div>
        </div>
        <div className='vs-box'>
          <img src={vsIcon} alt='' style={{ width: '5.938rem' }} />
          <p>03-22 13:00</p>
        </div>
        <div>
          <img src={TeamLogo2} alt='' style={{ width: '4.25rem' }} />
          <p className='score-banner__team-name'>리버풀</p>
        </div>
      </div>
    </div> 
  )
}

export default ScoreBanner;
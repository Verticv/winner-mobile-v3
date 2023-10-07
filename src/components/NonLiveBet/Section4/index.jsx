import CloseIcon from '../../../assets/images/nonLiveBet/close.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon12.png'
import tag from '../../../assets/images/nonLiveBet/tag.png'
import logo1 from '../../../assets/images/nonLiveBet/logo1.png'
import logo2 from '../../../assets/images/nonLiveBet/logo2.png'
import logo3 from '../../../assets/images/nonLiveBet/logo3.png'
import logo4 from '../../../assets/images/nonLiveBet/logo4.png'
import logo5 from '../../../assets/images/nonLiveBet/logo5.png'
import logo6 from '../../../assets/images/nonLiveBet/logo6.png'
import logo7 from '../../../assets/images/nonLiveBet/logo7.png'
import logo8 from '../../../assets/images/nonLiveBet/logo8.png'
import logo9 from '../../../assets/images/nonLiveBet/logo9.png'
import logo10 from '../../../assets/images/nonLiveBet/logo10.png'


import rightArrow from '../../../assets/images/nonLiveBet/light-arrow.png'


const Section4 = ({ close }) => {
  const list = [
    {
      name: '메이저리그 (MLB)',
      logo: logo1,
      logoStyle: { width: '6.563rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo2,
      logoStyle: { width: '4.188rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo3,
      logoStyle: { width: '3.313rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo4,
      logoStyle: { width: '4.938rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo5,
      logoStyle: { width: '4.688rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo6,
      logoStyle: { width: '5.25rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo7,
      logoStyle: { width: '4.75rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo8,
      logoStyle: { width: '6.25rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo9,
      logoStyle: { width: '4.813rem' }
    },
    {
      name: '맨체스터유나이티드',
      logo: logo10,
      logoStyle: { width: '7.125rem' }
    },
  ]
  return (
    <div className='favorites-section'>
      <div className='category-header'>
        <p>즐겨찾기</p>
        <img src={CloseIcon} alt="close" className='close' onClick={close} />
      </div>
      <div className='popular-game popular-game2'>
        {list.map((item, index) => (
          <div className='popular-card'>
            <img src={tag} alt="tag" className='card-tag' />
            <div className='tag-index'>{index + 1}</div>
            <img src={rightArrow} alt="arrow" className='arrow' />

            <div className='popular-card-icon popular-card-icon-2'>
              <img src={Icon2} alt="Icon2" />
            </div>
            <div className='popular-card-teams popular-card-teams-2'>
              <div className='d-flex align-items-center'>
                <div className='team-logo' style={{ height: '100%' }}>
                  <img src={item.logo} alt="Icon2" style={item.logoStyle} />
                </div>

                <p>{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Section4;
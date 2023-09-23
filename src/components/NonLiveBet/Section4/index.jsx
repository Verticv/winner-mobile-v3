import CloseIcon from '../../../assets/images/nonLiveBet/close.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon2.png'
import tag from '../../../assets/images/nonLiveBet/tag.png'
import team1 from '../../../assets/images/nonLiveBet/team1.png'
import rightArrow from '../../../assets/images/nonLiveBet/rightArrow.png'


const Section4 = ({ close }) => {
  const list = [
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
    },
    {
      icon: team1,
      name: '맨체스터유나이티드'
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
              <div className='flex'>
                <img src={team1} alt="Icon2" />
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
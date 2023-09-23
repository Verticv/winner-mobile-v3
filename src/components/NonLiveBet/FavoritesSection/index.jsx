import './_style.scss';
import CloseIcon from '../../../assets/images/nonLiveBet/close.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon2.png'
import ArrowUp from '../../../assets/images/nonLiveBet/arrow-up.png'
import star from '../../../assets/images/nonLiveBet/satr.png'

const FavoritesSection = ({ close }) => {
  const list = [
    {
      title: '프리미어리그',
      icon: Icon2,
      subList: [
        {
          team1: '맨체스터유나이티드',
          team2: '맨체스터시티'
        },
        {
          team1: '맨체스터유나이티드',
          team2: '맨체스터시티'
        }
      ]
    },
    {
      title: '라리가',
      icon: Icon2,
      subList: [
        {
          team1: 'FC바르셀로나',
          team2: '아틀레티코'
        }
      ]
    },
    {
      title: '프리미어리그',
      icon: Icon2,
      subList: []
    },
    {
      title: '메이저리그 (MLB)',
      icon: Icon2,
      subList: []
    }
  ]
  return (
    <div className='favorites-section'>
      <div className='category-header'>
        <p>즐겨찾기</p>
        <img src={CloseIcon} alt="close" className='close' onClick={close} />
      </div>
      <div className='clear-button'>
        <p>모두지우기</p>
      </div>
      <div className='favorite-title'>
        <p>프리매치경기</p>
      </div>

      {list.map((item, index) => (
        <>
        <div className='category-card' key={index}>
          <div className='flex items-center'>
            <img src={item.icon} alt="Icon2" className='sport-icon' />
            <p>{item.title}</p>
          </div>
          </div>
          {item.subList.map((sub, index) => (
            <div className='favorite-card' key={index}>
              <div className='favorite-content'>
                <div className='flex content-between'>
                  <div className='team-name'>{sub.team1}</div>
                  <div className='time'>18:30</div>
                </div>
                <div className='flex content-between'>
                  <div className='team-name'>{sub.team2}</div>
                </div>
                <div className='favorite-footer'>
                  <div className='flex content-between items-center '>
                    <div className='favorite-date'>2023-05-14 18:30</div>
                    <div className='favorite-icons flex content-between items-center'>
                      <img src={star} alt="star" className='star' />
                      <img src={ArrowUp} alt="ArrowUp" className='arrow' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='favorite-score'>
                <div className='flex content-between items-center w-full'>
                  <div>1</div>
                  <div className='score'>2.12</div>
                </div>
                <div className='flex content-between items-center w-full'>
                  <div>무</div>
                  <div className='score'>3.59</div>
                </div>
                <div className='flex content-between items-center w-full'>
                  <div>2</div>
                  <div className='score'>3.62</div>
                </div>
              </div>
            </div>
          ))}
        </>
      ))} 
    </div>
  )
}
export default FavoritesSection;
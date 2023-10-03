import './_style.scss';
import CloseIcon from '../../../assets/images/nonLiveBet/close.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon2.png'
import star from '../../../assets/images/nonLiveBet/gameMarkets/menu-star.png'
import CardContent from './CardContent'
const FavoritesSection = ({ close }) => {
  const list = [
    {
      id:1,
      title: '프리미어리그',
      icon: Icon2,
      subList: [
        {
          team1: '맨체스터유나이티드',
          team2: '맨체스터시티',
        },
        {
          team1: '맨체스터유나이티드',
          team2: '맨체스터시티',
          showArrows: true
        }
      ]
    },
    {
      id: 2,
      title: '라리가',
      icon: Icon2,
      subList: [
        {
          team1: 'FC바르셀로나',
          team2: '아틀레티코',
          lock: true
        }
      ]
    },
    {
      id: 3,
      title: '프리미어리그',
      icon: Icon2,
      subList: []
    },
    {
      id: 4,
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
          <div className='category-card' key={index}
            style={{ height: item.subList.length === 0 ? '6.188rem' : '6.563' }}>
            <div className='flex items-center' >
            <img src={item.icon} alt="Icon2" className='sport-icon' />
            <p>{item.title}</p>
            </div>
            {item.subList.length === 0 && (<img src={star} alt="star" className='star' style={{marginRight:'-0.063rem'}}/>)}
        </div>
        {item.subList.map((sub, index) => (
          <CardContent
            key={index}
            data={sub} />
        ))}
        </>
      ))} 
    </div>
  )
}
export default FavoritesSection;
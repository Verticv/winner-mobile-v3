

import MiniGameIcon from '../../../assets/images/mainPage/mini-game-icon.png'
import SectionHeader from "../../Shared/SectionHeader";
import Image1 from '../../../assets/images/mainPage/mini-game1.png'
import Image2 from '../../../assets/images/mainPage/mini-game2.png'
import Image3 from '../../../assets/images/mainPage/mini-game3.png'
import Image4 from '../../../assets/images/mainPage/mini-game4.png'
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'


const MiniGameSection = () => {

  const Items = [
    {
      id: 0,
      title: '파워볼',
      img: Image1
    },
    {
      id: 1,
      title: '파워사다리',
      img: Image2
    },
    {
      id: 2,
      title: '스피드키노',
      img: Image3
    },
    {
      id: 3,
      title: '키노사다리',
      img: Image4
    },
  ]


  const Card = ({ id, title, img, onClick }) => {
    return (
      <div className='shared-card'>
        <img src={img} alt="img" className='img' />
        <div className='desc'>
          <p>{title}</p>
        </div>
        <button>게임시작
          <img src={RArrow} alt="RArrow" className='img' />
        </button>
      </div>
    );
  };

  return (
    <div className='filter-content'>
      <SectionHeader
        icon={MiniGameIcon}
        title={'미니게임'} />
      <div className='cont'>
      {Items.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          img={card.img} />
      ))
        }</div>
    </div>
  )
}

export default MiniGameSection
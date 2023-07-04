
import SectionHeader from "../../Shared/SectionHeader";
import Image1 from '../../../assets/images/mainPage/Holdem-game.png'
import Image2 from '../../../assets/images/mainPage/Holdem-game2.png'
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'
import HoldemGameIcon from '../../../assets/images/mainPage/sectionTitle/HoldemGameIcon.png'

const HoldemGameSection = () => {

  const Items = [
    {
      id: 0,
      title: 'K-홀덤',
      img: Image1,
      btn: '게임시작'
    },
    {
      id: 1,
      title: '이용가이드',
      img: Image2,
      btn: '설명보기'
    },
  ]


  const Card = ({ id, title, img, btn }) => {
    return (
      <div className='shared-card'>
        <img src={img} alt="img" className='img' />
        <div className='desc'>
          <p>{title}</p>
        </div>
        <button>
          <p>{btn}</p>
          <img src={RArrow} alt="RArrow" className='img' />
        </button>
      </div>
    );
  };

  return (
    <div className='filter-content holdem-section'>
      <SectionHeader
        icon={HoldemGameIcon}
        title={'홀덤게임'} />
      <div className='cont'>
        {Items.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            img={card.img}
            btn={card.btn} />

        ))
        }
      </div>
    </div>
  )
}

export default HoldemGameSection




//import FishingGameIcon from '../../../assets/images/mainPage/fishing-game-icon.png'
import SectionHeader from "../../Shared/SectionHeader";
import Image1 from '../../../assets/images/mainPage/fishing-game.png'
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'
import FishingGameIcon from '../../../assets/images/mainPage/sectionTitle/icon91.png'

const FishingGameSection = () => {

  const Items = [
    {
      id: 0,
      title: '케이플레이피싱',
      img: Image1
    },

  ]


  const Card = ({ id, title, img, onClick }) => {
    return (
      <div className='shared-card'>
        <img src={img} alt="img" className='img' />
        <div className='desc'>
          <p>{title}</p>
        </div>
        <button className='card-button'>
          <p>게임시작</p>
          <img src={RArrow} alt="RArrow" className='img' />
        </button>
      </div>
    );
  };

  return (
    <div className='filter-content fishing-section'>
      <SectionHeader
        icon={FishingGameIcon}
        title={'피싱게임'} />
      <div className='cont'>
      {Items.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
            img={card.img} />
        
      ))
        }
      </div>
    </div>
  )
}

export default FishingGameSection
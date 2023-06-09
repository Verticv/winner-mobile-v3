
//import SportIcon from '../../../assets/images/mainPage/sport-icon.png'
import SectionHeader from "../../Shared/SectionHeader";
import Image1 from '../../../assets/images/mainPage/sport-game1.png'
import Image2 from '../../../assets/images/mainPage/sport-game2.png'
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'
import SportIcon from '../../../assets/images/mainPage/sectionTitle/icon2.png'
import '../SportsSection/_sportsSection.scss';

const SportsSection = () => {

  const Items = [
    {
      id: 0,
      title: '조합베팅',
      img: Image1
    },
    {
      id: 1,
      title: '스페셜베팅',
      img: Image2
    },
  ]


  const Card = ({ id, title, img, onClick }) => {
    return (
      <div className='shared-card'>
        <img src={img} alt="img" className='img' />
        <div className='desc'>
          <p>{title}</p>
        </div>
        <button>
          <p>게임시작</p>
          <img src={RArrow} alt="RArrow" className='img' />
        </button>
      </div>
    );
  };

  return (
    <div className='filter-content sport-section'>
      <SectionHeader
        icon={SportIcon}
        title={'스포츠'} />
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

export default SportsSection
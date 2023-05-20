

//import LiveSportIcon from '../../../assets/images/mainPage/live-sport-icon.png'
import SectionHeader from "../../Shared/SectionHeader";
import Image1 from '../../../assets/images/mainPage/live-sport-game1.png'
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'
import LiveSportIcon from '../../../assets/images/mainPage/sectionTitle/icon3.png'

const LiveSportsSection = () => {

  const Items = [
    {
      id: 0,
      title: '실시간스포츠',
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
        <button>게임시작
          <img src={RArrow} alt="RArrow" className='img' />
        </button>
      </div>
    );
  };

  return (
    <div className='filter-content live-sport-section'>
      <SectionHeader
        icon={LiveSportIcon}
        title={'실시간스포츠'} />
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

export default LiveSportsSection
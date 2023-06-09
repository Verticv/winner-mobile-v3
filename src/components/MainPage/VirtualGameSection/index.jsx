

//import VirtualGameIcon from '../../../assets/images/mainPage/virtual-game-icon.png'
import VirtualGameIcon from '../../../assets/images/mainPage/sectionTitle/icon8.png'
import SectionHeader from "../../Shared/SectionHeader";
import Image1 from '../../../assets/images/mainPage/virtual-game1.png'

import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'
const VirtualGameSection = () => {

  const Items = [
    {
      id: 0,
      title: '키론가상게임',
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
        <button>
          <p>게임시작</p>
          <img src={RArrow} alt="RArrow" className='img' />
        </button>
      </div>
    );
  };

  return (
    <div className='filter-content virtual-games-section'>
      <SectionHeader
        icon={VirtualGameIcon}
        title={'키론가상게임'} />
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

export default VirtualGameSection
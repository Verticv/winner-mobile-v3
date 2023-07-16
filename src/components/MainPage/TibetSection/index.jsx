
//import TibetIcon from '../../../assets/images/mainPage/tibet-icon.png'
import TibetIcon from '../../../assets/images/mainPage/sectionTitle/icon101.png'
import SectionHeader from "../../Shared/SectionHeader";
import Image1 from '../../../assets/images/mainPage/tibet-game1.png'
import Image2 from '../../../assets/images/mainPage/tibet-game2.png'
import Image3 from '../../../assets/images/mainPage/tibet-game3.png'
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'

const TibetSection = () => {

  const Items = [
    {
      id: 0,
      title: '티비벳',
      img: Image1,
      btnText: '게임시작'
    },
    {
      id: 1,
      title: '화면구성설명',
      img: Image2,
      btnText: '설명보기'
    },
    {
      id: 2,
      title: '베팅방법',
      img: Image3,
      btnText: '설명보기'
    },
  ]


  const Card = ({ id, title, btnText, img, onClick }) => {
    return (
      <div className='shared-card'>
        <img src={img} alt="img" className='img' />
        <div className='desc'>
          <p>{title}</p>
        </div>
        <button className='card-button'>
          <p>{btnText}</p>
          <img src={RArrow} alt="RArrow" className='img' />
        </button>
      </div>
    );
  };

  return (
    <div className='filter-content tibet-section'>
      <SectionHeader
        icon={TibetIcon}
        title={'티비벳'} />
      <div className='cont'>
      {Items.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          img={card.img}
          btnText={card.btnText} />
      ))
        }</div>
    </div>
  )
}

export default TibetSection
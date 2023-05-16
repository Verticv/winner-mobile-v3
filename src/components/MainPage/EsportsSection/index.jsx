



import EsportsIcon from '../../../assets/images/mainPage/e-sports-icon.png'
import SectionHeader from "../../Shared/SectionHeader";
import Image1 from '../../../assets/images/mainPage/e-sports-game1.png'
import Image2 from '../../../assets/images/mainPage/e-sports-game2.png'
import Image3 from '../../../assets/images/mainPage/e-sports-game3.png'
import Image4 from '../../../assets/images/mainPage/e-sports-game4.png'
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'


const EsportsSection = () => {

  const Items = [
    {
      id: 0,
      title: 'e-스포츠',
      img: Image1
    },
    {
      id: 1,
      title: '화면구성설명',
      img: Image2
    },
    {
      id: 2,
      title: '단폴더베팅방법',
      img: Image3
    },
    {
      id: 4,
      title: '다폴더베팅방법',
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
        icon={EsportsIcon}
        title={'e-스포츠'} />
      <div className='cont'>
        {Items.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
            img={card.img} />
        ))}
      </div>   
    </div>
  )
}

export default EsportsSection
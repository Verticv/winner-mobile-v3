
import CardMenu from '../../../assets/images/mainPage/hotel-casino/card-menu.png'

const HotelCasinoCard = ({ id, title, sub_title = null, img, icon, onClick }) => {
  return (
    <div className='hotel-casino-card'>
      <img src={img} alt="HotelCasinoCard" className='casino-img' />
      <div className='logo-section'>
        <img src={icon} alt="Logo1" />
        <p>{title}
          {sub_title && (<span className='sub-title'>{sub_title}</span>)}
        </p>

      </div>
      <div className='card-hover'>
        <img src={CardMenu} alt="Menu" className='card-menu' />
        <div className='buttons'>
          <button>게임시작</button>
          <button>이용가이드</button>
        </div>

      </div>
    </div>
  );
};
export default HotelCasinoCard
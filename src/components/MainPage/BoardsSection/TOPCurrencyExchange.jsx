
import ExchangeIcon from '../../../assets/images/mainPage/exchange-icon.png'
import GoldCrown from '../../../assets/images/mainPage/crown1.png'
import GreyCrown from '../../../assets/images/mainPage/crown2.png'
import BronzeCrown from '../../../assets/images/mainPage/crown3.png'

const TOPCurrencyExchange = ({ onClick }) => {
  

  return (
    <div className='new-card'>
      <div className='new-card-header'>
        <div className='card-header-title'>
          <img src={ExchangeIcon} alt="Exchange" />
          <p>금주의 환전 TOP</p>
        </div>
      </div>
      <div className='new-card-content'>
        <div id="currency-exchange">
        {Array(20)
          .fill(undefined)
          .map((_, index) => (
            <div className='currency-exchange'>
              <div className='left-side'>
                <div className='count'>
                  {index === 0 && <img className="" src={GoldCrown} alt="" />}
                  {index === 1 && <img className="" src={GreyCrown} alt="" />}
                  {index === 2 && <img className="" src={BronzeCrown} alt="" />}
                  {index > 2 && <span>{index + 1}</span> }
                </div>
                <p className={`${index === 0 || index === 1 || index === 2 ? 'text-red' : ''}`}
                  >Happy***</p>
              </div>
              <div className='right-side'>
                <p className={`${index === 0 || index === 2 || index === 2 ? 'text-red' : ''}`}>₩130,456,800</p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default TOPCurrencyExchange
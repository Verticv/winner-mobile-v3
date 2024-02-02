
import ExchangeIcon from '../../../assets/images/mainPage/exchange-icon.png'
import GoldCrown from '../../../assets/images/mainPage/crown1.png'
import GreyCrown from '../../../assets/images/mainPage/crown2.png'
import BronzeCrown from '../../../assets/images/mainPage/crown3.png'



const TOPCurrencyExchange = ({ onClick }) => {

  const Items = [
    {
      id: 1,
      num: '130,456,800'
    },
    {
      id: 2,
      num: '130,456,800'
    },
    {
      id: 3,
      num: '130,456,800'
    },
    {
      id: 4,
      num: '130,456,800'
    },
    {
      id: 5,
      num: '130,456,800'
    },
    {
      id: 6,
      num: '130,456,800'
    },
    {
      id: 7,
      num: '130,456,800'
    },
    {
      id: 8,
      num: '130,456,800'
    },
    {
      id: 9,
      num: '130,456,800'
    },
    {
      id: 10,
      num: '130,456,800'
    },
    {
      id: 11,
      num: '130,456,800'
    },
    {
      id: 12,
      num: '130,456,800'
    },
    {
      id: 13,
      num: '130,456,800'
    },
    {
      id: 14,
      num: '130,456,800'
    },
    {
      id: 15,
      num: '130,456,800'
    },
    {
      id: 16,
      num: '130,456,800'
    },
    {
      id: 17,
      num: '130,456,800'
    },
    {
      id: 18,
      num: '130,456,800'
    },
    {
      id: 19,
      num: '130,456,800'
    },
    {
      id: 20,
      num: '130,456,800'
    }
  ]
  const pauseHover = () => {
    const allWithClass = Array.from(
      document.getElementsByClassName('currency-exchange-wrapper')
    );
    allWithClass.forEach(element => {
      let list = element.classList
      list.toggle("stop-animation");
    });
  }
  return (
    <div className='board new-card'>
      <div className='new-card-header'>
        <div className='card-header-title'>
          <img src={ExchangeIcon} alt="Exchange" />
          <p>금주의 환전 TOP</p>
        </div>
      </div>
      

      <div className='new-card-content'>
          {Array(2)
          .fill(undefined)
          .map((_, i) => (
            <div className="currency-exchange-wrapper" key={i}
              onMouseEnter={() => pauseHover()}
              onMouseLeave={() => pauseHover()}>
              {Items
                .map((item, index) => (
                  <div className='currency-exchange' key={index}>
                    <div className='left-side'>
                      <div className='count'>
                        {item.id === 1 && <img className="" src={GoldCrown} alt="" />}
                        {item.id === 2 && <img className="" src={GreyCrown} alt="" />}
                        {item.id === 3 && <img className="" src={BronzeCrown} alt="" />}
                        {item.id > 3 && <span>{item.id}</span>}
                      </div>
                      <p className={`${item.id === 1 || item.id === 2 || item.id === 3 ? 'text-red' : 'text-normal'}`}
                      >Happy***</p>
                    </div>
                    <div className='right-side'>
                      <p className={`${item.id === 1 || item.id === 2 || item.id === 3 ? 'text-red' : ''}`}>₩130,456,800</p>
                    </div>
                  </div>
                ))
              }

            </div>
          )
          )}
      </div>
       
    </div>
  );
};

export default TOPCurrencyExchange
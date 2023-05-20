import SportIcon from '../../../assets/images/mainPage/sportGames/sport-icon.png'
import GlobalIcon from '../../../assets/images/mainPage/sportGames/global-icon.png'
import Team1 from '../../../assets/images/mainPage/sportGames/team1.png'
import Team2 from '../../../assets/images/mainPage/sportGames/team2.png'

const SportGameCard = ({ onClick }) => {
  return (
    <div className='sport-card'>
      <div className='card__header'>
        <img src={SportIcon} alt="right" className='header__icon' />
        <img src={GlobalIcon} alt="right" className='header__icon' />
        <p className='truncate'>UEFA Champions League</p>
      </div>
      <div className='card__content'>
        <div className='team team1'>
          <img src={Team1} alt="right" />
          <p>리버플</p>
        </div>
        <div className='vs'>
          <div className='time'>08/25 15:45</div>
          <p>VS</p>
        </div>
        <div className='team team2'>
          <img src={Team2} alt="right" />
          <p>비야레알</p>
        </div>
      </div>
      <div className='card__footer'>
        <button>
          <div>
            <div className='name'>W1</div>
            <div className='score'>1.93</div>
          </div>
        </button>
        <button>
          <div>
            <div className='name'>X</div>
            <div className='score'>4.83</div>
          </div>
        </button>
        <button>
          <div>
            <div className='name'>W2</div>
            <div className='score'>3.14</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SportGameCard
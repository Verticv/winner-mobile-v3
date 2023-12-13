import SportIcon from '../../../assets/images/mainPage/sportGames/sport-icon.png'

const SportGameCard = ({item}) => {
  return (
    <div className='sport-card'>
      <div className='card__header'>
        <img src={SportIcon} alt="right" className='header__icon' />
        <img src={item.icon} alt="right" className='header__icon' />
        <p className='truncate'>{item.title}</p>
      </div>
      <div className='card__content'>
        <div className='team team1'>
          <span className='team-img'>
            <img src={item.team1.icon} alt="Team1" />
          </span>
          <p>{item.team1.name}</p>
        </div>
        <div className='vs'>
          <div className='time'>08/25 15:45</div>
          <p>VS</p>
        </div>
        <div className='team team2'>
          <span className='team-img'>
            <img src={item.team2.icon} alt="Team2" />
          </span>
          <p>{item.team2.name}</p>
        </div>
      </div>
      <div className='card__footer'>
        <button className="hover">
          <div>
            <div className='name'>W1</div>
            <div className='score'>1.93</div>
          </div>
        </button>
        <button className="hover">
          <div>
            <div className='name'>X</div>
            <div className='score'>4.83</div>
          </div>
        </button>
        <button className="hover">
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
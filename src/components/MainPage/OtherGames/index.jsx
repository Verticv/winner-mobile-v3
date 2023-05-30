

import React from 'react'
import OtherGamesIcon from '../../../assets/images/mainPage/other-games/other-games.png'
import image1 from '../../../assets/images/mainPage/other-games/other-game1.png'
import image2 from '../../../assets/images/mainPage/other-games/other-game2.png'
import image3 from '../../../assets/images/mainPage/other-games/other-game3.png'
import image4 from '../../../assets/images/mainPage/other-games/other-game4.png'
import image5 from '../../../assets/images/mainPage/other-games/other-game5.png'
import '../OtherGames/_otherGames.scss';
import Icon1 from '../../../assets/images/mainPage/other-games/other-Icon1.png'
import Logo1 from '../../../assets/images/mainPage/other-games/other-logo1.png'
import Icon2 from '../../../assets/images/mainPage/other-games/other-Icon2.png'
import Logo2 from '../../../assets/images/mainPage/other-games/other-logo2.png'
import Icon3 from '../../../assets/images/mainPage/other-games/other-Icon3.png'
import Logo3 from '../../../assets/images/mainPage/other-games/other-logo3.png'
import Icon4 from '../../../assets/images/mainPage/other-games/other-Icon4.png'
import Logo4 from '../../../assets/images/mainPage/other-games/other-logo4.png'
import Icon5 from '../../../assets/images/mainPage/other-games/other-Icon5.png'
import Logo5 from '../../../assets/images/mainPage/other-games/other-logo5.png'

const OtherGames = () => {
  const GamesList = [
    {
      id: 0,
      title: 'e-스포츠',
      logo: Logo1,
      icon: Icon1,
      img: image1
    },
    {
      id: 1,
      title: '미니게임',
      logo: Logo2,
      icon: Icon2,
      img: image2
    },
    {
      id: 2,
      title: '키론가상게임',
      logo: Logo3,
      icon: Icon3,
      img: image3
    },
    {
      id: 3,
      title: '피싱게임',
      logo: Logo4,
      icon: Icon4,
      img: image4
    },
    {
      id: 4,
      title: '티비벳',
      logo: Logo5,
      icon: Icon5,
      img: image5
    },
  ]
  const Card = ({ id, title, img, icon, logo, onClick }) => {
    return (
      <div className='other-game-card'>
        <img src={img} alt="OtherGame1" className='other-img' />
        {/* <div className='logo-section'>
          <img src={icon} alt="Logo1" className='other-icon'/>
          <img src={logo} alt="Logo1" className='other-icon1' />
        </div> */}
        <div className='desc'>
          <p>{title}</p>
        </div>
      </div>
    );
  };
  return (
    <>
    <div className='other-games'>
      <div className='section__header'>
        <div className='section__Title'>
            <div className='section__icon'><img src={OtherGamesIcon} alt="OtherGamesIcon" /></div>
          <h1>기타게임</h1>
        </div>
      </div>
        <div className='section__content'>
          {GamesList.map((card, index) => (
            <div className='other-section'
              key={card.id}>
              <Card
                key={card.id}
                title={card.title}
                img={card.img}
                icon={card.icon}
                logo={card.logo}/>
            </div>
          ))}
        
      </div>
      </div>
     
      </>
      
  )
}

export default OtherGames;
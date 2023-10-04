import './_style.scss'

import Header from './Header'
import ScoreBanner from './ScoreBanner'
import Banner from './Banner'
import GameResult from './GameResult'
const GameMarkets = ({ close }) => {
  

  return (
    <div className='game-markets-container'>
      <div className='page-header'>
        <Header close={close} />
      <ScoreBanner />
      </div>
       <Banner/>
      <GameResult/> 
    </div>
  )
}
export default GameMarkets;
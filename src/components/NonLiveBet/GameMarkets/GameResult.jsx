
import Slider from './Slider'
import ResultBox from './ResultBox'
const GameResult = () => {
  return (
    <div className='game-markets__result'>
      <div className='game-markets__card'>
        <Slider />
        <ResultBox/>
      </div>
    </div>
  )
}
export default GameResult;
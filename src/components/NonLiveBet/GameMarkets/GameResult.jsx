
import Slider from './Slider'
import ResultBox from './ResultBox'
const GameResult = () => {
  return (
    <div className='game-markets__result'
      style={{ marginBottom: '5rem' }}>
      <div className='game-markets__card'>
        <Slider />
        <ResultBox/>
      </div>
    </div>
  )
}
export default GameResult;
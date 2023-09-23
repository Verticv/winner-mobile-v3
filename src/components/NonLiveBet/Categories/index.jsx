import './_categories.scss';
import Icon4 from '../../../assets/images/nonLiveBet/Icon4.png'
import Icon5 from '../../../assets/images/nonLiveBet/Icon5.png'
import Icon6 from '../../../assets/images/nonLiveBet/Icon6.png'
import Icon7 from '../../../assets/images/nonLiveBet/Icon7.png'
import Icon8 from '../../../assets/images/nonLiveBet/Icon8.png'
import CategoryButton from './CategoryButton'
const Categories = ({ setActiveButton }) => {
  return (
    <div className='categories flex items-center content-center'>
      <div className='category flex items-center content-between'>
        <CategoryButton
          title={'모든경기'}
          icon={Icon4}
          style={{ width: '3.625rem' }}
          onClick={() => setActiveButton('menu')}/>
        
        <CategoryButton
          icon={Icon5}
          style={{ width: '4.063rem' }}
          onClick={() => setActiveButton('favorite')}/>
        
        <CategoryButton
          title={'인기경기'}
          icon={Icon6}
          style={{ width: '3.813rem' }}
          onClick={() => setActiveButton('win')}/>
        
        <CategoryButton
          title={'인기리그'}
          icon={Icon7}
          style={{ width: '2.938rem' }}
          onClick={() => setActiveButton('win2')}/>
       
        <CategoryButton
          icon={Icon8}
          style={{ width: '3.75rem' }}
          onClick={() => setActiveButton('search')}/>
       
      </div>
    </div>
  )
}
export default Categories;
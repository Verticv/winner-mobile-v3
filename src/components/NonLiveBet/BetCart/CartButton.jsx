import './_style.scss';
import CartIcon from '../../../assets/images/nonLiveBet/cart-icon.png'
import { useSelector } from 'react-redux'


const CartButton = ({ openCartBet }) => {
  const count = useSelector((state) => state.counter.value)
  return (
    <button className='cart-btn'
    onClick={openCartBet}>
      <div>
        <img src={CartIcon} alt="CartIcon" />
      </div>
      <div className='cart-badge'>
        <p>{count}</p>
      </div>
    </button>
  )
}
export default CartButton;
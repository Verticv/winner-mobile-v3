import Close from '../../../assets/images/mainPage/close-icon.png'
const CheckPopup = ({ close, confirm }) => {
  return (
    <div className="check-popup">
      <div className="check-popup__container">
        <div className="check-popup__header relative">
          <p>베팅정보</p>
          <button
            onClick={close}>
            <img src={Close} alt="right" className="close" />
          </button>
        </div>
        <div className="check-popup__body">
          <div className="check-popup__content">
            <p style={{ marginTop:'-0.438rem'}}>베팅이 수락되었습니다.</p>
            <p className='ticket-id'>
              티켓번호
              <span> 4004791</span>
            </p>
           
          </div>
          <button onClick={confirm}>
            <p>
              확인
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default CheckPopup;
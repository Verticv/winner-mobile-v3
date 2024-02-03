 

import Logo from '../../../assets/images/mainPage/light-log.png'
import Close from '../../../assets/images/mainPage/close-icon.png'
import { useNavigate } from 'react-router-dom'

const MenuList = ({
  items,
  selectedTab,
  setOpen,
  setSelectedTab
}) => {
  const navigate = useNavigate();
  return (
  <div className='menu-modal'>
    <div className='menu-modal-header'>
      <img src={Logo} alt="right" className="ml-10px object-none" />
      <img src={Close} alt="right" className="close" onClick={() => setOpen(false)} />
    </div>
    <div className='menu-modal-body'>
      <div className='menu-list'>

        {
          items.map((item, index) => (
            <button
              key={index}
              className={`menu-item ${selectedTab===item.id?'active':''}`}
              onClick={() => {
                setOpen(false)
                setSelectedTab({ index: item.id,item:item})
                navigate(item?.path)
              }
              }>
              <div className='menu-item1'>
                <div className='menu-item-logo'>
                  {/* <img src={item.icon2} alt="right" className="ml-10px object-none" /> */}
                  {selectedTab !== item.id && (<img src={item.icon} alt="right" className="ml-10px object-none" />)}
                  {selectedTab === item.id && (<img src={item.OnIcon} alt="right" className="ml-10px object-none" />)}
                </div>
                <div className='menu-item-title'>
                  {item.title}
                </div>
              </div>
            </button>
          ))
        }
      </div>
    </div>
    </div>
  )
}
export default MenuList
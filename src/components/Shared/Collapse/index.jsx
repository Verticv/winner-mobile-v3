
import './_collapse.scss'
import Plus from '../../../assets/images/footer/plus.png'
import Minus from '../../../assets/images/footer/minus.png'

const Collapse = ({
  index,
  title,
  list,
  isExpanded,
  setExpanded}) => {
 

  const toggleCollapse = () => {
    if (isExpanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
   
  };
  return (
    <button className={`collapse ${isExpanded === index ?'expanded':''}`} onClick={toggleCollapse}>
      <div className="collapse__header">
        <p className="collapse__title">
          {title}
        </p>
        <div className="collapse__icon">
          {isExpanded!==index && (<img src={Plus} alt="right" />)}
          {isExpanded === index && (<img src={Minus} alt="right" />)}
        </div>
      </div>
      {isExpanded === index && (<div className="collapse__body">
        {list.map((item, index) => (
          <div key={index}>{item}</div>
        ))
        }
      </div>)}
    </button>
  )
}

export default Collapse;
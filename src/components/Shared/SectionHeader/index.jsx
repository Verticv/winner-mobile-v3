import { useNavigate } from 'react-router-dom';
import './_sectionHeader.scss'; 

const SectionHeader = ({  
  icon,
  title,
  showAction =false,
  link
}) => {
  const navigate = useNavigate();

  return (
    <div className='section__header'>
      <div className='section__Title'>
        <div className='section__icon'> <img src={icon} alt="SlotGameIcon" /></div>
        <h1 className=''>{title}</h1>
      </div>
      {showAction === true && (<div className='section__actions' onClick={() => navigate(link)}>
        <p>더보기 > </p>
      </div>)}
    </div>
  )
}

export default SectionHeader;
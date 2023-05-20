
import './_sectionHeader.scss';
const SectionHeader = ({
  icon,
  title,
  showAction =false
}) => {
 
  return (
    <div className='section__header'>
      <div className='section__Title'>
        <div className='section__icon'> <img src={icon} alt="SlotGameIcon" /></div>
        <h1 className='truncate'>{title}</h1>
      </div>
      {showAction === true && (<div className='section__actions'>
        <p>더보기 > </p>
      </div>)}
    </div>
  )
}

export default SectionHeader;
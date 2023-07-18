
import './_myPage.scss';
import Close from '../../assets/images/mainPage/close-icon.png'


const ProfileHeader = ({setOpen}) => { 
  return (
    <div className='profile-header'>
      <p>마이인포</p>
      <button
        onClick={() => setOpen(false) }>
        <img src={Close} alt="right" className="close" />
      </button>
      
    </div>
  )
}
export default ProfileHeader;
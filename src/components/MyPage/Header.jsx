
import './_myPage.scss';
import Close from '../../assets/images/mainPage/close-icon.png'

const ProfileHeader = () => { 
  return (
    <div className='profile-header'>
      <p>마이인포</p>
      <img src={Close} alt="right" className="close"/>
    </div>
  )
}
export default ProfileHeader;
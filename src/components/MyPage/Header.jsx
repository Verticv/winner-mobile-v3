
import './_myPage.scss';
import Close from '../../assets/images/mainPage/close-icon.png'
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => { 
  const navigate = useNavigate();
  return (
    <div className='profile-header'>
      <p>마이인포</p>
      <button
        
        onClick={() =>  navigate("/main") }>
        <img src={Close} alt="right" className="close" />
      </button>
      
    </div>
  )
}
export default ProfileHeader;
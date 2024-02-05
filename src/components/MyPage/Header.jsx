import './_myPage.scss';
import LeftArrowIcon from '../../assets/myPage/LeftArrow-white.png';
import Close from '../../assets/images/mainPage/close-icon.png';
import { useNavigate } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

import { useDispatch } from 'react-redux';
import {
  resetMyPageSelectedMainMenuId,
  resetMyPageSelectedSubMenuId,
} from '../../counterSlice';

// const ProfileHeader = ({setOpen}) => {
const ProfileHeader = ({ showSubMenu, setShowSubMenu }) => {
  const navigate = useNavigate();
  // const history = createBrowserHistory();
  const dispatch = useDispatch();
  return (
    <div className="profile-header">
      <button
        // onClick={() => setOpen(false) }>
        onClick={() => {
          if (showSubMenu) setShowSubMenu(false);
          // else navigate('/mypage');
          else {
            dispatch(resetMyPageSelectedMainMenuId());
            dispatch(resetMyPageSelectedSubMenuId());
            navigate('/main');
          }
        }}
      >
        <img src={LeftArrowIcon} alt="right" className="left-arrow" />
      </button>
      <p>마이인포</p>
      <button
        // onClick={() => setOpen(false) }>
        onClick={() => {
          dispatch(resetMyPageSelectedMainMenuId());
          dispatch(resetMyPageSelectedSubMenuId());
          navigate('/main');
        }}
      >
        <img src={Close} alt="right" className="close" />
      </button>
    </div>
  );
};
export default ProfileHeader;

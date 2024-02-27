import './_myPage.scss';
import LeftArrowIcon from '../../assets/myPage/LeftArrow-white.png';
import Close from '../../assets/images/mainPage/close-icon.png';
// import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { useDispatch } from 'react-redux';
import {
  resetMyPageSelectedMainMenuId,
  resetMyPageSelectedSubMenuId,
} from '../../counterSlice';
import { Link } from 'react-router-dom';

// const ProfileHeader = ({setOpen}) => {
const ProfileHeader = ({ showSubMenu, setShowSubMenu }) => {
  // const navigate = useNavigate();
  const history = createBrowserHistory();
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
            // navigate('/main');
            history.back();
          }
        }}
      >
        <img src={LeftArrowIcon} alt="right" className="left-arrow" />
      </button>
      <p>마이인포</p>
      <Link
          to="/main"
        >
      <button
        // onClick={() => setOpen(false) }>
        onClick={() => {
          dispatch(resetMyPageSelectedMainMenuId());
          dispatch(resetMyPageSelectedSubMenuId());
          // navigate('/main');
        }}
      >
        <img src={Close} alt="right" className="close" />
      </button>
      </Link>
    </div>
  );
};
export default ProfileHeader;

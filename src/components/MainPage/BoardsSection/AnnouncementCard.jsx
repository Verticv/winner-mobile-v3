

import TagIcon1 from '../../../assets/images/mainPage/tag-icon1.png'
import WarningIcon from '../../../assets/images/mainPage/warning-icon.png'

const AnnouncementCard = ({ onClick }) => {
  return (
    <div className='announcement-card new-card'>
      <div className='new-card-header'>
        <div className='card-header-title'>
          <img src={WarningIcon} alt="right" />
          <p>공지사항</p>
        </div>
        <div className='card-header-actions'>
          <p>더보기 > </p>
        </div>
      </div>
      <div className='new-card-content'>
        <div className='board-item'>
          <img src={TagIcon1} alt="right" />
          <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
        </div>
        <div className='board-item'>
          <img src={TagIcon1} alt="right" />
          <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
        </div>
        <div className='board-item'>
          <img src={TagIcon1} alt="right" />
          <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
        </div>
        <div className='board-item'>
          <img src={TagIcon1} alt="right" />
          <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
        </div>
        <div className='board-item'>
          <img src={TagIcon1} alt="right" />
          <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard
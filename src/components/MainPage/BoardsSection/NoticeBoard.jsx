import NoticeIcon from '../../../assets/images/mainPage/notice-icon.png'

import TagIcon from '../../../assets/images/mainPage/tag-icon.png'
import TagIcon1 from '../../../assets/images/mainPage/tag-icon1.png'

const NoticeBoard = ({ onClick }) => {
  return (
    <div className='notice-board new-card'>
      <div className='new-card-header'>
        <div className='card-header-title'>
          <img src={NoticeIcon} alt="Notice" />
          <p>게시판</p>
        </div>
        <div className='card-header-actions'>
          <p>더보기 > </p>
        </div>
      </div>
      <div className='new-card-content'>
        <div className='board-item'>
          <div className='left-side'>
            <img src={TagIcon1} alt="right" />
            <p>이벤트 신청합니다.</p>
          </div>

          <div className='right-side'>
            <img src={TagIcon} alt="right" />
            <p>신풍사우나</p>
          </div>
        </div>
        <div className='board-item'>
          <div className='left-side'>
            <img src={TagIcon1} alt="right" />
            <p>이벤트 신청합니다.</p>
          </div>

          <div className='right-side'>
            <img src={TagIcon} alt="right" />
            <p>신풍사우나</p>
          </div>
        </div>
        <div className='board-item'>
          <div className='left-side'>

            <img src={TagIcon1} alt="right" />
            <p>이벤트 신청합니다.</p>        </div>

          <div className='right-side'>
            <img src={TagIcon} alt="right" />
            <p>신풍사우나</p>
          </div>
        </div>
        <div className='board-item'>
          <div className='left-side'>

            <img src={TagIcon1} alt="right" />
            <p>이벤트 신청합니다.</p>
          </div>

          <div className='right-side'>
            <img src={TagIcon} alt="right" />
            <p>신풍사우나</p>
          </div>
        </div>
        <div className='board-item'>
          <div className='left-side'>

            <img src={TagIcon1} alt="right" />
            <p>이벤트 신청합니다.</p>
          </div>

          <div className='right-side'>
            <img src={TagIcon} alt="right" />
            <p>신풍사우나</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard
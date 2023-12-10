import React from 'react';
import SpeedKinoRoundResult from '../SpeedKinoRoundResult';
import CloseIcon from '../../assets/images/nonLiveBet/close.png';

import './_speedKinoRoundzresultPopup.scss';

const SpeedKinoRoundResultPopup = ({ setPopupOpen }) => {
  return (
    <div className="roundresultpopup-container">
      <div style={{ height: '9.4rem' }} className="roundresultpopup-content">
        <label
          style={{ fontSize: '3.75rem', color: '#ffffff', fontWeight: '700' }}
          className="roundresultpopup-content1"
        >
          회차결과
        </label>
        <button
          style={{ marginRight: '2.925rem' }}
          className="roundresultpopup-content2"
          onClick={() => setPopupOpen(false)}
        >
          <img
            style={{ width: '3.1875rem', height: '3.1875rem' }}
            src={CloseIcon}
            alt="close_icon"
          />
        </button>
      </div>

      <div style={{ paddingBottom: '1.875rem', background: '#ffffff' }} className="speedkino-content3">
        <SpeedKinoRoundResult />
      </div>
    </div>
  );
};

export default SpeedKinoRoundResultPopup;

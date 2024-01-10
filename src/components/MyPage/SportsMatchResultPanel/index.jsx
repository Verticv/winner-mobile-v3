import React from 'react';
import '../BoardComposeViewPanel/RadioButton.css';
import TableHeader from '../TableHeader';
import CardHeader from '../CardHeader';
import CardResults from '../CardResults';
import USFlagIcon from '../../../assets/myPage/sports/usaFlag.png';
import ENFlagIcon from '../../../assets/myPage/sports/englandFlag.png';
import SpainFlagIcon from '../../../assets/flag.png';

const SportsMatchResultPanel = ({
  checkedState = null,
  setCheckedState = null,
}) => {
  return (
    <>
      <div
        style={{
          background: 'linear-gradient(to top,#ededeb, #cb78e6 )',
          boxShadow: '0px 0px 0.75rem 0px rgba(0, 0, 0, 0.8)',
          padding: '0.1875rem',
          margin: '0 1.875rem',
          borderRadius: '1.875rem',
        }}
      >
        <div
          style={{
            borderRadius: '1.875rem',
            paddingBottom: '0.5625rem',
            color: '#ccc2b6',
            background: '#ffffff',
          }}
          className="shadow-subNavbar"
        >
          <TableHeader isSportsResult/>
          <div style={{ padding: '0.438rem 0.9rem 0 0.7rem' }}>
            <div
              style={{
                border: '0.45rem solid #6852a7',
                borderRadius: '0.625rem',
                marginBottom: '2rem',
                boxShadow: '0px 0.188rem 0.563rem 0px rgba(0, 0, 0, 0.5)',
              }}
              className="shadow-to-box"
            >
              <CardHeader
                flag={USFlagIcon}
                name="축구 / 미국 - 메이저리그사커"
                date="06-29 15:45"
              />
              <CardResults
                bet="middle"
                result="equality"
                score="4:4"
                team1="CF파추카"
                team2="과달하라 차바하아"
                stat1="2.26"
                stat2="2.96"
                stat3="3.47"
                isAttached={false}
                hasUp={false}
                hasDown={false}
                isClicked
              />
            </div>
            <div
              style={{
                border: '0.45rem solid #6852a7',
                borderRadius: '0.4rem',
                marginBottom: '1.75rem',
              }}
              className="shadow-to-box"
            >
              <CardHeader
                flag={ENFlagIcon}
                name="축구 / 잉글랜드 - 프리미어리그"
                date="06-29 15:45"
              />
              <CardResults
                bet="left"
                result="win"
                score="5:0"
                team1="맨유"
                team2="첼시"
                stat1="2.95"
                stat2="VS"
                stat3="1.39"
                isAttached={false}
                hasUp={false}
                hasDown={false}
                withoutRadius
              />
              <CardResults
                bet="right"
                result="lose"
                score="1:2"
                team1="아스널"
                team2="맨시티"
                stat1="2.26"
                stat2="VS"
                stat3="2.25"
                isAttached={false}
                hasUp={false}
                hasDown={false}
                secondCard="true"
              />
            </div>
            <div
              style={{
                border: '0.45rem solid #6852a7',
                borderRadius: '0.4rem',
                marginBottom: '1.9rem',
              }}
              className="shadow-to-box"
            >
              <CardHeader
                flag={ENFlagIcon}
                name="축구 / 잉글랜드 - 프리미어리그"
                date="06-29 15:45"
              />
              <CardResults
                bet="left"
                result="win"
                score="1:0"
                team1="맨유"
                team2="첼시"
                stat1="2.95"
                stat2="4.62"
                stat3="1.39"
                isAttached={false}
                hasUp={false}
                hasDown={false}
              />
            </div>
            <div
              style={{
                border: '0.45rem solid #6852a7',
                borderRadius: '0.4rem',
              }}
              className="shadow-to-box"
            >
              <CardHeader
                flag={SpainFlagIcon}
                name="축구 / 스페인 - 라리가"
                date="06-29 15:45"
              />
              <CardResults
                bet="left"
                result="win"
                score="3:2"
                team1="바르셀로나"
                team2="레알마드리드"
                stat1="1.80"
                stat2="3.32"
                stat3="1.90"
                isAttached={false}
                hasUp={false}
                hasDown={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsMatchResultPanel;

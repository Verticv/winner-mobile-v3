import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Header from '../../Header';
import NoticeBanner from '../../MainPage/NoticeBanner';
import HomePageTopBanner from '../HomePageTopBanner';
import FixedMenu from '../../FixedMenu';

import WinnerSmall from '../../../assets/images/header/logo.png';

const InboxView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SubtitleText = '정기 점검 안내';
  const BodyText =
    '안녕하세요. 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다. \n 금일 정기 점검이예정되어 안내드리오니 참고 후 이용 부탁드립니다. \n 점검 내용 : 정기 점검 \n 시작 시간 : 2021년 05월 10일 14:00 \n 종료 시간 : 2021년 05년 10일 17:00 \n 점검은 상황에 따라 조기 종료 혹은 지연 될 수 있습니다. \n 최대한 빠른 정상화를 위해 노력하겠습니다.\n 추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 몬의하시면 24시간 항상 친절하게 안내 도움드리겠습니다/ \n 앞으로 많은 이용 부탁드립니다. \n 감사합니다.';
  const FooterText =
    '24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com';

  const navigate = useNavigate();
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) : str;
  };

  const [hasType] = useState(false);

  return (
    <div className="w-full" style={{overflow: 'hidden'}}>
      <div className="w-full z-30 flex flex-col items-center">
        <Header />
        <NoticeBanner />
        <HomePageTopBanner pageTitle="쪽지관리" toPath="/mypage/inbox" />
      </div>

      <div
        className="shadow-box-myPage"
        style={{
          margin: '1.875rem',
          padding: '0.1875rem',
          background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )',
          borderRadius: '1.2rem',
          marginTop: '0',
        }}
      >
        <div
          style={{
            color: '#666666',
            fontSize: '2.81188rem',
            width: '100%',
            height: '100%',
            background: '#ffffff',
            borderRadius: '1rem',
          }}
          className="rounded-2xl overflow-hidden shadow-subNavbar border border-gray-dddddd mt-20px"
        >
          {/* TITLE */}
          <div
            style={{
              borderBottom: '0.1875rem solid #dddddd',
              // background: '#ffffff',
              backgroundColor: 'rgb(247, 247, 247)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: hasType ? '13rem' : '8.1rem',
              justifyContent: !hasType && 'center',
              gap: '1.5rem',
              borderTopRightRadius: '1.1rem',
              borderTopLeftRadius: '1.1rem',
              padding: hasType && '1rem 2rem',
              paddingTop: !hasType && '0.8rem',
              textAlign: 'center',
            }}
          >
            {hasType && (
              <div className="sflex w-full justify-center">
                <div
                  style={{
                    backgroundColor: '#0469a3',
                    fontSize: '2.999375rem',
                    padding: '0.8rem 1.73rem',
                    height: '4.5rem',
                    marginTop: '0.65rem',
                    letterSpacing: '-0.07rem',
                    width: 'fit-content',
                    color: '#444444',
                    borderRadius: '3rem',
                    overflow: 'hidden',
                    lineHeight: '3.4rem',
                    maxWidth: '17.5rem',
                  }}
                  className="rounded-full flex items-center justify-center tracking-tight text-white"
                >
                  {truncate('공지', 6, 6)}
                </div>
              </div>
            )}

            <div
              style={{
                marginBottom: '0.3rem',
                display: '',
                textAlign: 'center',
                justifyContent: 'center',
                width: '100%',
                fontSize: '2.999375rem',
                color: '#444444',
                letterSpacing: '-0.025em',
                fontWeight: 'bold',
              }}
              className="flex justify-center text-5xl w-full tracking-tight text-gray-r454545"
            >
              서버 점검 안내
              <span
                style={{
                  width: '3.1875rem',
                  height: '3.1875rem',
                  borderRadius: '50%',
                  fontSize: '2.4375rem',
                  background: '#f04281',
                  padding: '0.3rem 0.735rem 0rem 0.735rem',
                  margin: '0',
                  marginTop: '0.1rem',
                  marginLeft: '1rem',
                  color: '#fff',
                  display: 'inline-block',
                  verticalAlign: 'text-top',
                }}
                className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4 pt-px"
              >
                N
              </span>
            </div>
          </div>

          <div
            style={{
              height: '8.1rem',
              padding: '1.4375rem 1.875rem',
              borderBottom: '0.1875rem solid #dddddd',
              display: 'flex',
              alignItems: 'center',
              color: '#666666',
              background: '#f7f7f7',
            }}
            className="bg-gray-fafafa border-b border-gray-dddddd flex items-center"
          >
            <img
              style={{ width: '12.0625rem' }}
              className="w-56 object-contain"
              src={WinnerSmall}
              alt=""
            />
            <div className="flex mt-2" style={{ display: 'flex' }}>
              <div
                style={{
                  height: '1.75rem',
                  width: '0.1875rem',
                  margin: 'auto 1.1875rem',
                  // background: '#555555',
                  background: '#999999',
                }}
                className="bg-gray-dddddd"
              ></div>
              <p
                style={{
                  fontSize: '2.4375rem',
                  // color: '#7b7b7b',
                  color: '#444444',
                  marginBottom: '2.0rem',
                  letterSpacing: '0',
                }}
                className="text-gray-r7b7b7b tracking-tight"
              >
                2021.06.28 15:36
              </p>
            </div>
          </div>

          <div
            style={{
              fontSize: '2.8125rem',
              paddingTop: '4.875rem',
              paddingBottom: '4.875rem',
              paddingRight: '2.8125rem',
              paddingLeft: '2.8125rem',
              letterSpacing: '0',
            }}
            className="w-full bg-white flex flex-col px-8 border-b border-gray-dddddd"
          >
            <p
              style={{ marginBottom: '5.875rem' }}
              className=" tracking-tight text-gray-r585858 "
            >
              {SubtitleText}
            </p>
            <p className=" tracking-tight text-gray-r585858">
              {BodyText.split('\n').map((item, i) => (
                <p
                  style={{ marginBottom: '5.875rem' }}
                  key={i}
                  className="flex items-center"
                >
                  {item}
                </p>
              ))}
            </p>
            <p className=" tracking-tight text-gray-r585858">
              {FooterText.split('\n').map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ margin: '3.6rem 1.86rem', paddingBottom: '19.225rem' }}
        className="w-full flex items-start justify-between"
      >
        <button
          style={{
            height: '7.3125rem',
            padding: '0.1875rem',
            fontSize: '2.8125rem',
            marginRight: '0.75rem',
            width: '24.125rem',
            background: '#936cee',
            borderRadius: '1rem',
          }}
          className="hover shadow-box-myPage"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#936cee',
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
            >
              <span
                className=" tracking-tight text-white shadow-text-myPage"
                style={{
                  color: '#ffffff',
                  marginTop: '0.2rem',
                  display: 'flex',
                  letterSpacing: '-0.025em'
                }}
              >
                이전
              </span>
            </div>
          </div>
        </button>
        <button
          style={{
            height: '7.3125rem',
            padding: '0.1875rem',
            fontSize: '2.8125rem',
            marginRight: '0.75rem',
            width: '24.125rem',
            background:
              'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
            borderRadius: '1rem',
          }}
          className="hover shadow-box-myPage"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
              onClick={() => navigate('/mypage/inbox')}
            >
              <span
                className=" tracking-tight text-white shadow-text-myPage"
                style={{
                  color: '#ffffff',
                  marginTop: '0.2rem',
                  display: 'flex',
                  letterSpacing: '-0.025em'
                }}
              >
                목록보기
              </span>
            </div>
          </div>
        </button>

        <button
          style={{
            height: '7.3125rem',
            padding: '0.1875rem',
            fontSize: '2.8125rem',
            width: '24.125rem',
            background: '#936cee',
            borderRadius: '1rem',
          }}
          className="hover shadow-box-myPage"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#936cee',
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
            >
              <span
                className=" tracking-tight text-white shadow-text-myPage"
                style={{
                  color: '#ffffff',
                  marginLeft: '0.2rem',
                  display: 'flex',
                  letterSpacing: '-0.025em'
                }}
              >
                다음
              </span>
            </div>
          </div>
        </button>
      </div>
      <FixedMenu />
    </div>
  );
};

export default InboxView;

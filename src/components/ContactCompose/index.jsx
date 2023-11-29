import React from 'react';
import DownArrowIcon from '../../assets/down-arrow.png';
import Dropdown from '../MyPage/Dropdown';

import './_contactCompose.scss';

const ContactCompose = () => {
  const carrierOptions = [
    '라이브카지노',
    '스포츠',
    '라이브스포츠',
    '슬롯게임',
    '호텔카지노',
    '홀덤게임',
    'e-스포츠',
    '미니게임',
    '키론가상게임 ',
    '피싱게임',
    '티비벳',
    '충전/환전',
    '베팅관련',
    '기타',
  ];
  return (
    <>
      <div style={{ margin: '0.0625rem 1.875rem' }} className="contact-compose">
        <div
          style={{
            background: '#fffff',
            padding: '0.1875rem',
            borderRadius: '1rem',
          }}
        >
          <div
            className="w-full rounded-2xl shadow-subNavbar overflow-hidden"
            style={{
              background:
                'linear-gradient(to top, rgb(236, 235, 235), rgb(219, 176, 232) 50%, rgb(203, 120, 230))',
                padding: '0.1875rem',
                borderRadius: '1rem',
                boxShadow: '0 0.375rem 0.375rem 0 rgba(0,0,0,.3)',
            }}
          >
            <div
              style={{
                height: '9.1875rem',
                paddingLeft: '2.625rem',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                background: '#f7f7f7',
                borderBottom: '0.1875rem solid #dddddd',
                paddingTop: '1.1rem',
                position: 'relative',
              }}
              className="w-full bg-gray-fafafa border-b border-gray-ededed flex items-center"
            >
              <div
                style={{
                  width: '26.25rem',
                  height: '6.6875rem',
                  borderWidth: '0.1875rem',
                  background: '#ffffff',
                  border: '0.1875rem solid #dddddd',
                  borderRadius: '0.7rem',
                }}
                className="flex h-full bg-white rounded-2xl border border-gray-dddddd group"
              >
                <div
                  style={{ width: '26.25rem' }}
                  className="flex w-full text-gray-r393e41  outline-none rounded-2xl  border-gray-dddddd h-full justify-between items-center tracking-tight dddd"
                >
                  <Dropdown
                    labelClasses="group-hover:text-black"
                    labelStyle={{
                      marginLeft: '1.6875rem',
                      fontSize: '2.8125rem',
                      color: '#666666',
                      fontWeight: '500',
                    }}
                    options={carrierOptions}
                    isContact={true}
                  >
                    <img
                      style={{
                        width: '1.5625rem',
                        height: '1rem',
                        marginTop: '-0.3rem',
                      }}
                      className="w-10px h-6px object-contain"
                      src={DownArrowIcon}
                      alt="arrow"
                    />
                  </Dropdown>
                </div>
              </div>
            </div>

            <div
              style={{
                height: '9.1875rem',
                borderBottomWidth: '0.1875rem',
                paddingLeft: '2.4875rem',
                borderBottom: '0.1875rem solid #dddddd',
                background: '#f7f7f7'
              }}
              className="w-full text-5xl bg-white border-b border-gray-dddddd"
            >
              <input
                className="bg-white outline-none w-full h-full  tracking-tight place-color-grey-1"
                placeholder="제목을 입력하세요."
                onFocus={() => {
                  //   const menu = document.querySelector('#main-menu');
                  //   menu.style.marginBottom = '-14.075rem';
                }}
                onBlur={() => {
                  //   const menu = document.querySelector('#main-menu');
                  //   menu.style.marginBottom = '0';
                }}
              />
            </div>

            <div className="textarea-container">
              <textarea
                style={{ resize: 'none', wordBreak: 'keep-all' }}
                className="outline-none w-full h-full  tracking-tight placeholder-gray-r454545 place-color-grey-1"
                placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제 되며 사이트 이용에 제한을 받을 수 있습니다."
              />
            </div>
          </div>
        </div>

        <div className="two-buttons-container">
          <button
            style={{ height: '7.3125rem' }}
            className="shadow-box-myPage hover flex items-center justify-center w-1/2 mr-4 rounded-2xl bg-blue-r0070d9"
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '1rem',
                padding: '0.1875rem',
                background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))'
              }}
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
                <span className="shadow-text-myPage" style={{ color: '#ffffff' }}>신청하기</span>
              </div>
            </div>
          </button>
          <button
            style={{
              background:
                'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))',
              height: '7.3125rem',
              fontSize: '2.8125rem',
            }}
            // onClick={() => navigate("/freeboard")}
            className="shadow-box-myPage hover flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d"
          >
            <div
              style={{
                background:
                  'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))',
                width: '100%',
                height: '100%',
                borderRadius: '1rem',
                padding: '0.1875rem',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))',
                  borderRadius: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span className="shadow-text-myPage"  style={{ color: '#ffffff' }}>취소하기</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactCompose;

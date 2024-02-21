import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/myInfo/close.png';
import LoginIcon from '../../assets/myInfo/edit_info_icon.png';
import username from '../../assets/myInfo/username_icon.png';
import password from '../../assets/myInfo/password.png';

const ReauthenticatePopup = ({ setPopupOpen, setSelectedTab }) => {
  const navigate = useNavigate();
  const [selectedInput, setSelectedInput] = useState();

  return (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        opacity: '1',
        width: '100vw',
        height: '100%',
        transform: 'translate(-50%)',
        left: '50%',
        position: 'fixed',
        top: '0',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          borderRadius: '20px',
          background: 'linear-gradient(to right, #9d3bbb, #5423a0)',
          position: 'relative',
        }}
        className="overflow-hidden"
      >
        <div
          style={{
            height: '9.375rem',
            boxShadow: 'inset 0 0.375rem 0 0 #b675ce',
            borderTopLeftRadius : '3.75rem',
            borderTopRightRadius : '3.75rem',
            display: 'flex',
          }}
          className="w-full"
        >
          {/* <button
            style={{
              position: 'absolute',
              top: '12px',
              right: '22px',
              background: 'transparent',
            }}
            className="cursor-pointer z-20 filter hover:brightness-125"
            onClick={() => setPopupOpen(false)}
          >
            <img src={CloseIcon} alt="close_icon" />
          </button>

          <div
            className="w-full h-full"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <label
              style={{ color: '#ffffff', fontSize: '3.75rem', fontWeight: '700' }}
            >
              회원정보수정
            </label>
          </div> */}
          <div style={{ width: '72px' }}></div>
          <div
            className="w-full h-full"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <label
              style={{ color: '#ffffff', fontSize: '3.75rem', fontWeight: '700', letterSpacing: '0' }}
            >
              회원정보수정
            </label>
          </div>
            <button
              style={{
                width: '72px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
              }}
              className="cursor-pointer z-20 filter hover:brightness-125"
              onClick={() => setPopupOpen(false)}
            >
              <img src={CloseIcon} alt="close_icon" />
            </button>
        </div>
        <div
          style={{
            width: '72.75rem',
            position: 'relative',
            borderBottomLeftRadius: '2rem',
            borderBottomRightRadius: '2rem',
          }}
          className="relative bg-white rounded-xl shadow-popup"
        >
          <div
            style={{
              background: '#dfdbfa',
              width: '100%',
              height: '100%',
              borderBottomLeftRadius: '2rem',
              borderBottomRightRadius: '2rem',
              padding: '6rem 0',
            }}
          >
            <div
              style={{
                width: '71rem',
                display: 'flex',
                justifyContent: 'center',
              }}
              className="flex justify-center"
            >
              <div className="flex items-center justify-center">
                <img
                  style={{
                    width: '14rem',
                  }}
                  src={LoginIcon}
                  alt="login_icon"
                />
              </div>
            </div>
            {/* BREAK */}
            <div
              style={{
                padding: '1.2rem 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              className="w-full h-full flex flex-col items-center"
            >
              <div
                style={{
                  fontSize: '2.625rem',
                  marginBottom: '2.7rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#444444',
                  // letterSpacing: '-0.01rem',
                  letterSpacing: '0',
                }}
                className="flex text-gray-text flex-col items-center justify-center"
              >
                <div
                  className="flex items-center h-14"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '0.35rem',
                    marginLeft: '',
                  }}
                >
                  <p
                    className="text-blue-gradLight"
                    style={{
                      height: '3.625rem',
                      lineHeight: '3.62rem',
                      color: '#682aa7',
                      whiteSpace: 'nowrap',
                      maxWidth: '22.5rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      fontWeight: 'bold',
                    }}
                  >
                    louie3
                  </p>
                  <span style={{ height: '3.625rem', lineHeight: '3.62rem', marginLeft: '0.6rem' }}>
                    {' '}
                    님의 회원정보를 수정합니다.
                  </span>
                </div>
                <div
                  className="flex items-center h-14"
                  style={{ height: '3.625rem', lineHeight: '3.62rem', marginTop: '0.1rem' }}
                >
                  비밀번호를 다시 입력해 주세요.
                </div>
              </div>

              <div
                style={{
                  width: '54rem',
                  marginBottom: '3.3125rem',
                  background: '#ffffff',
                  height: '7.3125rem',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  // borderBottom:
                  //   selectedInput !== 1 ? '0.375rem solid #682aa7' : 'unset',
                  paddingTop: '0.5rem',
                }}
              >
                <img
                  src={username}
                  alt=""
                  style={{ width: '3.62375rem', margin: '0 2.5rem 0 2.8rem' }}
                />
                <div
                  style={{
                    paddingTop: '0.6rem',
                    width: '100%',
                    color: '#9da3b0',
                    fontSize: '3rem',
                    marginLeft: '-10rem',
                    textAlign: 'center',
                    letterSpacing: '-0.025em'
                  }}
                  className="w-full text-5xl text-center text-gray-text outline-none tracking-tight placeholder-9da3b0 tracking-mimus05"
                  onFocus={(e) => {
                    e.target.placeholder = '';
                    setSelectedInput(0);
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = '아이디';
                    setSelectedInput(false);
                  }}
                >
                  louie3
                </div>
                <div className="h-1.5">
                  <div
                    className={`${
                      selectedInput !== 1
                        ? 'bg-gray-bebebe h-1.5'
                        : 'bg-gray-bebebe h-0.75'
                    } w-full`}
                  />
                </div>
              </div>
              <div
                style={{
                  width: '54rem',
                  marginBottom: '3.6875rem',
                  display: 'flex',
                  alignItems: 'center',
                  background: '#ffffff',
                  height: '7.3125rem',
                  borderBottom:
                    selectedInput === 1 ? '0.375rem solid #682aa7' : 'unset',
                  borderRadius: '0.5rem',
                  paddingTop: '0.5rem',
                }}
              >
                <img
                  src={password}
                  alt=""
                  style={{
                    width: '2.9375rem',
                    margin: '0px 2.6rem 0px 3.1rem',
                  }}
                />
                <input
                  style={{ color: '#444444', fontSize: '3rem', textAlign:'center', marginLeft: '-10rem', letterSpacing: '-0.025em' }}
                  className="w-full text-5xl text-center outline-none tracking-tight place-color-grey-2 placeholder-9da3b0 tracking-mimus05"
                  placeholder={'비밀번호'}
                  type="password"
                  onFocus={(e) => {
                    e.target.placeholder = '';
                    setSelectedInput(1);
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = '비밀번호';
                    setSelectedInput(false);
                  }}
                />
                <div className="h-1.5">
                  <div
                    className={`${
                      selectedInput === 1
                        ? 'bg-blue-r1ca7ec h-1.5'
                        : 'bg-gray-bebebe h-0.75'
                    } w-full`}
                  />
                </div>
              </div>
              <div style={{ width: '54rem' }}>
                <button
                  style={{
                    background:
                      'linear-gradient(to right, rgb(223, 82, 255), rgb(111, 42, 253))',
                    height: '8.6rem',
                    width: '100%',
                    fontSize: '2.8125rem',
                    borderRadius: '5rem',
                  }}
                  onClick={() => {
                    navigate('/mypage/edit-info');
                    setSelectedTab('/mypage/edit-info');
                  }}
                  className="shadow-to-box3 flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d hover"
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background:
                          // 'linear-gradient(to right, rgb(223, 82, 255), rgb(111, 42, 253))',
                          'linear-gradient(to right, rgb(223, 82, 255) 0%, rgb(107, 34, 255) 100%)',
                        boxShadow: '0 0.563rem 0.938rem 0 rgba(0, 0, 0, 0.3)',
                        borderRadius: '5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        className="shadow-text-myPage"
                        style={{
                          color: '#ffffff',
                          marginTop: '',
                          fontWeight: 'bold',
                        }}
                      >
                        확인
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReauthenticatePopup;

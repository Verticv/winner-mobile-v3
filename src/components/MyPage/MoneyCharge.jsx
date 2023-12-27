import React, { useState, useEffect } from 'react';
import Step1 from '../../assets/mainPage/icons/step-1-v3.png';
import Step2 from '../../assets/mainPage/icons/step-2-v3.png';
import Step3 from '../../assets/mainPage/icons/step-3-v3.png';
import BankTable from '../MyPage/BankTable';
import WarningMessage from '../MyPage/WarningMessage';
import info from '../../assets/mainPage/icons/info-v3.png';
import AlertIcon from '../../assets/mainPage/icons/warning_v3.png';
import { useNavigate } from 'react-router-dom';
import './_myPage.scss';

const MoneyCharge = ({ subActiveButton, setSubActiveButton }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.onpopstate = (e) => {
      setTimeout(() => {
        navigate('/mypage/money');
        setSubActiveButton('/mypage/money/charge');
      }, 0);
    };
    return () => {
      setSubActiveButton('/mypage/money/charge');
    };
  }, [setSubActiveButton, subActiveButton, navigate]);

  const [inputValue, setInputValue] = useState(null);
  const [inputClicked, setInputClicked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  var nf = new Intl.NumberFormat();

  const Title = ({ text }) => (
    <div
      style={{
        width: '21rem',
        marginRight: '1.7rem',
        background: '#9b6bd4',
        flexShrink: '0',
        borderRadius: '0.5rem',
        marginLeft: '0.125rem',
        paddingLeft: '1.1rem',
        display: 'flex',
        alignItems: 'center',
      }}
      className="form-Title"
    >
      <div
        style={{
          fontSize: '2.625rem',
          color: '#ffffff',
          letterSpacing: '-0.25rem',
          fontWeight: '700'
        }}
        className="text-gray-r454545"
      >
        {text}
      </div>
    </div>
  );

  console.log(setInputClicked);

  return (
    <div style={{ padding: '1.875rem', paddingTop: '0.65rem' }}>
      <WarningMessage
        title="확인 / 필독사항"
        message1="입금 시 반드시 회원님의 성함으로 입금 바랍니다."
        message2="입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검 시간을 피해 신청해 주시기 바랍니다."
        message3="입금계좌는 수시로 변경되오니 반드시 계좌번호 문의 신청을 통해 계좌번호를 확인 후 입금하여 주시기 바랍니다."
        message4="자세한 문의사항은 고객센터를 이용해 주시기 바랍니다."
      />

      <div
        style={{
          padding: '0.188rem',
          marginTop: '1.975rem',
          background: 'linear-gradient(to top, #ededeb, #cb78e6)',
          borderRadius: '1.125rem',
          letterSpacing: '-0.07rem',
          boxShadow: '0px 0px 0.75rem 0px rgba(0, 0, 0, 0.8)',
        }}
        className="w-full rounded-2xl shadow-subNavbar"
      >
        <div
          style={{
            padding: '0.7375rem 0.765rem 0.363rem',
            background: '#ffffff',
            borderRadius: '1.125rem',
          }}
        >
          <div
            style={{
              padding: '1.43rem 1.9rem 1rem 1.82rem',
              background: 'linear-gradient(to right, #9d3bbb, #5423a0)',
              borderRadius: '0.625rem',
            }}
            className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9"
          >
            <div
              style={{
                fontSize: '2.8125rem',
                color: '#ffffff',
                marginLeft: '-0.2rem',
                fontWeight: '700',
              }}
              className="tracking-tight text-gray-r393e41 flex items-center"
            >
              입금 계좌 정보 확인
            </div>
            <div
              style={{
                fontSize: '2.625rem',
                color: '#eeeeee',
                marginTop: '0.8rem',
                lineHeight: '1.42',
                marginLeft: '-0.2rem',
                letterSpacing: '-0.07rem',
                marginRight: '4rem',
                wordBreak: 'keep-all',
              }}
            >
              입금 계좌번호는 쪽지로 발송되며, 발송된 계좌번호로 선입금
              바랍니다.
            </div>
            <div
              style={{
                height: '0.1875rem',
                margin: '1.16rem 0rem 1.89rem',
                background: 'linear-gradient(to right, #ce9ddd, #aa91d0)',
              }}
              className="w-full bg-gray-bebebe my-5"
            />

            <div
              className=""
              style={{
                width: '36.4375rem',
                height: '7.3125rem',
                marginLeft: '15.7rem',
                borderRadius: '1rem',
                padding: '0.1875rem',
                marginBottom: '1.6rem',
              }}
            >
              <button
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: '1.5625rem',
                  background: 'linear-gradient(to right, #15cfee, #3197e5)',
                  borderRadius: '1rem',
                }}
                className="m-auto flex items-center justify-center rounded-2xl hover:opacity-75 hover"
              >
                <div
                  style={{ borderColor: '#ff8f63', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer"
                >
                  <span
                    style={{
                      fontSize: '2.8125rem',
                      color: '#ffffff',
                      display: 'inline-block',
                      letterSpacing: '-0.07rem',
                      marginTop: '0.2rem',
                      textShadow: '0px 0px 0.938rem rgba(0, 0, 0, 0.5)',
                    }}
                    className="tracking-tight text-white"
                  >
                    계좌번호 신청
                  </span>
                </div>
              </button>
            </div>

            <div
              style={{
                fontSize: '2.625rem',
                color: '#c8c8c8',
                letterSpacing: '-0.07rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  lineHeight: '1.45',
                }}
              >
                <div
                  style={{
                    minWidth: '9.7rem',
                    marginTop: '-3.6rem',
                    marginLeft: '-0.1rem',
                  }}
                >
                  <img style={{ width: '7.9375rem' }} src={Step1} alt="" />
                </div>
                <div style={{ color: '#eeeeee', marginRight: '2rem', wordBreak: 'keep-all' }}>
                  위{' '}
                  <span
                    className=" text-gray-r454545 ml-3px"
                    style={{ color: '#fee300', fontWeight: '700' }}
                  >
                    계좌번호 신청
                  </span>
                  버튼을 누르시면 계좌번호가 쪽지로 발송됩니다.
                </div>
              </div>
              <div
                style={{
                  marginTop: '0.6875rem',
                  display: 'flex',
                  alignItems: 'center',
                  lineHeight: '1.45',
                }}
              >
                <div
                  style={{
                    minWidth: '9.7rem',
                    marginTop: '',
                    marginLeft: '-0.1rem',
                  }}
                >
                  <img
                    style={{ width: '7.9375rem', height: 'auto' }}
                    src={Step2}
                    alt=""
                  />
                </div>
                <div
                  className=""
                  style={{ marginTop: '-0.2rem', color: '#eeeeee' }}
                >
                  안내받은 계좌번호로 선입금 해주세요.
                </div>
              </div>
              <div
                style={{
                  marginTop: '0.6875rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    minWidth: '9.7rem',
                    marginTop: '-4.1rem',
                    marginLeft: '-0.1rem',
                  }}
                >
                  <img
                    style={{ width: '7.9375rem', height: 'auto' }}
                    src={Step3}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    lineHeight: '1.45',
                    marginTop: '-0.1rem',
                    color: '#eeeeee',
                    wordBreak: 'keep-all'
                  }}
                  className=""
                >
                  <span style={{ color: '#fee300', fontWeight: '700' }}>충전금액 입력</span>
                  란에 실제 입금하신 금액과 동일한 금액을 입력하고
                  <span style={{ color: '#fee300', fontWeight: '700' }}> 신청하기 </span>
                  버튼을 눌러주세요.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '1.8rem',
              padding: '0 1rem',
            }}
          >
            <div className="form-section">
              <Title text="현재 보유머니" />
              <div className="lable-or-input">
                <div style={{ fontSize: '2.625rem' }}>
                  <span
                    className="font-robotoBold text-red-e9441d"
                    style={{ color: '#f04281' }}
                  >
                    487,240
                  </span>
                </div>
                <div
                  style={{
                    height: '0.1875rem',
                    marginTop: '1.375rem',
                    background: '#e2e2e2',
                  }}
                ></div>
              </div>
            </div>
            <div style={{ marginTop: '2.6rem' }} className="form-section">
              <Title text="충전금액 입력" />
              <div className="lable-or-input">
                <input
                  style={{
                    width: '100%',
                    fontSize: '2.625rem',
                    marginBottom: '0.9375rem',
                    letterSpacing: '-0.1rem',
                    border: '0px solid',
                    outline: 'none',
                  }}
                  placeholder="직접 입력시 숫자만 입력해 주세요."
                  value={inputValue !== null ? nf.format(inputValue) : ''}
                  onChange={(e) =>
                    setInputValue(e.target.value.replace(/,/g, ''))
                  }
                  // onFocus={() => {
                  //     const menu = document.querySelector('#main-menu');
                  //     menu.style.marginBottom = '-14.075rem'
                  //     setInputClicked(true)
                  // }}
                  // onBlur={() => {
                  //     const menu = document.querySelector('#main-menu');
                  //     menu.style.marginBottom = '0'
                  //     setInputClicked(false)
                  // }}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="tel"
                />
                <div
                  style={{
                    height: '0.1875rem',
                    background: '#e2e2e2',
                    marginTop: '0.688rem',
                  }}
                  className={`${
                    inputClicked ? 'bg-blue-r1ca7ec' : 'bg-gray-bebebe'
                  } w-full`}
                ></div>
              </div>
            </div>
          </div>

          <div className="range-btn">
            <div className="f-div">
              <div className="div-range-border">
                <button
                  className="hover"
                  onClick={() => setInputValue(inputValue + 10000)}
                >
                  <div className="s-div">
                    <span>1만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  onClick={() => setInputValue(inputValue + 30000)}
                >
                  <div className="s-div">
                    <span>3만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  onClick={() => setInputValue(inputValue + 50000)}
                >
                  <div className="s-div">
                    <span>5만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  onClick={() => setInputValue(inputValue + 100000)}
                >
                  <div className="s-div">
                    <span style={{ fontSize: '2.625rem' }}>10만원</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="f-div">
              <div className="div-range-border">
                <button
                  className="hover"
                  onClick={() => setInputValue(inputValue + 300000)}
                >
                  <div className="s-div">
                    <span>30만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  onClick={() => setInputValue(inputValue + 500000)}
                >
                  <div className="s-div">
                    <span>50만원</span>
                  </div>
                </button>
              </div>
              <div className="div-range-border">
                <button
                  className="hover"
                  onClick={() => setInputValue(inputValue + 1000000)}
                >
                  <div className="s-div">
                    <span>100만원</span>
                  </div>
                </button>
              </div>
              <div
                className="div-range-border"
                style={{
                  background: 'linear-gradient(to top, #4f3a7a, #e597ff)',
                }}
              >
                <button
                  className="hover"
                  style={{
                    background: 'linear-gradient(to top, #6b22ff, #df52ff)',
                  }}
                  onClick={() => setInputValue(0)}
                >
                  <div className="s-div">
                    <span
                      style={{ paddingRight: '0', color: '#ffffff' }}
                      className="shadow-to-text"
                    >
                      정정
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '0 1rem',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="flex flex-col"
          >
            <div className="form-section">
              <Title text="보너스 금액" />
              <div className="lable-or-input">
                <div style={{ fontSize: '2.625rem' }}>
                  <span style={{ color: '#4c98ff', letterSpacing: '-0.03rem' }}>
                    100,000,000
                  </span>
                </div>
                <div
                  style={{
                    height: '0.1875rem',
                    marginTop: '1.313rem',
                    background: '#e2e2e2',
                  }}
                  className="w-full bg-gray-bebebe"
                ></div>
              </div>
            </div>
            <div style={{ marginTop: '2.45rem' }} className="form-section">
              <Title text="보너스 받기" />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '2.2rem',
                marginBottom: '1.9rem',
              }}
            >
              <div
                style={{
                  width: '3.6rem',
                  marginTop: '-3.188rem',
                  marginRight: '1rem',
                  marginLeft: '0.125rem',
                }}
              >
                <img src={info} alt="" style={{ width: '2.563rem' }} />
              </div>
              <p
                style={{
                  margin: '0',
                  color: '#666666',
                  fontSize: '2.625rem',
                  letterSpacing: '-0.07rem',
                  marginRight: '1rem',
                }}
              >
                첫 충전 보너스 머니를 받으실 경우 아래 버튼을{' '}
                <span style={{ color: '#33a1e9', fontWeight: '700' }}>선택</span>해 주세요.
                보너스를 받지 않을 경우{' '}
                <span style={{ color: '#f04281', fontWeight: '700' }}>받지않기 </span>버튼을
                선택하세요.
              </p>
            </div>
            <div
              style={{
                marginLeft: '0.25rem',
                display: 'flex',
                marginTop: '-0.188rem',
              }}
              className="flex w-full h-full"
            >
              <div
                style={{
                  height: '7.3125rem',
                  width: '22.5rem',
                  marginRight: '',
                  borderRadius: '1.125rem',
                }}
              >
                <button
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '1.125rem',
                    background: '#5d659f',
                    paddingTop: '',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)',
                  }}
                  onClick={() => setRadioValue('1')}
                  className="hover"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <div style={{ paddingLeft: '1.7875rem', width: '8.9rem' }}>
                      <label
                        style={{
                          marginTop: '0.213rem',
                          marginRight: '3.975rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <input
                          className="w-12 h-12"
                          type="checkbox"
                          checked={radioValue === '1'}
                          name="gender"
                        />
                      </label>
                    </div>
                    <span
                      style={{
                        fontSize: '2.625rem',
                        color: '#ffffff',
                        textShadow: '0px 0px 0.938rem rgba(0, 0, 0, 0.5)',
                        letterSpacing: '-0.07rem',
                        marginTop: '0.113rem',
                        marginLeft: '0.188rem',
                      }}
                    >
                      슬롯게임
                    </span>
                  </div>
                </button>
              </div>
              <div
                style={{
                  height: '7.3125rem',
                  width: '22.5rem',
                  borderRadius: '1.125rem',
                  marginLeft: '0.9rem',
                }}
              >
                <button
                  style={{
                    width: '100%',
                    height: '100%',
                    boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)',
                    borderRadius: '1.125rem',
                    background: '#5d659f',
                    paddingTop: '',
                  }}
                  onClick={() => setRadioValue('2')}
                  className="hover"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <div style={{ paddingLeft: '1.913rem' }}>
                      <label
                        style={{
                          marginTop: '0.213rem',
                          marginRight: '5.225rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <input
                          className="w-12 h-12"
                          type="checkbox"
                          checked={radioValue === '2'}
                          name="gender"
                        />
                      </label>
                    </div>
                    <span
                      style={{
                        fontSize: '2.625rem',
                        color: '#ffffff',
                        textShadow: '0px 0px 0.938rem rgba(0, 0, 0, 0.5)',
                        letterSpacing: '-0.07rem',
                        marginTop: '0.3rem',
                      }}
                    >
                      스포츠
                    </span>
                  </div>
                </button>
              </div>
              <div
                style={{
                  height: '7.3125rem',
                  width: '22.5rem',
                  marginLeft: '0.988rem',
                  borderRadius: '1.125rem',
                }}
              >
                <button
                  style={{
                    width: '100%',
                    height: '100%',
                    boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)',
                    borderRadius: '1.125rem',
                    background: '#5d659f',
                    paddingTop: '',
                  }}
                  onClick={() => setRadioValue('3')}
                  className="hover"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <div style={{ paddingLeft: '1.7875rem', width: '5.9rem' }}>
                      <label
                        style={{
                          marginTop: '0.213rem',
                          marginRight: '1.038rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <input
                          className="w-12 h-12"
                          type="checkbox"
                          checked={radioValue === '3'}
                          name="gender"
                        />
                      </label>
                    </div>
                    <span
                      style={{
                        fontSize: '2.625rem',
                        color: '#ffffff',
                        textShadow: '0px 0px 0.938rem rgba(0, 0, 0, 0.5)',
                        letterSpacing: '-0.07rem',
                        marginTop: '0.113rem',
                        marginLeft: '0.75rem',
                      }}
                    >
                      키론가상게임
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div
              style={{
                marginLeft: '0.25rem',
                display: 'flex',
                marginTop: '0.938rem',
              }}
              className="flex w-full h-full"
            >
              <div
                style={{
                  height: '7.3125rem',
                  width: '22.5rem',
                  marginRight: '',
                  borderRadius: '1.125rem',
                }}
              >
                <button
                  style={{
                    width: '100%',
                    height: '100%',
                    boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)',
                    borderRadius: '1.125rem',
                    background: '#5d659f',
                    paddingTop: '',
                  }}
                  onClick={() => setRadioValue('4')}
                  className="hover"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <div style={{ paddingLeft: '1.7875rem', width: '8.9rem' }}>
                      <label
                        style={{
                          marginTop: '0.213rem',
                          marginRight: '3.975rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <input
                          className="w-12 h-12"
                          type="checkbox"
                          checked={radioValue === '4'}
                          name="gender"
                        />
                      </label>
                    </div>
                    <span
                      style={{
                        fontSize: '2.625rem',
                        color: '#ffffff',
                        textShadow: '0px 0px 0.938rem rgba(0, 0, 0, 0.5)',
                        letterSpacing: '-0.07rem',
                        marginTop: '0.113rem',
                        marginLeft: '0.125rem',
                      }}
                    >
                      피싱게임
                    </span>
                  </div>
                </button>
              </div>
              <div
                style={{
                  height: '7.3125rem',
                  width: '22.5rem',
                  borderRadius: '1.125rem',
                  marginLeft: '0.9rem',
                }}
              >
                <button
                  style={{
                    width: '100%',
                    height: '100%',
                    boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)',
                    borderRadius: '1.125rem',
                    background: '#c03a41',
                    paddingTop: '',
                  }}
                  onClick={() => setRadioValue('5')}
                  className="hover"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <div style={{ paddingLeft: '1.7875rem', width: '8.8rem' }}>
                      <label
                        style={{
                          marginTop: '0.213rem',
                          marginRight: '3.85rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <input
                          className="w-12 h-12"
                          type="checkbox"
                          checked={radioValue === '5'}
                          name="gender"
                        />
                      </label>
                    </div>
                    <span
                      style={{
                        fontSize: '2.625rem',
                        color: '#ffffff',
                        textShadow: '0px 0px 0.938rem rgba(0, 0, 0, 0.5)',
                        letterSpacing: '-0.07rem',
                        marginTop: '0.113rem',
                        marginLeft: '0.25rem',
                      }}
                    >
                      받지않기
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="warning-message">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={AlertIcon}
                alt=""
                style={{ margin: '-0.2rem 1rem 0 0.8rem', width: '3.375rem' }}
              />
              <div style={{ marginTop: '-0.063rem' }}>
                <span style={{ color: '#f04281', fontSize: '2.8125rem' }}>
                  알아두세요
                </span>
              </div>
            </div>
            <div
              style={{
                alignItems: 'flex-start',
                marginRight: '3.5rem',
                color: '#666666',
                fontSize: '2.625rem',
                lineHeight: '1.3',
                display: 'flex',
                marginTop: '2rem',
              }}
            >
              <span style={{ marginRight: ' 0.6rem', marginLeft: '0.45rem' }}>
                ✓
              </span>
              <span style={{ marginRight: ' 0.6rem', marginLeft: '0.513rem' }}>
                첫충전을 받으신 경우 선택하신 게임에서 롤링을 먼저 충족하셔야
                합니다.
              </span>
            </div>
            <div
              style={{
                alignItems: 'flex-start',
                marginRight: '6.6rem',
                color: '#666666',
                fontSize: '2.625rem',
                lineHeight: '1.3',
                display: 'flex',
                marginTop: '1.163rem',
              }}
            >
              <span style={{ marginRight: ' 0.6rem', marginLeft: '0.45rem' }}>
                ✓
              </span>
              <span style={{ marginRight: ' 0.6rem', marginLeft: '0.513rem' }}>
                타게임을 이용하시면서 첫충을 받으시는 경우 전액 몰수 될 수
                있으니 주의 바랍니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: '1.6rem',
          height: '7.3125rem',
          marginTop: '3.8rem',
        }}
      >
        <div
          style={{
            width: '36.4375rem',
            height: '7.3125rem',
            borderRadius: '1.125rem',
            boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)',
          }}
        >
          <button
            style={{
              width: '100%',
              height: '100%',
              marginBottom: '1.5625rem',
              background: 'linear-gradient(to right, #15cfee , #3197e5)',
              borderRadius: '1.125rem',
            }}
            className="hover"
          >
            <div
              style={{ borderColor: '#ff8f63', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer"
            >
              <span
                style={{
                  fontSize: '2.8125rem',
                  color: '#ffffff',
                  textShadow: '0px 0px 0.938rem rgba(0, 0, 0, 0.5)',
                  display: 'inline-block',
                  letterSpacing: '-0.07rem',
                  marginTop: '0.188rem',
                }}
              >
                신청하기
              </span>
            </div>
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: '4.688rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            background: 'linear-gradient(to right, #df52ff , #6b22ff)',
            boxShadow: '0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)',
            width: '52rem',
            height: '6.563rem',
            borderRadius: '3.3rem',
            paddingTop: '0.088rem',
          }}
          className=""
        >
          <span
            className=""
            style={{
              color: '#ffffff',
              fontSize: '2.625rem',
              letterSpacing: '-0.07rem',
              marginRight: '0.063rem',
            }}
          >
            은행점검시간
          </span>
        </button>
      </div>

      <BankTable />
    </div>
  );
};

export default MoneyCharge;

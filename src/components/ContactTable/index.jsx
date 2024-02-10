import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MailIcon from '../../assets/myPage/mail.png';
import MailOpenedIcon from '../../assets/myPage/mail_opened.png';
import Delete from '../../assets/myPage/delete.png';

const ContactTable = ({ array, checkedState, setCheckedState }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) : str;
  };

  useEffect(() => {
    if (location?.state?.from === '/main') {
      window.onpopstate = () => {
        navigate('/main');
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function InboxList({ items }) {
    return items.map((item) => {
      const type = item.isRead === true ? '답변완료' : '답변대기';
      return (
        <div
          key={item.id}
          onClick={() =>
            navigate(item.path, {
              state: { from: location?.state?.from === '/main' ? '/main' : '' },
            })
          }
          style={{
            position: 'relative',
            background:
              item.isRead === false
                ? '#ecd7fa'
                : item.id % 2 === 0
                ? '#ffffff'
                : '#ffffff',
            borderTopLeftRadius: item.isFirst ? '1.1rem' : '',
            borderTopRightRadius: item.isFirst ? '1.1rem' : '',
            borderBottomLeftRadius: item.isLast ? '1.1rem' : '',
            borderBottomRightRadius: item.isLast ? '1.1rem' : '',
            display: 'flex',
            alignItems: 'center',
            padding: '2rem 0',
            borderBottom: item.isLast ? '' : '1px solid #dddddd',
          }}
          className={`${
            item.isRead === false
              ? 'bg-gray-e8eff6'
              : item.id % 2 === 0
              ? 'bg-gray-fdfdfd'
              : 'bg-gray-f8f9fb'
          } flex contact-card`}
        >
          <div
            style={{
              width: '9.1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="flex justify-start items-center cursor-pointer"
          >
            <img
              className="hover"
              style={{
                width: '4.875rem',
                height: item.isRead === true ? '4.72625' : '2.945',
              }}
              src={item.isRead === true ? MailOpenedIcon : MailIcon}
              alt=""
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              maxWidth: '56.25rem',
            }}
            className="tracking-tight text-gray-r454545 h-full"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '-0.3rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    marginRight: '1rem',
                    fontSize: '2.4375rem',
                    padding: '0rem 1.35rem',
                    paddingBottom: '0',
                    backgroundColor:
                      item.isRead === true ? '#999999' : '#702caa',
                    color: item.isRead === true ? '#ffffff' : '#ffffff',
                    borderRadius: '2rem',
                    height: '4.1rem',
                    marginTop: '0.3rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '0.02rem',
                    maxWidth: '16rem',
                    overflow: 'hidden',
                    lineHeight: '3.4rem',
                  }}
                >
                  <p
                    style={{ marginTop: '0.45rem', letterSpacing: '-0.05rem' }}
                  >
                    {truncate(type, 6, 6)}
                  </p>
                </div>
                <p
                  style={{
                    textOverflow: 'ellipsis',
                    maxWidth: '37rem',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    fontSize: '3rem',
                    letterSpacing: '-0.07rem',
                    fontWeight: item.isRead === false ? '700' : 'unset',
                    color: item.isRead === true ? '#666666' : '#444444',
                    margin: '0',
                  }}
                >
                  {item.text}
                </p>
                {item.isRead === false && (
                  <div
                    className="n-div"
                    style={{
                      width: '3rem',
                      height: '3rem',
                      lineHeight: '3rem',
                      margin: '0.0rem 0 -0.5rem 0',
                      backgroundColor: 'rgb(240, 66, 129)',
                      borderRadius: '50%',
                      // padding: '0.3rem 0.735rem 0rem 0.735rem',
                      padding: '0.2rem 0 0 0',
                      fontSize: '2.4375rem',
                      color: '#ffffff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '-0.5rem',
                      marginLeft: '0.9rem'
                    }}
                  >
                    N
                  </div>
                )}
              </div>

              <div
                className={`w-full flex justify-start  tracking-tight text-r585858 text-center`}
                style={{ display: 'flex' }}
              >
                <div
                  style={{
                    height: '4.45rem',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  className="w-full flex align-center"
                >
                  <p
                    className="text-gray-r7b7b7b"
                    style={{
                      fontSize: '2.625rem',
                      color: '#666666',
                      letterSpacing: '-0.07rem',
                      display: 'flex',
                      alignItems: 'center',
                      margin: '0',
                      fontWeight: '500'
                    }}
                  >
                    {item.category}
                  </p>
                  <div
                    style={{
                      height: '1.75rem',
                      width: '0.1875rem',
                      margin: 'auto 1rem auto 0.9rem',
                      background: '#555555',
                    }}
                    className="bg-gray-c5c5c5"
                  ></div>
                  <div
                    style={{
                      height: '4.45rem',
                      lineHeight: '4.45rem',
                      fontSize: '2.625rem',
                      color: '#666666',
                      letterSpacing: '-0.07rem',
                    }}
                    className="flex items-center text-gray-r7b7b7b"
                  >
                    {item.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute right-0 "
            style={{
              position: 'absolute',
              right: '5.3rem',
              background: 'bottom',
              zIndex: 5,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="hover"
              style={{    width: '3.7rem', height: '4.5rem' }}
              src={item.isRead ? Delete : Delete}
              alt=""
            />
          </button>
        </div>
      );
    });
  }

  return (
    <div className="contact-table">
      <InboxList items={array} />
    </div>
  );
};

export default ContactTable;

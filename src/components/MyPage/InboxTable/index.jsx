import React from 'react';
import { useNavigate } from 'react-router-dom';
import MailIcon from '../../../assets/myPage/mail.png';
import MailOpenedIcon from '../../../assets/myPage/mail_opened.png';
import Delete from '../../../assets/myPage/delete.png';

const InboxTable = ({ array, checkedState, setCheckedState }) => {
  const navigate = useNavigate();

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) : str;
  };

  function InboxList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        onClick={() => navigate(item.path)}
        style={{
          position: 'relative',
          background:
            item.isRead === false
              ? '#ecd7fa'
              : item.id % 2 === 0
              ? '#ffffff'
              : '#ffffff',
          display: 'flex',
          alignItems: 'center',
          borderBottom: item.isLast ? '' : '1px solid #dddddd',
          borderTopLeftRadius: item.isFirst ? '1.1rem' : '',
          borderTopRightRadius: item.isFirst ? '1.1rem' : '',
          borderBottomLeftRadius: item.isLast ? '1.1rem' : '',
          borderBottomRightRadius: item.isLast ? '1.1rem' : '',
        }}
        className="flex contact-card"
      >
        <div
          style={{
            width: '7.875rem',
            display: 'flex',
            justifyContent: 'center',
          }}
          onClick={(e) => e.stopPropagation()}
          className="flex justify-center items-center"
        >
          <label className="form-control">
            <input
              style={{
                width: '3rem',
                height: '3rem',
                marginLeft: '0.1rem',
                marginTop: '0.2rem',
              }}
              type="checkbox"
              checked={checkedState[item.id]}
              onChange={() => handleOnChange(item.id)}
            />
          </label>
        </div>
        <div
          style={{
            width: '5.9rem',
            marginRight: '2.1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="flex justify-start items-center cursor-pointer"
          onClick={() => navigate(item.path)}
        >
          <img
            style={{
              width: '4.2rem',
              height: item.isRead === true ? '4.72625' : '2.945',
            }}
            src={item.isRead === true ? MailOpenedIcon : MailIcon}
            alt=""
          />
        </div>
        <div
          style={{
            maxWidth: '56.25rem',
            padding: '1.5rem 2.2rem',
            paddingLeft: '0',
            paddingBottom: '1.5rem',
          }}
          className="flex items-center  tracking-tight text-gray-r454545 h-full"
        >
          <div
            className="w-full h-full flex flex-wrap"
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '-0.3rem',
            }}
          >
            <div
              className={`${
                item.isRead === true
                  ? 'text-gray-r7b7b7b '
                  : 'text-gray-r454545 '
              } flex items-center cursor-pointer`}
              onClick={() => navigate(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '5.4rem',
              }}
            >
              {item.type === '공지' ? (
                <div
                  style={{
                    fontSize: '2.4375rem',
                    padding: '0.6rem 1.7rem 0.4rem',
                    borderRadius: '2rem',
                    color: '#fff',
                    background: '#0469a3',
                    marginTop: '0.5rem',
                    marginLeft: '0.1rem',
                    marginRight: '0.9rem',
                    maxWidth: '17.5rem',
                    overflow: 'hidden',
                    lineHeight: '3.3rem',
                    height: '4.2rem',
                    flexShrink: 0,
                  }}
                  className="w-max rounded-full bg-blue-r00a1e9 flex items-center justify-center text-white mr-4 mb-2"
                >
                  <span>{truncate(item.category, 6, 6)}</span>
                </div>
              ) : item.type === '이벤트' ? (
                <div
                  style={{
                    // marginTop: '-1.1rem',
                    fontSize: '2.4375rem',
                    padding: '0.56rem 1.5rem 0.45rem',
                    borderRadius: '2rem',
                    color: '#fff',
                    background: '#c08029',
                    marginTop: '0.53rem',
                    marginLeft: '0.1rem',
                    marginRight: '0.9rem',
                    maxWidth: '17.5rem',
                    overflow: 'hidden',
                    lineHeight: '3.3rem',
                    height: '4.2rem',
                  }}
                  className="w-max rounded-full bg-yellow-ffab39 flex items-center justify-center text-white mr-4 mb-2"
                >
                  <span className="-mb-1">
                    <span className="mt-1 block">
                      {truncate('이벤트', 6, 6)}
                    </span>
                  </span>
                </div>
              ) : (
                <div></div>
              )}
              <p
                style={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  maxWidth:
                    item.type === '이벤트'
                      ? '31rem'
                      : item.type === '공지'
                      ? '39rem'
                      : !item.isRead
                      ? '44rem'
                      : '47rem',
                  fontSize: '3rem',
                  letterSpacing: '-0.07rem',
                  color: item.isRead !== true ? '#444444' : '#666666',
                }}
                className="group-hover:text-gray-r585858 text-5xl text-ellipsis overflow-hidden whitespace-nowrap"
              >
                {item.text}
              </p>
              {item.isRead === false && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-0.5rem',
                    marginLeft: '0.9rem',
                  }}
                >
                  {/* <p
                    style={{
                      backgroundColor: '#f04281',
                      borderRadius: '50%',
                      padding: '0.3rem 0.735rem 0rem 0.735rem',
                      fontSize: '2.4375rem',
                    }}
                    className="text-white"
                  >
                    N
                  </p> */}
                  <p
                    style={{
                      width: '3rem',
                      height: '3rem',
                      lineHeight: '3rem',
                      margin: '0.5rem 0 0.1rem 0',
                      textAlign: 'center',
                      verticalAlign: 'center',
                      backgroundColor: '#f04281',
                      // borderRadius: '50%',
                      borderRadius: '3rem',
                      // padding: '0.3rem 0.735rem 0rem 0.735rem',
                      padding: '0.1rem 0 0 0',
                      fontSize: '2.4375rem',
                    }}
                    className="text-white"
                  >
                    N
                  </p>
                </div>
              )}
            </div>

            <div
              className={`w-full flex justify-start  tracking-tight text-r585858 text-center`}
              style={{ display: 'flex' }}
            >
              <div
                style={{
                  marginTop: '0.2rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
                className="w-full flex align-center"
              >
                <div
                  style={{
                    fontSize: '2.625rem',
                    color: item.isRead ? '#888888' : '#666666',
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
          className="absolute right-0"
          style={{
            position: 'absolute',
            right: '5.3rem',
            background: 'bottom',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="hover"
            style={{ width: '3.7rem', height: '4.5rem', marginTop: '0.3rem' }}
            src={Delete}
            alt=""
          />
        </button>
      </div>
    ));
  }

  return (
    <div className="contact-table">
      <InboxList items={array} />
    </div>
  );
};

export default InboxTable;

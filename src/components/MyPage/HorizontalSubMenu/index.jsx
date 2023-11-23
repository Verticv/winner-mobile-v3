import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import horizontalsScroll from '../../../utils/horizontalsScroll';

import './_horizontalSubMenu.scss';

const HorizontalSubMenu = ({
  itemsArray,
  setSelectedTab,
  setSelectedSubTab = null,
  isSameWidth = false,
  withoutFirst = true,
}) => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const [, setHover] = useState(null);

  useEffect(() => {
    if (
      withoutFirst &&
      pathname !== '/cscenter/all/contact/all/other' &&
      pathname !== '/cscenter/all/contact/all/ar-game' &&
      pathname !== '/cscenter/all/contact/all/ar-game1' &&
      pathname !== '/cscenter/all/announcement/ar-game' &&
      pathname !== '/cscenter/all/announcement/other' &&
      pathname !== '/cscenter/all/faq/ar-game' &&
      pathname !== '/cscenter/all/faq/other'
    ) {
      horizontalsScroll(itemsArray, 't', 'scroll-wrapper12');
    }
  }, [itemsArray, pathname, withoutFirst]);

  useEffect(() => {
    if (
      withoutFirst &&
      pathname === '/cscenter/all/contact/all/other' &&
      pathname === '/cscenter/all/contact/all/ar-game' &&
      pathname === '/cscenter/all/contact/all/ar-game1' &&
      pathname === '/cscenter/all/announcement/ar-game' &&
      pathname === '/cscenter/all/announcement/other' &&
      pathname === '/cscenter/all/faq/ar-game' &&
      pathname === '/cscenter/all/faq/other'
    ) {
      horizontalsScroll(itemsArray, 't', 'scroll-wrapper12');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function TabsList({ items }) {
    return items.map((item, index) => (
      <>
        <div
          className="btn-back shadow-box-myPage"
          style={{
            background:
              pathname === item.path
                ? 'linear-gradient(to top, #553d84, #9f5af5 50%, #c473ec)'
                : 'linear-gradient(to top, #5e3e93, #9f59f5 50%, #edcfff)',
        }}
        >
          <button
            className="btn"
            id={`t${index}`}
            style={{
              color: pathname === item.path ? '#ffffff' : '#2d2834',
              minWidth: item?.width ? item.width : 'fit-content',
              background:
                pathname === item.path
                  ? 'linear-gradient(to top, rgb(73, 31, 156) 0%, rgb(158, 60, 188) 100%)'
                  : '#e5cefa',
            }}
            key={item.id}
            onPointerDown={() => setHover(item.id)}
            onPointerUp={() => {
              setHover(null);
              if (pathname !== item.path) {
                horizontalsScroll(
                  itemsArray,
                  't',
                  'scroll-wrapper12',
                  index,
                  items.length - 1 === index ? 200 : null,
                  item.additionLeftScroll || 0
                );
                navigate(item.path);
                setSelectedTab(item.id);
                if (setSelectedSubTab !== null) {
                  setSelectedSubTab(0);
                }
              }
            }}
            onPointerOut={() => setHover(null)}
            onPointerCancel={() => setHover(null)}
          >
            <div style={{ margin: item?.width ? '0' : '0 2.6875rem' }}>
              <div>
                <span>{item.text}</span>
              </div>
            </div>
          </button>
          {items?.length - 1 === index && (
            <div style={{ minWidth: '0.8rem', height: '' }}></div>
          )}
        </div>
      </>
    ));
  }

  return (
    <div id="container" className="horizontal-btns">
      <TabsList items={itemsArray} />
    </div>
  );
};

export default HorizontalSubMenu;

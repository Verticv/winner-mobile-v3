import React from 'react';
import { useNavigate } from 'react-router';

const AnnouncementTable = ({ array, checkedState, setCheckedState }) => {
  const navigate = useNavigate();

  function InboxList({ items }) {
    return items?.map((item) => (
      <div
        onClick={() => navigate('/cscenter/all/announcement/view')}
        key={item.id}
        style={{
          background:
            item.isNew === true
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
        className="announcementTable1"
      >
        <div className="announcementTable2">
          <div className="announcementTable3">
            <div
              className="announcementTable4"
              onClick={() => navigate(item.path)}
            >
              <p
                style={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  color: item.isNew === true ? '#444444' : '#666666',
                }}
              >
                {item.title}
              </p>
              {item.isNew && (
                <div
                  className="n-div"
                  style={{
                    backgroundColor: 'rgb(240, 66, 129)',
                    borderRadius: '50%',
                    padding: '0.3rem 0.735rem 0rem',
                    fontSize: '2.4375rem',
                    color: '#ffffff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-0.2rem',
                    marginLeft: '0.9rem',
                  }}
                >
                  N
                </div>
              )}
            </div>
            <div className="announcementTable5">
              <div className="announcementTable6">
                <p
                  className="announcementTable6-p"
                  style={{ color: '#666666', fontWeight: '500' }}
                >
                  {item.type}
                </p>
                <div className="sep-cont" />
                <div className="time" style={{ color: '#666666' }}>
                  {item.time}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="announcementTable">
      <InboxList items={array} />
    </div>
  );
};

export default AnnouncementTable;

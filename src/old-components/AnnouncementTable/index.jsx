import React from 'react'
import { useNavigate } from 'react-router';


const AnnouncementTable = ({
    array,
    checkedState,
    setCheckedState
}) => {

    const navigate = useNavigate();

    function InboxList({ items }) {
        return items?.map(item => (
            <div
                onClick={() => navigate('/cscenter/all/announcement/view')}
                key={item.id}
                style={{
                    background: item.isNew === true ? '#3d3934' : item.id % 2 === 0 ? '#323232' : '#2e2e2e'
                }}
                className="announcementTable1">
                <div className="announcementTable2">
                    <div className='announcementTable3'>
                        <div
                            className="announcementTable4"
                            onClick={() => navigate(item.path)}
                        >
                            <p style={{
                                textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'
                            }}>{item.title}</p>
                            {item.isNew && (<div className="n-div">N</div>)}
                        </div>
                        <div className='announcementTable5' >
                            <div className="announcementTable6">
                                <p className='announcementTable6-p'>{item.type}</p>
                                <div className='sep-cont' />
                                <div className="time">{item.time}</div>
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
    )
}

export default AnnouncementTable

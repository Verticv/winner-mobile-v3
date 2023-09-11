import React from 'react'
import AlertIcon from '../../assets/mainPage/icons/warning-v3.png'
import './_myPage.scss'

const WarningMessage = ({ title, message1, message1_1, message2, message2_1, message3, message3_1, message4, isExchange }) => {

    return (
        <div className="WarningMessageClass">
            <div className="alert-icon-and-text">
                <img src={AlertIcon} alt="" />
                <span>{title}</span>
            </div>
            <div className="alert-messages">
                <div style={{ marginRight: isExchange ? '13rem' : '6.5rem' }} className="first-span">
                    <span style={{ color: '#f04281' }} className='correct'>✓</span>
                    {message1 && <span style={{ color: '#f04281' }} className="first-span">{message1} {message1_1}</span>}
                </div>
                {message2 &&
                    <div style={{ alignItems: 'flex-start', marginRight: isExchange ? '10rem' : '6.5rem' }} className="next-span">
                        <span style={{ color: '#666666' }} className='correct'>✓</span>
                        <span style={{ marginTop: '0' , color: '#666666'}}>{message2} {message2_1}</span>
                    </div>
                }
                {message3 &&
                    <div style={{ alignItems: 'flex-start', marginRight: isExchange ? '0' : '6.5rem' }} className="next-span">
                        <span style={{ color: '#666666' }} className='correct'>✓</span>
                        <span style={{ marginTop: '0',color: '#666666' }}>{message3} {message3_1}</span>
                    </div>
                }
                {message4 &&
                    <div style={{ alignItems: 'flex-start' }} className="next-span">
                        <span style={{ color: '#666666' }} className='correct'>✓</span>
                        <span style={{ marginTop: '0',color: '#666666' }}>{message4}</span>
                    </div>
                }
            </div>
        </div>
    )

}

export default WarningMessage


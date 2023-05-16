import React from "react";
import { useNavigate } from 'react-router-dom';
import Best from '../../assets/best.png'

function Card({ id, inactivBackground, activeBackground, icon, text, isActive, cardActive, setCardActive, path, disable, group, extra, best }) {
    const navigate = useNavigate();
    return (
        <div className="card-container" id={id} style={{ position: 'relative' }}
            onClick={(e) => {
                setCardActive(e.target.id);
                navigate(path);
            }}

        >
            {best && (
                <img src={Best} alt="" style={{ position: 'absolute', width: '11rem', top: '-1.8rem', left: '-1.8rem', zIndex: 50 }} />
            )}
            <div id={id} className={`main-div ${(+cardActive === id) ? 'active' : ''}`}
                style={{ background: `url(${inactivBackground}) round`, position: 'relative' }}
            >

                <div id={id} className={`main-div ${(+cardActive === id) ? 'active' : ''}`}
                    style={{ background: (+cardActive === id) && `url(${activeBackground}) round`, position: 'absolute' }}
                ></div>

                <div className="card-content" style={{ zIndex: 4 }} id={id}>
                    <div className="content">
                        <p style={{ marginTop: !icon ? '-4.3rem' : '' }} id={id}>{text}</p>
                    </div>
                    <div className={`card-btn ${disable ? 'disable-style' : ''}`} id={id}>
                        <button id={id} className={`${(+cardActive === id) ? 'active-btn' : ''}`}>
                            <span className="text-btn" style={{ color: disable ? '#cccccc' : '' }} id={id}>
                                {disable ? '준비중' : (text === "두윈카지노" ? '게임시작' : extra ? '설명보기' : '게임시작')}
                            </span>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Card;

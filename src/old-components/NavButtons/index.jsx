import React from "react";
// import icon1 from '../../assets/icon1.png';

function Button({ id, icon, activeIcon, text, width, height, marginTop, textMargin, isActive, btnActive, setBtnActive }) {
    return (
        <div className={`nav-button`} id={id}
            onClick={(event) => setBtnActive(event.target.id)}
        >
            <button id={id} className={`${(+btnActive === id) ? 'active' : ''}`}>
                <img id={id} className='icon' src={(+btnActive === id) ? activeIcon : icon} alt='' style={{ width: width, height: height, marginTop: marginTop }} />
                <span id={id} className='text' >{text}</span>
            </button>
        </div>
    )
}

export default Button;
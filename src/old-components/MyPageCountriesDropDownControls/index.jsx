import React from "react";
import OutsideAlerter from "../OutsideAlerter";

export default function DropDownControls({
    children,
    buttonChild,
    isDropdownOpen,
    setDropdownOpen
}) {

    return (
        <div className="shadow-to-box" style={{ position: 'relative', marginTop: '0.1rem', borderRadius: '0.7rem' }}>
            <button 
                onMouseDown={() => setDropdownOpen(isOpen => !isOpen)}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', height: '9.375rem',
                    width: '23.75rem', borderRadius: '0.7rem',
                }}
                className="flex relative items-center justify-center hover"
            >{buttonChild}</button>
            {isDropdownOpen && (
                <OutsideAlerter setDropdownOpen={setDropdownOpen}>
                    <div style={{ marginTop: '', left: '-0.5rem' }} className="absolute text-copy-primary fixed top-0 justify-center z-30" >
                        {children}
                    </div>
                </OutsideAlerter>
            )}
        </div>
    );
}

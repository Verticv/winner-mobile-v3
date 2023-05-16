import React from "react";
import OutsideAlerter from './OutsideAlerter';

export default function DropDownControls({
    children,
    buttonChild,
    isDropdownOpen,
    setDropdownOpen
}) {
    
    return (
        <div className="relative" style={{ position: 'relative'}}>
            <button
                onMouseDown={() => setDropdownOpen(isOpen => !isOpen)}
                className="flex relative items-center justify-center"
                style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center'}}
            >{buttonChild}</button>
            {isDropdownOpen && (
                <OutsideAlerter setDropdownOpen={setDropdownOpen}>
                    <div style={{marginTop: '2.25rem', left: '-0.1875rem', position: 'absolute', top: '0', justifyContent: 'center', zIndex: '30'}} className="absolute text-copy-primary fixed top-0 justify-center z-30" >
                        {children}
                    </div>
                </OutsideAlerter>
            )}
        </div>
    );
}
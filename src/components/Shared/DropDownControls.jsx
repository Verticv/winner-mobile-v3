import React from "react";
import OutsideAlerter from "./OutsideAlerter";

export default function DropDownControls({
  children,
  buttonChild,
  isDropdownOpen,
  setDropdownOpen
}) {

  return (
    <div  style={{ position: 'relative' ,width: '100%' ,height: '100%'}}>
      <button
        onMouseDown={() => setDropdownOpen(isOpen => !isOpen)}
        
      >{buttonChild}</button>
      {isDropdownOpen && (
        <OutsideAlerter setDropdownOpen={setDropdownOpen}>
          <div style={{ marginTop: '',bottom: '0', left: '-0.5rem', position: 'absolute'}} className="absolute text-copy-primary fixed top-0 justify-center z-30" >
            {children}
          </div>
        </OutsideAlerter>
      )}
    </div>
  );
}

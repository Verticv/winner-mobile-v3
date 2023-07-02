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
          <div style={{ marginTop: '', bottom: '-0.938rem', left: '-0.0.25rem', position: 'absolute'}}  >
            {children}
          </div>
        </OutsideAlerter>
      )}
    </div>
  );
}

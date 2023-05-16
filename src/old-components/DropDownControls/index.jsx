/* eslint-disable */
import React, { useRef, useCallback, useEffect } from "react";
import { useOnClickOutside } from "../../helpers/functions";
import './_sportNonLiveDropDownControls.scss';

export default function SportNonLiveDropDownControls({
    children,
    onClose,
    onClick,
    buttonChild,
    isDropdownOpen,
    setDropdownOpen,
    className,
    dropDownClasses,
    open, setOpen
}) {
    // const [open, setOpen] = useState(false);
    const ref = useRef();
    const handler = useCallback(() => {
        if (open) {
            setOpen(false)
            if (onClose) { onClose() }
        }
    }, [onClose, open]);

    useOnClickOutside(ref, handler);

    useEffect(() => {
        if (open && !isDropdownOpen && setDropdownOpen) {
            setOpen(false)
            setDropdownOpen(true)
        }
    }, [isDropdownOpen, open, setDropdownOpen])

    useOnClickOutside(ref, handler);

    return (
        <div className={`dropdown-container ${className}`}>
            <button
                className="dropdown-content"
                onMouseDown={() => {
                    if (onClick) onClick();
                    setOpen(true);
                }}
            >{buttonChild}</button>
            {open && (
                <div style={{ width: '73vw', height: '80vh', minHeight: '80vh', top: '10%', left: '13%', zIndex: '102' }} className={`dropdown-content1 text-copy-primary ${dropDownClasses}`} ref={ref} >
                    {children}
                </div>
            )}
            {open && (
                <div className="dropdown-content2" style={{ background: 'rgba(0,0,0,0.65)', zIndex: '101' }}>

                </div>
            )}
        </div>
    );
}

import React, { useState, useRef, useCallback, useEffect } from "react";
import { useOnClickOutside } from "../../helpers/functions";
import './_popupControls.scss';

export default function PopupControls({
    children,
    onClose,
    onClick,
    buttonChild,
    isPopupOpen,
    setPopupOpen,
    isNotFullScreen
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const handler = useCallback(() => {
        if (open) {
            setOpen(false)
            if (onClose) { onClose() }
        }

        if (open && !isPopupOpen) {
            setOpen(false)
        }
    }, [isPopupOpen, onClose, open]);

    useEffect(() => {
        if (open && !isPopupOpen) {
            setOpen(false)
            setPopupOpen(true)
        }
    }, [isPopupOpen, open, setPopupOpen])
    useOnClickOutside(ref, handler);

    function onHeaderClick(e) {
        e.preventDefault();
        if (e.target === e.currentTarget) {
            // handle
            setOpen(false)
        }
    }
    return (
        <div>
            <div
                className="popupcontrols-container"
                onMouseDown={() => {
                    if (onClick) onClick();
                    setOpen(true);
                }}
            >{buttonChild}</div>
            {open && (
                <div style={{ zIndex: '201' }} className={`popupcontrols-content ${isNotFullScreen ? "popupcontrols-content1" : ""} `} onClick={(e) => onHeaderClick(e)}>
                    <div >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

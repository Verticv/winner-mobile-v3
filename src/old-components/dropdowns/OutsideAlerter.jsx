import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, setDropdownOpen) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setDropdownOpen]);
}

export default function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.setDropdownOpen);

    return <div ref={wrapperRef}>{props.children}</div>;
}
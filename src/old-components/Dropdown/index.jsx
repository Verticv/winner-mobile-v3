import React, { useState } from "react";

// import "./style.css";


const SortBy = ({ children, options, value, onChange, onClick, multiple, withArrow }) => (
    <div className="container"
        style={{ postion: 'relative', width: '100%' }}
    >
        <select
            // style={{position: 'absolute', zIndex: -1}}
            className="select-overlay"
            id="filter-select"
            name="filter-select[]"
            value={value}
            onChange={onChange}
            onClick={onClick}
            multiple={multiple}
        >
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <label style={{ fontSize: '2.625rem' }} className="custom" htmlFor="filter-select">
            {children}
        </label>
    </div>
);

const Dropdown = ({ options, children, labelStyle, labelClasses, isLeagueSelection = false, isContact = false, multiple = false, isSignup = false, ddda, withArrow }) => {
    const [sortValue, setSortValue] = useState(isContact ? "선택" : isLeagueSelection ? "리그선택" : isSignup ? options[0] : "전체회차")

    const onChange = e => setSortValue(e.currentTarget.value);

    return (
        <form style={{ width: '100%' }}>
            <SortBy
                options={options}
                value={sortValue}
                onChange={onChange}
                onClick={() => console.log('on click!')}
                multiple={multiple}
                withArrow={withArrow}
            >
                <div className={`sort-by-div  ${ddda ? 'ddda' : ''}`}
                    style={{
                        // display: 'flex',
                        // justifyContent: 'space-between',
                        // alignItems: 'center',
                        width: '15rem'
                    }}
                >
                    <div className={`sort-by-p ${labelClasses} ${ddda ? 'ddda' : ''} `} style={{marginTop: sortValue === "전체회차" && '-0.4rem'}}><p>{sortValue}</p></div>
                    {children}
                </div>
            </SortBy>
        </form >
    )
}


export default Dropdown;



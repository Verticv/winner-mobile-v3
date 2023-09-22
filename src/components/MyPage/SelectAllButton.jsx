import React from 'react'
import './_myPage.scss';

const SelectAllButton = (
    {
        isAllSelected,
        setCheckedState,
        setAllSelected,
        count = 30,
        buttonsNumber = 2,
        btn1Text = '선택삭제',
        btn2Text = '내역올리기',
    }) => {

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(count).fill(false))
        } else {
            setCheckedState(Array(count).fill(true))
        }
        setAllSelected(!isAllSelected)
    }

    if (buttonsNumber === 3) {
        return (
            <div className="select-all-buttons" style={{paddingTop: "0.063rem",
                paddingLeft: "0.063rem"}}>
                <div className="flex-btn">
                    <button
                        style={{
                            background: "#936cee",
                            boxShadow: "0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)"
                        }}
                        className="common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div
                            style={{
                                // background: 'linear-gradient(to top, rgb(128, 96, 63), rgb(147, 110, 72) 50%, rgb(165, 123, 82))',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: '#ffffff' }}>{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button
                        style={{
                            background: "#936cee",
                            boxShadow: "0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)"
                        }}
                        className="common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                    >
                        <div
                            style={{
                                // background: 'linear-gradient(to top, #96341d, #e06446)',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: '#ffffff' }}>{btn1Text}</span>
                        </div>
                    </button>
                    <button
                        style={{
                            background: 'linear-gradient(to right, #15cfee, #3197e5)',
                            boxShadow: "0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)"
                        }}
                        className="common-button flex flex-1 items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                    // onClick={() => allSelectButtonPressed()}
                    >
                        <div
                            style={{
                                // background: 'linear-gradient(to top, #396084, #528ccd)',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: '#ffffff' }}>{btn2Text}</span>
                        </div>
                    </button>
                </div >
            </div >
        )
    }

    return (
        <div style={{ margin: '3.75rem 1.875rem', marginTop: '1.875rem', marginBottom: '2.5rem' }} >
            <div className='two-buttons'>
                <button
                    style={{ height: '7.3125rem', boxShadow: "0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)" }}
                    className="first-btn hover"
                    onClick={() => allSelectButtonPressed()}
                >
                    <div
                        style={{
                            // background: "linear-gradient(to bottom, #555555, #333333)",
                            background: '#936cee',
                            color: '#ffffff'
                        }}
                        className="div-border flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span style={{ fontSize: '2.8125rem' }} className="shadow-to-text text  tracking-tight text-14px text-white  mb-2">{isAllSelected ? "선택해제" : "전체선택"}</span>
                    </div>
                </button>
                <button
                    style={{ height: '7.3125rem', boxShadow: "0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.3)" }}
                    className="hover common-button flex flex-1 items-center justify-center m-0 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                >
                    <div
                        style={{
                            background: 'linear-gradient(to right, #ff7760, #f14a53)',
                            
                        }}
                        className="div-border flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                    >
                        <span style={{ fontSize: '2.8125rem' }} className="shadow-to-text text  tracking-tight text-14px text-white mb-2">{btn1Text}</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SelectAllButton


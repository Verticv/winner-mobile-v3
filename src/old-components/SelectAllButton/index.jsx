import React from 'react'

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
            <div className="select-all-buttons">
                <div className="flex-btn">
                    <button
                        style={{
                            background: 'linear-gradient(to top, rgb(77, 60, 10), rgb(156, 123, 74) 50%, rgb(231, 183, 134))',
                        }}
                        className="shadow-to-box common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div
                            style={{
                                background: 'linear-gradient(to top, rgb(128, 96, 63), rgb(147, 110, 72) 50%, rgb(165, 123, 82))',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: 'rgb(255, 223, 189)' }}>{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button
                        style={{
                            background: 'linear-gradient(to top, #4b0923, #e88895)',
                        }}
                        className="shadow-to-box common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                    >
                        <div
                            style={{
                                background: 'linear-gradient(to top, #96341d, #e06446)',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: '#ffd2d2' }}>{btn1Text}</span>
                        </div>
                    </button>
                    <button
                        style={{
                            background: 'linear-gradient(to top, #3d4a8d, #88d9e8)',
                        }}
                        className="shadow-to-box common-button flex flex-1 items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                    // onClick={() => allSelectButtonPressed()}
                    >
                        <div
                            style={{
                                background: 'linear-gradient(to top, #396084, #528ccd)',
                            }}
                            className="div-text"
                        >
                            <span style={{ color: '#d6f3ff' }}>{btn2Text}</span>
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
                    style={{ height: '7.3125rem', background: 'linear-gradient(to top, rgb(77, 60, 10), rgb(163, 129, 79) 50%, rgb(231, 183, 134))' }}
                    className="first-btn hover shadow-to-box "
                    onClick={() => allSelectButtonPressed()}
                >
                    <div
                        style={{
                            // background: "linear-gradient(to bottom, #555555, #333333)",
                            background: 'linear-gradient(to top, rgb(128, 96, 63), rgb(150, 112, 74) 50%, rgb(165, 123, 82))',
                            color: 'rgb(255, 223, 189)'
                        }}
                        className="div-border flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span style={{ fontSize: '2.8125rem' }} className="shadow-to-text text font-spoqaMedium tracking-tight text-14px text-white  mb-2">{isAllSelected ? "선택해제" : "전체선택"}</span>
                    </div>
                </button>
                <button
                    style={{ height: '7.3125rem', background: 'linear-gradient(to top, rgb(77, 10, 37), rgb(163, 79, 99) 50%, rgb(231, 134, 148))' }}
                    className="hover shadow-to-box common-button flex flex-1 items-center justify-center m-0 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                >
                    <div
                        style={{
                            background: 'linear-gradient(to top, rgb(151, 53, 29), rgb(187, 76, 50) 50%, rgb(223, 99, 69))',
                            
                        }}
                        className="div-border flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                    >
                        <span style={{ fontSize: '2.8125rem' }} className="shadow-to-text text font-spoqaMedium tracking-tight text-14px text-white mb-2">{btn1Text}</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SelectAllButton


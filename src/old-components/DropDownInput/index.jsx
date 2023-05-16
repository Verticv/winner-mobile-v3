import React from 'react'
import DownArrowIcon from '../../assets/down-arrow1.png'
import Dropdown from '../../components/Dropdown';

const DropDownInput = ({ isLeagueSelection = true, isBetCombination = false, withArrow }) => {

    const carrierOptions1 = ["league 1", "league 2", "league 3", "league 4", "league 5", "league 6", "league 7", "league 8", "league 9", "league 10"]
    const carrierOptions3 = ["러시아", "중국", "터키", "브라질", "칠레", "요르단", "폴란드", "아르헨티나", "헝가리", "이스라엘", "덴마크", "독일", "스웨덴", "루마니아", "잉글랜드", "북아일랜드", "스페인", "프랑스", "콜롬비아", "에콰도르", "미국"]
    const carrierOptions2 = ["234회", "235회", "236회", "237회", "238회", "239회", "240회"]

    if (isBetCombination) return (
        <div
            style={{ width: '34.06rem', height: '7rem', fontSize: '2.625rem', marginLeft: '1.875rem' }}
            className="relative flex cursor-pointer group w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-between items-center tracking-minus05"
        >
            <div
                style={{ width: '34.06rem', height: '7rem', fontSize: '2.625rem' }}
                className="w-full rounded-2xl flex h-full bg-white group">
                <div
                    style={{ borderWidth: '1px' }}
                    className="flex w-full text-gray-r393e41 font-spoqaMedium outline-none rounded-2xl  border-gray-dddddd h-full justify-between items-center tracking-tight"
                >

                    <Dropdown withArrow multiple={true} labelStyle={{ marginLeft: '1.75rem', color: '#7b7b7b' }} options={carrierOptions3} isLeagueSelection={isLeagueSelection} labelClasses="pl-16">
                    </Dropdown>
                </div>
            </div>
        </div>
    )

    else return (
        <div
            style={{
                width: withArrow ? '34.06rem' : '',
                height: withArrow ? '7rem' : '',
                fontSize: withArrow ? '2.625rem' : '',
                background: withArrow ? '#1a1a1a' : '',
                border: withArrow ? '0.1875rem solid #404040' : '',
                position: withArrow ? 'relative' : '',
                borderRadius: withArrow ? '0.5rem' : '',
                marginLeft: '1.875rem',
                marginTop:'0.08rem'
            }}
        >
            <div style={{ width: '34.06rem', height: '7rem', fontSize: '2.625rem' }}>
                <div style={{ borderWidth: '1px' }} >
                    <Dropdown labelStyle={{ marginLeft: '1.75rem', color: '#7b7b7b' }} options={isLeagueSelection === true ? carrierOptions1 : carrierOptions2} isLeagueSelection={isLeagueSelection}>
                        <img style={{ width: '1.5625rem', marginRight: '1.875rem', height: '1rem', position: 'absolute', right: '0', top: '4.2rem' }} src={DownArrowIcon} alt="arrow" />
                    </Dropdown>
                </div>
            </div>
        </div>
    )

}

export default DropDownInput

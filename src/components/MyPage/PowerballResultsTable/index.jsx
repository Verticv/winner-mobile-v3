import React from 'react'

const PowerballResultsTable = ({
    array,
    checkedState,
    setCheckedState
}) => {
    function InboxList({ items }) {
        return items?.map(item => (
            <div
                key={item.id}
                style={{ height: item.id !== 5 ? '12.1rem' : '11.725rem', background: item.id % 2 === 0 ? '#323231' : '#2e2e2e', display: 'flex', borderBottom: item.id !== 5 ? '0.1875rem solid #252525' : '' }}
                className={`
                    } flex font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd hover:font-spoqaBold group`}
            >
                <div
                    style={{
                        paddingLeft: '0',
                        paddingBottom: "1.4rem",
                        marginLeft: '1.3rem',
                        marginTop: '0.4rem'
                    }}
                    className="flex items-center font-spoqaMedium tracking-tight text-gray-r454545 h-full" >

                    <div style={{ fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', color: "#c8c8c8", letterSpacing: '-0.07rem', textAlign: 'center' }} className='w-full h-full flex first-letter:space-x-12 items-center text-gray-585858 font-spoqaMedium'>
                        <p
                            style={{ maxWidth: '15rem', fontSize: '2.625rem' }}
                            className="group-hover:text-gray-r7b7b7b text-4xl text-center font-spoqa flex-shrink-0 leading-tight">{item.time}</p>
                        <p
                            style={{ maxWidth: '20rem', fontSize: '2.625rem', marginLeft: "7rem" }}
                            className="group-hover:text-gray-r7b7b7b text-4xl font-spoqa text-center flex-shrink-0 leading-tight">{item.num}</p>
                        <p
                            style={{ maxWidth: '15rem', color: "#4c98ff", fontSize: '2.625rem', marginLeft: "9.2rem", textAlign: 'center' }}
                            className="text-4xl font-spoqa text-center flex-shrink-0 leading-tight">{item.results}</p>
                        <p
                            style={{ maxWidth: '20rem', fontSize: '2.625rem', marginLeft: "8.8rem" }}
                            className="group-hover:text-gray-r7b7b7b text-4xl font-spoqa text-center flex-shrink-0 leading-tight">{item.ratio}</p>
                    </div>

                </div>
            </div>
        ));
    }

    return (
        <div style={{ borderRadius: "1em" }} className="w-full shadow-subNavbar overflow-hidden">
            <InboxList items={array} />
        </div>
    )
}

export default PowerballResultsTable

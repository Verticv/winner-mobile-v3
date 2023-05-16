import React, { useState } from 'react'
import CheckboxIcon from '../../assets/betCombinationRPCart/cart-checkbox.png'
import CancelIcon from '../../assets/betCombinationRPCart/cart-confirm-cancel.png'
import BetIcon from '../../assets/betCombinationRPCart/dollar.png'
import CancelIconGray from '../../assets/betCombinationRPCart/cart-cancel.png'
import './_betCombinationRightPanelCart.scss';

const BetCombinationRightPanelCart = ({ addedCard, setAddedCard }) => {

    const [showConfirm, setShowConfirm] = useState(false)
    const [inputValue, setInputValue] = useState(null)
    var nf = new Intl.NumberFormat();

    const ConfirmCard = () => (
        <div
            style={{
                height: "11.125rem", border: '0.1875rem solid #fde1a4', marginBottom: "0.6rem", padding: '1.6rem', fontSize: '2.625rem',
                background: "#987959",
                // marginTop: '1.1rem'
            }}
            className="confirmcard-content1"
        >
            <div className="confirmcard-content2">
                <img style={{ width: '3.8125rem', height: '' }} src={CheckboxIcon} alt="" className="" />
                <p className="confirmcard-content3">베팅이 수락되었습니다.</p>
            </div>

            <div className="confirmcard-content4">
                <p className="confirmcard-content5">티켓번호</p>
                <p style={{ color: "#fde1a4", marginTop: '0.5rem', marginLeft: '0.7rem' }} className="confirmcard-content6">189106964</p>
            </div>

            <img style={{ width: '2.3125rem', height: '2.3125rem', top: '4rem', right: '3rem' }} src={CancelIcon} alt="" className="confirmcard-content7" onClick={() => setShowConfirm(false)} />
        </div>
    )

    const handleRemoveItem = (e) => {
        const id = e.target.getAttribute("name")
        setAddedCard(addedCard.filter(item => item.id !== id));
    };

    function BetCard({ items }) {
        return items.map(item => (
            <div
                style={{
                    width: '73.5rem',
                    borderRadius: "1.125rem",
                    borderWidth: '0.1875rem',
                    marginBottom: '0.5625rem',
                    background: 'linear-gradient(to top, #21211f, #7b746d)',
                    padding: '0.1875rem'
                }}
            >
                <div
                    style={{
                        width: '100%', borderRadius: "1.125rem",
                        background: 'linear-gradient(to left, #2e2e2e, #4b4b49)'
                    }}
                    className="bet-card"
                    key={item.id}
                >
                    <div
                        style={{
                            borderRadius: "0.95rem",
                            borderColor: "#fbddb1",
                            borderWidth: '0.1875rem',
                            fontSize: '2.625rem',
                            paddingRight: '5.5rem'
                            // background: "linear-gradient(120deg, #ffffff, #e0e2e6)"
                        }}
                        className="bet-card1"
                    >
                        <p
                            style={{ color: item.value === "right" ? "#e65454" : "#ffffff" }}
                            className="bet-card2"
                        >
                            {item.special === "FK Haugesund" ? 'FK Haugesund' : item.value === "right" ? "SV Kuchl" : "FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund"}
                        </p>
                        <p
                            style={{ color: item.value === "right" ? "#ffffff" : "#e65454" }}
                            className="bet-card3"
                        >
                            {item.special === "FK Haugesund" ? '스트룀스고세 IF' : item.value === "right" ? "FC Blau Weiss Linz" : "스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF"}
                        </p>
                        <p style={{ fontSize: '2.4375rem', color: '#c8c8c8', maxWidth: '53rem' }} className="bet-card4">
                            {item.special === "FK Haugesund" ? '축구 - 승무패 (게임)' : item.value === "right" ? '축구 - 승무패 (게임)' : '축구 - 승무패 (게임) 축구 - 승무패 (게임) 축구 - 승무패 (게임) 축구 - 승무패 (게임)축구 - 승무패 (게임)'}
                        </p>
                        <img style={{ width: '2.7rem', height: '2.7rem', right: '2rem', top: '' }} src={CancelIconGray} alt="" name={item.id} className="bet-card5" onClick={handleRemoveItem} />
                        <div style={{ fontSize: '2.4375rem', right: '8rem', bottom: '1.5rem', color: '#c8c8c8' }} className="bet-card6">
                            <p>{item.value === "right" ? "승 @" : "패 @"}</p>
                            <p
                                style={{ color: item.value === "right" ? "#e65454" : "#4c98ff" }}
                                className="bet-card7 ml-2px"
                            >
                                {item.value === "right" ? "2.26" : "3.47"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    // const BetAmountButton = ({amount, inputValue, setInputValue}) => (
    //     <button 
    //         style={{
    //             width:"24.375rem",
    //             height: '7.5rem',
    //             padding: '1px',
    //             fontSize: '2.625rem',
    //             borderColor: "#b3bac1"
    //         }} 
    //         className="flex items-center justify-center rounded-lg border hover:opacity-75"
    //         onClick={() => setInputValue(inputValue + amount)}
    //     >
    //         <div 
    //             style={{
    //                 background: "linear-gradient(to bottom, #feffff, #cedeed)",
    //                 borderWidth: '0.1875rem'
    //             }}  
    //             className="flex items-center justify-center rounded-lg border border-white cursor-pointer w-full h-full"
    //         >
    //             <span className="font-roboto tracking-tight text-gray-r585858">{nf.format(amount)}</span>
    //         </div>
    //     </button>
    // )
    const [buttonClicked, setButtonClicked] = useState("")

    const BetAmountButton = ({ amount }) => (
        <div
            style={{
                width: "24.375rem",
                height: '7.5rem',
                background: buttonClicked === amount ? 'linear-gradient(to top, #4b3b09, #e8b888)' : 'linear-gradient(to top, #393835, #6b6865)',
                borderRadius: '0.5rem',
                padding: '0.1875rem'
            }}
            className="hover"
        >
            <button
                style={{
                    width: "100%",
                    height: '100%',
                    // padding: '0.2rem',
                    fontSize: '2.625rem',
                    // background: 'linear-gradient(to top, #323231, #545452)',
                    background: buttonClicked === amount ? "linear-gradient(to bottom, #a67c52, #7f5f3f)" : "linear-gradient(to top, #323231, #545452)",
                    // borderColor: "#b3bac1",
                    borderRadius: '0.5rem'
                }}
                className="btn-style"
                onPointerDown={() => setButtonClicked(amount)}
                onPointerUp={() => {
                    setInputValue(inputValue + amount)
                    setButtonClicked(null)
                }}
                onPointerOut={() => setButtonClicked(null)}
            >
                <div
                    style={{
                        borderRadius: "0.75rem",
                        // background: buttonClicked === amount ? "linear-gradient(to bottom, #a8defd, #8dc6ee)" : "linear-gradient(to bottom, #feffff, #cedeed)",
                        borderWidth: "0.1875rem",
                        borderColor: "#fff",
                    }}
                    className="divstyle">
                    <span className="spanstyle shadow-to-text">{nf.format(amount)}</span>
                </div>
            </button>
        </div>
    )

    const BetFixedAmountButton = ({ amount, text }) => (
        <div
            style={{
                width: "24.375rem",
                height: '7.5rem',
                padding: '0.1875rem',
                borderRadius: '0.5rem',
                background: 'linear-gradient(to top, #4b3b09, #e8b888)'
            }}
            className="hover"
        >
            <button
                style={{
                    width: "100%",
                    height: '100%',
                    fontSize: '2.625rem',
                    borderColor: "#171a1d",
                    borderRadius: '0.5rem',
                    // backgroundColor: '#747679',
                    background: 'linear-gradient(to bottom, #a67c52, #7f5f3f)'

                    // padding: '0.2rem',
                }}
                className="btncontentstyle"
                onClick={() => setInputValue(amount)}
            >
                <div
                    style={{
                        width: "100%",
                        borderRadius: "0.75rem",
                        borderWidth: "0.1875rem",
                        borderColor: "#747679",
                        // background: "linear-gradient(to bottom, #585b5e, #303337)",
                    }}
                    className="divcontentstyle">
                    <span className="spancontentstyle shadow-to-text">{text}</span>
                </div>
            </button>
        </div>
    )

    return (
        <div >
            <div style={{ borderBottom: '0.1875rem solid #1e1e1e', padding: '0 2rem', marginTop: '0.7rem' }} className="confirmcard-content">
                {showConfirm && (
                    <>
                        <ConfirmCard />
                        <div className="confirmcard-content8"></div>
                    </>
                )}

                {!addedCard.length ? (
                    <div style={{ height: "6.6125rem", paddingLeft: '1.7rem', marginBottom: '1.8rem', fontSize: '2.625rem', backgroundColor: "#1a1a1a", border: '0.1875rem solid #404040' }} className="confirmcard-content9">
                        <p className="confirmcard-content10">베팅을 선택하세요.</p>
                    </div>
                ) : (
                    <div style={{ marginBottom: '1.0625rem' }} className="betcard-content">
                        <BetCard items={addedCard} />
                    </div>
                )}
            </div>
            <div style={{ height: '5.7rem', paddingLeft: '3.4rem', paddingRight: '3.6rem', fontSize: '2.625rem', borderBottom: '0.1875rem solid #1e1e1e', background: '#323232' }} className="content-cart">
                <p className="content-cart1">보유금액</p>
                <p style={{ fontSize: '3rem' }} className="content-cart2">3,522,170</p>
            </div>

            <div style={{ height: '5.7rem', paddingLeft: '4.3rem', paddingRight: '3.6rem', fontSize: '2.525rem', borderBottom: '0.1875rem solid #1e1e1e' }} className="content-cart3">
                <p className="content-cart4">베팅 최소금액</p>
                <p style={{ color: "#e65454" }} className="content-cart5">5,000</p>
            </div>

            <div style={{ height: '5.7rem', paddingLeft: '4.3rem', paddingRight: '3.6rem', fontSize: '2.525rem', borderBottom: '0.1875rem solid #1e1e1e' }} className="content-cart6">
                <p className="content-cart7">베팅 최대금액</p>
                <p className="content-cart8">7,000,000</p>
            </div>

            <div style={{ height: '5.75rem', paddingLeft: '4.3rem', paddingRight: '3.6rem', fontSize: '2.525rem', borderBottom: '0.1875rem solid #1e1e1e' }} className="content-cart9">
                <p className="content-cart10">적중 최대금액</p>
                <p className="content-cart11">20,000,000</p>
            </div>

            <div style={{ height: '5.75rem', paddingLeft: '3.4rem', paddingRight: '3.7rem', fontSize: '2.625rem', borderBottom: '0.1875rem solid #1e1e1e', background: '#323232' }} className="content-cart12">
                <p className="content-cart13">배당률합계</p>
                <p style={{ color: "#f26522" }} className="content-cart14">0</p>
            </div>

            <div style={{ height: '5.75rem', paddingLeft: '3.4rem', paddingRight: '2rem', fontSize: '2.625rem', borderBottom: '0.1875rem solid #1e1e1e', background: '#323232' }} className="content-cart15">
                <p className="content-cart16">베팅금액</p>
                <input
                    style={{ color: "#d52e2e", fontFamily: '2.625rem', width: "36.875rem", height: "4.8125rem", backgroundColor: "#1a1a1a", border: '0.1875rem solid #404040' }}
                    className="content-cart17"
                    placeholder="0"
                    value={nf.format(inputValue)}
                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                />
            </div>

            <div style={{ height: '5.7rem', paddingLeft: '3.4rem', paddingRight: '3.7rem', fontSize: '2.625rem', borderBottom: '0.1875rem solid #1e1e1e', background: '#323232' }} className="content-cart18">
                <p className="content-cart19">적중예상금액</p>
                <p className="content-cart20">0</p>
            </div>

            <div style={{ marginTop: '2rem' }} className="betamount-btn">

                <div className="betamount-btn1">
                    <div className="betamount-btn2">
                        <div style={{ marginRight: '0.6rem' }}>
                            <BetAmountButton amount={5000} inputValue={inputValue} setInputValue={setInputValue} />
                        </div>
                        <div style={{ marginRight: '0.6rem' }}>
                            <BetAmountButton amount={10000} inputValue={inputValue} setInputValue={setInputValue} />
                        </div>
                        <BetAmountButton amount={50000} inputValue={inputValue} setInputValue={setInputValue} />
                    </div>
                    <div style={{ marginTop: '0.6rem', marginBottom: '0.6rem' }} className="betamount-btn3">
                        <div style={{ marginRight: '0.6rem' }}>
                            <BetAmountButton amount={100000} inputValue={inputValue} setInputValue={setInputValue} />
                        </div>
                        <div style={{ marginRight: '0.6rem' }}>
                            <BetAmountButton amount={500000} inputValue={inputValue} setInputValue={setInputValue} />
                        </div>
                        <BetAmountButton amount={1000000} inputValue={inputValue} setInputValue={setInputValue} />
                    </div>
                </div>

                <div style={{ marginBottom: '0.6rem' }} className="betfixedamount-btn">
                    <div style={{ marginRight: '0.6rem' }} className="betfixedamount-btn1">
                        <BetFixedAmountButton amount={inputValue / 2} text="하프" />
                    </div>
                    <div style={{ marginRight: '0.6rem' }} className="betfixedamount-btn1">
                        <BetFixedAmountButton amount={3522170} text="최대" />
                    </div>
                    <div className="betfixedamount-btn1">
                        <BetFixedAmountButton amount={0} text="정정" />
                    </div>
                </div>
                <div
                    style={{
                        height: '9rem', padding: '0.1875rem', borderRadius: '0.5rem',
                        background: 'linear-gradient(to top, #3d4a8d, #88d9e8)',
                    }}
                    className="hover"
                >
                    <button
                        style={{
                            height: '100%', padding: '1px', fontSize: '3.1875rem',
                            background: 'linear-gradient(to top, #396084, #528ccd)'
                        }}
                        className="buttonstayle"
                        onClick={() => {
                            setAddedCard([])
                            setShowConfirm(true)
                        }}
                    >
                        <div className="div-style flex items-center justify-center">
                            <img style={{ width: '3.1875rem', height: '3.1875rem', marginTop: '0.2rem' }} src={BetIcon} alt="" />
                            <span style={{ marginLeft: '0.8125rem', color: '#d6f3ff' }} className="span-style shadow-to-text">베팅하기</span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BetCombinationRightPanelCart

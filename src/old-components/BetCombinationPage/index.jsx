import BetCombinationPanel from '../BetCombinationPanel';
import React, { useState, useEffect } from 'react';
import BetCart from '../BetCart';
import Header from '../Header';
import Sports1 from '../Sports1';
import './_betCombinationPage.scss';

const BetCombinationPage = ({ isAuthenticated, setAuthenticated }) => {

    const filterArray = [
        { text: "러시아", id: 0 },
        { text: "중국", id: 1 },
        { text: "터키", id: 2 },
        { text: "브라질", id: 3 },
        { text: "칠레", id: 4 },
        { text: "요르단", id: 5 },
        { text: "폴란드", id: 6 },
        { text: "아르헨티나", id: 7 },
        { text: "헝가리", id: 8 },
        { text: "이스라엘", id: 9 },
        { text: "덴마크", id: 10 },
        { text: "독일", id: 11 },
        { text: "스웨덴", id: 12 },
        { text: "루마니아", id: 13 },
        { text: "잉글랜드", id: 14 },
        { text: "북아일랜드", id: 15 },
        { text: "스페인", id: 16 },
        { text: "프랑스", id: 17 },
        { text: "콜롬비아", id: 18 },
        { text: "에콰도르", id: 19 },
        { text: "미국", id: 20 },
    ];


    const cardsArray = []
    const [isPanelFixed, setPanelFixed] = useState(true)
    const [addedCard, setAddedCard] = useState(cardsArray)
    const [checkedState, setCheckedState] = useState(
        new Array(filterArray.length).fill(false)
    );
    const [selectedOption, setSelectedOption] = useState([
        {
            type: "",
            name: "",
            selection: "",
            buttonType: "",
            subtitle: null
        }
    ])
    const [openedCart, setOpenedCart] = useState(false)

    useEffect(() => {
        window.onpopstate = () => {
            console.log('add code to handle the back button if needed')
        }
    })

    useEffect(() => {
        setSelectedOption({
            type: "",
            name: "",
            selection: "",
            buttonType: "",
            subtitle: null
        })
    }, [])
    return (
        <div style={{ maxWidth: '1242px', overflowX: 'hidden' }} className="container">
            <div className="header-style">
                <Header isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="sport-container" style={{ width: '', display: '', overflow: 'hidden', position: 'relative', top: '', marginTop: '1.8rem' }}>
                <Sports1 withoutMargin />
            </div>

            <div className="content">
                <div className="content-content">

                    <div className='betcombpanel-container'>
                        <div className="">
                            <BetCombinationPanel
                                addedCard={addedCard}
                                setAddedCard={setAddedCard}
                                filterArray={filterArray}
                                checkedState={checkedState}
                                setCheckedState={setCheckedState}
                            />
                        </div>
                    </div>

                    <BetCart
                        setOpenedCart={setOpenedCart}
                        openedCart={openedCart}
                        selectedOption={selectedOption}
                        addedCard={addedCard}
                        setAddedCard={setAddedCard}
                        isPanelFixed={isPanelFixed}
                        setPanelFixed={setPanelFixed}
                    />

                </div>
            </div>
        </div>
    )
}

export default BetCombinationPage

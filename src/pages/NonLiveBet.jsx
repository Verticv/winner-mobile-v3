import React, { useState, useEffect } from 'react'
import '../components/NonLiveBet/_style.scss';
import MainTabs from "../components/NonLiveBet/MainTabs/index";
import MenusBar from "../components/NonLiveBet/MenusBar/index";
import HorizontalSlider from "../components/NonLiveBet/HorizontalSlider/index";
import StatisticsCard from "../components/NonLiveBet/StatisticsCard/index";
import NoteCard from "../components/NonLiveBet/NoteCard";
import SortCard from "../components/NonLiveBet/SortCard/index";
import ResultList from "../components/NonLiveBet/ResultList/index";

import CategorySections from "../components/NonLiveBet/CategorySections/index";
import FavoritesSection from "../components/NonLiveBet/FavoritesSection/index";
import Section3 from "../components/NonLiveBet/Section3/index";
import Section4 from "../components/NonLiveBet/Section4/index";
import SearchSection from "../components/NonLiveBet/SearchSection/index";
import RegulationsInformation from '../components/NonLiveBet/RegulationsInformation'
import GameMarkets from "../components/NonLiveBet/GameMarkets";

import CartButton from "../components/NonLiveBet/BetCart/CartButton";
import BetCart from "../components/NonLiveBet/BetCart/index";

import FixedMenu from '../components/FixedMenu';
import { useSelector } from 'react-redux'
function NonLiveBet() {
  
  const [activeButton, setActiveButton] = useState(null)
  const [gameMarket, showGameMarket] = useState(false)
  const [isOpenInfo, openInfoCard] = useState(false)
  const [isOpen, openCartBet] = useState(false)
  const [isOpenedBefore, setOpenInfoCard] = useState(false)
  const cartFlag = useSelector((state) => state.counter.cartFlag)
  const handleGameMarket = () => {
    if (isOpenedBefore) {
      showGameMarket(true)
    } else {
      openInfoCard(true)
      setOpenInfoCard(true)
    }
  }
  useEffect(() => {    
    const addFixedClass = () => {
      const Header = document.querySelector('.header');
      const PageHeader = document.querySelector('.page-header');
      const ScoreBanner = document.querySelector('.score-banner');

      let list = PageHeader?.classList
      list?.add("fixed-header");
      let header_list = Header?.classList
      header_list?.add("fixed-header");
      if (ScoreBanner) ScoreBanner.style.display = 'block'
    }


    const removeFixedClass = () => {
      const Header = document.querySelector('.header');
      const PageHeader = document.querySelector('.page-header');
      const ScoreBanner = document.querySelector('.score-banner');

      let list = PageHeader?.classList
      list?.remove("fixed-header");
      let header_list = Header?.classList
      header_list?.remove("fixed-header");
      if (ScoreBanner) ScoreBanner.style.display = 'none'
    }



    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200 && gameMarket) {
        addFixedClass()
      } else {
        removeFixedClass()
      }
    });
  })
  useEffect(() => {
    if (cartFlag) {
      openCartBet(true)
    }
  }, [cartFlag])
  
  return (
    <div className="container relative">
      {!gameMarket && !isOpenInfo &&(
        <>
        <MainTabs />
        {!activeButton &&
          (<>
            <MenusBar setActiveButton={setActiveButton} />
            <HorizontalSlider />
            <StatisticsCard />
            <NoteCard openInfoCard={openInfoCard} />
            <SortCard />
            <ResultList showGameMarket={handleGameMarket} />
          </>)
        }
        {activeButton === 'menu' && (<CategorySections close={() => setActiveButton(null)} />)}
        {activeButton === 'favorite' && (<FavoritesSection close={() => setActiveButton(null)} />)}
        {activeButton === 'win' && (<Section3 close={() => setActiveButton(null)} />)}
        {activeButton === 'win2' && (<Section4 close={() => setActiveButton(null)} />)}
        {activeButton === 'search' && (<SearchSection close={() => setActiveButton(null)} />)}


        </>
      )}
      {gameMarket && !isOpenInfo && (<GameMarkets close={() => showGameMarket(false)} />)}
      <CartButton openCartBet={openCartBet} />

     
      {isOpen && (<BetCart close={() => (openCartBet(false))} />)}
      {isOpenInfo && (<RegulationsInformation close={() => {
        openInfoCard(false)
        showGameMarket(true)
      }
      } />)}
      <FixedMenu/>
    </div>
  )
}

export default NonLiveBet
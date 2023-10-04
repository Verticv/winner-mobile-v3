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
function NonLiveBet() {
  const [activeButton, setActiveButton] = useState(null)
  const [gameMarket, showGameMarket] = useState(false)
  
  useEffect(() => {
    const Header = document.querySelector('.header');
    const PageHeader = document.querySelector('.page-header');
    const ScoreBanner = document.querySelector('.score-banner');

    
    const addFixedClass = () => {
      let list = PageHeader.classList
      list.add("fixed-header");
      let header_list = Header.classList
      header_list.add("fixed-header");
      ScoreBanner.style.display = 'block'
    }


    const removeFixedClass = () => {
      let list = PageHeader.classList
      list.remove("fixed-header");
      let header_list = Header.classList
      header_list.remove("fixed-header");
      ScoreBanner.style.display = 'none'
    }



    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200 && gameMarket) {
        addFixedClass()
      } else {
        removeFixedClass()
      }
    });
  })

  return (
    <div className="container relative">
      {!gameMarket && (
        <>
        <MainTabs />
        {!activeButton &&
          (<>
            <MenusBar setActiveButton={setActiveButton} />
            <HorizontalSlider />
            <StatisticsCard />
            <NoteCard />
            <SortCard />
            <ResultList showGameMarket={showGameMarket} />
          </>)
        }
        {activeButton === 'menu' && (<CategorySections close={() => setActiveButton(null)} />)}
        {activeButton === 'favorite' && (<FavoritesSection close={() => setActiveButton(null)} />)}
        {activeButton === 'win' && (<Section3 close={() => setActiveButton(null)} />)}
        {activeButton === 'win2' && (<Section4 close={() => setActiveButton(null)} />)}
        {activeButton === 'search' && (<SearchSection close={() => setActiveButton(null)} />)}

        <RegulationsInformation />
        </>
      )}
      {gameMarket && (<GameMarkets close={() => showGameMarket(false)} />)}
    </div>
  )
}

export default NonLiveBet
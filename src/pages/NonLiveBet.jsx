import React, { useState } from 'react'
import MainTabs from "../components/NonLiveBet/MainTabs/index";
import Categories from "../components/NonLiveBet/Categories/index";
import HorizontalSlider from "../components/NonLiveBet/HorizontalSlider/index";
import StatisticsCard from "../components/NonLiveBet/StatisticsCard/index";
import NoteCard from "../components/NonLiveBet/NoteCard";
import SortCard from "../components/NonLiveBet/SortCard/index";
import ResultList from "../components/NonLiveBet/ResultList/index";
import CategorySections from "../components/NonLiveBet/CategorySections/index";
import FavoritesSection from "../components/NonLiveBet/FavoritesSection/index";
import SearchSection from "../components/NonLiveBet/SearchSection/index";
import Section3 from "../components/NonLiveBet/Section3/index";
import Section4 from "../components/NonLiveBet/Section4/index";
function NonLiveBet() {
  const [activeButton, setActiveButton] = useState(null)
 
  return (
    <div className="container relative">
      <MainTabs />
      {!activeButton &&
        (<>
        <Categories setActiveButton={setActiveButton}/>
        <HorizontalSlider />
        <StatisticsCard />
        <NoteCard />
        <SortCard />
        <ResultList />
      </>)}
      {activeButton === 'menu' && (<CategorySections close={() => setActiveButton(null)} />)}
      {activeButton === 'favorite' && (<FavoritesSection close={() => setActiveButton(null)} />)}
      {activeButton === 'win' && (<Section3 close={() => setActiveButton(null)} />)}
      {activeButton === 'win2' && (<Section4 close={() => setActiveButton(null)} />)}
      {activeButton === 'search' && (<SearchSection close={() => setActiveButton(null)} /> )}
    </div>

  )
}
export default NonLiveBet
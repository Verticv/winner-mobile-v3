import React, { useState, useEffect } from "react";
import NoticeBanner from "../components/MainPage/NoticeBanner";
import Slider from "../components/MainPage/Slider";
import Jackpot from "../components/MainPage/Jackpot";
import SlotGame from "../components/MainPage/SlotGame";
import SportGame from "../components/MainPage/SportGames";
import LiveCasino from "../components/MainPage/LiveCasino";
import HotelCasino from "../components/MainPage/HotelCasino";
import OtherGames from "../components/MainPage/OtherGames";
import BoardsSection from "../components/MainPage/BoardsSection";

import SportsSection from "../components/MainPage/SportsSection";
import LiveSportsSection from "../components/MainPage/LiveSportsSection";
import FishingGameSection from "../components/MainPage/FishingGameSection";
import EsportsSection from "../components/MainPage/EsportsSection";
import MiniGameSection from "../components/MainPage/MiniGameSection";
import VirtualGameSection from "../components/MainPage/VirtualGameSection";
import TibetSection from "../components/MainPage/TibetSection";
import SlotGameSection from "../components/MainPage/SlotGameSection";
import HoldemGameSection from "../components/MainPage/HoldemGameSection";

import FixedMenu from '../components/FixedMenu';
import '../components/MainPage/Style.css'

function MainPage({ setFooterDefaultState }) {
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
    setFooterDefaultState()   
  }, [selectedTab])// eslint-disable-line react-hooks/exhaustive-deps

 


  return (
    <>
      <NoticeBanner />
      <Slider />
      <Jackpot />
      
      {selectedTab === 0 && (
        <div>
          <SlotGame />
          <SportGame />
          <LiveCasino />
          <HotelCasino />
          <OtherGames /> 
          <BoardsSection />
        </div>
      )}
      {selectedTab === 1 && (
        <div id="live-casino" className="filter-content">
          <LiveCasino />
        </div>
      )}
      {selectedTab === 2 && (
        <div id="sports">
          <SportsSection />
        </div>
      )}
      {selectedTab === 3 && (
        <div id="live-sports">
          <LiveSportsSection />
        </div>
      )}
      {selectedTab === 4 && (
        <div id="slot-game"  className="filter-content">
          <SlotGameSection />
        </div>

      )}
      {selectedTab === 5 && (
        <div id="hotel-casino"  className="filter-content">
          <HotelCasino filter={true} />
        </div>
      )}
      {selectedTab === 6 && (
        <div id="e-sports">
          <EsportsSection />
        </div>
      )}
      {selectedTab === 7 && (
        <div id="mini-game">
          <MiniGameSection />
        </div >
      )}
      {selectedTab === 8 && (
        <div id="virtual-game">
          <VirtualGameSection />
        </div >
      )}
      {selectedTab === 9 && (
        <div id="fishing-game">
          <FishingGameSection />
        </div>
      )}
      {selectedTab === 10 && (
        <div id="tibet">
          <TibetSection />
        </div>
      )}
      {selectedTab === 11 && (
        <div id="holdem-game">
          <HoldemGameSection />
        </div>
      )}
      
      <FixedMenu
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      /> 
    </>
  )
}

export default MainPage
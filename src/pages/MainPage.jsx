import React, { useState } from "react";
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
import FixedMenu from '../components/FixedMenu';

function MainPage() {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <>
      <NoticeBanner />
      <Slider />
      <Jackpot />
      {selectedTab === 0 && (
        <>
          <SlotGame />
          <SportGame />
          <LiveCasino />
          <HotelCasino />
          <OtherGames />
          <BoardsSection/>
        </>
      )}
      {selectedTab === 1 && (
        <LiveCasino />
      )}
      {selectedTab === 2 && (
        <SportsSection/>
      )}
      {selectedTab === 3 && (
        <LiveSportsSection />
      )}
      {selectedTab === 4 && (
        <FishingGameSection/>
      
      )}
      {selectedTab === 5 && (
        <HotelCasino />
      )}
      {selectedTab === 6 && (
        <EsportsSection/>
      )}
      {selectedTab === 7 && (
        <MiniGameSection/>
      )}
      {selectedTab === 8 && (
        <VirtualGameSection/>
      )}
      {selectedTab === 9 && (
        <FishingGameSection />
      )}
      {selectedTab === 10 && (
        <TibetSection/>
      )}
    
      <FixedMenu
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </>
  )
}

export default MainPage
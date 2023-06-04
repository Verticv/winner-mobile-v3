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
import SlotGameSection from "../components/MainPage/SlotGameSection";
import FixedMenu from '../components/FixedMenu';

function MainPage() {
  const [selectedTab, setSelectedTab] = useState(0)
  // const [selectedSection, setSelectedSection] = useState(null)

  // useEffect(() => {
  //   if (selectedSection) {
  //     const section = document.getElementById(selectedSection);
  //     const top = section?.offsetTop
  //     window.scrollTo({ top: top, behavior: 'smooth' });
  //   } else {
  //     window.scrollTo(0,0);
  //   }
   
  // }, [selectedTab])
  
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
          <HotelCasino />
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
      <FixedMenu
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </>
  )
}

export default MainPage
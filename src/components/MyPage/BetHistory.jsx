import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LiveCasinoBetHistory from './LiveCasinoBetHistory';
import SlotBetHistory from './SlotBetHistory';
import SportsBetHistory from './SportsBetHistory';
import HotelCasinoBetHistory from './HotelCasinoBetHistory';
import ESportsBetHistory from './ESportsBetHistory';
import MinigameBetHistory from './MinigameBetHistory';
import ARGameBetHistory from './ARGameBetHistory';
import Pagination from './Pagination';

function BetHistory({ subActiveButton, setSubActiveButton }) {
  const [page, setPage] = useState(0);
  const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0);
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [selectedSubTab, setSelectedSubTab] = useState(0);
  const [historySelectedSubTab4, setHistorySelectedSubTab4] = useState(0);
  const [historySelectedSubTab2, setHistorySelectedSubTab2] = useState(0);
  const [historySelectedSubTab3, setHistorySelectedSubTab3] = useState(0);
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <LiveCasinoBetHistory
                key={1}
                showSub={false}
                isState={historySelectedSubTab}
                setState={setHistorySelectedSubTab}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
                path="/mypage/bet-history/all"
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        />
        <Route
          path="/live-casino"
          element={
            <>
              <LiveCasinoBetHistory
                key={2}
                isState={historySelectedSubTab}
                setState={setHistorySelectedSubTab}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
                path="/mypage/bet-history/all/live-casino"
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        ></Route>

        <Route
          path="/sports"
          element={
            <>
              <SportsBetHistory
                key={55}
                checkedState={checkedState}
                setCheckedState={setCheckedState}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        ></Route>

        <Route
          path="/slot-game"
          element={
            <>
              <SlotBetHistory
                key={1}
                isState={selectedSubTab}
                setState={setSelectedSubTab}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
                path="/mypage/bet-history/all/slot-game"
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        ></Route>

        <Route
          path="/hotel-casino/*"
          element={
            <>
              <HotelCasinoBetHistory
                isState={historySelectedSubTab4}
                setState={setHistorySelectedSubTab4}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        ></Route>

        <Route
          path="/e-sports"
          element={
            <>
              <ESportsBetHistory
                isState={historySelectedSubTab}
                setState={setHistorySelectedSubTab}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
            </>
          }
        ></Route>

        <Route
          path="/minigame/*"
          element={
            <>
              <MinigameBetHistory
                isState={historySelectedSubTab2}
                setState={setHistorySelectedSubTab2}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        ></Route>

        <Route
          path="/ar-game"
          element={
            <>
              <ARGameBetHistory
                isState={historySelectedSubTab3}
                setState={setHistorySelectedSubTab3}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        ></Route>

        <Route
          path="/fishing-game"
          element={
            <>
              <SlotBetHistory
                key={2}
                isState={selectedSubTab}
                setState={setSelectedSubTab}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
                path="/mypage/bet-history/all/fishing-game"
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        ></Route>

        <Route
          path="/bet"
          element={
            <>
              <LiveCasinoBetHistory
                key={11}
                showSub={false}
                isState={historySelectedSubTab}
                setState={setHistorySelectedSubTab}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
                path="/mypage/bet-history/all/bet"
              />
              <Pagination page={page} setPage={setPage} />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default BetHistory;

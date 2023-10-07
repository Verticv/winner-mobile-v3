import React, { useState } from 'react';
import MenuStarIconOn from '../../../assets/images/nonLiveBet/gameMarkets/menu-star-on.png'
import MenuStarIcon from '../../../assets/images/nonLiveBet/gameMarkets/menu-star-off.png'
import ArrowUp from '../../../assets/images/nonLiveBet/arrow-up.png'
import Collapsible from "../Collapsible/index";

import ResultCell from './ResultCell'
const ResultBox = () => {
  const results = [
    {
      header: '승무패 [정규시간]',
      scores: [
        {
          id: 27,
          team1: '1',
          team1_score: '1.98',
          team2: 'X',
          team2_score: '4.20',
          team3: '2',
          team3_score: '3.31'
        },
      ]
    },
    {
      header: '승무패 [정규시간]',
      scores: [
        {
          id: 28,
          team1: '1X',
          team1_score: '1.32',
          team2: '12',
          team2_score: '1.23',
          team3: 'X2',
          team3_score: '1.77'
        },
      ]
    },
    {
      header: '승패(무X) [정규시간]',
      scores: [
        {
          id: 28,
          team1: '아스널',
          team1_score: '1.52',
          team2: '리버플',
          team2_score: '2.53',
        },
      ]
    },
    {
      header: '오버/언더 [정규시간]',
      scores: [
        {
          id: 29,
          team1: '오버 (0.5)',
          team1_score: '1.05',
          team2: '언더 (0.5)',
          team2_score: '12.80',
        },
        {
          id: 30,
          team1: '오버 (1)',
          team1_score: '1.06',
          team2: '언더 (1)',
          team2_score: '11.50',
        },
        {
          id: 31,
          team1: '오버 (1.5)',
          team1_score: '1.27',
          team2: '언더 (1.5)',
          team2_score: '4.12',
        }
      ]
    },
    {
      header: '아시안 핸디캡 [정규시간]',
      withHeader: true,
      scores: [
        {
          id: 32,
          team1: '(-1.75)',
          team1_score: '32.75',
          team2: '(+1.75)',
          team2_score: '31.45',
          withArrows: true
        },
        {
          id: 34,
          team1: '(-1.25)',
          team1_score: '2.09',
          team2: '(+1.25)',
          team2_score: '1.75',
          withArrows: true
        },
        {
          id: 35,
          team1: '(-0.75)',
          team1_score: '1.67',
          team2: '(+0.75)',
          team2_score: '2.20',
        },
        {
          id: 36,
          team1: '(-0.25)',
          team1_score: null,
          team2: '(+0.25)',
          team2_score: null,
          lock: true
        }
      ]
    },
    {
      header: '승무패 [정규시간]',
      withHeader: true,
      scores: [
        {
          id: 37,
          team1: '(-2)',
          team1_score: '4.30',
          team2: '(+2)',
          team2_score: '4.50',
          team3: '(+2)',
          team3_score: '1.56'
        },
        {
          id: 38,
          team1: '(-1)',
          team1_score: '2.29',
          team2: '(+1)',
          team2_score: '4.00',
          team3: '(+1)',
          team3_score: '2.41'
        },
      ]
    },
  ]
  
  const CardBox = ({data}) => {
    const [isActive, setActive] = useState(false);
    return (
      <div className='game-markets__box'>
        <Collapsible
          open
          headerChild={
            <div className='game-markets__box-header d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center w-full'
              >
                
                <p>{data.header}</p>
                {!isActive && (<img src={MenuStarIcon} alt=''
                  className='star-btn star-off'
                  style={{ width: '3.125rem', marginRight: '1.75rem' }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActive(true)
                  }} />)}
                {isActive && (<img src={MenuStarIconOn} alt=''
                  className='star-btn star-on'
                  style={{ width: '3.375rem', marginRight: '1.625rem' }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActive(false)
                  }} />)}
              </div>
              <div className='d-flex justify-content-center align-items-center game-markets__arrow'>
                <img src={ArrowUp} alt='' className='arrow' />
              </div>
            </div>
          }>
          <div className='game-markets__box-body '>
            {data.withHeader && !data.scores[0].team3 && <div className='game-markets__cell game-markets__header-cell'>
              <div >아스널</div>
              <div>리버플</div>
            </div>}
            {data.withHeader && data.scores[0].team3 &&<div className='game-markets__cell game-markets__header-cell'>
              <div >아스널</div>
              <div>무 : 리버플</div>
              <div >리버플</div>
            </div>}
            {data.scores.map((score, index) => (
              <div className='game-markets__cell w-full'>
                <ResultCell data={score} type={'L'} />
                <ResultCell data={score} type={'M'} />
                {score.team3 && <ResultCell data={score} type={'R'} />}
              </div>
             )
            )}
          </div>
        </Collapsible>
      </div>
    )
  }
  return (
    <div>
      {results.map((result, index) => (
        <CardBox data={result} key={index}/>
        )
      )}
    
    </div>
  )
}

export default ResultBox;
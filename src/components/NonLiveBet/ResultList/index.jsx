
import './_style.scss'
import col1 from '../../../assets/images/nonLiveBet/col-1.png'
import ArrowUp from '../../../assets/images/nonLiveBet/arrow-up.png'
import flag from '../../../assets/images/nonLiveBet/flag.png'
import flag2 from '../../../assets/images/nonLiveBet/flag2.png'
import flag3 from '../../../assets/images/nonLiveBet/flag3.png'
import flag4 from '../../../assets/images/nonLiveBet/flag4.png'
import Collapsible from "../Collapsible/index";
import TableCellLeft from './TableCellLeft'
import TableCellMid from './TableCellMid'
import TableCellRight from './TableCellRight'
const ResultList = ({ showGameMarket }) => {
  
  const results = [
    {
      header: '축구 / 잉글랜드 - 프리미어리그',
      time: '03-22 13:00',
      flag: flag,
      scores: [
        {
          id: 1,
          team1: '아스널',
          team1_score: '1.25',
          team2: '리버풀',
          team2_score: '1.16',
          score: '3.15',
          plus: '123'
        },
        {
          id: 2,
          team1: '첼시',
          team1_score: '2.25',
          team2: '토트넘',
          team2_score: '2.76',
          score: '3.88',
          plus: '45'
        }
      ]
    },

    {
      header: '축구 / 스페인 - 라리가',
      time: '03-22 15:00',
      flag: flag2,
      scores: [
        {
          id: 3,
          team1: 'FC바르셀로나',
          team1_score: '2.21',
          team2: '아틀레티코',
          team2_score: '3.86',
          score: '2.99',
          plus: '24'
        },
        {
          id: 4,
          team1: '레알마드리드',
          team1_score: '1.74',
          team2: '레알베티스',
          team2_score: '3.76',
          score: '3.87',
          plus: '55'
        },
        {
          id: 5,
          team1: '비야레알',
          team1_score: '2.34',
          team2: '마요르카',
          team2_score: '2.90',
          score: '3.88',
          plus: '132'
        }
      ]
    },

    {
      header: '축구 / 독일 - 분데스리가',
      time: '03-22 17:00',
      flag: flag3,
      scores: [
        {
          id: 6,
          team1: '아인트라흐트프...',
          team1_score: '1.11',
          team2: 'SC프라이부르크',
          team2_score: '1.77',
          score: '3.10',
          plus: '99',
          up: true
        },
        {
          id: 7,
          team1: '바이어레버쿠젠',
          team1_score: '33.65',
          team2: '바이에른뮌헨',
          team2_score: '33.65',
          score: '33.88',
          plus: '44',
          down: true
        },
        {
          id: 8,
          team1: 'RB라이프치히',
          team1_score: '2.78',
          team2: 'FC샬케04',
          team2_score: '2.99',
          score: '3.90',
          plus: '155'
        },
        {
          id: 9,
          team1: '보루시아도르트...',
          team1_score: '',
          team2: 'FSV마인츠05',
          team2_score: '',
          score: '',
          plus: '99',
          lock: true
        }
      ]
    },


    {
      header: '축구 / 스페인 - 라리가',
      time: '03-22 19:00',
      flag: flag4,
      scores: [
        {
          id: 10,
          team1: '세비야',
          team1_score: '1.67',
          team2: '지로나',
          team2_score: '1.64',
          score: '3.12',
          plus: '45'
        },
        {
          id: 11,
          team1: '레알소스에다드',
          team1_score: '2.10',
          team2: '카디스',
          team2_score: '3.87',
          score: '3.79',
          plus: '99'
        }
      ]
    },

    {
      header: '축구 / 잉글랜드 - 프리미어리그',
      time: '03-22 19:00',
      flag: flag,
      scores: [
        {
          id: 12,
          team1: '아스널',
          team1_score: '1.25',
          team2: '리버풀',
          team2_score: '3.15',
          score: '1.16',
          plus: '123'
        },
        {
          id: 13,
          team1: '첼시',
          team1_score: '2.25',
          team2: '토트넘',
          team2_score: '2.76',
          score: '3.88',
          plus: '45'
        }
      ]
    },
    {
      header: '축구 / 스페인 - 라리가',
      time: '03-22 19:00',
      flag: flag2,
      scores: [
        {
          id: 14,
          team1: 'FC바르셀로나',
          team1_score: '2.21',
          team2: '아틀레티코',
          team2_score: '2.99',
          score: '3.86',
          plus: '24'
        },
        {
          id: 15,
          team1: '레알마드리드',
          team1_score: '1.77',
          team2: '레알베티스',
          team2_score: '3.87',
          score: '3.76',
          plus: '55'
        },
        {
          id: 16,
          team1: '비야레알',
          team1_score: '2.34',
          team2: '마요르카',
          team2_score: '3.88',
          score: '2.90',
          plus: '132'
        }
      ]
    },
    {
      header: '축구 / 독일 - 분데스리가',
      time: '03-22 19:00',
      flag: flag2,
      scores: [
        {
          id: 17,
          team1: '아인트라흐트프랑크푸르트',
          team1_score: '1.11',
          team2: 'SC프라이부르크',
          team2_score: '3.10',
          score: '1.77',
          plus: '99'
        },
        {
          id: 18,
          team1: '바이어레버쿠젠',
          team1_score: '2.65',
          team2: '바이에른뮌헨',
          team2_score: '3.88',
          score: '2.12',
          plus: '44'
        },
        {
          id: 19,
          team1: 'RB라이프치히',
          team1_score: '2.78',
          team2: 'FC샬케04',
          team2_score: '3.90',
          score: '2.99',
          plus: '155'
        },
        {
          id: 20,
          team1: '보루시아도르트문트',
          team1_score: '2.25',
          team2: 'FSV마인츠05',
          team2_score: '4.15',
          score: '2.22',
          plus: '99'
        }
      ]
    },
    {
      header: '축구 / 스페인 - 라리가',
      time: '03-22 19:00',
      flag: flag4,
      scores: [
        {
          id: 21,
          team1: '세비야',
          team1_score: '1.67',
          team2: '지로나',
          team2_score: '1.64',
          score: '3.12',
          plus: '45'
        },
        {
          id: 22,
          team1: '레알소스에다드',
          team1_score: '2.10',
          team2: '카디스',
          team2_score: '3.87',
          score: '3.79',
          plus: '99'
        }
      ]
    },

    {
      header: '축구 / 잉글랜드 - 프리미어리그',
      time: '03-22 19:00',
      flag: flag,
      scores: [
        {
          id: 23,
          team1: '아스널',
          team1_score: '1.25',
          team2: '리버풀',
          team2_score: '3.15',
          score: '1.16',
          plus: '123'
        },
        {
          id: 24,
          team1: '첼시',
          team1_score: '2.25',
          team2: '토트넘',
          team2_score: '2.76',
          score: '3.88',
          plus: '45'
        }
      ]
    },
    {
      header: '축구 / 스페인 - 라리가',
      time: '03-22 19:00',
      flag: flag4,
      scores: [
        {
          id: 25,
          team1: '세비야',
          team1_score: '1.67',
          team2: '지로나',
          team2_score: '1.64',
          score: '3.12',
          plus: '45'
        },
        {
          id: 26,
          team1: '레알소스에다드',
          team1_score: '2.10',
          team2: '카디스',
          team2_score: '3.87',
          score: '3.79',
          plus: '99'
        }
      ]
    },
  ]
  
  
  return (
    <div className='collapse-section'>
      {results.map((result, index) => (
        <div className='hotel-section'
          key={index}>
          <div className='collapse-card'>
            
            <Collapsible
              open
              headerChild={
                <div className='collapse-header'>
                  <div className='header1'>
                    <img src={col1} alt="right" />
                    <p>{result.header}</p>
                  </div>
                  <div className='header2'>
                    <p>{result.time}</p>
                    <img src={result.flag} alt="right" className='flag' />
                  </div>
                  <div className='header3'>
                    <img src={ArrowUp} alt="right" />
                  </div>
                </div>
              }>
             
              {result.scores.map((score, index) => (
                <div className='collapse-body' key={index}>
                  <TableCellLeft score={score} />
                  <TableCellMid score={score} />
                  <TableCellRight score={score} />
                  <div className='body4' onClick={() => showGameMarket(true)}>
                    <span>+{score.plus}</span>
                  </div>
                </div>
              )
              )}
            </Collapsible>
          </div>
        </div>
      ))}

    </div>
  )
}
export default ResultList;
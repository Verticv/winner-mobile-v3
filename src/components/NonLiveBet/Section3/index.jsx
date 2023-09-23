import CloseIcon from '../../../assets/images/nonLiveBet/close.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon2.png'
import tag from '../../../assets/images/nonLiveBet/tag.png'
import team1 from '../../../assets/images/nonLiveBet/team1.png'
import team2 from '../../../assets/images/nonLiveBet/team2.png'
import rightArrow from '../../../assets/images/nonLiveBet/rightArrow.png'


const Section3 = ({ close }) => {
  const list = [
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    },
    {
      time: ' 18:30',
      icon: Icon2,
      team1: {
        icon: team1,
        name: '맨체스터유나이티드'
      },
      team2: {
        icon: team2,
        name: '첼시'
      }
    }
  ]
  return (
    <div className='favorites-section'>
      <div className='category-header'>
        <p>즐겨찾기</p>
        <img src={CloseIcon} alt="close" className='close' onClick={close} />
      </div>
      <div className='popular-game'>
        {list.map((item, index) => (
          <div className='popular-card' key={index}>
            <img src={tag} alt="tag" className='card-tag' />
            <div className='tag-index'>{index + 1}</div>
            <img src={rightArrow} alt="tag" className='arrow' />
            <div className='popular-card-time'>
              {item.time}
            </div>
            <div className='popular-card-icon'>
              <img src={item.icon} alt="Icon2" />
            </div>
            <div className='popular-card-teams'>
              <div className='flex'>
                <img src={item.team1.icon} alt="Icon2" />
                <p>{item.team1.name}</p>
              </div>
              <div className='flex'>
                <img src={item.team2.icon} alt="Icon2" />
                <p>{item.team2.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}
export default Section3;
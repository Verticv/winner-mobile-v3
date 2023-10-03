import './_style.scss';
import CloseIcon from '../../../assets/images/nonLiveBet/close.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon2.png'
import ArrowUp from '../../../assets/images/nonLiveBet/up-arrow.png'
import flag from '../../../assets/images/nonLiveBet/flag.png'
import Collapsible from "../Collapsible/index";
const CategorySections = ({ close }) => {
  const list = [
    {
      title: '축구',
      icon: Icon2,
      count: 1000,
      sportsList: [
        {
          flag: flag,
          title: '잉글랜드',
          count: 1000,
          subList: [
            {
              title: '프리미어리그',
              count: 5,
            },
            {
              title: '챔피언쉽',
              count: 0,
            }
          ]
        },
        {
          flag: flag,
          title: '이탈리아',
          count: 100,
          subList: []
        },
        {
          flag: flag,
          title: '스페인',
          count: 100,
          subList: []
        }
      ]
    },
    {
      title: '농구',
      icon: Icon2,
      count: 1000,
      sportsList: []
    },
    {
      title: '야구',
      icon: Icon2,
      count: 1000,
      sportsList: []
    },
    {
      title: '배구',
      icon: Icon2,
      count: 1000,
      sportsList: []
    },
    {
      title: '테니스',
      icon: Icon2,
      count: 1000,
      sportsList: []
    },

    {
      title: '배드민턴',
      icon: Icon2,
      count: 1000,
      sportsList: []
    },
    {
      title: '하키',
      icon: Icon2,
      count: 1000,
      sportsList: []
    },
    {
      title: '미식축구',
      icon: Icon2,
      count: 1000,
      sportsList: []
    },
    {
      title: '격투기',
      icon: Icon2,
      count: 1000,
      sportsList: []
    }

  ]
  return (
    <div className='category-section'>
  
      <div className='category-header'>
        <p>모든경기</p>
        <img src={CloseIcon} alt="close" className='close'
          onClick={close} />
      </div>
        {list.map((item, index) => (
          <div className='card-container'>
            <Collapsible
              headerChild={
                <div className='category-card' key={index} >
                  <div className='flex items-center'>
                    <img src={item.icon} alt="Icon2" className='sport-icon' />
                    <p>{item.title}</p>
                  </div>
                  <div className='flex items-center'>
                    <span className="card-badge card-badge--blue">
                      <span>{item.count}</span>
                    </span>
                    <img src={ArrowUp} alt="ArrowUp" className='arrow' />
                  </div>
                </div>
              }>
              <br/>
              <div className='sports-list' key={index}>
                {item.sportsList.map((sport, sport_index) => (
                  <>
                    <Collapsible
                    headerChild={
                      <div className='category-card inner-section' key={sport_index}>
                        <div className='flex items-center'>
                          <img src={sport.flag} alt="Icon2" className='flag-icon' />
                          <p>{sport.title}</p>
                        </div>
                        <div className='flex items-center'>
                          <span className="card-badge card-badge--gray">
                            <span>{sport.count}</span>
                          </span>
                          <img src={ArrowUp} alt="ArrowUp" className='arrow' />
                        </div>
                    
                      </div>
                    }>
                      <div>
                    {sport.subList.map((sub, sub_index) => (
                      <div className='category-cell' key={sub_index}>
                        <div className='flex items-center'>
                          <p>{sub.title}</p>
                        </div>
                        <div className='flex'>
                          <span className="card-badge card-badge--gray">
                            <span>{sub.count}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                      </div>
                    </Collapsible>
                  </>
                ))}
              </div >
              
            </Collapsible>
          </div>
        ))}

   
      
    </div>
  )
}
export default CategorySections;
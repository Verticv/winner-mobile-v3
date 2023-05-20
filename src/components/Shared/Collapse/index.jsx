import React, { useState } from "react";
import './_collapse.scss';
import Plus from '../../../assets/images/footer/plus.png'
import Minus from '../../../assets/images/footer/minus.png'

const Collapse = ({title}) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleCollapse = () => {
    setExpanded(!isExpanded);
  };
  return (
    <button className={`collapse ${isExpanded?'expanded':''}`} onClick={toggleCollapse}>
      <div className="collapse__header">
        <div className="collapse__title">
          {title}
        </div>
        <div className="collapse__icon">
          {!isExpanded && (<img src={Plus} alt="right" />)}
          {isExpanded && (<img src={Minus} alt="right" />)}
        </div>
      </div>
      {isExpanded && (<div className="collapse__body">
        <div> 프레그메틱플레이</div>
        <div> 에볼루션</div>
        <div> 로얄지</div>
        <div> 아시아게이밍</div>
        <div> 드림게이밍</div>
        <div> 섹시게이밍</div>
        <div> 빅게이밍</div>
        <div> 오리엔탈게임</div>
        <div> 이주기</div>
        <div>마이크로게이밍</div>
      </div>)}
    </button>
  )
}

export default Collapse;
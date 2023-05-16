/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Route, useNavigate, useLocation, Routes } from 'react-router';
import HorizontalSubMenu1 from '../HorizontalSubMenu1'
import SportsGamePolicyTable1 from '../SportsGamePolicyTable1';
import SportsGamePolicyTable2 from '../SportsGamePolicyTable2';

const SoccerArray = [
    { id: 0, type: "승무패", typeColor: "#4c98ff", overtime: true, hasMargin: true, ruleText: "승리가 예상되는 팀 또는 무승부를", ruleText2:"선택하여 베팅하는 방식", rows: '2' },
    { id: 1, type: "승무패 \n (전반전)", typeColor: "#4c98ff", overtime: false, hasMargin: true, ruleText: "전반전만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 2, type: "승무패 \n (후반전)", typeColor: "#4c98ff", overtime: false, hasMargin: true, ruleText: "후반전만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 3, type: "승패 (무X)", typeColor: "#4c98ff", overtime: false, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2:"방식 (무승부 적중특례)", rows: '2' },
    { id: 4, type: "승패 (무X) \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀을 선택하여 베팅하는", ruleText3:"방식 (무승부 적중특례)", rows: '3' },
    { id: 5, type: "승패 (무X) \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀을 선택하여 베팅하는", ruleText3:"방식 (무승부 적중특례)", rows: '3' },
    { id: 6, type: "무실점 \n 완승", typeColor: "#4c98ff", overtime: true, ruleText: "무실점으로 승리가 예상되는 팀을 선택", ruleText2:"하여 베팅하는 방식", ruleText3:"(상대팀 무득점이어야 함)", rows: '3' },
    { id: 7, type: "전반 & \n 전후반", typeColor: "#4c98ff", overtime: true, ruleText: "전반전만의 결과와 최종(전후반포함)", ruleText2:"각각의 양팀이 득점한 경기결과로 승리가", ruleText3:"예상되는 팀 또는 무승부를 선택하여", ruleText4:"베팅하는 방식", rows: '4' },
    { id: 8, type: "더블찬스", typeColor: "#4c98ff", overtime: true, ruleText: "두개의 결과를 예측하여 베팅하는 방식", rows: '1' },
    { id: 9, type: "더블찬스 \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전만의 양팀이 득점한 경기결과로", ruleText2:"두개의 결과를 예측하여 베팅하는 방식", rows: '2' },
    { id: 10, type: "더블찬스 \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전만의 양팀이 득점한 경기결과로", ruleText2:"두개의 결과를 예측하여 베팅하는 방식", rows: '2' },

    { id: 11, type: "핸디캡", typeColor: "#d9a36d", overtime: true, ruleText: "상대적으로 전력이 우수한 팀에게 불리한", ruleText2:"조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3:"홈팀 (왼쪽) 기준으로 +,-의 핸디캡", ruleText4:" 기준점수가 표기됨.", rows: '5' },
    { id: 12, type: "핸디캡 \n (전반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 전반전만의 양팀이", ruleText2:"득점한 경기결과로 승리가 예상되는 팀을", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 13, type: "핸디캡 \n (후반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 후반전만의 양팀이", ruleText2:"득점한 경기결과로 승리가 예상되는 팀을", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 14, type: "핸디캡 승무패", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 승리가 예상되는 팀", ruleText2:"또는 무승부를 선택하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 15, type: "핸디캡 승무패 \n (전반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 전반전만의 양팀이", ruleText2:"득점한 경기결과로 승리가 예상되는 팀", ruleText3:"또는 무승부를 선택하여 베팅하는 방식", rows: '3' },
    { id: 16, type: "핸디캡 승무패 \n (후반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 후반전만의 양팀이", ruleText2:"득점한 경기결과로 승리가 예상되는 팀", ruleText3:"또는 무승부를 선택하여 베팅하는 방식", rows: '3' },

    { id: 17, type: "언더오버", typeColor: "#75942d", overtime: true, ruleText: "양팀의 최종 득점의 합이 기준점 보다", ruleText2:"높고 낮음을 예상하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 18, type: "언더오버 \n (전반전)", typeColor: "#75942d", overtime: false, ruleText: "전반전만의 양팀이 득점한 합이 기준점", ruleText2:"보다 높고 낮음을 예상하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 19, type: "언더오버 \n (후반전)", typeColor: "#75942d", overtime: false, ruleText: "후반전만의 양팀이 득점한 합이 기준점", ruleText2:"보다 높고 낮음을 예상하여 베팅하는 방식", ruleText3:"", rows: '2' },

    { id: 20, type: "홀짝", typeColor: "#e16eff", overtime: true, ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로", ruleText2:"예상하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 21, type: "홀짝 \n (전반전)", typeColor: "#e16eff", overtime: false, ruleText: "전반전만의 양팀이 득점의 합이 홀 또는,", ruleText2:"짝으로 예상하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 22, type: "홀짝 \n (후반전)", typeColor: "#e16eff", overtime: false, ruleText: "후반전만의 양팀이 득점의 합이 홀 또는,", ruleText2:"짝으로 예상하여 베팅하는 방식", ruleText3:"", rows: '2' },

    { id: 23, type: "양팀득점", typeColor: "#4c98ff", overtime: true, ruleText: "경기결과 양팀모두 득점이있음 또는", ruleText2:"없음을 예측하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 24, type: "양팀득점 \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전만의 경기결과 양팀모두 득점이", ruleText2:"있음 또는 없음을 예측하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 25, type: "양팀득점 \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전만의 경기결과 양팀모두 득점이", ruleText2:"있음 또는 없음을 예측하여 베팅하는 방식", ruleText3:"", rows: '2' },

    { id: 26, type: "점수합계~", typeColor: "#e9441d", overtime: true, ruleText: "경기결과 양팀에서 발생한 득점의 합", ruleText2:"(~이상)을 예측하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 27, type: "점수합계~ \n (전반전)", typeColor: "#e9441d", overtime: false, ruleText: "전반전만의 경기결과로 양팀에서 방행한", ruleText2:"득점의 합(~이상)을 예측하여 베팅하는", ruleText3:"방식", rows: '3' },
    { id: 28, type: "점수합계~ \n (후반전)", typeColor: "#e9441d", overtime: false, ruleText: "후반전만의 경기결과로 양팀에서 방행한", ruleText2:"득점의 합(~이상)을 예측하여 배팅하는", ruleText3:"방식", rows: '3' },
    { id: 29, type: "점수합계", typeColor: "#e9441d", overtime: true, ruleText: "경기결과 양팀에서 발생한 득점의 합을", ruleText2:"정확히 예측하여 베팅하는 방식", rows: '2' },
    { id: 30, type: "점수합계 \n (전반전)", typeColor: "#e9441d", overtime: false, ruleText: "전반전만의 경기결과로 양팀에서 발생한", ruleText2:"득점의 합을 정확히 예측하여 베팅하는", ruleText3:"방식", rows: '3' },
    { id: 31, type: "점수합계 \n (후반전)", typeColor: "#e9441d", overtime: false, ruleText: "후반전만의 경기결과로 양팀에서 발생한", ruleText2:"득점의 합을 정확히 예측하여 베팅하는", ruleText3:"방식", rows: '3' },

    { id: 32, type: "최고득점구간", typeColor: "#96c133", overtime: true, ruleText: "경기중 최고 많은 득점이 발생 할 구간", ruleText2:"(전,후반) 을 예측하여 베팅하는 방식", ruleText3:"(두개이상의 동일한 최고득점 구간이 발생할 경우 적특저리)", rows: 'ss' },

    { id: 33, type: "스코어", typeColor: "#e16eff", overtime: true, ruleText: "양팀의 경기 결과에 대한 최종 스코어를", ruleText2:"정확하게 예상하여 베팅하는 방식", rows: '2' },
    { id: 34, type: "스코어 \n (전반전)", typeColor: "#e16eff", overtime: false, ruleText: "전반전만의 양팀의 경기 결과에 대한", ruleText2:" 최종 스코어를 정확하게 예상하여", ruleText3:"베팅하는 방식", rows: '3' },
    { id: 35, type: "스코어 \n (후반전)", typeColor: "#e16eff", overtime: false, ruleText: "후반전만의 양팀의 경기 결과에 대한", ruleText2:" 최종 스코어를 정확하게 예상하여", ruleText3:"베팅하는 방식", rows: '3' },

]

const BasketballArray = [
    { id: 0, type: "언더오버 \n (전반전)", typeColor: "#4c98ff", overtime: null, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2: " 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승패 (무X) \n (1쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "1쿼터만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승패 (무X) \n (2쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "2쿼터만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승패 (무X) \n (3쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "3쿼터만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승패 (무X) \n (4쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "4쿼터만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승무패", typeColor: "#4c98ff", overtime: null, ruleText: "승리가 예상되는 팀 또는 무승부를", ruleText2: "선택하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승무패 \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전(1,2쿼터)만의 양팀이 득점한", ruleText2: "경기결과로 승리가 예상되는 팀 또는", ruleText3: "무승부를 선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전(3,4쿼터)만의 양팀이 득점한", ruleText2: "경기결과로 승리가 예상되는 팀 또는", ruleText3: "무승부를 선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (1쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "1쿼터만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (2쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "2쿼터만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (3쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "3쿼터만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (4쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "4쿼터만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "더블찬스", typeColor: "#4c98ff", overtime: true, ruleText: "두개의 결과를 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전(1,2쿼터)만의 양팀이 득점한", ruleText2: "경기결과로 두개의 결과를 예측하여", ruleText3: "베팅하는 방식", rows: '3' },
    { id: 0, type: "더블찬스 \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전(3,4쿼터)만의 양팀이 득점한", ruleText2: "경기결과로 두개의 결과를 예측하여", ruleText3: "베팅하는 방식", rows: '3' },
    { id: 0, type: "더블찬스 \n (1쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "1쿼터만의 양팀이 득점한 경기결과로", ruleText2: "두개의 결과를 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (2쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "2쿼터만의 양팀이 득점한 경기결과로", ruleText2: "두개의 결과를 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (3쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "3쿼터만의 양팀이 득점한 경기결과로", ruleText2: "두개의 결과를 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (4쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "4쿼터만의 양팀이 득점한 경기결과로", ruleText2: "두개의 결과를 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "핸디캡 \n (풀타임)", typeColor: "#d9a36d", overtime: null, ruleText: "상대적으로 전력이 우수한 팀에게 불리한", ruleText2:"조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3: "홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨", rows: 'ss' },
    { id: 0, type: "핸디캡 \n (전반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 전반전(1,2쿼터)만의", ruleText2: "양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3: "", rows: '3' },
    { id: 0, type: "핸디캡 \n (후반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 후반전(3,4쿼터)만의", ruleText2: "양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3: "", rows: '3' },
    { id: 0, type: "핸디캡 \n (1쿼터)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 1쿼터만의 양팀이", ruleText2: "득점한 경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 \n (2쿼터)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 2쿼터만의 양팀이", ruleText2: "득점한 경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 \n (3쿼터)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 3쿼터만의 양팀이", ruleText2: "득점한 경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 \n (4쿼터)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 4쿼터만의 양팀이", ruleText2: "득점한 경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },

    { id: 0, type: "언더오버 \n (풀타임)", typeColor: "#75942d", overtime: null, ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (전반전)", typeColor: "#75942d", overtime: false, ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 합이", ruleText2: "기준점 보다 높고 낮음을 예상하여", ruleText3: "베팅하는 방식", rows: '2' },
    { id: 0, type: "언더오버 \n (후반전)", typeColor: "#75942d", overtime: false, ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 합이", ruleText2: "기준점 보다 높고 낮음을 예상하여", ruleText3: "베팅하는 방식", rows: '2' },
    { id: 0, type: "언더오버 \n (1쿼터)", typeColor: "#75942d", overtime: false, ruleText: "1쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (2쿼터)", typeColor: "#75942d", overtime: false, ruleText: "2쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (3쿼터)", typeColor: "#75942d", overtime: false, ruleText: "3쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (4쿼터)", typeColor: "#75942d", overtime: false, ruleText: "4쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },

    { id: 0, type: "홀짝 \n (풀타임)", typeColor: "#e16eff", overtime: null, ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로", ruleText2: "예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (전반전)", typeColor: "#e16eff", overtime: false, ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 합이", ruleText2: "홀 또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (후반전)", typeColor: "#e16eff", overtime: false, ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 합이", ruleText2: "홀 또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (1쿼터)", typeColor: "#e16eff", overtime: false, ruleText: "1쿼터만의 양팀이 득점한 합이", ruleText2: "홀 또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (2쿼터)", typeColor: "#e16eff", overtime: false, ruleText: "2쿼터만의 양팀이 득점한 합이", ruleText2: "홀 또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (3쿼터)", typeColor: "#e16eff", overtime: false, ruleText: "3쿼터만의 양팀이 득점한 합이", ruleText2: "홀 또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (4쿼터)", typeColor: "#e16eff", overtime: false, ruleText: "4쿼터만의 양팀이 득점한 합이", ruleText2: "홀 또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "최고득점구간", typeColor: "#75942d", overtime: true, ruleText: "경기중 최고 많은 득점이 발생 할 구간", ruleText2: "(1쿼터, 2쿼터, 3쿼터, 4쿼터)을 예측하여", ruleText3: "베팅하는 방식", rows: '3' },
    { id: 0, type: "첫 2점/3점/자유투", typeColor: "#75942d", overtime: false, ruleText: "먼저 해당 득점을 성공하는 팀을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
]

const BaseballArray = [
    { id: 0, type: "승패 \n (풀타임)", typeColor: "#4c98ff", overtime: null, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2: "방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승무패", typeColor: "#4c98ff", overtime: null, ruleText: "정규이닝(9이닝)까지만의 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "승무패 \n (1이닝)", typeColor: "#4c98ff", overtime: false, ruleText: "1이닝까지만의 승리가 예상되는 팀 또는", ruleText2: "무승부를 선택하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승무패 \n (4이닝)", typeColor: "#4c98ff", overtime: false, ruleText: "4이닝까지만의 승리가 예상되는 팀 또는", ruleText2: "무승부를 선택하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "핸디캡 \n (풀타임)", typeColor: "#d9a36d", overtime: null, ruleText: "상대적으로 전력이 우수한 팀에게 불리한", ruleText2: "조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3: "홈팀(왼쪽) 기준으로 +,-의 핸디캡 기준점수가 표기됨", rows: '5' },
    { id: 0, type: "핸디캡 \n (1이닝)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 1이닝까지만의 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "핸디캡 \n (4이닝)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 4이닝까지만의 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "핸디캡 승무패 \n (풀타임)", typeColor: "#d9a36d", overtime: null, ruleText: "핸디캡을 적용하여 승리가 예상되는 팀", ruleText2: "또는 무승부를 선택하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "언더오버 \n (풀타임)", typeColor: "#75942d", overtime: null, ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (1이닝)", typeColor: "#75942d", overtime: false, ruleText: "1이닝까지만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "언더오버 \n (4이닝)", typeColor: "#75942d", overtime: false, ruleText: "4이닝까지만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },

    { id: 0, type: "홀짝 \n (풀타임)", typeColor: "#e16eff", overtime: null, ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로", ruleText2: "예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "첫볼넷", typeColor: "#e16eff", overtime: false, ruleText: "데드볼을 제외한 사구(고의사구 포함)를", ruleText2: "먼저 획득하는 팀을 예상하여 베팅하는", ruleText3: "방식", rows: '3' },
]

const VolleyballArray = [
    { id: 0, type: "승패 \n (풀타임)", typeColor: "#4c98ff", overtime: null, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2: "방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승패 \n (1세트)", typeColor: "#4c98ff", overtime: null, ruleText: "1세트만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식", rows: '3' },
    { id: 0, type: "승패 \n (2세트)", typeColor: "#4c98ff", overtime: null, ruleText: "2세트만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식", rows: '3' },
    { id: 0, type: "승패 \n (3세트)", typeColor: "#4c98ff", overtime: null, ruleText: "3세트만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식", rows: '3' },

    { id: 0, type: "언더오버", typeColor: "#75942d", overtime: null, ruleText: "양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (1세트)", typeColor: "#75942d", overtime: false, ruleText: "1세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (2세트)", typeColor: "#75942d", overtime: false, ruleText: "2세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (3세트)", typeColor: "#75942d", overtime: false, ruleText: "3세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },

    { id: 0, type: "홀짝 \n (풀타임)", typeColor: "#e16eff", overtime: null, ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로", ruleText2: "예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (1세트)", typeColor: "#e16eff", overtime: null, ruleText: "1세트만의 양팀이 득점한 합이 홀 또는,", ruleText2: "짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (2세트)", typeColor: "#e16eff", overtime: null, ruleText: "2세트만의 양팀이 득점한 합이 홀 또는,", ruleText2: "짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (3세트)", typeColor: "#e16eff", overtime: null, ruleText: "3세트만의 양팀이 득점한 합이 홀 또는,", ruleText2: "짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "스코어 \n (풀타임)", typeColor: "#e16eff", overtime: null, ruleText: "양팀의 경기 결과에 대한 최종 스코어를", ruleText2: "정확하게 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "스코어 \n (1세트)", typeColor: "#e16eff", overtime: false, ruleText: "1세트의 양팀의 경기 결과에 대한 최종", ruleText2: "스코어를 정확하게 예상하여 베팅하는", ruleText3: "방식", rows: '2' },
    { id: 0, type: "스코어 \n (2세트)", typeColor: "#e16eff", overtime: false, ruleText: "2세트의 양팀의 경기 결과에 대한 최종", ruleText2: "스코어를 정확하게 예상하여 베팅하는", ruleText3: "방식", rows: '2' },
    { id: 0, type: "스코어 \n (3세트)", typeColor: "#e16eff", overtime: false, ruleText: "3세트의 양팀의 경기 결과에 대한 최종", ruleText2: "스코어를 정확하게 예상하여 베팅하는", ruleText3: "방식", rows: '2' },
    { id: 0, type: "첫 블로킹/서브 득점", typeColor: "#e16eff", overtime: false, ruleText: "먼저 해당 득점을 성공하는 팀을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
]

const TennisArray = [
    { id: 0, type: "승패 \n (풀타임)", typeColor: "#4c98ff", overtime: null, ruleText: "승리가 예상되는 팀(선수)을 선택하여", ruleText2: " 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승패 \n (1세트)", typeColor: "#4c98ff", overtime: null, ruleText: "1세트만의 양팀(선수)이 득점한", ruleText2: "경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승패 \n (2세트)", typeColor: "#4c98ff", overtime: null, ruleText: "2세트만의 양팀(선수)이 득점한", ruleText2: "경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승패 \n (3세트)", typeColor: "#4c98ff", overtime: null, ruleText: "3세트만의 양팀(선수)이 득점한", ruleText2: "경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },

    { id: 0, type: "언더오버", typeColor: "#75942d", overtime: null, ruleText: "양팀(선수)이 득점한 합이 기준점 보다", ruleText2: "높고 낮음을 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (1세트)", typeColor: "#75942d", overtime: false, ruleText: "1세트만의 양팀(선수)이 득점한 합이", ruleText2: "기준점 보다 높고 낮음을 예상하여", ruleText3: "베팅하는 방식", rows: '3' },
    { id: 0, type: "언더오버 \n (2세트)", typeColor: "#75942d", overtime: false, ruleText: "2세트만의 양팀(선수)이 득점한 합이", ruleText2: "기준점 보다 높고 낮음을 예상하여", ruleText3: "베팅하는 방식", rows: '3' },
    { id: 0, type: "언더오버 \n (3세트)", typeColor: "#75942d", overtime: false, ruleText: "3세트만의 양팀(선수)이 득점한 합이", ruleText2: "기준점 보다 높고 낮음을 예상하여", ruleText3: "베팅하는 방식", rows: '3' },

    { id: 0, type: "홀짝 \n (풀타임)", typeColor: "#e16eff", overtime: null, ruleText: "양팀(선수)의 최종 득점의 합이 홀 또는,", ruleText2: "짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (1세트)", typeColor: "#e16eff", overtime: null, ruleText: "1세트만의 양팀(선수)이 득점한 합이 홀", ruleText2: "또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (2세트)", typeColor: "#e16eff", overtime: null, ruleText: "2세트만의 양팀(선수)이 득점한 합이 홀", ruleText2: "또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (3세트)", typeColor: "#e16eff", overtime: null, ruleText: "3세트만의 양팀(선수)이 득점한 합이 홀", ruleText2: "또는, 짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "스코어 \n (풀타임)", typeColor: "#e16eff", overtime: null, ruleText: "양팀(선수)의 경기 결과에 대한 최종", ruleText2: "스코어를 정확하게 예상하여 베팅하는", ruleText3: "방식", rows: '2' },
    { id: 0, type: "스코어 \n (1세트)", typeColor: "#e16eff", overtime: false, ruleText: "1세트의 양팀(선수)의 경기 결과에 대한", ruleText2: "최종 스코어를 정확하게 예상하여", ruleText3: "베팅하는 방식", rows: '3' },
    { id: 0, type: "스코어 \n (2세트)", typeColor: "#e16eff", overtime: false, ruleText: "2세트의 양팀(선수)의 경기 결과에 대한", ruleText2: "최종 스코어를 정확하게 예상하여", ruleText3: "베팅하는 방식", rows: '3' },
    { id: 0, type: "스코어 \n (3세트)", typeColor: "#e16eff", overtime: false, ruleText: "3세트의 양팀(선수)의 경기 결과에 대한", ruleText2: "최종 스코어를 정확하게 예상하여", ruleText3: "베팅하는 방식", rows: '3' },
]

const HockeyArray = [
    { id: 0, type: "승무패", typeColor: "#4c98ff", overtime: true, ruleText: "승리가 예상되는 팀 또는 무승부를", ruleText2: "선택하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승무패 \n (1피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "1피어리드의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (2피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "2피어리드의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (3피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "3피어리드의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승패 \n (풀타임)", typeColor: "#4c98ff", overtime: false, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2: "방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승패 \n (무X)", typeColor: "#4c98ff", overtime: true, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2: "방식 (무승부 적중특례)", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스", typeColor: "#4c98ff", overtime: true, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2: "방식 (무승부 적중특례)", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (1피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "1피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (2피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "2피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (3피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "3피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },

    { id: 0, type: "핸디캡", typeColor: "#d9a36d", overtime: true, ruleText: "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 조건을 주어 경기의", ruleText2:"균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3: "홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨", rows: '5' },
    { id: 0, type: "핸디캡 \n (1피리어드)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 1피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을", ruleText2: "선택하여 베팅하는 방식", ruleText3: "", rows: '3' },
    { id: 0, type: "핸디캡 \n (2피리어드)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 2피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을", ruleText2: "선택하여 베팅하는 방식", ruleText3: "", rows: '3' },
    { id: 0, type: "핸디캡 \n (3피리어드)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 3피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "핸디캡 승무패", typeColor: "#d9a36d", overtime: true, ruleText: "핸디캡을 적용하여 승리가 예상되는 팀", ruleText2: "또는 무승부를 선택하여 베팅하는 방식", ruleText3: "", rows: '2' },


    { id: 0, type: "언더오버", typeColor: "#75942d", overtime: true, ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (풀타임)", typeColor: "#75942d", overtime: null, ruleText: "양팀이 득점한 합이 기준점 보다 높고", ruleText2: "낮음을 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (1피리어드)", typeColor: "#75942d", overtime: false, ruleText: "1피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "언더오버 \n (2피리어드)", typeColor: "#75942d", overtime: false, ruleText: "2피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "언더오버 \n (3피리어드)", typeColor: "#75942d", overtime: false, ruleText: "3피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },

    { id: 0, type: "홀짝", typeColor: "#e16eff", overtime: true, ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로", ruleText2: "예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (풀타임)", typeColor: "#e16eff", overtime: false, ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로", ruleText2: "예상하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "양팀득점", typeColor: "#4c98ff", overtime: true, ruleText: "경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "양팀득점 \n (1피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "1피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "양팀득점 \n (2피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "2피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "양팀득점 \n (3피리어드)", typeColor: "#4c98ff", overtime: false, ruleText: "3피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },

    { id: 0, type: "점수합계~", typeColor: "#e9441d", overtime: true, ruleText: "경기결과 양팀에서 발생한 득점의", ruleText2: "합(~이상)을 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "점수합계~\n (1피리어드)", typeColor: "#e9441d", overtime: false, ruleText: "1피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "점수합계~\n (2피리어드)", typeColor: "#e9441d", overtime: false, ruleText: "2피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "점수합계~\n (3피리어드)", typeColor: "#e9441d", overtime: false, ruleText: "3피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "점수합계", typeColor: "#e9441d", overtime: true, ruleText: "경기결과 양팀에서 발생한 득점의 합을", ruleText2: "정확히 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "점수합계 \n (1피리어드)", typeColor: "#e9441d", overtime: false, ruleText: "1피리어드만의 경기결과로 양팀에서", ruleText2: "발생한 득점의 합을 예측하여 베팅하는", ruleText3: "방식", rows: '2' },
    { id: 0, type: "점수합계 \n (2피리어드)", typeColor: "#e9441d", overtime: false, ruleText: "2피리어드만의 경기결과로 양팀에서", ruleText2: "발생한 득점의 합을 예측하여 베팅하는", ruleText3: "방식", rows: '2' },
    { id: 0, type: "점수합계 \n (3피리어드)", typeColor: "#e9441d", overtime: false, ruleText: "3피리어드만의 경기결과로 양팀에서", ruleText2: "발생한 득점의 합을 예측하여 베팅하는", ruleText3: "방식", rows: '2' },

    { id: 0, type: "최고득점구간", typeColor: "#75942d", overtime: true, ruleText: "경기중 최고 많은 득점이 발생 할 구간(1,2,3피리어드)을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },

    { id: 0, type: "스코어", typeColor: "#e16eff", overtime: true, ruleText: "양팀의 경기 결과에 대한 최종 스코어를", ruleText2: "정확하게 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "스코어 \n (1피리어드)", typeColor: "#e16eff", overtime: false, ruleText: "1피리어드만의 양팀의 경기 결과에 대한", ruleText2: "최종 스코어를 정확하게 예상하여 베팅하는 방식", ruleText3: "", rows: '3' },
    { id: 0, type: "스코어 \n (2피리어드)", typeColor: "#e16eff", overtime: false, ruleText: "2피리어드만의 양팀의 경기 결과에 대한", ruleText2: "최종 스코어를 정확하게 예상하여 베팅하는 방식", ruleText3: "", rows: '3' },
    { id: 0, type: "스코어 \n (3피리어드)", typeColor: "#e16eff", overtime: false, ruleText: "3피리어드만의 양팀의 경기 결과에 대한", ruleText2: "최종 스코어를 정확하게 예상하여 베팅하는 방식", ruleText3: "", rows: '3' },
]

const HandballArray = [
    { id: 0, type: "승무패", typeColor: "#4c98ff", overtime: true, ruleText: "승리가 예상되는 팀 또는 무승부를", ruleText2: "선택하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "승무패 \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀 또는 무승부를", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승패 (무X)", typeColor: "#4c98ff", overtime: false, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2: "방식 (무승부 적중특례)", ruleText3: "", rows: '2' },
    { id: 0, type: "승패 (무X) \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승패 (무X) \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전만의 양팀이 득점한 경기결과로", ruleText2: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText3: "방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "무실점 완승", typeColor: "#4c98ff", overtime: true, ruleText: "무실점으로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (상대팀 무득점이어야 함)", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "전반 & 전후반", typeColor: "#4c98ff", overtime: true, ruleText: "전반전만의 결과와 최종(전후반포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '4' },
    { id: 0, type: "더블찬스", typeColor: "#4c98ff", overtime: true, ruleText: "두개의 결과를 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전만의 양팀이 득점한 경기결과로", ruleText2: "두개의 결과를 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "더블찬스 \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전만의 양팀이 득점한 경기결과로", ruleText2: "두개의 결과를 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "핸디캡", typeColor: "#d9a36d", overtime: true, ruleText: "상대적으로 전력이 우수한 팀에게 불리한", ruleText2:"조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3: "홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨", rows: '5' },
    { id: 0, type: "핸디캡 \n (전반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 전반전만의 양팀이", ruleText2: "득점한 경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 \n (후반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 후반전만의 양팀이", ruleText2: "득점한 경기결과로 승리가 예상되는 팀을", ruleText3: "선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 승무패", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 승리가 예상되는 팀", ruleText2: "또는 무승부를 선택하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "핸디캡 승무패 \n (전반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 전반전만의 양팀이", ruleText2: "득점한 경기결과로 승리가 예상되는 팀", ruleText3: "또는 무승부를 선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 승무패 \n (후반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 후반전만의 양팀이", ruleText2: "득점한 경기결과로 승리가 예상되는 팀", ruleText3: "또는 무승부를 선택하여 베팅하는 방식", rows: '3' },

    { id: 0, type: "언더오버", typeColor: "#75942d", overtime: true, ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (전반전)", typeColor: "#75942d", overtime: false, ruleText: "전반전만의 양팀이 득점한 합이 기준점", ruleText2: "보다 높고 낮음을 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "언더오버 \n (후반전)", typeColor: "#75942d", overtime: false, ruleText: "후반전만의 양팀이 득점한 합이 기준점", ruleText2: "보다 높고 낮음을 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "홀짝", typeColor: "#e16eff", overtime: true, ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로", ruleText2: "예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (전반전)", typeColor: "#e16eff", overtime: false, ruleText: "전반전만의 양팀이 득점한 합이 홀 또는,", ruleText2: "짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "홀짝 \n (후반전)", typeColor: "#e16eff", overtime: false, ruleText: "후반전만의 양팀이 득점한 합이 홀 또는,", ruleText2: "짝으로 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "양팀득점", typeColor: "#4c98ff", overtime: true, ruleText: "경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "양팀득점 \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },
    { id: 0, type: "양팀득점 \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '2' },

    { id: 0, type: "점수합계~", typeColor: "#e9441d", overtime: true, ruleText: "경기결과 양팀에서 발생한 득점의", ruleText2: "합(~이상)을 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "점수합계~ \n (전반전)", typeColor: "#e9441d", overtime: false, ruleText: "전반전만의 경기결과로 양팀에서 발생한", ruleText2: "득점의 합(~이상)을 예측하여 베팅하는", ruleText3: "방식", rows: '3' },
    { id: 0, type: "점수합계~ \n (후반전)", typeColor: "#e9441d", overtime: false, ruleText: "후반전만의 경기결과로 양팀에서 발생한", ruleText2: "득점의 합(~이상)을 예측하여 베팅하는", ruleText3: "방식", rows: '3' },
    { id: 0, type: "점수합계", typeColor: "#e9441d", overtime: true, ruleText: "경기결과 양팀에서 발생한 득점의 합을", ruleText2: "정확히 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "점수합계 \n (전반전)", typeColor: "#e9441d", overtime: false, ruleText: "전반전만의 경기결과로 양팀에서 발생한", ruleText2: "득점의 합을 정확히 예측하여 베팅하는", ruleText3: "방식", rows: '3' },
    { id: 0, type: "점수합계 \n (후반전)", typeColor: "#e9441d", overtime: false, ruleText: "후반전만의 경기결과로 양팀에서 발생한", ruleText2: "득점의 합을 정확히 예측하여 베팅하는", ruleText3: "방식", rows: '3' },

    { id: 0, type: "최고득점구간", typeColor: "#75942d", overtime: true, ruleText: "경기중 최고 많은 득점이 발생 할 구간", ruleText2: "(전,후반)을 예측하여 베팅하는 방식", ruleText3: "", rows: '2' },

    { id: 0, type: "스코어", typeColor: "#e16eff", overtime: true, ruleText: "양팀의 경기 결과에 대한 최종 스코어를", ruleText2: "정확하게 예상하여 베팅하는 방식", ruleText3: "", rows: '2' },
    { id: 0, type: "스코어 \n (전반전)", typeColor: "#e16eff", overtime: false, ruleText: "전반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
    { id: 0, type: "스코어 \n (후반전)", typeColor: "#e16eff", overtime: false, ruleText: "후반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식", ruleText2: "", ruleText3: "", rows: '3' },
]

const FootballArray = [
    { id: 0, type: "승패 \n (풀타임)", typeColor: "#4c98ff", overtime: null, ruleText: "승리가 예상되는 팀을 선택하여 베팅하는", ruleText2:"방식", rows: '2' },
    { id: 0, type: "승패 (무X) \n (1쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "1쿼터만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀을 선택하여 베팅하는", ruleText3:"방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승패 (무X) \n (2쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "2쿼터만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀을 선택하여 베팅하는", ruleText3:"방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승패 (무X) \n (3쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "3쿼터만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀을 선택하여 베팅하는", ruleText3:"방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승패 (무X) \n (4쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "4쿼터만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀을 선택하여 베팅하는", ruleText3:"방식 (무승부 적중특례)", rows: '3' },
    { id: 0, type: "승무패 \n (전반전)", typeColor: "#4c98ff", overtime: false, ruleText: "전반전(1,2쿼터)만의 양팀이 득점한", ruleText2:"경기결과로 승리가 예상되는 팀 또는", ruleText3:"무승부를 선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (후반전)", typeColor: "#4c98ff", overtime: false, ruleText: "후반전(3,4쿼터)만의 양팀이 득점한", ruleText2:"경기결과로 승리가 예상되는 팀 또는", ruleText3:"무승부를 선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (1쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "1쿼터만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀 또는 무승부를", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (2쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "2쿼터만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀 또는 무승부를", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (3쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "3쿼터만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀 또는 무승부를", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "승무패 \n (4쿼터)", typeColor: "#4c98ff", overtime: false, ruleText: "4쿼터만의 양팀이 득점한 경기결과로", ruleText2:"승리가 예상되는 팀 또는 무승부를", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "전반 & 전후반", typeColor: "#4c98ff", overtime: true, ruleText: "전반전만의 결과와 최종(전후반포함)", ruleText2:"각각의 양팀이 득점한 경기결과로 승리가", ruleText3:"예상되는 팀 또는 무승부를 선택하여", ruleText4:"베팅하는 방식", rows: '4' },
    { id: 0, type: "전반 & 전후반 \n (풀타임)", typeColor: "#4c98ff", overtime: null, ruleText: "전반전만의 결과와 최종(전후반 연장포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식", ruleText2:"", ruleText3:"", rows: '4' },

    { id: 0, type: "핸디캡 \n (풀타임)", typeColor: "#d9a36d", overtime: null, ruleText: "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여", ruleText2: "베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨", ruleText2:"", ruleText3:"", rows: '5' },
    { id: 0, type: "핸디캡 \n (전반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 전반전(1,2쿼터)만의", ruleText2:"양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3:"", rows: '3' },
    { id: 0, type: "핸디캡 \n (후반전)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 후반전(3,4쿼터)만의", ruleText2:"양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식", ruleText3:"", rows: '3' },
    { id: 0, type: "핸디캡 \n (1쿼터)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 1쿼터만의 양팀이", ruleText2:"득점한 경기결과로 승리가 예상되는 팀을", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 \n (2쿼터)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 2쿼터만의 양팀이", ruleText2:"득점한 경기결과로 승리가 예상되는 팀을", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 \n (3쿼터)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 3쿼터만의 양팀이", ruleText2:"득점한 경기결과로 승리가 예상되는 팀을", ruleText3:"선택하여 베팅하는 방식", rows: '3' },
    { id: 0, type: "핸디캡 \n (4쿼터)", typeColor: "#d9a36d", overtime: false, ruleText: "핸디캡을 적용하여 4쿼터만의 양팀이", ruleText2:"득점한 경기결과로 승리가 예상되는 팀을", ruleText3:"선택하여 베팅하는 방식", rows: '3' },

    { id: 0, type: "언더오버 \n (풀타임)", typeColor: "#75942d", overtime: null, ruleText: "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2:"", ruleText3:"", rows: '2' },
    { id: 0, type: "언더오버 \n (전반전)", typeColor: "#75942d", overtime: false, ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 합이", ruleText2:"기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText3:"", rows: '3' },
    { id: 0, type: "언더오버 \n (후반전)", typeColor: "#75942d", overtime: false, ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 합이", ruleText2:"기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText3:"", rows: '3' },
    { id: 0, type: "언더오버 \n (1쿼터)", typeColor: "#75942d", overtime: false, ruleText: "1쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2:"", ruleText3:"", rows: '2' },
    { id: 0, type: "언더오버 \n (2쿼터)", typeColor: "#75942d", overtime: false, ruleText: "2쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2:"", ruleText3:"", rows: '2' },
    { id: 0, type: "언더오버 \n (3쿼터)", typeColor: "#75942d", overtime: false, ruleText: "3쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2:"", ruleText3:"", rows: '2' },
    { id: 0, type: "언더오버 \n (4쿼터)", typeColor: "#75942d", overtime: false, ruleText: "4쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식", ruleText2:"", ruleText3:"", rows: '2' },

    { id: 0, type: "홀짝 \n (풀타임)", typeColor: "#e16eff", overtime: null, ruleText: "양팀의 최종 득점의 합이 홀 또는, 짝으로", ruleText2:"예상하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 0, type: "홀짝 \n (전반전)", typeColor: "#e16eff", overtime: false, ruleText: "전반전(1,2쿼터)만의 양팀이 득점한 합이", ruleText2:"홀 또는, 짝으로 예상하여 베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 0, type: "홀짝 \n (후반전)", typeColor: "#e16eff", overtime: false, ruleText: "후반전(3,4쿼터)만의 양팀이 득점한 합이", ruleText2:"홀 또는, 짝으로 예상하여 베팅하는 방식", ruleText3:"", rows: '2' },

    { id: 0, type: "최고득점구간", typeColor: "#75942d", overtime: true, ruleText: "경기중 최고 많은 득점이 발생 할 구간", ruleText2:"(1쿼터, 2쿼터, 3쿼터, 4쿼터)을 예측하여", ruleText3:"베팅하는 방식", rows: '3' },
]

const ESportsArray = [
    { id: 0, type: "승패 \n (풀타임)", typeColor: "#4c98ff", overtime: null, ruleText: "승리가 예상되는 팀(선수)을 선택하여",ruleText2:"베팅하는 방식", ruleText3:"", rows: '2' },
    { id: 0, type: "승패 (무X) \n (풀타임)", typeColor: "#4c98ff", overtime: null, ruleText: "승리가 예상되는 팀(선수)을 선택하여", ruleText2:"베팅하는 방식 (무승부는 적중특례)", ruleText3:"", rows: '2' },
    { id: 0, type: "핸디캡 \n (풀타임)", typeColor: "#d9a36d", overtime: null, ruleText: "상대적으로 전력이 우수한 팀(선수)에게", ruleText2:"불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀(선수)을 선택하여 베팅하는 방식", ruleText3: "홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨", rows: 'ss' },

]

const SoccerSubArray = [
    { id: 0, title: "연장제외", title2: "연장없음", color: "#ffcc00", isFirst: 'true', text: "정규시간 (전반전/후반전)의 경기결과만",text2:"적용 합니다.", text3:"(연장전 및 승부차기는 제외됩니다.)"},
    { id: 0, title: "핸디캡 \n (전체)", color: "#d9a36d", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용.", text2:"결과가 무승부일 경우는 미당첨 처리됨", text3:"" },
    { id: 0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여", text2:"동일한 기준점수로 종료 될 경우", text3:"적중특례 처리됨" },
]

const BasketballSubArray = [
    { id: 0, title: "연장포함", color: "#e65454", text: "정규(4쿼터)까지 승부 결과가 나지 않을", text2:"경우 연장전의 경기 결과 적용됩니다.", text3:"(승부치기가 있는경우 승부치기의 결과가 적용됩니다.)" },
    { id: 0, title: "연장제외", title2: "연장없음", color: "#ffcc00", text: "정규시간 (4쿼터)까지의 경기결과만", text2:"적용 합니다. (연장전 및 승부차기는 제외 됩니다.)", text3:"" },
    { id: 0, title: "승패 \n (풀타임)", color: "#4c98ff", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨", text2:"", text3:"" },
    { id: 0, title: "핸디캡 \n (전체)", color: "#d9a36d", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가", text2:"무승부일 경우는 미당첨 처리됨", text3:"" },
    { id: 0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여", text2:"동일한 기준점수로 종료 될 경우", text3:"적중특례 처리됨" },
]

const BaseballSubArray = [
    { id: 0, title: "연장포함", color: "#e65454", text: "정규(9이닝)까지 승부 결과가 나지 않을", text2:"경우 연장전의 경기 결과 적용됩니다.", text3:"(승부치기가 있는경우 승부치기의 결과가 적용됩니다.)" },
    { id: 0, title: "연장제외", title2: "연장없음", color: "#ffcc00", text: "정규시간 (9이닝)까지의 경기결과만", text2:"적용 합니다. (연장전 및 승부차기는 제외 됩니다.)", text3:""  },
    { id: 0, title: "승패 \n (풀타임)", color: "#4c98ff", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨", text2:"", text3:""  },
    { id: 0, title: "핸디캡 \n (전체)", color: "#d9a36d", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가", text2:"무승부일 경우는 미당첨 처리됨", text3:""  },
    { id: 0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여", text2:"동일한 기준점수로 종료 될 경우 적중특례 처리됨", text3:""  },
    { id: 0, title: "콜드게임", color: "#4c98ff", text: "선택한 기준점수는 연장을 포함하여", text2:"동일한 기준점수로 종료 될 경우 적중특례 처리됨", text3:""  },
    { id: 0, title: "기타", color: "#4c98ff", text: "핸디캡과 언더오버의 경우 정규(9이닝)을 채우지 못한 경기라도 노게임 선언이", text2:"아니라면 경기 결과에 반영 합니다.", text3:"(해당리그의 공식협회가 정식 경기 결과로 인정시 결과에 반영함)"  },
]

const VolleyballSubArray = [
    { id: 0, title: "연장포함", color: "#e65454", text: "정규(3세트)까지 승부 결과가 나지 않을", text2:"경우 연장전의 경기 결과 적용됩니다.", text3:"(승부치기가 있는경우 승부치기의 결과가 적용됩니다.)" },
    { id: 0, title: "연장제외", title2: "연장없음", color: "#ffcc00", text: "정규시간 (3세트)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외", text2:"됩니다.)" },
    { id: 0, title: "승패 \n (풀타임)", color: "#4c98ff", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
    { id: 0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례", text2:"처리됨" },
]

const TennisSubArray = [
    { id: 0, title: "연장포함", color: "#e65454", text: "정규(3세트,5세트)까지 승부 결과가", text2:"나지 않을 경우 연장전의 경기 결과가", text3:"적용됩니다. (승부치기가 있는경우 승부차기의 결과가 적용됩니다.)" },
    { id: 0, title: "연장제외", title2: "연장없음", color: "#ffcc00", text: "정규(3세트,5세트)까지의 경기결과만", text2:"적용 합니다. (연장전 및 승부차기는 제외 됩니다.)" },
    { id: 0, title: "승패 \n (풀타임)", color: "#4c98ff", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
    { id: 0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여", text2:"동일한 기준점수로 종료 될 경우 적중특례 처리됨" },
]

const HockeySubArray = [
    { id: 0, title: "연장포함", color: "#e65454", text: "정규(3피리어드)까지 승부 결과가 나지", text2:"않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)", text3:"" },
    { id: 0, title: "연장제외", title2: "연장없음", color: "#ffcc00", text: "정규(3피리어드)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는", text2:"제외 됩니다.)" },
    { id: 0, title: "승패 \n (풀타임)", color: "#4c98ff", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
    { id: 0, title: "핸디캡 \n (전체)", color: "#d9a36d", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가", text2:"무승부일 경우는 미당첨 처리됨" },
    { id: 0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여", text2:"동일한 기준점수로 종료 될 경우 적중특례 처리됨" },
]

const HandballSubArray = [
    { id: 0, title: "연장제외", title2: "연장없음", color: "#ffcc00", text: "정규시간 (전반전/후반전)의 경기결과만", text2:"적용 합니다. (연장전 및 승부차기는 제외 됩니다.)" },
    { id: 0, title: "핸디캡 \n (전체)", color: "#d9a36d", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가", text2:"무승부일 경우는 미당첨 처리됨" },
    { id: 0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여", text2:"동일한 기준점수로 종료 될 경우 적중특례 처리됨" },
]

const FootballSubArray = [
    { id: 0, title: "연장포함", color: "#e65454", text: "정규(4쿼터)까지 승부 결과가 나지 않을", text2:"경우 연장전의 경기 결과 적용됩니다.", text3:"(승부치기가 있는경우 승부치기의 결과가 적용됩니다.)" },
    { id: 0, title: "연장제외", title2: "연장없음", color: "#ffcc00", text: "정규시간 (4쿼터)까지의 경기결과만", text2:"적용 합니다. (연장전 및 승부차기는 제외 됩니다.)" },
    { id: 0, title: "승패 \n (풀타임)", color: "#4c98ff", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
    { id: 0, title: "핸디캡 \n (전체)", color: "#d9a36d", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가", text2:"무승부일 경우는 미당첨 처리됨" },
    { id: 0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여", text2:"동일한 기준점수로 종료 될 경우 적중특례 처리됨" },
]

const ESportsSubArray = [
    { id: 0, title: "승패 \n (풀타임)", color: "#4c98ff", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨" },
    { id: 0, title: "핸디캡 \n (전체)", color: "#d9a36d", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가", text2:"무승부일 경우는 미당첨 처리됨" },
]

const HistoryMenu = ({
    itemsArray,
    setSelectedTab,
    setSelectedSubTab = null
}) => {
    const navigate = useNavigate();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    function TabsList({ items }) {
        return items.map((item, index) => {
            let isActive = pathname === item.path
            if (item.path.includes('/cscenter/all/policy/sportsgame')) {
                isActive = true
            }
            return (
                <button
                    className={`${isActive
                        ? "bg-blue-r0056a6"
                        : "bg-white border border-gray-b7b7b7"
                        } w-1/2 rounded-full font-spoqaMedium`}
                    style={{ background: isActive ? '#826140' : '#1e1e1e', fontFamily: 'SpoqaHanSansNeoMedium', color: isActive ? '#ffdfbd' : '#c8c8c8', width: '49.2%', borderRadius: '4rem', marginTop: '1rem', height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '1.15rem' : ''}`, border: `${pathname !== item.path && !isActive ? '0.1875rem solid #555555' : ''}`, letterSpacing: '-0.07rem' }}
                    key={item.id}

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        navigate(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div >
                        <div className='mt-2' style={{ marginRight: '-0.2rem', paddingTop: '0.3rem' }}>
                            <span
                                className={`${isActive
                                    ? "text-white"
                                    : "text-gray-r7b7b7b"
                                    }`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div className="flex w-full">
            <TabsList items={itemsArray} />
        </div>
    )
}

const historyTabsArray = [
    { text: "스포츠게임", id: 0, path: "/cscenter/all/policy/sportsgame/soccer" },
    { text: "미니게임", id: 1, path: "/cscenter/all/policy/minigame/powerball" },
]


const SportsGamePolicy = ({ setSelectedTab, subActiveButton, setSubActiveButton }) => {

    const location = useLocation();
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(`selectedSubTab`, selectedSubTab)
    const navigate = useNavigate()
    useEffect(() => {
        window.onpopstate = e => {
            setTimeout(() => {
                setSubActiveButton('/cscenter/all/policy/sportsgame/soccer')
            }, 0)

        }
        return (() => {
            setSubActiveButton('/cscenter/all/policy/sportsgame/soccer')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    const tabsArray = [
        { text: "축구", id: 0, path: "/cscenter/all/policy/sportsgame/soccer" },
        { text: "농구", id: 1, path: "/cscenter/all/policy/sportsgame/basketball" },
        { text: "야구", id: 2, path: "/cscenter/all/policy/sportsgame/baseball" },
        { text: "배구", id: 3, path: "/cscenter/all/policy/sportsgame/volleyball" },
        { text: "테니스", id: 4, path: "/cscenter/all/policy/sportsgame/tennis" },
        { text: "하키", id: 5, path: "/cscenter/all/policy/sportsgame/hockey" },
        { text: "핸드볼", id: 6, path: "/cscenter/all/policy/sportsgame/handball" },
        { text: "미식축구", id: 7, path: "/cscenter/all/policy/sportsgame/football" },
        { text: "e-스포츠", id: 8, path: "/cscenter/all/policy/sportsgame/e-sports" }
    ];

    return (
        <div style={{ paddingBottom: '5rem' }}>
            <div style={{ margin: '1.875rem', marginTop: '0', marginBottom: '2.1rem' }}>
                <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
            </div>
            <div className="w-full flex relative top-0" style={{ position: 'relative' }}>
                <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full right-0 z-50"></div>
                <div style={{ paddingLeft: '1.875rem', overflowX: 'scroll' }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full">
                        <HorizontalSubMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                    </div>
                </div>
                <div style={{ height: '98%', top: '2rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
            </div>


            <div style={{ margin: "0 5.8125rem", marginTop: '1.5rem', marginBottom: '3.2rem' }} className="flex flex-wrap items-center justify-center tracking-tight font-spoqa text-gray-r454545">
                <Routes>

                    <Route path="/soccer"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 프로축구는 해당 리그의 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>

                        }
                    >
                    </Route>
                    <Route path="/baseball"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 프로야구 경기는 해당 리그의 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>
                        }
                    >
                    </Route>
                    <Route path="/basketball"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 프로농구 경기는 해당 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>
                        }
                    >
                    </Route>
                    <Route path="/volleyball"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 프로배구 경기는 해당 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>
                        }
                    >
                    </Route>
                    <Route path="/tennis"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 테니스 경기는 해당 리그의 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>
                        }
                    >
                    </Route>
                    <Route path="/hockey"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 아이스하키 경기는 해당 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>
                        }
                    >
                    </Route>
                    <Route path="/handball"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 핸드볼 경기는 해당 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>
                        }
                    >
                    </Route>
                    <Route path="/football"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 미식축구 경기는 해당 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>
                        }
                    >
                    </Route>
                    <Route path="/e-sports"
                        element={
                            <>
                                <p style={{ fontSize: '2.625rem', textAlign: 'center', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', margin: '0', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">모든 e-스포츠 경기는 해당 리그의 공식협회가 인정하는</p>
                                <p style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', textAlign: 'center', margin: '0 0 0 0.35rem', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                            </>
                        }
                    >
                    </Route>
                </Routes>
            </div>

            <Routes >
                <Route path="/soccer" element={<SportsGamePolicyTable1 array={SoccerArray} />} />
                <Route path="/basketball" element={<SportsGamePolicyTable1 array={BasketballArray} />} />
                <Route path="/baseball" element={<SportsGamePolicyTable1 array={BaseballArray} />} />
                <Route path="/volleyball" element={<SportsGamePolicyTable1 array={VolleyballArray} />} />
                <Route path="/tennis" element={<SportsGamePolicyTable1 array={TennisArray} />} />
                <Route path="/hockey" element={<SportsGamePolicyTable1 array={HockeyArray} />} />
                <Route path="/handball" element={<SportsGamePolicyTable1 array={HandballArray} />} />
                <Route path="/football" element={<SportsGamePolicyTable1 array={FootballArray} />} />
                <Route path="/e-sports" element={<SportsGamePolicyTable1 array={ESportsArray} />} />
            </Routes>

            <Routes >
                <Route path="/soccer" element={<SportsGamePolicyTable2 array={SoccerSubArray} />}/>
                <Route path="/basketball" element={<SportsGamePolicyTable2 array={BasketballSubArray} />}/>
                <Route path="/baseball" element={<SportsGamePolicyTable2 array={BaseballSubArray} />}/>
                <Route path="/volleyball" element={<SportsGamePolicyTable2 array={VolleyballSubArray} />}/>
                <Route path="/tennis" element={<SportsGamePolicyTable2 array={TennisSubArray} />}/>
                <Route path="/hockey" element={<SportsGamePolicyTable2 array={HockeySubArray} />}/>
                <Route path="/handball" element={<SportsGamePolicyTable2 array={HandballSubArray} />}/>
                <Route path="/football" element={<SportsGamePolicyTable2 array={FootballSubArray} />}/>
                <Route path="/e-sports" element={<SportsGamePolicyTable2 array={ESportsSubArray} />}/>
            </Routes>

            <div style={{ marginBottom: '14rem' }} />

            {/* <BottomNavbar /> */}

        </div>
    )
}

export default SportsGamePolicy

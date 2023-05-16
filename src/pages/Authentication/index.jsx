import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './_authentication.scss';
import LoginBG from '../../assets/images/login-bg.png'
import Logo from '../../assets/images/logo.png'
import Username from '../../assets/images/user-icon.png'
import password from '../../assets/images/password-icon.png'
import SignUpModal from '../../components/Authentication/SignUpModal';

function Authentication({ isAuthenticated, setAuthenticated }) {
  const navigate = useNavigate()
  const [toSignup, setSignup] = useState(false)
  return (
    <div className="login-page">
      <img src={LoginBG} alt="right" className='login-bg' />
      <div className='login-form'>
        <img src={Logo} alt="right" className='logo' />
        <div className='fields'>
          <div className='input-field'>
            <img src={Username} alt="" className='input-icon'/>
            <input
              placeholder={"아이디"}
            />
          </div>
          <div className='input-field'>
            <img src={password} alt="" className='input-icon password-icon' />
            <input
              placeholder={"비밀번호"}
            />
          </div>
        </div>
        <div className='actions'>
          <button
            onClick={() => {
              navigate('/main')
            }}>
            로그인
          </button>
          <div className='line'></div>
          <button
            className='register'
            onClick={() => setSignup(true)}>
            회원가입
          </button>
        </div>
      </div>
      {toSignup === true && (
        <SignUpModal
          setSignup={setSignup} />
      )}
    </div>
  )
}
export default Authentication
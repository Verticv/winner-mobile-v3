
import ProfileHeader from "../components/MyPage/Header";
import ProfileInfo from "../components/MyPage/ProfileInfo";
import ProfileMenu from "../components/MyPage/ProfileMenu";
function MyPage() {
  return (
    <div className="container mypage">
      <ProfileHeader />
      <ProfileInfo />
      <ProfileMenu />
    </div>
    
  )
}
export default MyPage
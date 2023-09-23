import './_mainTabs.scss';

const Tab = ({
  id,
  title,
  icon,
  selectedTab,
  setSelectedTab
}) => {
  return (
    <div 
      className={`tab ${selectedTab === id ? 'active' : ''} flex items-center content-between cursor-pointer`}
      onClick={() => setSelectedTab(id)}>
      <img src={icon} alt="right" />
      <p>{title}</p>
    </div>
  )
}
export default Tab;
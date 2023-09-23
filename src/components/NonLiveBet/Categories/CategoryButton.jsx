
const CategoryButton = ({title,icon, style, onClick}) => {
  return (
    <button className={`category-btn ${title ? 'with-title' : ''}`}
      onClick={onClick}>
      <div className={`flex items-center content-center`} >
        <img src={icon} alt="right" style={style} />
        {title && (<p>{title}</p>)}
      </div>
    </button>
  )
}
export default CategoryButton;
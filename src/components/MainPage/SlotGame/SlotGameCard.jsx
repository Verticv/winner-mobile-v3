

function SlotGameCard({ id, title, sub_title, img, tag, tag_name, onClick }) {
  return (
    <div className='card-container'>
      <div className='slot-game__Card'>
        <img src={tag} alt="RedTag" className='tag' />
        <p className='tag-name'>{tag_name}</p>
        <div className='card__body'>
          <div >
            <img src={img} alt="Img1" className='img' />
            <div className='card__desc'>
              <p>{title}</p>
              <span>{sub_title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlotGameCard
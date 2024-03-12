import './Gallery.scss'; 
import datas from '../../data/Data'; 
import Card from '../card/Card';

function Gallery() {
  return (
    <main className='home_gallery'>
      {datas.map((data) => (
        <Card 
          key={data.id}
          id={data.id}
          title={data.title}
          cover={data.cover} 
        />
      ))}
    </main>
  );
}


export default Gallery;
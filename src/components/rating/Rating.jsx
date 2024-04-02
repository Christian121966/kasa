import './Rating.scss';
import Star from "../atoms/star";


export default function Rating({ rating }) {

  return (
    <div className="rating-container">
      <Star active={rating>=1}/>
      <Star active={rating>=2}/>
      <Star active={rating>=3}/>
      <Star active={rating>=4}/>
      <Star active={rating>=5}/>
    </div>
  );
}

import starActive from '../../assets/star-active.png';
import starInactive from '../../assets/star-inactive.png';
import './star.scss';

export default function Star({ active }) {
    return (
        <img
          src={active?starActive:starInactive}
          alt={active?'Étoile active': 'Étoile inactive'}
          className="star"
        />
    );
    }
import courseImage from '../../../public/image.png';
import PropTypes from 'prop-types'

type CardProps = {
  title: string;
  duration: string;
  level: string;
  author: string;
  img: string;
  description: string;
};

function Card({title, duration, level, author, img, description}: CardProps) {
    return (
      <div className="border border-white rounded-lg p-4 max-w-md mx-auto shadow-lg">
  <div className="text-center">
    <img 
      src={img} 
      alt="Course image" 
      className="rounded-md mx-auto mb-4 w-full h-48 object-cover" 
    />
    <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
      <p className="text-lg font-semibold">{duration}</p>
      <p className="px-2 py-1 bg-gray-200 rounded-full">{level}</p>
    </div>
    <p className="text-gray-500 text-sm mb-4">By {author}</p>
  </div>
  <div className="text-center mb-4">
    <h2 className="text-md font-bold text-gray-800 mb-2">
      {title}
    </h2>
    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
  <div className="text-center">
    <button 
      type="button" 
      className="bg-orange-500 text-white rounded-md py-2 px-6 hover:bg-orange-600 focus:ring focus:ring-red-300 transition-all"
    >
      Get it now
    </button>
  </div>
</div>

    )
}

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  level: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string, 
  description: PropTypes.string, 
}
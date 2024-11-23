import PropTypes from 'prop-types';


type cardProps = {
  personImage: string,
  personName: string,
  description: string,
};

function Card({description, personImage, personName}: cardProps) {
  return (
    <div className='border rounded-md border-white bg-white text-sm'>
      <div className='pb-10'>
        <p>{description}</p>
      </div>

      <div className='flex text-nowrap'>
        <div className='flex w-10'>
          <img src={personImage} alt="Person Image" />
          <p className='font-semibold'>{personName}</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  personImage: PropTypes.string,
  personName: PropTypes.string,
}

export default Card;

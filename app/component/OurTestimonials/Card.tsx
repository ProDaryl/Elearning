import Image from 'next/image';
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
        <div className='flex w-10 items-center p-1 gap-4'>
          <Image src={personImage} alt="Person Image" width={50} height={10} />
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

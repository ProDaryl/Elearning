import PropTypes from 'prop-types';

type cardType = {
    email: string,
}

function Faqs({email}: cardType) {
  return (
    <div className='flex gap-6 w-[96%] mx-auto]'>
      <div>
        <h1>Frequently Asked Questions</h1>
        <p>Still have any questions? Contact our team via {email}</p>
      </div>
      <div></div>
    </div>
  )
}

Faqs.propTypes = {
    email: PropTypes.string,
}

export default Faqs;

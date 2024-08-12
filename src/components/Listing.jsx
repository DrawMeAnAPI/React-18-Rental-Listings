import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Listing = ({ listing }) => {
  const [showFullOverview, setShowFullOverview] = useState(false);

  let overview = listing.overview;

  if (!showFullOverview) {
    overview = overview.substring(0, 90) + '...';
  }

  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-teal-950 my-2'>{listing.type}</div>
          <h3 className='text-xl font-bold'>{listing.title}</h3>
        </div>

        <div className='mb-5'>{overview}</div>

        <button
          onClick={() => setShowFullOverview((prevState) => !prevState)}
          className='text-teal-600 mb-5 hover:text-teal-950'
        >
          {showFullOverview ? 'Less' : 'More'}
        </button>

        <h3 className='text-teal-600 mb-2'>{listing.rent}$ / Month</h3>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
            <FaMapMarker className='h-[38px] inline text-lg mb-1 mr-1' />
            {listing.district}
          </div>
          <Link
            to={`/listings/${listing.id}`}
            className='h-[38px] bg-teal-600 hover:bg-teal-950 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Listing;

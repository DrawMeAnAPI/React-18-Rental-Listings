import { Link } from 'react-router-dom';

const ViewAllListings = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        to='/listings'
        className='block text-white text-center py-4 px-6 rounded-xl bg-teal-600 hover:bg-teal-950'
      >
        View All Listings
      </Link>
    </section>
  );
};
export default ViewAllListings;

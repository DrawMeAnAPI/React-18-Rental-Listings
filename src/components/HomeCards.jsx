import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card bg='bg-teal-50'>
            <h2 className='text-2xl font-bold'>For Tenants</h2>
            <p className='mt-2 mb-4'>
              Browse our rental listings and find your new home
            </p>
            <Link
              to='/listings'
              className='inline-block bg-teal-950 text-white rounded-lg px-4 py-2 hover:bg-teal-600'
            >
              Browse Listings
            </Link>
          </Card>
          <Card bg='bg-teal-400'>
            <h2 className='text-2xl font-bold'>For Landlords</h2>
            <p className='mt-2 mb-4'>
              List your home to find the perfect tenant
            </p>
            <Link
              to='/add-listing'
              className='inline-block bg-teal-950 text-white rounded-lg px-4 py-2 hover:bg-teal-600'
            >
              Add Listing
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;

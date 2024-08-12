import { useState, useEffect } from 'react';
import Listing from './Listing.jsx';
import Spinner from './Spinner';

const Listings = ({ isHome = false }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchlistings = async () => {
      const apiUrl = isHome ? '/api/listings?_limit=3' : '/api/listings';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setListings(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchlistings();
  }, []);

  return (
    <section className='bg-teal-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-teal-800 mb-6 text-center'>
          {isHome ? 'Recent Listings' : 'Browse All Listings'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {listings.map((listing) => (
              <Listing key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Listings;

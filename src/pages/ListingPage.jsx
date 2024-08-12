import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ListingPage = ({ deleteListingSubmit }) => {
  const navigate = useNavigate();
  const listing = useLoaderData();

  const onDeleteClick = (listingId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );
    if (!confirm) return;

    deleteListingSubmit(listingId);
    toast.success('Listing deleted successfully');
    navigate('/listings');
  };

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/listings'
            className='text-teal-600 hover:text-teal-950 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Listings
          </Link>
        </div>
      </section>

      <section className='bg-teal-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>

              {/* Listing Info */}
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <h1 className='text-teal-950 text-3xl font-bold mb-4'>{listing.title}</h1>

                <h3 className='text-teal-600 text-lg font-bold mb-6'>
                  {listing.unitType}
                </h3>

                <h3 className='text-teal-600 text-lg inline font-bold mb-6'>
                  Overview &nbsp;
                </h3>
                <p className='text-teal-950 inline'>{listing.overview}</p>
                <div className='mb-2'>&nbsp;</div>

                <h3 className='text-teal-600 text-lg inline font-bold mb-2'>
                  Rent &nbsp;
                </h3>
                <p className='text-teal-950 inline'>{listing.rent}$ / Month</p>

                <p><br/></p>
                <div className='mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1'/>
                  <p className='text-orange-700'>Located in {listing.district}</p>
                </div>
              </div>

              <br />

              {/* Owner Info */}
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-teal-950 text-3xl font-bold mb-6'>Owner Contacts</h3>

                <h3 className='text-teal-600 text-2xl font-bold mb-6'>
                  {listing.owner.name}
                </h3>
                <hr className='my-4'/>


                <h3 className='text-teal-600 text-lg inline font-bold mb-2'>
                  Email &nbsp;
                </h3>
                <p className='text-teal-950 inline text-lg'>{listing.owner.email}</p>

                <br/>

                <h3 className='text-teal-600 text-lg inline font-bold mb-2'>
                  Phone &nbsp;
                </h3>
                <p className='text-teal-950 inline text-lg'>{listing.owner.phone}</p>

              </div>


            </main>

            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Manage Listing</h3>
                <Link
                    to={`/edit-listing/${listing.id}`}
                    className='bg-teal-600 hover:bg-teal-950 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Listing
                </Link>
                <button
                    onClick={() => onDeleteClick(listing.id)}
                    className='bg-orange-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Listing
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const listingLoader = async ({ params }) => {
  const res = await fetch(`/api/listings/${params.id}`);
  const data = await res.json();
  return data;
};

export { ListingPage as default, listingLoader };

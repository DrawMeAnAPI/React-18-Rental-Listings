import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const titlePlaceholder = 'eg, Wonderful 3 Bedrooms Condo in Upper West Side';
const overviewPlaceholder = 'Add any listing details';
const rentPlaceholder = 'Rent in $ / Month';
const namePlaceholder = 'Add you name here';
const emailPlaceholder = 'Your email address';
const phonePlaceholder = '555-0000';

const EditListingPage = ({ updateListingSubmit }) => {
  const listing = useLoaderData();
  const [title, setTitle] = useState(listing.title);
  const [unitType, setUnitType] = useState(listing.unitType);
  const [district, setDistrict] = useState(listing.district);
  const [overview, setOverview] = useState(listing.overview);
  const [rent, setRent] = useState(listing.rent);
  const [name, setName] = useState(listing.owner.name);
  const [email, setEmail] = useState(listing.owner.email);
  const [phone, setPhone] = useState(listing.owner.phone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedListing = {
      id,
      title,
      unitType,
      district,
      overview,
      rent,
      owner: {
        name,
        email,
        phone,
      },
    };

    updateListingSubmit(updatedListing);

    toast.success('Listing Updated Successfully');

    return navigate(`/listings/${id}`);
  };

  return (
    <section className='bg-teal-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-teal-950 text-3xl text-center font-semibold mb-6'>
              Edit Listing
            </h2>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Listing Title
              </label>
              <input
                  type='text'
                  id='title'
                  name='title'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder={titlePlaceholder}
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='overview' className='block text-gray-700 font-bold mb-2'>
                Overview
              </label>
              <textarea
                  id='overview'
                  name='overview'
                  className='border rounded w-full py-2 px-3'
                  rows='4'
                  placeholder={overviewPlaceholder}
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
                Unit Type
              </label>
              <select
                  id='unit_type'
                  name='unit_type'
                  className='border rounded w-full py-2 px-3'
                  required
                  value={unitType}
                  onChange={(e) => setUnitType(e.target.value)}
              >
                <option value='Studio'>Studio</option>
                <option value='Loft'>Loft</option>
                <option value='1 Bedroom'>1 Bedroom</option>
                <option value='2 Bedrooms'>2 Bedrooms</option>
                <option value='3 Bedrooms'>3 Bedrooms</option>
                <option value='4 Bedrooms'>4 Bedrooms</option>
                <option value='5 Bedrooms'>5 Bedrooms</option>
                <option value='6 Bedrooms'>6 Bedrooms</option>
                <option value='7 Bedrooms'>7 Bedrooms</option>
                <option value='8 Bedrooms'>8 Bedrooms</option>
                <option value='9 Bedrooms'>9 Bedrooms</option>
                <option value='10 Bedrooms'>10 Bedrooms</option>
              </select>
            </div>

            <div className='mb-4'>
              <label htmlFor='district' className='block text-gray-700 font-bold mb-2'>
                District
              </label>
              <select
                  id='district'
                  name='district'
                  className='border rounded w-full py-2 px-3'
                  required
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
              >
                <option value='The Narrows'>The Narrows</option>
                <option value='Tricorner'>Tricorner</option>
                <option value='Old Gotham'>Old Gotham</option>
                <option value='Arkham District'>Arkham District</option>
                <option value='Upper West Side'>Upper West Side</option>
                <option value='Gotham City Chinatown'>Gotham City Chinatown</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Rent / Month
              </label>
              <input
                  type='text'
                  id='rent'
                  name='rent'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder={rentPlaceholder}
                  required
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
              />
            </div>

            <h3 className='text-teal-950 text-2xl mb-5'>Owner Info</h3>

            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                Owner Name
              </label>
              <input
                  type='text'
                  id='name'
                  name='name'
                  className='border rounded w-full py-2 px-3'
                  placeholder={namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                Owner Email
              </label>
              <input
                  type='email'
                  id='email'
                  name='email'
                  className='border rounded w-full py-2 px-3'
                  placeholder={emailPlaceholder}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                  htmlFor='phone'
                  className='block text-gray-700 font-bold mb-2'
              >
                Owner Phone Number
              </label>
              <input
                  type='tel'
                  id="phone"
                  name='phone'
                  className='border rounded w-full py-2 px-3'
                  placeholder={phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                  className='bg-teal-600 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                  type='submit'
              >
                Edit Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditListingPage;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const titlePlaceholder = 'eg, Wonderful 3 Bedrooms Condo in Upper West Side';
const overviewPlaceholder = 'Add any listing details';
const rentPlaceholder = 'Rent in $ / Month';
const namePlaceholder = 'Add you name here';
const emailPlaceholder = 'Your email address';
const phonePlaceholder = '555-0000';


const AddListingPage = ({ addListingSubmit }) => {
  const [title, setTitle] = useState();
  const [unitType, setUnitType] = useState();
  const [district, setDistrict] = useState();
  const [overview, setOverview] = useState();
  const [rent, setRent] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newListing = {
      title: title,
      unit_type: unitType,
      district: district,
      overview: overview,
      rent: rent,
      owner: {
        name: name,
        email: email,
        phone: phone,
      },
    };

    addListingSubmit(newListing);

    toast.success('Listing Added Successfully');

    return navigate('/listings');
  };

  return (
    <section className='bg-teal-50'>
      <div className='text-teal-950 container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Add Listing</h2>
            {/* Listing Title */}
            <div className='mb-4'>
              <label className='block font-bold mb-2'>
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
            {/* Unit Type */}
            <div className='mb-4'>
              <label htmlFor='type' className='block font-bold mb-2'>Unit Type</label>
              <select
                  id='unitType'
                  name='unitType'
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
            {/* Overview */}
            <div className='mb-4'>
              <label htmlFor='overview' className='block font-bold mb-2'>Overview</label>
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

            {/* Rent */}
            <div className='mb-4'>
              <label className='block font-bold mb-2'> Rent / Month </label>
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

            {/* District */}
            <div className='mb-4'>
              <label htmlFor='type' className='block font-bold mb-2'>District</label>
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

            <h3 className='text-2xl mb-5'>Owner Info</h3>

            {/* Owner Name */}
            <div className='mb-4'>
              <label htmlFor='name' className='block font-bold mb-2'>
                Name
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

            {/* Owner Email */}
            <div className='mb-4'>
              <label htmlFor='contact_email' className='block font-bold mb-2'>
                Email
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

            {/* Owner Phone Number */}
            <div className='mb-4'>
              <label htmlFor='phone' className='block font-bold mb-2'>
                Phone
              </label>
              <input
                  type='tel'
                  id='phone'
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
                Add Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddListingPage;

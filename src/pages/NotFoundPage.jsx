import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='text-teal-950 text-center flex flex-col justify-center items-center h-96'>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 className='text-6xl font-bold mb-4'>Page Not Found</h1>
      <p className='text-xl mb-5'>This page probably does not exist or is hidden somewhere.
          In any case, we could not find it. :(</p>
      <Link
        to='/'
        className='text-white bg-teal-600 hover:bg-teal-950 rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;

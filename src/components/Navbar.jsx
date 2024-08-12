import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const inactiveStyle = 'text-white hover:bg-teal-600 hover:text-white rounded-md px-3 py-2';
  const linkClass = ({ isActive }) =>
    isActive
      ? inactiveStyle + ' bg-teal-600'
      : inactiveStyle;

  return (
    <nav className='bg-teal-950 border-b border-teal-950'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='Rental Market' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Rental Listings
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/listings' className={linkClass}>
                  Listings
                </NavLink>
                <NavLink to='/add-listing' className={linkClass}>
                  Add Listing
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

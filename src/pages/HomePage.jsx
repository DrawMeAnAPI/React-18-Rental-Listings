import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Listings from '../components/Listings.jsx';
import ViewAllListings from '../components/ViewAllListings.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Listings isHome={true} />
      <ViewAllListings />
    </>
  );
};
export default HomePage;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage.jsx';
import NotFoundPage from './pages/NotFoundPage';
import ListingPage, { listingLoader } from './pages/ListingPage.jsx';
import AddListingPage from './pages/AddListingPage.jsx';
import EditListingPage from './pages/EditListingPage.jsx';

const App = () => {
  // Add New Listing
  const addListing = async (newListing) => {
    await fetch('/api/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newListing),
    });
  };

  // Delete Listing
  const deleteListing = async (id) => {
      await fetch(`/api/listings/${id}`, {
      method: 'DELETE',
    });
  };

  // Update Listing
  const updateListing = async (listing) => {
    await fetch(`/api/listings/${listing.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listing),
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/listings' element={<ListingsPage />} />
        <Route path='/add-listing' element={<AddListingPage addListingSubmit={addListing} />} />
        <Route
          path='/edit-listing/:id'
          element={<EditListingPage updateListingSubmit={updateListing} />}
          loader={listingLoader}
        />
        <Route
          path='/listings/:id'
          element={<ListingPage deleteListingSubmit={deleteListing} />}
          loader={listingLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;

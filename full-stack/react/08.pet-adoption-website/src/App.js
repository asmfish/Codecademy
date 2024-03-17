import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Add react-router-dom imports

// create router with JSX Route elements
const appRouter = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={ <Root/> }>  {/* root route -contains the navigation */}
          <Route index element={ <HomePage/> } /> 
          <Route path=":type" element={ <HomePage/> } />{/* hadles the main navigation links for d/t pets*/}
          <Route path=':type/:id' element={ <PetDetailsPage  /> } />{/* hadles the route to individula animals identified by type and id*/}
          <Route path='search' element={ <SearchPage  /> } />
          <Route path='pet-details-not-found' element={ <PetDetailsNotFound  /> } />
    </Route>
  )
);

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router = {
      /* routes defined here*/
      appRouter
    }/>
  );
}

export default App;

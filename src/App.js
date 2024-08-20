import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClientWelcomPage from './Pages/Client/clientWelcomePage';
import MerchantWelcomePage from './Pages/Merchant/merchantWelcomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientWelcomPage />
  },
  {
    path: '/merchant',
    element: <MerchantWelcomePage />
  }
]);

function App() {
  return (
     <RouterProvider router={router} />    
  );
}

export default App;

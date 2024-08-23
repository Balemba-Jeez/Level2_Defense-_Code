import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClientWelcomPage from './Pages/Client/clientWelcomePage';
import MerchantWelcomePage from './Pages/Merchant/merchantWelcomePage';
import MerchantSubmitApplication from './Pages/Merchant/merchantSubmitApplication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientWelcomPage />
  },
  {
    path: '/merchant',
    element: <MerchantWelcomePage />
  },
  {
    path: '/merchant/submitapplication',
    element: <MerchantSubmitApplication />
  }
]);

function App() {
  return (
     <RouterProvider router={router} />    
  );
}

export default App;

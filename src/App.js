import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClientWelcomPage from './Pages/Client/clientWelcomePage';
import MerchantWelcomePage from './Pages/Merchant/merchantWelcomePage';
import MerchantSubmitApplication from './Pages/Merchant/merchantSubmitApplication';
import DeliverySubmitApplication from './Pages/Delivery/deliverySubmitApplication';
import SubmitFormPage from './Pages/Merchant/submitFormPage';
import SubmitFormPageBsLi from './Pages/Merchant/submitFormPageBsLi.jsx';
import DeliverySubmitFormPage from './Pages/Delivery/deliverySubmitFormPage.jsx';
import DeliverySubmitFormPageDrLi from './Pages/Delivery/deliverySubmitFormPageDrLi.jsx';
import DeliverySubmitFormPageVeRC from './Pages/Delivery/deliverySubmitFormPageVeRC.jsx';
import DeliverySubmitFormPageIns  from './Pages/Delivery/deliverySubmitFormPageIns.jsx';
import DeliverySubmitFormPageViTech from './Pages/Delivery/deliverySubmitFormPageViTech.jsx';
import DeliverySubmitFormPageIdCd from './Pages/Delivery/deliverySubmitFormPageIdCd.jsx';
import DeliveryPersonWelcomePage from './Pages/Delivery/deliveryPersonWelcomePage.jsx';
import ClientHomePage from './Pages/Client/clientHomePage.jsx';
import MerchantBusinessPage from './Pages/BusinessPages/MerchantBusinessPage/merchantBusinessPage.jsx';
import MerchantBusinessPageModal from './Pages/BusinessPages/MerchantBusinessPage/merchantBusinessPageModal.jsx';
import CheckOutPageComponent from './Pages/BusinessPages/checkOutPageComponent.jsx';

const router = createBrowserRouter([
  {
    path: '/client',
    element: <ClientWelcomPage />
  },
  {
    path: '/merchant',
    element: <MerchantWelcomePage />
  },
  {
    path: '/client/homepage',
    element: <ClientHomePage />
  },
  {
    path: '/merchant/submitapplication',
    element: <MerchantSubmitApplication />
  },
    {
    path: '/merchant/submitapplication/merchantphoto',
    element: <SubmitFormPage />
    },
    {
    path: '/merchant/submitapplication/Business license',
    element: <SubmitFormPageBsLi />
    },
  {
    path: '/delivery',
    element: <DeliveryPersonWelcomePage />
  },
  {
    path: '/delivery/submitapplication',
    element: <DeliverySubmitApplication />
  },
    {
    path: '/delivery/submitapplication/deliverypersonphoto',
    element: <DeliverySubmitFormPage />
    },
    {
    path: '/delivery/submitapplication/deliverypersonDriverLicense',
    element: <DeliverySubmitFormPageDrLi />
    },
    {
    path: '/delivery/submitapplication/deliverypersonVehicleRegistrationCard',
    element: <DeliverySubmitFormPageVeRC />
    },
    {
    path: '/delivery/submitapplication/deliverypersonInsurance',
    element: <DeliverySubmitFormPageIns />
    },
    {
    path: '/delivery/submitapplication/deliverypersonVisitetechnique',
    element: <DeliverySubmitFormPageViTech />
    },
    {
    path: '/delivery/submitapplication/deliverypersonIDCard',
    element: <DeliverySubmitFormPageIdCd />
    },
    {
    path: '/Merchant/BusinessPage',
    element: <MerchantBusinessPage />
    },
    {
    path: '/Merchant/BusinessPage/modal',
    element: <MerchantBusinessPageModal />
    },
    {
    path: '/Merchant/BusinessPage/CheckOutPage',
    element: <CheckOutPageComponent />
    },
    
]);

function App() {
  return (
     <RouterProvider router={router} />    
  );
}

export default App;

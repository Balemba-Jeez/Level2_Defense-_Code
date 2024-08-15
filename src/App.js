import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/headerComponent';
import AsideComponent from './Components/asideComponent';
import AddressInputComponent from './Components/addressInputComponent';
import OrderDeliveryComponent from './Components/orderDeliveryComponent';
import SetAddressSectionComponent from './Components/setAddressSectionComponent';
import WelcomeScreenSizeSectionComponent from './Components/welcomeScreenSizeSectionComponent';
import BusinessBenefitsSectionComponent from  './Components/businessBenefitsSectionComponent';
import WelcomeOverScreenSizeSectionComponent from './Components/welcomeOverScreenSizeSection'
import FooterComponent from './Components/footerComponent';
function App() {
  return (
    <div className="App">
      {/*<HeaderComponent />*/}
      {/*<AsideComponent />*/}
      {/*<AddressInputComponent />*/}
      {/*<OrderDeliveryComponent />*/}
      {/*<SetAddressSectionComponent />*/}
      {/*<BusinessBenefitsSectionComponent />*/}
      <WelcomeScreenSizeSectionComponent />
      <WelcomeOverScreenSizeSectionComponent />
      <FooterComponent />
      
    </div>
  );
}

export default App;

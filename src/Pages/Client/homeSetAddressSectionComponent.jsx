import React, { Component } from 'react';
import '../../PagesStyles/ClientPageStyles/homeSetAddressSectionComponent.css';

class HomeSetAddressSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='homesetaddresssectioncomponent'>

                <div className='category'>
                    <div className='categorydetails'>
                        <img src={require('../../weighticon.png')} alt="categorylogo" />
                        <span><label htmlFor="category">Weight:</label></span>
                    </div>

                    <div className='categoryoption'>

                        <select name="categorynumtypes" id="category" size={"1"}>

                            <option value="3 kg" > 3 kg </option>
                            <option value="5 kg"> 5 kg </option>
                            <option value="6 kg"> 6 kg </option>
                            <option value="12.5 kg" selected> 12.5 kg </option>
                            <option value="15 kg"> 15 kg </option>
                            <option value="38 kg"> 38 kg </option>
                            <option value="50 kg"> 50 kg </option>

                        </select>
                    </div>

                </div>

                <div className='category a1'>
                    <div className='categorydetails'>
                        <img src={require('../../moneyicon.png')} alt="categorylogo" />
                        <span><label htmlFor="category">Price(fcfa):</label></span>
                    </div>

                    <div className='categoryoption'>

                        <select name="categorynumtypes" id="category" size={"1"}>

                            <option value="2000 to 3000" > 2000 to 3000 </option>
                            <option value="3500 to 4500"> 3500 to 4500 </option>
                            <option value="4500 to 5000"> 4500 to 5000 </option>
                            <option value="6000" selected> 6000 </option>
                            <option value="7000 to 9000"> 7000 to 9000 </option>
                            <option value="20,000 to 25,000"> 20,000 to 25,000 </option>
                            <option value="30,000 to 35,000"> 30,000 to 35,000 </option>

                        </select>
                    </div>

                </div>

                <div className='brandlist'>
                    <button>
                        {/*<img src={require('../../bluegas-cylindermain.png')} alt="Afrique gas pic" />*/}
                        <p>Afrique</p>
                    </button>

                    <button>
                        {/*<img src={require('../../gas-cylinder12.png')} alt="Bocom gas pic" />*/}
                        <p>Bocom</p>
                    </button>



                    <button>
                        {/*<img src={require('../../gas-cylinder12.png')} alt="" />*/}
                        <p>MRS</p>
                    </button>


                    <button>
                        {/*<img src={require('../../gas-cylinder12.png')} alt="" />*/}
                        <p>Oilibya</p>
                    </button>

                    <button>
                        {/*<img src={require('../../gas-cylinder12.png')} alt="" />*/}
                        <p>SCTM</p>
                    </button>

                    <button>
                        {/*<img src={require('../../gas-cylinder12.png')} alt="" />*/}
                        <p>Stargas </p>
                    </button>

                    <button>
                        {/*<img src={require('../../gas-cylinder12.png')} alt="" />*/}
                        <p>Total</p>
                    </button>

                    <button>
                        {/*<img src={require('../../gas-cylinder12.png')} alt="" />*/}
                        <p>Tradex</p>
                    </button>

                </div>



            </div>

        );
    }
}

export default HomeSetAddressSectionComponent;
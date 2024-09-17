import React, { Component } from 'react';
import '../../PagesStyles/ClientPageStyles/homeSetAddressSectionComponent.css';

class HomeSetAddressSectionComponent extends Component {
    state = {}

    handleButtonClick = (brand) => {
        this.props.onBrandSelect(brand); // Call the callback function passed from the parent
    };


    render() {
        return (
            <div className='homesetaddresssectioncomponent'>

                <div className='brandlist' >
                    <button onClick={() => this.handleButtonClick('Afrique')}>
                        <p>Afrique</p>
                    </button>
                    <button onClick={() => this.handleButtonClick('Bocom')}>
                        <p>Bocom</p>
                    </button>
                    <button onClick={() => this.handleButtonClick('MRS')}>
                        <p>MRS</p>
                    </button>
                    <button onClick={() => this.handleButtonClick('Oilibya')}>
                        <p>Oilibya</p>
                    </button>
                    <button onClick={() => this.handleButtonClick('SCTM')}>
                        <p>SCTM</p>
                    </button>
                    <button onClick={() => this.handleButtonClick('Stargas')}>
                        <p>Stargas</p>
                    </button>
                    <button onClick={() => this.handleButtonClick('Total')}>
                        <p>Total</p>
                    </button>
                    <button onClick={() => this.handleButtonClick('Tradex')}>
                        <p>Tradex</p>
                    </button>

                </div>



            </div>

        );
    }
}

export default HomeSetAddressSectionComponent;
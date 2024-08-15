import React, { Component } from 'react';
import '../ComponentStyles/businessBenefitsSectionComponent.css';


class BusinessBenefitsSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='businessbenefitssectioncomponent'>
                <a href="">
                    <img src="keeponcooking3.jpeg" alt="Keep your home cooking img" />
                    <p className='text'>Keep your home cooking</p>
                    <p className='link'>Enter your address to begin</p>
                </a>

                <a href="">
                    <img src="keeponcooking3.jpeg" alt="Keep your home cooking img" />
                    <p className='text'>Keep your home cooking</p>
                    <p className='link'>Enter your address to begin</p>
                </a>

                <a href="">
                    <img src="keeponcooking3.jpeg" alt="Keep your home cooking img" />
                    <p className='text'>Keep your home cooking</p>
                    <p className='link'>Enter your address to begin</p>
                </a>
            </div>
        );
    }
}

export default BusinessBenefitsSectionComponent;
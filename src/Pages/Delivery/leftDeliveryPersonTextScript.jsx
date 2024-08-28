import React, { Component } from 'react';
import '../../PagesStyles/deliveryPageStyles/leftDeliveryPersonTextScript.css';

class LeftDeliveryPersonTextScript extends Component {
    state = {}
    render() {
        return (


            <div className='leftdeliverypersontextscript'>
                <div className='leftdeliverypersontextscriptchild1'>
                    <h1>Deliver on your own <br /> time, earn what you <br /> deserve</h1>
                    <p>Work when it suits your schedule.</p>
                </div>


                <div className='leftdeliverypersontextscriptchild2'>
                    <a href="">Get started</a>
                    <a>Already have an account? Sign in</a>
                </div>

            </div>
        );
    }
}

export default LeftDeliveryPersonTextScript;
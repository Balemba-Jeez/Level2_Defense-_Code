import React, { Component } from 'react';
import '../ComponentStyles/addressInputComponent_inputitem.css'
class AddressInputComponentInputItem extends Component {
    state = {}
    render() {
        return (
            <div className='addressinputcomponent_inputitem'>
                <img src="locationicon.png" alt="GPS icon" />
                <div className='addressinputcomponent_rightinputitem'>
                    <input type='text' placeholder='Enter delivery address' autoComplete='off' />
                    <button type='button'>Clear</button>
                </div>
            </div>

        );
    }
}

export default AddressInputComponentInputItem;
import React, { Component } from 'react';
import '../../PagesStyles/ClientPageStyles/homeHeaderLeftItem.css'

class HomeHeaderLeftItem extends Component {
    state = {}
    render() {
        return (
            <div className='homeheader_leftitem'>
                <a className='Signup'> Sign up</a>
                <a className='Login'> Log in</a>

                <button>
                    <img src={require('../../shoppingcart.png')} alt="" />
                    <div>0</div>
                </button>

                <div className='searchinputcomponent_inputitem'>
                    <img src={require('../../searchicon.png')} alt="Search icon" />

                    <div className='searchinputcomponent_rightinputitem'>

                        <input type='text' placeholder='Search Gas Space' autoComplete='off' />
                        <button type='button'>
                            <img src={require('../../cancelicon.png')} alt="" />

                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomeHeaderLeftItem;
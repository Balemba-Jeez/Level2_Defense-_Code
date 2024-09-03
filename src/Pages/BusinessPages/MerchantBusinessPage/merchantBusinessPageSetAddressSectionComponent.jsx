import React, { Component } from 'react';
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPageSetAddressSectionComponent.css';
import MerchantBusinessPageModal from './merchantBusinessPageModal';

class MerchantBusinessPageSetAddressSectionComponent extends Component {
    state = {
        isModalOpen: false, // state to track if the modal is open
    };
    openModal = () => {
        this.setState({ isModalOpen: true }); //Opens Modal
    };

    closeModal = () => {
        this.setState({ isModalOpen: false }); //Closes Modal
    };

    render() {
        return (
            <div className='merchantbusinesspagesetaddresssectioncomponent'>
                <div className='aboutsection'>

                    <div className='abouttext'>
                        <h1>Gas connect regir</ h1>
                        <p>
                            Gas connect delivers quality gas bottles swiftly  and reliably in regir, <br /> ensuring your home or business stays powered.
                        </p>
                    </div>

                    <div className='aboutimage'>
                        <img src={require('../../../istockphoto3.jpg')} alt="store image" />
                    </div>
                </div>

                <div className='items'>
                    <p>Menu</p>

                    <div className='itemelements'>
                        <div className='itemelement' onClick={this.openModal}> {/* Attach click event */}
                            <div className='leftside'>
                                <div className='leftsidetext'>
                                    <p>Tradex,</p>
                                    <p>12 kg</p>
                                </div>
                                <p>6500 fcfa</p>
                            </div>

                            <div className='rightside'>
                                <img src={require('../../../tradex-gazcrop1.jpg')} alt="" />

                            </div>
                        </div>

                        <div className='itemelement'>
                            <div className='leftside'>
                                <div className='leftsidetext'>
                                    <p>Tradex,</p>
                                    <p>12 kg</p>
                                </div>
                                <p>6500 fcfa</p>
                            </div>

                            <div className='rightside'>
                                <img src={require('../../../tradex-gazcrop1.jpg')} alt="" />

                            </div>
                        </div>

                        <div className='itemelement'>
                            <div className='leftside'>
                                <div className='leftsidetext'>
                                    <p>Tradex,</p>
                                    <p>12 kg</p>
                                </div>
                                <p>6500 fcfa</p>
                            </div>

                            <div className='rightside'>
                                <img src={require('../../../tradex-gazcrop1.jpg')} alt="" />

                            </div>
                        </div>

                        <div className='itemelement'>
                            <div className='leftside'>
                                <div className='leftsidetext'>
                                    <p>Tradex,</p>
                                    <p>12 kg</p>
                                </div>
                                <p>6500 fcfa</p>
                            </div>

                            <div className='rightside'>
                                <img src={require('../../../tradex-gazcrop1.jpg')} alt="" />

                            </div>
                        </div>

                    </div>
                </div>

                <div className='checkoutbox'>
                    <div className='endbox'>
                        <div className='checkoutbutton'>
                            <button disabled>Checkout</button>
                        </div>
                        <p>Add items to your cart or basket and they'll appear here. </p>
                    </div>
                    <div className='cartlist'></div>
                </div>

                {this.state.isModalOpen && <MerchantBusinessPageModal closeModal={this.closeModal} />} {/* Render modal if state is true */}

            </div>

        );
    }
}

export default MerchantBusinessPageSetAddressSectionComponent;
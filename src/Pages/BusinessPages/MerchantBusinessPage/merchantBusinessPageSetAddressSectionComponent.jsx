import React, { useState, useEffect } from 'react';
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPageSetAddressSectionComponent.css';
import MerchantBusinessPageModal from './merchantBusinessPageModal';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MerchantBusinessPageSetAddressSectionComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [supplierBottles, setSupplierBottles] = useState([]);
    const [supplierDetails, setSupplierDetails] = useState({});
    const [selectedBottle, setSelectedBottle] = useState(null); // Add state for selected gas bottle
    const { supplierID } = useParams(); // Use useParams to get supplierID

    // Function to open modal with selected bottle data
    const openModal = (bottle) => {
        setSelectedBottle(bottle); // Set the clicked bottle as the selected one
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch supplier details
                const supplierResponse = await axios.get(`http://localhost:4000/api/Supplier/${supplierID}`);

                // Since supplierDetails is an array, access the first element
                if (supplierResponse.data.length > 0) {
                    setSupplierDetails(supplierResponse.data[0]); // Access the first element of the array
                }

                // Log the supplier details in a readable format
                console.log('Supplier details:', JSON.stringify(supplierResponse.data, null, 2));

                // Fetch bottles for the supplier
                const bottlesResponse = await axios.get(`http://localhost:4000/api/Supplier/Bottles/${supplierID}`);
                setSupplierBottles(bottlesResponse.data);

                // Log the bottles in a readable format
                console.log('Supplier bottles:', JSON.stringify(bottlesResponse.data, null, 2));

            } catch (error) {
                console.error('Error fetching data:', error);
                // Add user feedback here, e.g., an error message or toast notification
            }
        };

        fetchData();
    }, [supplierID]); // Run effect when supplierID changes

    console.log('supplierDetails:', supplierDetails);
    console.log('supplierBottles:', supplierBottles);


    return (
        <div className='merchantbusinesspagesetaddresssectioncomponent'>
            <div className='aboutsection'>
                <div className='abouttext'>
                    <h1>{supplierDetails.storeName || 'Gas Connect'}</h1>
                    <p>
                        {supplierDetails.storeDescription || 'Gas Connect delivers quality gas bottles swiftly and reliably, ensuring your home or business stays powered.'}
                    </p>
                </div>
                <div className='aboutimage'>
                    <img src={require('../../../istockphoto3.jpg')} alt="store image" />
                </div>
            </div>

            <div className='items'>
                <p>Menu</p>
                <div className='itemelements'>
                    {supplierBottles.length > 0 ? ( // Check if supplierBottles has data
                        supplierBottles.map((bottle) => (
                            <div className='itemelement' key={bottle.id} onClick={() => openModal(bottle)}> {/* Pass bottle data to openModal */}
                                <div className='leftside'>
                                    <div className='leftsidetext'>
                                        <p>{bottle.brand},</p>
                                        <p>{bottle.weight} kg</p>
                                    </div>
                                    <p>{bottle.price} XAF</p>
                                </div>
                                <div className='rightside'>
                                    <img src={require('../../../tradex-gazcrop1.jpg')} alt="bottle image" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items available.</p> // Display message if no bottles are available
                    )}
                </div>
            </div>

            <div className='checkoutbox'>
                <div className='endbox'>
                    <div className='checkoutbutton'>
                        <button disabled>Checkout</button>
                    </div>
                    <p>Add items to your cart or basket and they'll appear here.</p>
                </div>
                <div className='cartlist'></div>
            </div>

            {isModalOpen && <MerchantBusinessPageModal closeModal={closeModal} bottle={selectedBottle} />} {/* Pass selected bottle to modal */}
        </div>
    );
};

export default MerchantBusinessPageSetAddressSectionComponent;

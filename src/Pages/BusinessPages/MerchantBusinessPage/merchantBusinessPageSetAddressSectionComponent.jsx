import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPageSetAddressSectionComponent.css';
import MerchantBusinessPageModal from './merchantBusinessPageModal';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MerchantBusinessPageSetAddressSectionComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [supplierBottles, setSupplierBottles] = useState([]);
    const [supplierDetails, setSupplierDetails] = useState({});
    const [selectedBottle, setSelectedBottle] = useState(null); // Add state for selected gas bottle
    const [cart, setCart] = useState([]); // Cart state to track added items
    const [isCheckoutEnabled, setIsCheckoutEnabled] = useState(false); // State for checkout button
    const { supplierID } = useParams(); // Use useParams to get supplierID
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to open modal with selected bottle data
    const openModal = (bottle) => {
        setSelectedBottle(bottle); // Set the clicked bottle as the selected one
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    // Function to add items to the cart
    const addToCart = (bottle, quantity, totalPrice) => {
        const cartItem = {
            brand: bottle.brand,
            weight: bottle.weight,
            price: totalPrice, // calculated price
            quantity
        };
        setCart([...cart, cartItem]); // Add item to cart

        if (cart.length === 0) {
            setIsCheckoutEnabled(true); // Enable checkout button when the first item is added
        }
    };

    const handleCheckboxChange = (index) => {
        // Mark the item for removal
        const updatedCart = [...cart];
        updatedCart[index].isMarkedForRemoval = true;
        setCart(updatedCart);

        // Set a timeout to remove the item after a delay (e.g., 2 seconds)
        setTimeout(() => {
            setCart(cart.filter((_, i) => i !== index)); // Remove item from cart
        }, 2000); // Delay of 2 seconds
    };

    // Function to handle checkout button click
    const handleCheckout = () => {
        // Store cart data in localStorage or state management
        localStorage.setItem('cart', JSON.stringify(cart));
        navigate('/merchant/BusinessPage/CheckOutPage'); // Navigate to the checkout page
    };


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
                <div className={`endbox ${cart.length > 0 ? 'active' : ''}`} style={{ opacity: cart.length > 0 ? 1 : 0.5 }}>
                    <div className='checkoutbutton'>
                        <button disabled={!isCheckoutEnabled} onClick={handleCheckout}>Checkout</button>
                    </div>

                    {/*<p>Add items to your cart or basket and they'll appear here.</p>*/}

                    {cart.length === 0 ? (
                        <p>Add items to your cart or basket and they'll appear here. Click on check box to make them dissapear</p>
                    ) : (
                        <p>{cart.length} items added to your cart.</p>
                    )}

                </div>
                <div className='cartlist'>

                    {cart.map((item, index) => (
                        <div className="cart_item" key={index}>
                            <div className="box_left">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={() => handleCheckboxChange(index)} // Handle checkbox click
                                    disabled={item.isMarkedForRemoval} // Disable if already marked for removal
                                />
                                <p>{item.brand}</p>
                            </div>
                            <div className="box_right">
                                <p className="task date">X{item.quantity}</p>
                                <p className="task time">{item.price} XAF</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {isModalOpen && (

                <MerchantBusinessPageModal
                    closeModal={closeModal}
                    bottle={selectedBottle}
                    addToCart={addToCart} // Pass addToCart function to modal
                />
            )}

        </div>
    );
};

export default MerchantBusinessPageSetAddressSectionComponent;

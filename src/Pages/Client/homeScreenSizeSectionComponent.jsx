import React, { Component } from 'react';
import '../../PagesStyles/ClientPageStyles/homeScreenSizeSectionComponent.css'
import HomeHeaderComponent from './homeHeaderComponent';
import HomeSetAddressSectionComponent from './homeSetAddressSectionComponent';
import axios from 'axios';

class HomeScreenSizeSectionComponent extends Component {
    state = {
        suppliers: [],  // to store the fetched suppliers data
        address: 'Lycée de Mballa II, school, Yaoundé, Cameroon'  // Placeholder for address
    }

    // Method to remove duplicate suppliers by 'id'
    removeDuplicateSuppliers(suppliers) {
        const uniqueSuppliers = suppliers.filter((supplier, index, self) =>
            index === self.findIndex((s) => s.ID === supplier.ID)
        );
        return uniqueSuppliers;
    }



    // Fetch supplier data once the component is mounted
    async componentDidMount() {
        try {
            // Retrieve address from local storage (if available)
            const storedAddress = localStorage.getItem('address');

            // If there's an address in local storage, update state
            if (storedAddress) {
                this.setState({ address: storedAddress }, this.fetchSuppliers);
            } else {
                this.fetchSuppliers(); // Fetch suppliers with the default address
            }
        } catch (error) {
            console.error('Error setting address from local storage:', error);
        }
    }


    // Function to fetch suppliers based on the current address in state
    async fetchSuppliers() {
        try {
            const encodedAddress = encodeURIComponent(this.state.address); // Encode the address for the API request
            const response = await axios.get(`http://localhost:4000/api/Suppliers/${encodedAddress}`);

            console.log('Raw Data from API:', response.data);  // Log raw response data

            const uniqueSuppliers = this.removeDuplicateSuppliers(response.data);  // Remove duplicates
            this.setState({ suppliers: uniqueSuppliers });  // Update state with unique suppliers

            console.log('Unique Suppliers:', uniqueSuppliers);  // Log unique suppliers
        } catch (error) {
            console.error('Error fetching suppliers:', error);
        }
    }



    render() {



        return (
            <div className='homescreensizesectioncomponent'>
                <HomeHeaderComponent />
                <HomeSetAddressSectionComponent />

                {/* Supplier section */}

                <div className='gasstoresectioncomponent'>

                    {/* Dynamically render supplier cards */}
                    {this.state.suppliers.map((supplier, index) => (
                        <a href={`/Merchant/BusinessPage/${supplier.id}`} key={index}>
                            <div className='gasstoreboard'>
                                <div className='gasstoreboardimage'>
                                    {/* Load supplier image dynamically if available, fallback to default image */}
                                    <img

                                        src={require('../../demosupplierimage.jpg')}
                                        alt={`${supplier.storeName} image`}
                                    /> {/* Assuming the image will be dynamic later */}
                                </div>
                                <div className='gasstoreboardimagetext'>
                                    <p>{supplier.storeName},

                                        {supplier.address.length > 10
                                            ? ` ${supplier.address.substring(0, 4)}....`
                                            : supplier.address}
                                    </p>
                                    <div>{supplier.avgRating}</div> {/* Assuming the rating will be dynamic later */}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>


            </div>
        );
    }
}

export default HomeScreenSizeSectionComponent;
import React from 'react'
import '../../PagesStyles/deliveryPageStyles/deliveryHomePageDashboard.css';


function DeliveryHomePageDashboard() {
    return (
        <div id='rootbody'>

            {/*<!-- SIDEBAR -->*/}
            <section id="sidebar">
                {/*<a href="#" className="brand">
                    <i className='bx bxs-smile'></i>
                    <span className="text">AdminHub</span>
                </a>*/}

                <div className='deliveryhpdashboarditem'>
                    <div>
                        <img src={require('../../gas-cylinder11.png')} alt='Gas Space Logo' />
                        <p>Gas <span>Space</span></p>
                    </div>
                    <p className='deliverytext'>for deliverys</p>
                </div>

                <ul className="side-menu top">
                    <li className="active">
                        <a href="#">
                            <i className='bx bxs-dashboard'></i>
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-shopping-bag-alt'></i>
                            <span className="text">Tools</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id='classdelivery_logo'>
                            {/*<i className='bx bxs-doughnut-chart'></i>*/}
                            <img

                                src={require('../../order-deliveryicon.png')}
                                alt="orderlogo"
                                id='delivery_logo'
                            />
                            <span className="text">Deliveries</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-doughnut-chart'></i>
                            <span className="text">Analytics</span>
                        </a>
                    </li>
                    {/*<li>
                        <a href="#">
                            <i className='bx bxs-group'></i>
                            <span className="text">Team</span>
                        </a>
                    </li>*/}
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#">
                            <i className='bx bxs-cog'></i>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <i className='bx bxs-log-out-circle'></i>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>

            {/*<!-- SIDEBAR -->*/}


            <section id="content">
                {/* <!-- NAVBAR --> */}
                <nav>
                    <i className='bx bx-menu'></i>
                    <a href="#" className="nav-link">Categories</a>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                    <label htmlFor="switch-mode" className="switch-mode"></label>
                    <a href="#" className="notification">
                        <i className='bx bxs-bell'></i>
                        <span className="num">8</span>
                    </a>
                    <a href="#" className="profile">
                        <img src="img/people.png" alt="Profile" />
                    </a>
                </nav>
                {/* <!-- NAVBAR --> */}

                {/* <!-- MAIN --> */}
                {/* <!-- Dashboard --> */}
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            {/*<ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li>
                                    <a className="active" href="#">Home</a>
                                </li>
                            </ul>*/}
                        </div>
                        <a href="#" className="btn-download">
                            <i className='bx bxs-cloud-download'></i>
                            <span className="text">Download PDF</span>
                        </a>
                    </div>

                    {/* Box-info for Orders*/}
                    <ul className="box-info">
                        <li>
                            <i className='bx bxs-calendar-check'></i>
                            <span className="text">
                                <h3>16</h3>
                                <p>Deliverys today</p>
                            </span>
                        </li>
                        <li>
                            {/*<i className='bx bxs-group'></i>*/}
                            <i className='bx bxs-calendar-check'></i>
                            <span className="text">
                                <h3>21</h3>
                                <p>Deliverys this week</p>
                            </span>
                        </li>
                        <li>
                            <i className='bx bxs-calendar-check'></i>
                            <span className="text">
                                <h3>30</h3>
                                <p>Orders this month</p>
                            </span>
                        </li>
                    </ul>

                    {/*Box-info for revenue*/}
                    <ul className="box-info">
                        <li>
                            {/*<i className='bx bxs-dollar-circle'></i>*/}
                            <span class="material-symbols-outlined" id='bxx0'>
                                payments
                            </span>
                            <span className="text">
                                <h3>XAF 13 000 </h3>
                                <p>Today's Earnings</p>
                            </span>
                        </li>
                        <li>
                            {/*<i className='bx bxs-dollar-circle'></i>*/}
                            <span class="material-symbols-outlined" id='bxx1'>
                                payments
                            </span>
                            <span className="text">
                                <h3>XAF 35 000</h3>
                                <p>Weekly Earnings</p>
                            </span>
                        </li>
                        <li>
                            {/*<i className='bx bxs-dollar-circle'></i>*/}
                            <span class="material-symbols-outlined" id='bxx2'>
                                payments
                            </span>
                            <span className="text">
                                <h3>XAF 50 000</h3>
                                <p>Monthly Earnings</p>
                            </span>
                        </li>
                    </ul>


                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Recent Orders (Past Week)</h3>
                                <i className='bx bx-search'></i>
                                <i className='bx bx-filter'></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='alignth'>Product</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {/*<img src={require('../../order-deliveryicon.png')} alt="User" />*/}
                                            <span class="material-symbols-outlined">
                                                propane_tank
                                            </span>
                                            <p>John Doe</p>
                                        </td>
                                        <td>01/10/2021, 4:41:16PM</td>
                                        <td>XAF 13,000</td>
                                        <td><span className="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {/*<img src={require('../../order-deliveryicon.png')} alt="User" />*/}
                                            <span class="material-symbols-outlined">
                                                propane_tank
                                            </span>
                                            <p>John Doe</p>
                                        </td>
                                        <td>01/10/2021, 4:41:16PM</td>
                                        <td>XAF 13,000</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {/*<img src={require('../../order-deliveryicon.png')} alt="User" />*/}
                                            <span class="material-symbols-outlined">
                                                propane_tank
                                            </span>
                                            <p>John Doe</p>
                                        </td>
                                        <td>01/10/2021, 4:41:16PM</td>
                                        <td>XAF 13,000</td>
                                        <td><span className="status process">Process</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {/*<img src={require('../../order-deliveryicon.png')} alt="User" />*/}
                                            <span class="material-symbols-outlined">
                                                propane_tank
                                            </span>
                                            <p>John Doe</p>
                                        </td>
                                        <td>01/10/2021, 4:41:16PM</td>
                                        <td>XAF 13,000</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {/*<img src={require('../../order-deliveryicon.png')} alt="User" />*/}
                                            <span class="material-symbols-outlined">
                                                propane_tank
                                            </span>
                                            <p>John Doe</p>
                                        </td>
                                        <td>01/10/2021, 4:41:16PM</td>
                                        <td>XAF 13,000</td>
                                        <td><span className="status completed">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="todo">
                            <div className="head">
                                <h3>Products</h3>
                                <i className='bx bx-plus'></i>
                                <i className='bx bx-filter'></i>
                            </div>
                            <ul className="todo-list">
                                <li className="completed">
                                    <p>Tradex, 12.kg Full</p>
                                    <i className='bx bx-dots-vertical-rounded'></i>
                                </li>
                                <li className="completed">
                                    <p>Tradex, 12.kg Empty</p>
                                    <i className='bx bx-dots-vertical-rounded'></i>
                                </li>
                                <li className="not-completed">
                                    <p>Total, 12.kg Empty</p>
                                    <i className='bx bx-dots-vertical-rounded'></i>
                                </li>
                                <li className="completed">
                                    <p>Oilibya, 12.kg Full</p>
                                    <i className='bx bx-dots-vertical-rounded'></i>
                                </li>
                                <li className="not-completed">
                                    <p>Star Gas, 12.kg Full</p>
                                    <i className='bx bx-dots-vertical-rounded'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
                {/* <!-- Dashboard --> */}
                {/* <!-- MAIN --> */}



                {/* <!-- PRODUCTS --> */}
                <main >
                    <div className="head-title">
                        <div className="left">
                            <h1>Products</h1>
                            {/*<ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li>
                                    <a className="active" href="#">Home</a>
                                </li>
                            </ul>*/}
                        </div>
                        <a href="#" className="btn-download">
                            <i className='bx bxs-cloud-download'></i>
                            <span className="text">Download PDF</span>
                        </a>
                    </div>

                    {/* Box-info for Orders*/}
                    <ul className="box-info">
                        <li>
                            <i className="fa-solid fa-boxes-stacked" id='pxx0'></i>
                            <span className="text">
                                <h3>16</h3>
                                <p>Bottles in Stock</p>
                            </span>
                        </li>
                        <li>
                            {/*<i className='bx bxs-group'></i>*/}
                            <span class="material-symbols-outlined" id='pxx1'>
                                battery_full
                            </span>
                            <span className="text">
                                <h3>21</h3>
                                <p>Total full bottles</p>
                            </span>
                        </li>
                        <li>
                            <span class="material-symbols-outlined" id='pxx2'>
                                battery_0_bar
                            </span>
                            <span className="text">
                                <h3>30</h3>
                                <p>Total empty bottles</p>
                            </span>
                        </li>
                    </ul>

                    {/*Box-info for revenue*/}
                    <ul className="box-info">
                        <li>
                            {/*<i className='bx bxs-dollar-circle'></i>*/}
                            <span className="material-symbols-outlined" id='cxx0'>
                                order_approve
                            </span>
                            <span className="text">
                                <h3>20 </h3>
                                <p>Bottles sold today</p>
                            </span>
                        </li>
                        <li>
                            {/*<i className='bx bxs-dollar-circle'></i>*/}
                            <span class="material-symbols-outlined" id='cxx1'>
                                markunread_mailbox
                            </span>
                            <span className="text">
                                <h3>16</h3>
                                <p>Bottles delivered</p>
                            </span>
                        </li>
                        <li>
                            {/*<i className='bx bxs-dollar-circle'></i>*/}
                            <span className="material-symbols-outlined" id='cxx2'>
                                calendar_clock
                            </span>
                            <span className="text">
                                <h3>3</h3>
                                <p>Bottles in transit</p>
                            </span>
                        </li>
                    </ul>

                    <div className='table'>
                        <div className='table_header'>
                            <p>Product details</p>
                            <div>
                                {/*<input placeholder='product' className='modalformality' />*/}
                                <button className='add_new' >Add new product</button>
                            </div>
                        </div>
                        <div className='table_section'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Brand</th>
                                        <th>Weight (kg)</th>
                                        <th>Price (XAF)</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={require('../../tradex-gazcrop1.jpg')} /></td>
                                        <td>Tradex</td>
                                        <td>12.5</td>
                                        <td>6500</td>
                                        <td style={{ fontWeight: 'bold' }}>FULL</td>
                                        <td className='actionbuttons'>
                                            <button><i class="fa-solid fa-pen-to-square"></i></button>
                                            <button><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </main>
                {/* <!-- PRODUCTS --> */}


                {/* <!-- Orders --> */}
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Orders</h1>
                            {/*<ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li>
                                    <a className="active" href="#">Home</a>
                                </li>
                            </ul>*/}
                        </div>
                        <a href="#" className="btn-download">
                            <i className='bx bxs-cloud-download'></i>
                            <span className="text">Download PDF</span>
                        </a>
                    </div>

                    {/* Box-info for Orders*/}
                    <ul className="box-info">
                        <li>
                            <span class="material-symbols-outlined" id='pxx0'>
                                history
                            </span>
                            <span className="text">
                                <h3>5</h3>
                                <p>Total orders today</p>
                            </span>
                        </li>
                        <li>
                            {/*<i className='bx bxs-group'></i>*/}
                            <span class="material-symbols-outlined" id='pxx1'>
                                schedule
                            </span>
                            <span className="text">
                                <h3>5</h3>
                                <p>Pending orders</p>
                            </span>
                        </li>
                        <li>

                            <span class="material-symbols-outlined" id='pxx2'>
                                fact_check
                            </span>
                            <span className="text">
                                <h3>30</h3>
                                <p>Completed orders </p>
                            </span>
                        </li>
                    </ul>

                    {/*Box-info for revenue*/}
                    <ul className="box-info">
                        {/*<li>
                            {/*<i className='bx bxs-dollar-circle'></i>
                            <span className="material-symbols-outlined" id='opaquebalancer'>
                                order_approve
                            </span>
                            <span className="text">
                                <h3>20 </h3>
                                <p>In-Progress orders</p>
                            </span>
                        </li>*/}
                        <li id='balancer'>
                            {/*<i className='bx bxs-dollar-circle'></i>*/}
                            <span class="material-symbols-outlined" id='cxx1'>
                                markunread_mailbox
                            </span>
                            <span className="text">
                                <h3>16</h3>
                                <p>Cancelled orders</p>
                            </span>
                        </li>
                        {/*<li>
                            {/*<i className='bx bxs-dollar-circle'></i>
                            <span className="material-symbols-outlined" id='cxx2'>
                                calendar_clock
                            </span>
                            <span className="text">
                                <h3>3</h3>
                                <p>Bottles in transit</p>
                            </span>
                        </li>*/}
                    </ul>

                    <div className='table'>
                        <div className='table_header'>
                            <p>Orders</p>
                            <div>
                                {/*<input placeholder='product' className='modalformality' />*/}
                                <button className='add_new' >Add new product</button>
                            </div>
                        </div>
                        <div className='table_section'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Brand</th>
                                        <th>Weight (kg)</th>
                                        <th>Price (XAF)</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={require('../../tradex-gazcrop1.jpg')} /></td>
                                        <td>Tradex</td>
                                        <td>12.5</td>
                                        <td>6500</td>
                                        <td style={{ fontWeight: 'bold' }}>FULL</td>
                                        <td className='actionbuttons'>
                                            <button><i class="fa-solid fa-pen-to-square"></i></button>
                                            <button><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </main>
                {/* <!-- Orders --> */}


            </section>

        </div>
    )
}

export default DeliveryHomePageDashboard

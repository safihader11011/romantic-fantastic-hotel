import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaRegCalendar, FaUserFriends } from 'react-icons/fa';
import SingleDatePicker from 'components/UI/DatePicker/SingleDatePicker';

import './bookingForm.css'

import {
    ComponentWrapper,
} from './bookingForm.style';

const calendarItem = {
    separator: '-',
    format: 'MM-DD-YYYY',
    locale: 'en',
};

const BookingForm = (props) => {
    console.log(props.checkoutProps)
    const [searchDate, setSearchDate] = useState({
        setStartDate: null,
    });
    const [checkout, setCheckout] = useState(props.checkoutProps);

    useEffect(() => {
        setCheckout(props.checkoutProps)
    }, [props.checkoutProps])

    return (
        <div className="booking_form">
            {(checkout) ?
                <div className="d-flex justify-content-center">
                    <h1 className="invoice-heading">ThankYou<span>A reciept has been emailed to you at example@xyz.com</span></h1>
                </div>
                :
                <React.Fragment>
                    <h1>Booking Form</h1>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Full Name *</label>
                                <input type="text" className="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email address *</label>
                                <input type="email" className="form-control" placeholder="Enter Email" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group col-md-6">
                                <label>Identity Card *</label>
                                <input type="number" className="form-control" placeholder="Enter Id Card No." />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group col-md-6">
                                <label>Contact No. *</label>
                                <input type="number" className="form-control" placeholder="Enter Contact No." />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group col-md-8">
                                <label>Address *</label>
                                <input type="text" className="form-control" placeholder="Enter Address" />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Date *</label>
                                <ComponentWrapper>
                                    <FaRegCalendar className="calendar" />
                                    <div class="date_picker">
                                        <SingleDatePicker
                                            item={calendarItem}
                                            startDateId="startDateId-id-home"
                                            updateSearchData={setDateValue => setSearchDate(setDateValue)}
                                            showClearDates={true}
                                            small={true}
                                            numberOfMonths={1}
                                        />
                                    </div>
                                </ComponentWrapper>
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <div className="form-check-label">I accept the terms & conditions *</div>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Terms & Conditions*</label>
                            <div class="editable" contenteditable="true">
                                <ul>
                                    <li>Sit non magna in dolore aliqua proident Lorem commodo exercitation eiusmod. Qui sit pariatur officia velit laborum reprehenderit sit non incididunt aliqua. Officia nisi consequat nisi mollit do. Et ut et deserunt pariatur veniam voluptate labore nostrud est nostrud reprehenderit cupidatat duis incididunt.</li>
                                    <li>Sit non magna in dolore aliqua proident Lorem commodo exercitation eiusmod. Qui sit pariatur officia velit laborum reprehenderit sit non incididunt aliqua. Officia nisi consequat nisi mollit do. Et ut et deserunt pariatur veniam voluptate labore nostrud est nostrud reprehenderit cupidatat duis incididunt.</li>
                                    <li>Sit non magna in dolore aliqua proident Lorem commodo exercitation eiusmod. Qui sit pariatur officia velit laborum reprehenderit sit non incididunt aliqua. Officia nisi consequat nisi mollit do. Et ut et deserunt pariatur veniam voluptate labore nostrud est nostrud reprehenderit cupidatat duis incididunt.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="submit" onClick={() => setCheckout(true)}>Checkout</div>
                    </form>
                </React.Fragment>
            }
        </div>
    );
};

export default BookingForm;
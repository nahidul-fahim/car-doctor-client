import { useContext } from "react";
import { AuthCont } from "../../Context/AuthContext/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import SingleCartRow from "./SingleCartRow";
import axios from "axios";


const MyCart = () => {

    const { currentUser } = useContext(AuthCont);

    const [bookingData, setBookinData] = useState([]);

    useEffect(() => {

        const userEmail = currentUser?.email;

        axios.get(`http://localhost:5000/cart/${userEmail}`, {withCredentials: true})
        .then(data => {
            setBookinData(data.data);
            console.log(data.data);
        })
    }, [currentUser?.email]);


    // Handle delete from cart
    const handleDeleteCartItem = id => {
        console.log("delete button hit and found id", id);
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("data from delete", data);
                if (data.deletedCount > 0) {
                    const remainingBookings = bookingData.filter(singleBooking => singleBooking._id !== id);
                    setBookinData(remainingBookings);
                }
            })
    }


    // Confirm booking in the cart
    const handleBookingConfirm = id => {
        console.log("Id from booking confirm", id)
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    const remaining = bookingData.filter(singleBooking => singleBooking._id !== id);
                    const updatedBooking = bookingData.find(singleUpdateBooking => singleUpdateBooking._id === id);
                    updatedBooking.status = 'confirm';
                    const newBookings = [updatedBooking, ...remaining];
                    setBookinData(newBookings);
                }
            })
    }



    return (
        <div>
            <h2 className="text-4xl font-bold">Total bookings: {bookingData.length}</h2>

            {/* Table */}

            <div className="overflow-x-auto mt-16">
                <table className="table">

                    <tbody>

                        {
                            bookingData.map(singleBooking => <SingleCartRow
                                key={singleBooking._id}
                                singleBooking={singleBooking}
                                handleDeleteCartItem={handleDeleteCartItem}
                                handleBookingConfirm={handleBookingConfirm}></SingleCartRow>)
                        }

                    </tbody>

                </table>

            </div>



        </div>
    );
};

export default MyCart;